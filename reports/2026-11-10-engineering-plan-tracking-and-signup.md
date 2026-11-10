# Engineering plan: signup, tracking and Calendly fixes

**Date:** 2026-11-10
**Based on:** `2026-11-09-cro-meta-no-subscriptions.md` and the device test addendum.

There are two codebases:

- **Public site:** `fraud-pulse-public`, the Next.js static site on `fraud-pulse.com`. It is in this repo.
- **App:** `app.fraud-pulse.com`, the Vite SPA with Auth0 and a backend. It is a separate repo, so the app work is in a prompt for the app builder (`2026-11-10-prompt-app-tracking-and-signup.md`). That prompt covers tasks 2, 4 and 5; the app side of task 3 is already live.

Some setup is done by hand in Meta, Auth0, Calendly or PostHog. It is marked **(config)**.

---

## Order of work

| # | Task | Where | Size | Why this order |
|---|---|---|---|---|
| 1 | Remove `?month=2026-11` from Calendly | Public | 5 min | It breaks on Dec 1. |
| 2 | Exclude team and test accounts | App, plus PostHog (config) | Small | Do it before #4 so test signups never reach Meta. |
| 3 | Trial button goes straight to signup, plus "Continue with Google" | **App: done and live.** Public: links | Small | The app side shipped. Only the public-site links are left. |
| 4 | Send `CompleteRegistration` to Meta through the Conversions API | App (main part), Public (cookie), Meta (config) | Medium | Meta can only optimize for signups after it receives them. |
| 5 | Track "data connected" and "subscription started" | App | Small–Medium | Shows revenue per campaign. |

---

## 1. Calendly link: Public site only

- **Fix:** In `app/lib/posthog.ts:11`, change `CALENDLY_DEMO_URL` to `https://calendly.com/idan-fraud-pulse/30min`. There is no other hard-coded `month=` in the repo.
- **Do at the same time:**
  - **Forward ad tags.** `LpDemoCta.tsx` sends visitors to Calendly without `utm_*` tags. Calendly accepts `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`, and shows them on each booking. Append them from `window.location.search`.
  - **Check Calendly settings (config).** The `idan-fraud-pulse/30min` event must redirect to `https://fraud-pulse.com/book-a-demo/thanks/` after booking. If it doesn't, the `Schedule` pixel event and the `demo_booked` event in PostHog never fire. `POSTHOG_PLAN.md` documents the redirect for the old `idan-apis-solutions` event only.

## 2. Exclude team and test accounts: App, plus PostHog (config)

- **App:**
  - **Mark internal accounts at signup.** When the account is created, set the person property `is_internal = true` and include it on the `user signed up` event. An account is internal if any of these is true:
    - The email domain is `fraud-pulse.com`.
    - The email is on an allow-list kept in env or config. It contains the founders' personal emails, QA emails and the Shopify review account.
    - The address uses a `+test` alias.
  - **Skip Meta for internal accounts.** Never send Conversions API events for them.
- **PostHog (config):**
  - Add `is_internal = true` to the project's "Filter out internal and test users" setting.
  - Add it to cohort 385632 too.
  - I can make this change if you want.
- **Public site (optional):** Visiting `?internal=1` once could set `posthog.register({is_internal: true})` for the team's own browsers. This keeps your own landing page visits out of the paid funnel.

## 3. Trial button straight to signup, plus Google: App done, Public links left

- **App (done, checked on the live site 2026-11-10):**
  - `/signup` is a 1.4 KB light page that goes straight to the Auth0 signup screen.
  - Ad tags are kept in `sessionStorage`.
  - "Continue with Google" is on the Auth0 signup screen.
  - `/signup?method=google` goes straight to Google.
- **Public site (still to do):**
  - **Forward ad tags on every signup link.** Today only `LpTrialCta.tsx` forwards the query string. The links in `Header.tsx` (lines 68 and 121), `app/page.tsx:525` and `app/pricing/page.tsx:286` drop `utm_*` and `fbclid`. Use one shared helper for all of them.
  - **Show the tap.** On click, change the label to "Opening…" and block repeat taps for about 3 seconds.
  - **Add "Continue with Google".** Show it on the landing pages next to the trial button, linking to `app.fraud-pulse.com/signup?method=google&<ad tags>`. This works today.

## 4. Meta Conversions API for `CompleteRegistration`: App, Public and Meta

- **Why it must be server-side:** The real signup happens in the app after Auth0, so the landing page pixel can't see it. The pixel `Lead` fires on the click, and Meta has been optimizing toward people who click, mostly bots and accidental taps on Audience Network.
- **Public site:**
  - **Save ad attribution in a shared cookie.** On the first paid visit, write `fp_attrib` on `.fraud-pulse.com` for 90 days. It holds:
    - `utm_*` and `fbclid`
    - the landing page path
    - the timestamp
  - **Keep the first visit.** Don't overwrite the cookie on later visits.
  - **Why the app needs it:** It can attribute the signup even if the user browsed to other pages first or came back days later.
  - **The pixel's own cookies:** The pixel already sets `_fbp`, and `_fbc` when `fbclid` is present. They are first-party cookies on `.fraud-pulse.com`, so the app can read them.
  - PostHog is already set up for this: `cross_subdomain_cookie: true`, `cookie_domain: '.fraud-pulse.com'` in `posthogClient.ts`.
- **App:**
  - **Send the event.** After a new non-internal account is created, the backend sends `CompleteRegistration` to `graph.facebook.com/<version>/1084443864186051/events`. The event includes:
    - the hashed email and hashed user ID
    - `fbp` and `fbc`
    - the IP address and user agent
    - an `event_id`
  - **Make it count once.** If the app also fires the browser pixel, it uses the same `event_id`.
  - The app prompt has the details.
- **Meta (config):**
  - **Access token:** Create a Conversions API access token in Events Manager and store it as a server secret.
  - **Test first:** Check events with a `test_event_code`.
  - **Then switch the campaign:** Once real signups arrive, change the optimization event to `CompleteRegistration`.
  - **Caveat:** Meta needs about 50 conversions per week per ad set to leave the learning phase. At the current volume, use one ad set with a broader audience, and turn off Audience Network as the report recommends.

## 5. "Data connected" and "subscription started": App

- **Events:** The app backend sends:
  - `data_source_connected` (`source`: shopify, …)
  - `subscription_started` (`plan`, `amount`, `currency`, `interval`)
  - `subscription_cancelled`
- **Where they fire:** Each fires when the server confirms it happened, for example from the billing webhook, not when the user clicks the button.
- **Who they're linked to:** All of them use the same `distinct_id` as the signup and the `tenant_id` group.
- **How revenue gets tied to a campaign:**
  - At signup, the app sets `signup_utm_source`, `signup_utm_campaign`, `signup_utm_content` and `signup_fbclid` with `$set_once`, taken from `fp_attrib`.
  - The app calls `posthog.identify()` on the same cross-subdomain cookie, so the user is linked to their landing page visits.
- **Optional:** Also send `Subscribe` (with `value` and `currency`) to Meta through the Conversions API, so Meta can later optimize for paying customers.
- **Public site:** Nothing.

---

## Public site to-do (this repo)

- [ ] `CALENDLY_DEMO_URL`: remove `?month=2026-11`.
- [ ] `LpDemoCta`: append `utm_*` to the Calendly link.
- [ ] Shared `withAdParams(url)` helper, used on every `app.fraud-pulse.com/signup` link (Header, home, pricing, landing pages).
- [ ] Tap feedback and repeat-tap guard on the trial and demo CTAs.
- [ ] Write the first-touch `fp_attrib` cookie on `.fraud-pulse.com`.
- [ ] "Continue with Google" button on the landing pages (`/signup?method=google`).
- [ ] (Optional) `?internal=1`, which marks the browser as internal in PostHog.

## Config to-do (by hand)

- [ ] Calendly: redirect after booking to `/book-a-demo/thanks/` on the `idan-fraud-pulse/30min` event.
- [ ] Auth0: confirm the Google connection uses your own Google OAuth keys, not the Auth0 dev keys. It's on, but I couldn't see which keys it uses.
- [ ] Meta Events Manager: create the Conversions API token and test with `test_event_code`. Then switch the campaign optimization to `CompleteRegistration`.
- [ ] PostHog: add `is_internal = true` to the internal and test filter and to cohort 385632.

## Done when

- Booking a demo from a landing page shows `utm_campaign` on the Calendly booking and fires `demo_booked` in PostHog.
- A test signup from a Meta ad URL shows up within 1 minute:
  - in Meta Events Manager as `CompleteRegistration`, matched to the server and deduplicated
  - in PostHog as `user signed up` with `signup_utm_campaign` set
- Internal signups appear in neither.
- A PostHog funnel from LP `$pageview` to `user signed up` to `data_source_connected` to `subscription_started`, broken down by `utm_campaign`, shows real numbers.
