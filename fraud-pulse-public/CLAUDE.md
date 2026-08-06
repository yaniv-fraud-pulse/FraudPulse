# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ This is NOT the Next.js you know

This project uses **Next.js 16.2.6 with React 19** (see `AGENTS.md` above). APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code, and heed deprecation notices.

## What this is

The **public marketing site** for FraudPulse (`fraud-pulse-public`). FraudPulse connects to transaction data (Shopify, Stripe, PayPal, Adyen) and recommends rules/actions that reduce chargebacks and friendly fraud. The **product app is a separate codebase** — see `POSTHOG_PLAN.md` "Phase B". Note: the git root is one level up (`../`), where planning `.md` files live; run all `npm` commands from this directory.

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # static export → out/ (this is what deploys)
npm run lint     # eslint (next core-web-vitals + typescript configs)
npm start        # serve a production build
```

There is **no test suite**. TypeScript is `strict`; `npm run build` type-checks.

## Static export architecture

`next.config.ts` sets `output: 'export'` with `trailingSlash: true` and `images.unoptimized: true`. Consequences:

- **No server runtime.** No API routes, no server actions, no dynamic SSR, no middleware. Everything renders to static HTML/JS at build time into `out/`.
- Dynamic routes must supply `generateStaticParams()` — see `app/blog/[slug]/page.tsx`. Blog content is not fetched; it lives as data in `app/lib/blog.ts` (`posts` array of `BlogPost`).
- Every internal path is expected to end in a trailing slash (e.g. `/pricing/`, `/book-a-demo/thanks/`).
- Env vars needed in the browser must be inlined at build time via `next.config.ts`'s `env` block (there's no server to read `process.env` at runtime).

## Deployment

Two deploy targets both exist:

- **Firebase Hosting** (primary): `.github/workflows/deploy.yml` runs `npm ci && npm run build` on push to `main`, then deploys `out/` to Firebase project `fruadpulse` (note the typo in the project id). Config in `firebase.json`.
- **Vercel**: `vercel.json` handles redirects (`/features` → `/solutions`, and apex `fraud-pulse.com` → `www.fraud-pulse.com`). PostHog env vars are set in the Vercel dashboard.

Canonical host is `https://www.fraud-pulse.com` (defined once in `app/lib/site.ts` as `SITE_URL`).

## Analytics (PostHog)

- `app/lib/posthog.ts` — config constants; `isPostHogEnabled` gates everything on `POSTHOG_PROJECT_TOKEN` being present. The token is public by design (like a GA measurement ID) and inlined at build.
- `app/lib/posthogClient.ts` — idempotent `ensurePostHog()` init and `captureEvent()`. On `*.fraud-pulse.com` it sets a cross-subdomain cookie so the marketing site and product app share one person profile.
- `app/components/PostHogProvider.tsx` — wraps the app in `layout.tsx`; manually fires `$pageview` on SPA route changes (`capture_pageview: false` in init). **Import `captureEvent` from this component**, not from `posthogClient`, when using it in pages.
- Tracked events: `$pageview`, `pricing_page_viewed`, `demo_booked`, `demo_cta_clicked`. See `POSTHOG_PLAN.md` for the full plan and the required Cal.com redirect (`demo_booked` fires on `/book-a-demo/thanks/`).

`layout.tsx` also loads Google Analytics (`G-GL245KC3KN`) and Contentsquare via `next/script`.

## Conventions

- **App Router**, all under `app/`. Path alias `@/*` → this directory.
- **SEO-first.** Use `pageMetadata()` from `app/lib/seo.ts` for per-page `Metadata` (handles trailing-slash canonical + og:url). Structured data via the `JsonLd` component. Marketing pages typically have their own `layout.tsx` for metadata plus a `page.tsx`.
- **Styling** is Tailwind CSS v4 (via `@tailwindcss/postcss`; config in `app/globals.css`, no `tailwind.config`). Font is Geist Mono via `next/font`.
- Shared UI in `app/components/` (`Header`, `Footer`, `FaqAccordion`, `Reveal` for scroll animations). Page-specific data/copy lives in `app/lib/` (`blog.ts`, `homeFaq.ts`, `webinar.ts`).
- Client interactivity requires the `'use client'` directive (see the PostHog and Reveal components).
