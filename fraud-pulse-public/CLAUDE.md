# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ This is NOT the Next.js you know

This project uses **Next.js 16.2.6 with React 19** (see `AGENTS.md` above). APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code, and heed deprecation notices.

## What this is

The **public marketing site** for FraudPulse (`fraud-pulse-public`). FraudPulse connects to transaction data (Shopify, Stripe, Adyen) and recommends rules/actions that reduce chargebacks and friendly fraud. The **product app is a separate codebase** — see `POSTHOG_PLAN.md` "Phase B". Note: the git root is one level up (`../`), where planning `.md` files live; run all `npm` commands from this directory.

**Do not write "Shopify Protect".** The stack is Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect. FraudPulse is the AI analyst that ranks which of those rules to change — it does not replace them and does not take over checkout.

## Commands

```bash
npm run dev      # local dev server (http://localhost:3001)
npm run build    # static export → out/ (this is what deploys)
npm run lint     # eslint (next core-web-vitals + typescript configs)
npm start        # serve a production build
```

There is **no test suite**. TypeScript is `strict`; `npm run build` type-checks. Use `./node_modules/.bin/tsc --noEmit` (do not run `npx tsc` — that can install the wrong `tsc` package).

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

Crawler headers for `llms.txt`, `robots.txt`, `sitemap.xml`, and pricing machine files live in both `vercel.json` and `firebase.json`. HTML pages also send `Link: </llms.txt>; rel="alternate"`.

## Analytics (PostHog)

- `app/lib/posthog.ts` — config constants; `isPostHogEnabled` gates everything on `POSTHOG_PROJECT_TOKEN` being present. The token is public by design (like a GA measurement ID) and inlined at build.
- `app/lib/posthogClient.ts` — idempotent `ensurePostHog()` init and `captureEvent()`. On `*.fraud-pulse.com` it sets a cross-subdomain cookie so the marketing site and product app share one person profile.
- `app/components/PostHogProvider.tsx` — wraps the app in `layout.tsx`; manually fires `$pageview` on SPA route changes (`capture_pageview: false` in init). **Import `captureEvent` from this component**, not from `posthogClient`, when using it in pages.
- Tracked events: `$pageview`, `pricing_page_viewed`, `demo_booked`, `demo_cta_clicked`. See `POSTHOG_PLAN.md` for the full plan and the required Calendly redirect (`demo_booked` fires on `/book-a-demo/thanks/`).

`layout.tsx` also loads Google Analytics (`G-GL245KC3KN`) and Contentsquare via `next/script`.

## Conventions

- **App Router**, all under `app/`. Path alias `@/*` → this directory.
- **Styling** is Tailwind CSS v4 (via `@tailwindcss/postcss`; config in `app/globals.css`, no `tailwind.config`). Body font is Gilroy (`--font-sans` from `/public/fonts`). Display accent is Space Grotesk (`--font-space-grotesk` via `next/font`). Geist Mono is still loaded for mono. Shared 2026 UI primitives live in `app/components/Brand.tsx` (`PulseMark`, `Eyebrow`, `HeroBackdrop`, `StatGrid`, `DarkPanel`, `FrostedBox`, `SoftWash`, `PageCta`).
- The homepage-only brand line **"FraudPulse | AI Fraud Prevention Analyst"** lives inline in `app/page.tsx`. Do not put it on other pages.
- Shared UI in `app/components/` (`Header`, `Footer`, `FaqAccordion` with `variant: 'dark' | 'light'`, `Reveal` for scroll animations, comparison tables). Page-specific data/copy lives in `app/lib/` (`blog.ts`, `homeFaq.ts`, `siteFaqs.ts`, `pageFaqs.ts`, `geo.ts`, `webinar.ts`, `alternatives.ts`, `toolComparison.ts`).
- Client interactivity requires the `'use client'` directive (see the PostHog and Reveal components).
- Recheck prices against live `/pricing/` before changing `PRICING_FACT` or plan copy.

## SEO / GEO

Use `pageMetadata()` from `app/lib/seo.ts` for per-page `Metadata` (trailing-slash canonical, matching `og:url`, large-image social, robots `index,follow` with `max-image-preview:large`, and `llms.txt` as `text/plain` alternate). Structured data via the `JsonLd` component. Marketing pages typically have their own `layout.tsx` for metadata plus a `page.tsx`.

Helpers in `app/lib/geo.ts`:

- `faqPageJsonLd(faqs)` — `FAQPage`. Must match visible accordion copy.
- `articleJsonLd(headline, path)` — `"@type": "Article"` on the 12 GEO marketing URLs (`/`, `/faq/`, `/how-it-works/`, `/solutions/`, `/pricing/`, `/about/`, `/blog/`, `/stack/`, four `/alternatives/` pages). **`headline` must be the live `<h1>`.** No person author and no dates on these blocks.
- `softwareApplicationJsonLd()` — product schema (home plus the same 11 marketing pages). Keep existing FAQPage blocks; one graph per type is fine.

Blog posts keep `BlogPosting` with author + `datePublished` / `dateModified` in `app/blog/[slug]/page.tsx`. Do not add person author or dates to marketing Article blocks.

Machine files crawlers should find:

- `public/llms.txt` → `https://www.fraud-pulse.com/llms.txt`
- `public/robots.txt` (AI bots explicitly allowed)
- `public/sitemap.xml` (www host only, trailing slashes)
- `public/pricing.md` and `public/pricing.txt`

`/book-a-demo/thanks/` and `/lp/*` stay `noindex`. LP pages override `pageMetadata` robots after spreading it.

Do not overwrite live `/how-it-works/`, `/solutions/`, `/faq/`, or `/stack/` with old draft copy. The stack diagram (Shopify / Stripe / Adyen → FraudPulse → Radar / Flow / Blockify / RevenueProtect) lives on How It Works. "Where FraudPulse fits in your stack" (analyst vs screener table) lives on Solutions.
