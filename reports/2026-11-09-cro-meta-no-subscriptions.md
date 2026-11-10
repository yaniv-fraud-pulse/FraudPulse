# Why Meta ads produce zero subscriptions: CRO analysis

**Date:** 2026-11-09
**Window:** last 30 days (2026-10-10 → 2026-11-09), PostHog project "Default project" (490358)
**Question:** After weeks of Meta ads, why is there still not a single new paying subscription?

---

## TL;DR

There are no subscriptions because **Meta is not delivering buyers, and the few people with real intent fall out before they create an account.** Four things stack on top of each other:

1. **95% of paid traffic is Meta Audience Network** (`utm_source=an`): ads shown inside third-party mobile apps and games. These are not merchants. Half of these sessions end in under 5 seconds, and ~930 iOS/iPad visitors produced **2** CTA clicks.
2. **Meta is optimizing toward the junk.** The Meta Pixel `Lead` event fires on the *button click*, not on a signup. Android Audience Network users tap the button 3–4 times per second (accidental or frustrated taps). Meta therefore sees "Leads" coming from Audience Network and buys more of it. The demo landing page sends Meta **no conversion signal at all**.
3. **The click → account step is broken.** 38 paid visitors clicked "Start your free trial". Only 12 reached the Auth0 signup screen, and **0** created an account. All 5 Facebook-feed clickers, the best-quality visitors, never reached the signup screen.
4. **There are zero real paid signups, so a subscription is impossible.** All 8 `user signed up` events in the window are internal, test, the Shopify reviewer, or direct (non-ad) traffic. None of them came from an ad.

Country targeting is **not** the problem (90% US, 9% UK). Placement and the conversion signal are.

---

## 1. The funnel (paid Meta traffic, last 30 days)

| Step | Audience Network (`an`) | Facebook (`fb`) | Instagram (`ig`) |
|---|---|---|---|
| Landing page view (`/lp/meta*`, `utm_medium=paid`) | **1,191** | 31 | 31 |
| Clicked "Start your free trial" | 32 (2.7%) | 5 (16.1%) | 1 (3.2%) |
| Reached Auth0 signup screen | 12 | **0** | 0 |
| Account created (`user signed up`) | **0** | 0 | 0 |
| Opened the app | 0 | 0 | 0 |
| Clicked "Book a demo" (demo LP) | 17 | 0 | 1 |
| Demo booked (`/book-a-demo/thanks/`) | **0** | 0 | 0 |

Weekly landing page visitors: 163 (wk of Oct 19), then 791 (Oct 26), then 348 (Nov 2, split across `/lp/meta/` and `/lp/meta-demo/`).

**Reading it:** Facebook-feed visitors click the CTA at **6×** the rate of Audience Network visitors (16% vs 2.7%), yet they are only 2.5% of the traffic Meta buys.

---

## 2. Finding #1: Audience Network is ~95% of spend-driven traffic, and it isn't buyers

Visitor share by placement: `an` 1,192 · `fb` 31 · `ig` 31.

Engagement by placement:

| Placement | Sessions | Median session | Sessions under 5s | Sessions over 30s |
|---|---|---|---|---|
| Audience Network | 1,215 | **5s** | **49.8%** | 22.7% |
| Facebook | 34 | 22s | 23.5% | 47.1% |
| Instagram | 31 | 0s | 54.8% | 35.5% |
| Direct / organic | 110 | 30s | 32.7% | 51.8% |

Audience Network broken down by device:

| OS / device | Sessions | Median | Sessions with trial click |
|---|---|---|---|
| iOS phone | 529 | 4s | **1** |
| "Mac desktop" Safari (actually iPads in desktop mode, inside apps) | 387 | 3s | **1** |
| Android phone | 253 | 11s | 30 |

- ~930 Apple-device visitors produced 2 clicks. That's typical of accidental taps inside games.
- On Android, Audience Network clickers fire `signup_cta_clicked` **3–4 times within the same second** (e.g. 4 events at 10:17:52, 4 at 13:17:26, 4 at 09:54:51). Then they leave and land back on the LP. These are rage or accidental taps from an in-app webview, not purchase intent.
- Long-tail countries (Nepal, Mali, Albania, Armenia, Myanmar…) arrive only via Audience Network.

**A B2B fraud tool selling at $199/mo to Shopify/Stripe merchants will not find buyers inside mobile games.** This one setting is the largest single cause.

---

## 3. Finding #2: Meta is being trained on the wrong signal

From the site code:

- `app/components/TrackedCta.tsx`: `trackMetaEvent('Lead')` fires **on click** of the trial CTA, before any signup.
- `app/lp/components/LpDemoCta.tsx`: demo-CTA clicks send **no** Meta event.
- `app/book-a-demo/thanks/page.tsx`: `Schedule` fires only on the Calendly thank-you redirect. In 30 days that page got **0** views.

Consequences:

- **Trial campaign:** the multi-tapping Android Audience Network users generate most of the `Lead` events. Meta's algorithm learns "Audience Network Android = converts" and moves even more budget there. It's a self-reinforcing loop.
- **Demo campaign** (`/lp/meta-demo/`, live since Nov 2): Meta receives zero conversion events, so it can only optimize for clicks or landing-page views. That is exactly what Audience Network sells cheapest.
- `user signed up` is fired server-side by the API, but it is **not** sent to Meta (no Conversions API). Meta never learns what a real signup looks like.

---

## 4. Finding #3: the click → signup handoff leaks

Paid visitors who clicked the trial CTA: 38. Reached `login.fraud-pulse.com/u/signup/identifier`: 12. Created an account: 0.

Typical journeys:

```
LP view → signup_cta_clicked ×4 (same second) → pageleave → LP view again (no Auth0 page)
LP view → signup_cta_clicked → pageleave → (nothing)
LP view → signup_cta_clicked → Auth0 signup screen (10–30s) → back to LP
```

Likely causes, to verify in session replays:

1. **Two-hop redirect with no feedback.** The CTA goes to `app.fraud-pulse.com/signup`. That app has to load and then redirect to Auth0. On a mobile in-app webview this takes seconds with a blank screen. Users tap again or hit back. The repeated same-second taps fit this.
2. **The in-app browser (Facebook/Instagram webview) can break or slow the Auth0 hosted page.** All 5 FB clickers (Android Chrome webview and "Facebook Mobile" iOS) never reached it.
3. **The Auth0 screen is a cold wall.** It shows a bare email field and then a passwordless email code (`/u/login/passwordless-email-challenge`). On a phone that means leaving the app, opening email, and coming back. That is too much for a cold ad visitor. There's no "Continue with Google".

Every one of the 12 Audience Network users who reached Auth0 left without signing up.

---

## 5. Finding #4: the 8 "signups" are not customers

| Signup | Where they came from | Assessment |
|---|---|---|
| 2 × company domain `fraud-pulse.com` | — | Internal |
| ~4 × Gmail, Israel, came via `www` site, no UTM | Direct | Almost certainly team / testing |
| 1 × `shopify.com`, Philippines | Direct to login | Shopify App Store review team |
| 1 × Singapore business domain (+ Gmail at the same minute) | Direct, no ad | **The only plausible real prospect**, and it was not from Meta |

Meta-attributed signups: **0**. With no trial started, a subscription in this window was impossible. A subscription also needs the 14-day trial to end, so even a perfect signup today wouldn't show up as revenue until ~Nov 23.

The PostHog test-account filter (cohort 385632) does not exclude these internal people, so dashboards overstate signups.

---

## 6. Finding #5: the demo path is probably broken too

- Paid visitors clicked "Book a demo" **18** times (17 Audience Network, 1 IG). The `/book-a-demo/thanks/` page got **0** views.
- The Calendly link changed to `calendly.com/idan-fraud-pulse/30min`. `POSTHOG_PLAN.md` documents the redirect setup for the **old** event (`idan-apis-solutions/30min`). If the redirect wasn't set up again on the new event type, a booking would never fire `demo_booked` or the Meta `Schedule` event. **Check Calendly first.** It's possible demos *were* booked and we simply can't see them.
- `CALENDLY_DEMO_URL` hard-codes `?month=2026-11`. From Dec 1 every visitor would open a past month with no slots and have to click forward.
- The demo LP hero copy says *"Your 14-day trial includes connecting Stripe or Shopify… No credit card"*, but the button says *"Book a demo"*. The page promises a trial and asks for a meeting.

---

## 7. What's NOT the problem

- **Country:** 1,168 US + 112 UK out of ~1,290 LP visitors. Targeting geography is correct.
- **Tracking basics:** pageviews, CTA events, Auth0 pages, app pages, `$identify`, and the server-side `user signed up` are all present. Cross-domain person stitching works (marketing site → login → app is one person).
- **The landing page itself.** A 16% CTA click rate from Facebook-feed visitors is healthy. The page works when the right person sees it.

---

## 8. Sanity check: what should we even expect?

Typical B2B SaaS self-serve rates: LP → signup 2–4%, signup → data connected 30–50%, trial → paid 10–25%.

- **Qualified** paid visitors in 30 days (FB + IG feed only): ~62, which predicts **~1–2 signups and ~0 subscriptions**.
- If all ~1,250 visitors had been feed-quality: ~25–50 signups, which predicts **~2–6 subscriptions**.

So the zero is not bad luck. With this traffic mix it is the expected result.

---

## 9. Action plan (prioritized)

### P0: this week (stop the bleeding)

1. **Turn off Audience Network.** Switch to manual placements: Facebook Feed, Instagram Feed, Facebook/Instagram Stories, and Reels at most. Do this in every ad set. (Campaign IDs seen: `120250342705590328`, `120250653122880328`, `120250703564080328`.)
2. **Stop sending `Lead` on button click.** Send Meta a real conversion instead:
   - Send `CompleteRegistration` when `user signed up` fires, using the **Meta Conversions API from the backend**. Pass `fbclid`/`_fbc` through the signup flow; the CTA already forwards the query string to `/signup`.
   - Re-optimize the campaign on `CompleteRegistration`. Until it reaches ~50/week, optimize on Landing Page Views **with Audience Network excluded**, not on Leads.
3. **Fix the click → signup handoff.**
   - Link the CTA straight to the Auth0 signup screen (`screen_hint=signup`), or show an instant "Creating your trial…" state on `/signup` so taps aren't wasted.
   - **Add "Continue with Google"** (Auth0 social connection) and drop the email-code step for signup on mobile.
   - Watch the replays of the ~26 people who clicked and never reached Auth0. Session replay is on; filter on `signup_cta_clicked` and `utm_medium=paid`.
4. **Fix the demo path.**
   - Confirm the Calendly redirect to `https://fraud-pulse.com/book-a-demo/thanks/` is set on the `idan-fraud-pulse/30min` event, with event details passed.
   - Remove `?month=2026-11` from `CALENDLY_DEMO_URL` (`app/lib/posthog.ts:11`).
   - Fire a Meta `Contact` event on the demo-CTA click as an interim signal.
   - Rewrite the `/lp/meta-demo/` hero so it pitches a demo instead of a trial.

### P1: next 2 weeks (be able to measure revenue)

5. **Instrument the rest of the funnel in the app** (`POSTHOG_PLAN.md` Phase B): `data_connected` and `subscription_started`/`trial_converted`, the latter from a Stripe webhook to PostHog. Today PostHog cannot see a subscription even if one happens.
6. **Fix internal filtering.** Add team members and the `fraud-pulse.com` domain to the test-account cohort, so "8 signups" stops looking like traction.
7. **Give Meta a reason to qualify.** Put "For Shopify & Stripe merchants doing $X+/mo" in the ad and the LP. Merchants at that size understand Radar rules, and anyone else self-selects out. Test the sample report as a low-friction offer for retargeting.

### P2: channel bets

8. **Retarget engaged visitors**: anyone who spent ≥30s on the LP or played the video, Facebook/Instagram Feed only. That's a small, warm audience.
9. **Shopify App Store** (listing just went live; the Shopify reviewer is already in the signup data). For a Shopify merchant, an install is far higher intent than a cold Meta click. Put budget and attention there and into App Store SEO.
10. **Founder-led outbound and LinkedIn** to Shopify/Stripe merchants with chargeback pain. At $199/mo, the first 10 customers will come faster from direct outreach than from paid social.

---

## 10. KPIs to watch after the fix (weekly)

| Metric | Today | Target after P0 |
|---|---|---|
| Share of paid traffic from Audience Network | 95% | 0% |
| Median paid LP session | 5s | >20s |
| CTA click → Auth0 page reached | 32% | >80% |
| Auth0 page → account created | 0% | >40% |
| Paid signups / week | 0 | 5+ |
| `data_connected` / signups | not tracked | >40% |
| Demo booked / demo CTA click | 0 (likely untracked) | >20% |

Also ask Meta Ads Manager for **spend per placement**. PostHog has no cost data, so CAC per placement can't be computed here.

---

## Appendix: method

All numbers come from PostHog HogQL and funnel queries over `$pageview`, `signup_cta_clicked`, `demo_cta_clicked`, `sample_report_cta_clicked`, `product_video_played`, and `user signed up`, plus `$host` and `$pathname`, `utm_*`, `$geoip_country_name`, `$os`, `$device_type`, and `$browser`. Placement is the `utm_source` Meta passes (`an` = Audience Network, `fb` = Facebook, `ig` = Instagram). Funnels used a 14-day conversion window. Code references are to `fraud-pulse-public/app/`.

---

## Addendum (2026-11-09): device and bug test of the landing pages

**Tested:** `/lp/meta/` and `/lp/meta-demo/` rendered at 360×740 (small Android), 412×915 (large Android), 390×844 (iPhone) and 820×1180 (iPad). Also the full click path `app.fraud-pulse.com/signup` → Auth0, PostHog replays of 25 paid Android sessions, and 60 paid sessions that recorded keystrokes.

### Bug 1 (critical): "Start free trial" loads ~3 MB of uncompressed JavaScript on a blank black screen
- The CTA goes to `app.fraud-pulse.com/signup`. That route is the full product SPA, which redirects to Auth0 only *after* the app boots.
- It downloads `main-9n0PhEFr.js` (2.40 MB) and `shopify-BB84IT5p.js` (0.56 MB). **No gzip or brotli compression** is applied (the server is Google Frontend, with no `content-encoding` header). Gzip alone would cut `main` to 0.72 MB.
- While that loads, `#root` stays at `opacity: 0` on a **dark** `#0F1117` background. Coming from a white landing page, it looks like the site broke.
- Time on mobile networks: ~15s on slow 4G and ~5s on a good connection, before Auth0 even starts loading.
- This matches the replays and events. The tap gives no feedback, people tap 2–4 times, then see a black screen and press back. 26 of 38 trial clickers never reached Auth0.

**Fix, in order:**
1. Link the CTA straight to Auth0 signup (`/authorize?...&screen_hint=signup`), or make `/signup` a tiny static page that redirects immediately, without loading the app bundle.
2. Turn on compression for the app host. Firebase Hosting and Cloud CDN do it automatically; a GCS bucket needs files uploaded with `Content-Encoding: gzip`.
3. Give the button instant feedback on tap: a disabled state plus "Opening signup…".

### Finding 2: bot traffic in Audience Network
- 60 paid sessions recorded 20+ keystrokes on landing pages that **have no text field**. One session had 1,760 keystrokes and 418 clicks in 5.6 minutes; another had 182 keystrokes in 1 second. 50 of the 60 were on `/lp/meta/`.
- This is automated or fraudulent click traffic, which supports turning off Audience Network.

### Finding 3: demo button details
- The "Book a demo" button opens Calendly in a new tab (`target="_blank"`). Inside Facebook and Instagram in-app browsers, this can drop the visitor out of the flow.
- UTM parameters are **not** passed to Calendly, so bookings can't be tied to a campaign. Append `utm_source`, `utm_campaign` and `utm_content` to the Calendly URL.

### No problems found
- No console errors in any of the 25 Android replays.
- No sideways scrolling at any size, and the sticky CTA bar is visible and tappable on all phones.
- The landing page is light: ~300 KB of JS and CSS, brotli-compressed on Vercel. The www → apex redirect takes ~0.3s.
- Auth0 renders correctly once it is reached.
