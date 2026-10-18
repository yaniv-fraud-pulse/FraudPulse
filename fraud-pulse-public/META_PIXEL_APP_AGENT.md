# App builder brief — Meta Pixel on `app.fraud-pulse.com`

Hand this file to the product-app agent. The marketing site (`www.fraud-pulse.com`) is already done. This work is **only** the product app.

**Do not change** the marketing repo for this task.

---

## Why

Ads send people to the marketing site. Trial CTAs send them to:

`https://app.fraud-pulse.com/signup`

The marketing site fires Meta **`Lead`** on that **click**. It never sees whether signup succeeded. The app must fire **`CompleteRegistration`** when an account is actually created. Until then, Meta cannot optimize for completed trials.

---

## Pixel (must match the website)

| | |
|---|---|
| Pixel ID | `1084443864186051` |
| Script | `https://connect.facebook.net/en_US/fbevents.js` |
| Host | `app.fraud-pulse.com` (same site as `*.fraud-pulse.com`) |

**Do not** use the old ID `1687276626252810`.

Install once at app boot (root layout / index HTML), at least on `/signup` and the first post-signup screen.

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1084443864186051');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1084443864186051&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

If the app is a client-side router, fire `PageView` again on in-app route changes (skip the duplicate on the first load, because `fbq('track', 'PageView')` already ran in the snippet).

If `fbq` is not defined yet when you fire a conversion, retry for a few seconds (the marketing site waits up to 5s). Do not drop the event.

---

## Conversion event (the actual task)

**When:** the signup API succeeds and the user is a **new** account.  
**Not when:** `/signup` loads, the button is clicked, login of an existing user, or page refresh.

```js
fbq('track', 'CompleteRegistration', { content_name: 'free_trial' });
```

Fire **once per account**. Persist that you already reported it (user record, or equivalent). Refreshing onboarding must not send it again.

### Do not fire these on the app

| Event | Why |
|---|---|
| `Lead` | Already fired on www when they click Sign Up / Start Free Trial |
| `Schedule` | Demo booking is tracked on `www.fraud-pulse.com/book-a-demo/thanks/` |
| `Contact` | Contact form is on www `/contact/` |
| `CompleteRegistration` on `/signup` view | That is not a completed registration |

---

## Keep ad click IDs

Marketing landing pages append the current query string:

`https://app.fraud-pulse.com/signup` + `window.location.search`

So the first app load may include `fbclid`, `utm_*`, and similar.

**Do not strip the query string on first landing.** If you redirect after signup, copy `fbclid` (and UTMs if you use them) onto the next URL when still needed.

Stay on `*.fraud-pulse.com` so Meta cookies (`_fbp`, `_fbc`) can stitch ad → www → app.

---

## Optional thank-you URL

If signup lands on a stable path such as `/signup/success` or `/onboarding/`, that URL can be used in Ads as “URL contains …”.  
**`CompleteRegistration` is still required.** A URL alone is not enough if the SPA never changes path.

---

## Privacy / PII

Do not send email, name, or other PII in the Meta event params unless product explicitly asks for Advanced Matching. `content_name: 'free_trial'` is enough.

---

## Verify before calling it done

1. Open `https://www.fraud-pulse.com/lp/meta/?fbclid=test` → **Start your free trial**.
2. Land on `https://app.fraud-pulse.com/signup?fbclid=test` (query still present).
3. Meta Pixel Helper: pixel **`1084443864186051`**, `PageView`.
4. Complete a test signup **once**.
5. Helper: **`CompleteRegistration`** with `content_name = free_trial`.
6. Refresh the post-signup screen: **no second** `CompleteRegistration`.
7. Log in as an **existing** user: **no** `CompleteRegistration`.

---

## Related (do not block Meta on this)

PostHog on the app (separate from Meta), if not already done:

- Init with the same project as www, `cookie_domain: '.fraud-pulse.com'`
- `posthog.identify` after login
- `posthog.capture('user_signed_up', { auth_method, plan })` once on first signup (can sit next to `CompleteRegistration`)
- `posthog.reset()` on logout

---

## Out of scope

- Marketing site (`fraud-pulse-public` / `www.fraud-pulse.com`)
- Calendly / demo thanks page
- Contact form
- Changing pixel ID
- Cookie consent banner (unless the app already has one — then load the pixel only after ads consent)
