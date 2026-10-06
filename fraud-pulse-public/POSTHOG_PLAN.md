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
| Site: `demo_cta_clicked` (outbound Calendly link) | ✅ Done (extra intent signal) |
| Env name `POSTHOG_PROJECT_TOKEN` | ✅ Done |
| Cross-subdomain cookie `*.fraud-pulse.com` | ✅ Done |
| **Vercel env vars** | ⚠️ **You must add** (see below) |
| **Calendly confirmation redirect** | ⚠️ **You must configure** (see below) |
| App Phase B (`identify`, signup, data connect) | ⚠️ App not in this repo — see Phase B below |

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

## ⚠️ Calendly — required for `demo_booked`

Event: `https://calendly.com/idan-apis-solutions/30min` (Idan Hayon, CEO)

1. Open the event in Calendly → **Confirmation page**
2. Choose **Redirect to an external site**
3. Redirect URL: `https://www.fraud-pulse.com/book-a-demo/thanks/`
4. Turn on **Pass event details to your redirect URL**

---

## Five must-track events

| # | Event | Where | When |
|---|--------|--------|------|
| 1 | `$pageview` | Site + app | Every page / route |
| 2 | `pricing_page_viewed` | Site | `/pricing/` |
| 3 | `demo_booked` | Site | `/book-a-demo/thanks/` after Calendly redirect |
| 4 | `user_signed_up` | App | First auth / signup |
| 5 | `data_connected` | App | First Stripe/Shopify (or PSP) connect |

---

## Phase B (product app)

Same project token + host. App should live on `*.fraud-pulse.com` for cookie stitching.

1. Init once on app boot (same options as the marketing site, including `cross_subdomain_cookie` + `cookie_domain: '.fraud-pulse.com'` in prod).
2. After login / session restore: `posthog.identify(user.id, { email, name, company, plan })`
3. On logout: `posthog.reset()`
4. On successful signup (once): `posthog.capture('user_signed_up', { auth_method, plan })`
5. On first successful Stripe/Shopify (or PSP) connection (once): `posthog.capture('data_connected', { provider, workspace_id })`
6. Capture `$pageview` on in-app route changes (or enable `capture_pageview`).
