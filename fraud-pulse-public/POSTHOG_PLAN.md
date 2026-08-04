# PostHog Implementation Plan — FraudPulse

**Scope:** Public marketing site (`fraud-pulse-public`) + product app (separate codebase)

---

## Status

| Item | Status |
|------|--------|
| Site: install + init (`posthog-js`) | ✅ Done |
| Site: `$pageview` (incl. SPA nav + UTMs) | ✅ Done |
| Site: `pricing_page_viewed` | ✅ Done |
| Site: `demo_booked` on `/book-a-demo/thanks/` | ✅ Done |
| Site: `demo_cta_clicked` (outbound Cal link) | ✅ Done (extra intent signal) |
| Env name `POSTHOG_PROJECT_TOKEN` | ✅ Done |
| Cross-subdomain cookie `*.fraud-pulse.com` | ✅ Done |
| **Vercel env vars** | ⚠️ **You must add** (see below) |
| **Cal.com success redirect** | ⚠️ **You must configure** (see below) |
| App Phase B (`identify`, signup, data connect) | ⚠️ App not in this repo — use `app/lib/posthogAppPhaseB.ts` |

---

## ⚠️ Vercel — required env vars

Add in **Vercel → Project → Settings → Environment Variables**, then **redeploy**:

| Name | Value | Environments |
|------|--------|----------------|
| `POSTHOG_PROJECT_TOKEN` | `phc_...` (PostHog project API key) | Production (+ Preview if desired) |
| `POSTHOG_HOST` | `https://us.i.posthog.com` | Production (+ Preview) |

Without `POSTHOG_PROJECT_TOKEN`, PostHog stays disabled (no events).

Local: copy `.env.example` → `.env.local` and set the same vars.

---

## ⚠️ Cal.com — required for `demo_booked`

Event: `https://cal.com/yaniv-hayun/30min`

1. Enable **Redirect on booking**
2. Success URL: `https://www.fraud-pulse.com/book-a-demo/thanks/`
3. Keep **Forward parameters** on

---

## Five must-track events

| # | Event | Where | When |
|---|--------|--------|------|
| 1 | `$pageview` | Site + app | Every page / route |
| 2 | `pricing_page_viewed` | Site | `/pricing/` |
| 3 | `demo_booked` | Site | `/book-a-demo/thanks/` after Cal redirect |
| 4 | `user_signed_up` | App | First auth / signup |
| 5 | `data_connected` | App | First Stripe/Shopify (or PSP) connect |

---

## Phase B (product app)

See `app/lib/posthogAppPhaseB.ts`. Same project token + host. App should live on `*.fraud-pulse.com` for cookie stitching.
