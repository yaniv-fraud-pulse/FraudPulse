# Meta Pixel Plan — FraudPulse marketing site

**Status:** Implemented 18 Oct 2026 (pixel `1084443864186051` site-wide). Product-app `CompleteRegistration` is still out of this repo.

**New pixel ID:** `1084443864186051`  
**Current pixel ID (LP-only):** `1687276626252810`

This is not a cookie-consent or privacy-policy rewrite. Pixel work should match how GA, Contentsquare, and PostHog already load on the site.

---

## 1. What is live today

| Surface | Pixel? | ID | Notes |
|---|---|---|---|
| Main site (`app/layout.tsx`) | No | — | GA `G-GL245KC3KN`, Contentsquare, PostHog only |
| Ad LPs under `/lp/` | Yes | `1687276626252810` | `app/lp/layout.tsx` → `MetaPixel` |
| `/lp/meta/` and `/lp/meta-short/` | Inherited | same | Trial CTA fires Meta `Lead` **on click** |
| `/lp/radar/` | Inherited | same | Demo CTA fires Meta `Schedule` **on click** |

Implementation already exists and should be reused, not pasted as a second raw snippet:

- `app/lib/metaPixel.ts` — ID + `trackMetaEvent('PageView' \| 'Lead' \| 'Schedule')`
- `app/lp/components/MetaPixel.tsx` — official `fbq` bootstrap, noscript image, extra `PageView` on client route change

The snippet you supplied matches this component. The only ID change is `1687276626252810` → `1084443864186051`.

---

## 2. Where users go after enquiry / trial (conversion destinations)

There is **no single thank-you URL** for every funnel. Destinations today:

### A. Free trial (Sign Up / Start Free Trial)

Users **leave this website** and open the product app:

`https://app.fraud-pulse.com/signup`

Sources:

- Header **Sign Up**
- Pricing **Start Free Trial**
- LP **Start your free trial** (`LpTrialCta`; forwards the current query string so Meta/UTM params can ride along)

There is **no thank-you page in `fraud-pulse-public`** after a completed trial registration. Success happens on `app.fraud-pulse.com`, which is a **different codebase**. This marketing repo cannot see that the form was actually submitted.

**What Meta sees today:** `Lead` on LP trial **click**, not on account created.

### B. Contact / enquiry

`/contact/` posts to the demo contact API, then **stays on the same URL**. On success it swaps the form for in-page copy: “Message sent! We’ll be in touch shortly.”

There is **no** `/contact/thanks/` (or similar) URL.

### C. Book a demo (the real thank-you page)

1. User clicks through to Calendly: `https://calendly.com/idan-apis-solutions/30min`
2. After booking, Calendly is supposed to redirect to **`/book-a-demo/thanks/`** (`CAL_DEMO_THANKS_PATH`)
3. That page already fires PostHog `demo_booked`

This is the only dedicated confirmation URL on the marketing site. Meta does **not** fire there today. Radar LP fires `Schedule` on the **outbound click**, which over-counts vs completed bookings.

### D. Webinar

`/webinar/` is informational. Registration, if any, is not a first-party form on this site. Out of scope unless you add a confirmation URL later.

---

## 3. Recommended work (after approval)

### 3.1 Install the new pixel site-wide (and keep LPs)

1. Change `META_PIXEL_ID` in `app/lib/metaPixel.ts` to `1084443864186051`.
2. Move `MetaPixel` from `app/lp/layout.tsx` into **root** `app/layout.tsx` (next to GA / Contentsquare). One init for the whole static site, including `/lp/*`.
3. **Remove** the LP-only `<MetaPixel />` so the pixel does not load twice.
4. Keep the existing SPA `PageView` on pathname change (needed because this is a Next.js client router, not full reloads).
5. Do **not** paste a second copy of the Facebook snippet into HTML.

Replace the old ID. Do not dual-init `1687276626252810` and `1084443864186051` unless you explicitly want both pixels for a migration window.

### 3.2 Conversion events (measure completed actions, not only clicks)

Use standard Meta events so Ads Manager can attach them without custom event setup.

| Funnel | Fire when | Event | Where | URL-based Ads rule |
|---|---|---|---|---|
| Demo booked | Thank-you page loads (once per visit) | `Schedule` | `/book-a-demo/thanks/` | URL contains `/book-a-demo/thanks/` |
| Contact enquiry | API returns OK | `Contact` | in-page on `/contact/` | URL stays `/contact/` — **not** URL-based unless we add a thanks page |
| Trial **click** (intent) | User clicks Sign Up / Start Free Trial | `Lead` | Header, Pricing, LP CTAs | N/A (click-out) |
| Trial **completed** | Account created | `CompleteRegistration` | **product app**, not this repo | App success URL (if one exists) |

**Do not** treat trial CTA clicks as completed registrations. That would train Meta on “clicked Sign Up,” not “started a trial.”

**Contact:** keep the current in-page success state. Fire `Contact` once on successful submit (guard against double-fire). Do **not** add `/contact/thanks/` unless you want a URL-only conversion in Ads (optional, see §5).

**Demo:** fire `Schedule` on `/book-a-demo/thanks/` (same once-per-load pattern as PostHog `demo_booked`). Stop treating the radar “Book a demo” **click** as the conversion; keep PostHog `demo_cta_clicked` for intent if useful, but Meta conversion should be the thanks page.

### 3.3 Product app (required for true trial conversion)

This repo cannot fire a reliable trial-complete event.

Ask the product app to:

1. Load the **same** pixel `1084443864186051` on `app.fraud-pulse.com` (at least signup + post-signup).
2. Fire `CompleteRegistration` when signup succeeds.
3. If there is a post-signup screen, that URL is the Ads thank-you equivalent.

Until that ships, Meta can only measure **trial intent** (`Lead` on click) from the marketing site.

### 3.4 Privacy

If the pixel moves from LPs-only to the whole site, add one sentence to `/privacy/` that we use Meta (Facebook) Pixel for ads measurement, same class of disclosure as analytics. No DPA rewrite.

---

## 4. Out of scope unless you ask

- Cookie banner / consent mode
- Meta Conversions API (server-side) — static export has no API routes here
- Firing `CompleteRegistration` on the marketing site (we never see signup success)
- Changing Calendly, Paddle, or the product signup UI
- Keeping the old pixel ID in parallel
- New slugs besides an optional contact thanks page

---

## 5. Decisions to confirm before coding

Reply with yes/no (defaults in **bold**):

1. **Replace** old pixel `1687276626252810` with `1084443864186051` (no dual pixels)? **Yes**
2. Load pixel on **entire marketing site + `/lp/*`**, not LPs only? **Yes**
3. Demo conversion = **`Schedule` on `/book-a-demo/thanks/`** (not Calendly click)? **Yes**
4. Contact conversion = **`Contact` on in-page success** (no new `/contact/thanks/`)? **Yes**
5. Trial on this site = **`Lead` on Sign Up click**; completed trial waits for app pixel? **Yes**
6. Add a short Meta Pixel line to Privacy? **Yes**

Optional later: dedicated `/contact/thanks/` if Ads needs a URL-contains rule.

---

## 6. Verify after implementation (do not skip)

1. `/lp/meta/`, `/lp/meta-short/`, `/lp/radar/` — Pixel Helper shows `1084443864186051`, PageView once per load.
2. A main-site page (`/`, `/pricing/`, `/contact/`) — same pixel, not the old ID.
3. Click **Start Free Trial** — `Lead` fires, then landing is `app.fraud-pulse.com/signup`.
4. Submit `/contact/` successfully — `Contact` once; refresh does not duplicate if they only see success state.
5. Open `/book-a-demo/thanks/` — `Schedule` once (same as PostHog `demo_booked`).
6. Confirm `app/lp/layout.tsx` no longer mounts a second pixel.

---

## 7. Files likely to change (when approved)

- `app/lib/metaPixel.ts` — new ID; allow `Contact` (and keep `Lead` / `Schedule`)
- `app/lp/components/MetaPixel.tsx` — keep as the single component; maybe move to `app/components/`
- `app/layout.tsx` — mount pixel
- `app/lp/layout.tsx` — remove duplicate
- `app/lp/components/LpTrialCta.tsx` — keep `Lead` on click
- `app/components/Header.tsx`, `app/pricing/page.tsx` — `Lead` on Sign Up / Start Free Trial
- `app/contact/page.tsx` — `Contact` on API success
- `app/book-a-demo/thanks/page.tsx` — `Schedule` once
- `app/lp/radar/page.tsx` — remove Meta `Schedule` from click (or leave as non-conversion; default: remove)
- `app/privacy/page.tsx` — one analytics/ads sentence

No new public slug unless decision 4 is overridden.
