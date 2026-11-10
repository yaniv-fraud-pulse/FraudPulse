# Prompt for the app code builder: internal accounts, Meta Conversions API, revenue tracking

> Paste everything below this line into the app code builder.

---

You are working on the FraudPulse app at `app.fraud-pulse.com`. It is a Vite SPA with a backend, and signup is passwordless (email code) through Auth0 at the custom domain `login.fraud-pulse.com`. The marketing site `fraud-pulse.com` is a separate codebase and is not in scope, except for the cookies it sets (described below), which you read.

**Why this work matters:** We spent about $700 on Meta ads over the past month and got 0 real signups. Analytics showed four problems:

1. `/signup` shows a black screen for 5–15 seconds on mobile, so users leave.
2. Meta never receives the real signup, so it optimizes for clicks.
3. We can't see which campaign produces paying customers.
4. Our own test accounts mix with real signups.

Two of these are already fixed (see "Already done"). Please do the three items below **in this order**. Keep each item a separate commit or PR.

## Facts you can rely on

- **Meta Pixel ID:** `1084443864186051`.
- **PostHog:** US cloud project 490358, using the same project token as the marketing site. The marketing site initializes PostHog with `cross_subdomain_cookie: true` and `cookie_domain: '.fraud-pulse.com'`, so the anonymous ID set on the marketing site can be read on `app.fraud-pulse.com`.
- **Existing event:** The backend already sends a `user signed up` event to PostHog with `email`, `tenant_id`, `signup_method` and `source`. Keep this event and its name. Add the new properties to it as described below.
- **Cookies on `.fraud-pulse.com`** that the app can read:
  - `_fbp`: the Meta browser ID, set by the pixel.
  - `_fbc`: the Meta click ID, set by the pixel when the landing URL had `fbclid`.
  - `fp_attrib`: a JSON cookie the marketing site will start writing on the first paid visit: `{utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid, landing_path, ts}`. It may be missing. Your code must work without it.
- **Trial links:** The marketing site links to `https://app.fraud-pulse.com/signup?utm_source=…&utm_campaign=…&fbclid=…`. It will also link to `/signup?method=google&…`.

---

## Already done (no work needed)

These are live and verified on 2026-11-10:

- **`/signup` is fast.** It serves a light standalone page (1.4 KB of HTML and about 20 KB of gzipped JS, with immutable caching). That page redirects to Auth0 with `screen_hint=signup`.
- **Ad tags are kept.** `utm_*`, `fbclid` and `gclid` are saved in `sessionStorage` (`fp_ads_query`).
- **Google login works.** "Continue with Google" shows on the Auth0 signup screen, and `/signup?method=google` goes straight to Google.
- **The browser pixel already fires.** `CompleteRegistration` fires from the browser after signup.

Keep all of this working. Two small follow-ups are folded into the items below:

- **Event IDs:** The browser `CompleteRegistration` has no `eventID` yet (see Item 2).
- **Signup method:** `signup_method` should say `google` or `email_code` on `user signed up` (see Item 3).

## Item 1: Mark team and test accounts as internal

- **Where:** At account creation, in the backend.
- **What to set:** `is_internal: true` on the PostHog person (`$set`) and on the `user signed up` event.
- **When an account is internal:**
  - The email domain is `fraud-pulse.com`.
  - The email is in `INTERNAL_EMAILS`, a comma-separated env var. We will fill it with the founders' personal emails, QA emails and the Shopify review account.
  - The email local part contains `+test`.
- **External accounts:** Set `is_internal: false` explicitly, so the property is always present.
- **Effect:** Internal accounts must **never** be sent to Meta (Item 2).

## Item 2: Send `CompleteRegistration` to Meta through the Conversions API

- **When:** The backend sends it once per new, non-internal account, after the account exists. It must never fire on login, on re-auth, or on retries.
- **Endpoint:**

```
POST https://graph.facebook.com/<current Graph API version>/1084443864186051/events?access_token=<META_CAPI_TOKEN>
{
  "data": [{
    "event_name": "CompleteRegistration",
    "event_time": <unix seconds>,
    "event_id": "signup_<user_id>",
    "action_source": "website",
    "event_source_url": "https://app.fraud-pulse.com/signup",
    "user_data": {
      "em": ["<sha256 of lowercased, trimmed email>"],
      "external_id": ["<sha256 of user_id>"],
      "fbp": "<_fbp cookie, if present>",
      "fbc": "<_fbc cookie; or if missing but fbclid known: fb.1.<ms timestamp>.<fbclid>>",
      "client_ip_address": "<IP of the user's browser request>",
      "client_user_agent": "<User-Agent of the user's browser request>"
    },
    "custom_data": {
      "signup_method": "google | email_code",
      "utm_source": "...", "utm_campaign": "...", "utm_content": "..."
    }
  }],
  "test_event_code": "<only when META_TEST_EVENT_CODE is set>"
}
```

- **Request details:**
  - **IP, user agent and cookies:** Take them from the user's **browser** request that completes the signup (the first authenticated API call after the Auth0 callback). Do not use the server's own IP. If the backend can't see the cookies, the SPA sends `_fbp`, `_fbc` and `fp_attrib` to the backend once after signup.
  - **Hashing:** Send only hashed email and user ID. Never send a plain email or name to Meta.
  - **Secrets:** The token comes from `META_CAPI_TOKEN`, a server-side secret. If the env var is missing, skip the call and log a warning; signup must keep working.
- **Reliability:**
  - Send the call asynchronously, with 3 retries.
  - Log failures to our error tracking.
  - A failed Meta call must never block or fail the signup.
- **Deduplication (required):** The app already fires the browser pixel `CompleteRegistration` after signup. Change it to `fbq('track','CompleteRegistration',{content_name:'free_trial'}, {eventID: 'signup_<user_id>'})` so it uses **the same** `event_id` as the server call. Otherwise Meta counts each signup twice. Also make sure the browser event fires only for new, non-internal accounts.
- **Later (same helper):** When Item 3's `subscription_started` fires, also send `Subscribe` with `custom_data.value` and `custom_data.currency`, and `event_id = "sub_<subscription_id>"`.

**Acceptance:** With `META_TEST_EVENT_CODE` set, a signup from `/signup?utm_source=fb&fbclid=TEST123` appears in Meta Events Manager under Test Events within 1 minute. Its source is "Server", and the email, `fbp` and `fbc` match keys are shown. An internal email sends nothing.

## Item 3: Track "data connected" and "subscription started" in PostHog

- **Connect the user to their landing-page visit:**
  - **Same project and cookie:** Initialize PostHog in the SPA with the same project token, `cross_subdomain_cookie: true` and `cookie_domain: '.fraud-pulse.com'`, so it reuses the anonymous ID from the marketing site.
  - **Identify after signup or login:** Call `posthog.identify(<user_id>, {email})` and `posthog.group('tenant', <tenant_id>)`.
  - **Use the same ID on the server:** Server-side events must use the same `distinct_id` (`user_id`) and `groups: {tenant: tenant_id}`.
- **Record where the signup came from:** On `user signed up`, also `$set_once` these, taken from the `fp_attrib` cookie, or else from `sessionStorage` `fp_ads_query`:
  - `signup_utm_source`, `signup_utm_medium`, `signup_utm_campaign`, `signup_utm_content`
  - `signup_fbclid`, `signup_landing_path`
- **New server-side events.** Each fires from the backend only once the action is confirmed, never on a button click:
  - `data_source_connected`:
    - **When:** The first successful data connection, for example the Shopify app installed and the first data sync succeeded.
    - **Properties:** `source` (`shopify`, …), `tenant_id`, `is_first` (true for the tenant's first connection).
  - `subscription_started`:
    - **When:** Fires from the billing webhook (Shopify Billing or Stripe, whichever we use) once a paid plan is active. If the 14-day trial is a separate state, also fire `trial_started` when it starts.
    - **Properties:** `plan`, `amount`, `currency`, `interval` (`month`/`year`), `tenant_id`, `subscription_id`.
  - `subscription_cancelled`: properties `plan`, `tenant_id`, `reason` (if known).
- **Signup method:** On `user signed up`, set `signup_method` to `google` or `email_code`.
- **Internal flag:** Include `is_internal` on all these events.

**Acceptance:**

- Do a test signup from `fraud-pulse.com/lp/...?utm_campaign=test_x`, connect a test store, and start a subscription. Then one PostHog person shows, in order:
  1. the landing page `$pageview`
  2. `user signed up`
  3. `data_source_connected`
  4. `subscription_started`
- That person has `signup_utm_campaign = test_x`.

---

## Out of scope

- The marketing site (`fraud-pulse.com`).
- `/signup` and Auth0 or Google login (already done).
- Pricing and plans.
- Removing or renaming existing PostHog events.

## Report back

For each item, report:

- what changed, with files and env vars
- how you tested it, including a screenshot of the Meta Test Events entry for Item 2 that shows browser and server deduplicated
- any manual config we must do in Auth0, Meta, Google Cloud or billing

Also list anything you couldn't do and why.
