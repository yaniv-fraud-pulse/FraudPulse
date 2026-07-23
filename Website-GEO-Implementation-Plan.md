# FraudPulse Public Website — Implementation Plan (for Web Developer)

**Product:** [FraudPulse](https://www.fraud-pulse.com)  
**Purpose:** Make the public site easy for AI engines and search crawlers to understand, cite, and trust.  
**Audience:** Website developer / implementer  
**Out of scope:** Reddit, LinkedIn, ads, app backend (unless needed for SEO tags)

**Implementation status (code):** Updated in `fraud-pulse-public` — P0 technical items + blog standards shipped. Remaining: DNS/Vercel domain primary = www (confirm live), new marketing guides from §7, optional FAQs on remaining posts, OG images.

Canonical host preference (use everywhere unless you already standardized otherwise):

```text
https://www.fraud-pulse.com
```

All internal links, sitemaps, canonicals, Open Graph, schema, and marketing URLs should use this host.

---

## 1. Goals

1. One consistent domain identity (no split between `fraud-pulse.com` and `www.fraud-pulse.com`).
2. Every important page is crawlable, self-describing, and citation-ready.
3. Buyer questions on the homepage/solutions match how merchants ask AI tools.
4. Blog guides are structured so AI can quote claims, steps, and FAQs.
5. AI crawlers are explicitly allowed (`llms.txt` + `robots.txt`).

---

## 2. Priority order

| Priority | Workstream | Status to verify |
|----------|------------|------------------|
| P0 | Canonical domain + redirects + `og:url` | Must verify on live site |
| P0 | Homepage FAQ + FAQ JSON-LD | Often already present — confirm completeness |
| P0 | `llms.txt` + AI-friendly `robots.txt` | Confirm live |
| P1 | Blog post standards (author, dates, FAQ, schema) | Apply to all guides |
| P1 | Prompt-matched guides (see content list) | Content may be written by marketing; you ship templates + SEO |
| P2 | Glossary / comparison page templates | Same technical pattern as guides |

---

## 3. P0 — Domain & social meta

### 3.1 Pick and enforce one host

- Prefer: `https://www.fraud-pulse.com`
- Configure DNS + hosting so:
  - `http://` → `https://`
  - bare `fraud-pulse.com` → **301** → `https://www.fraud-pulse.com/...` (path-preserving)
- Ensure no mixed links in header/footer/nav/CTAs.

### 3.2 Per-page tags (all public HTML pages)

On every indexable page:

```html
<link rel="canonical" href="https://www.fraud-pulse.com/exact-path/" />
<meta property="og:url" content="https://www.fraud-pulse.com/exact-path/" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" /> <!-- or article for blog -->
<meta property="og:site_name" content="FraudPulse" />
<meta name="twitter:card" content="summary_large_image" />
```

Rules:

- Canonical must be absolute HTTPS + www (or your chosen host).
- Canonical path must match the preferred URL (trailing slash policy: pick one and stick to it).
- `og:url` must match canonical.

### 3.3 Acceptance tests

- [ ] `https://fraud-pulse.com/` redirects 301 to `https://www.fraud-pulse.com/`
- [ ] Homepage View Source shows matching `canonical` + `og:url`
- [ ] One blog URL View Source shows matching `canonical` + `og:url`
- [ ] Sitemap only lists the chosen host
- [ ] No `og:url` pointing at staging, localhost, or non-www if www is canonical

---

## 4. P0 — Homepage FAQ + schema

### 4.1 Visible FAQ

Homepage (and key solution pages) should include a visible FAQ answering real buyer questions, for example:

- Does FraudPulse replace Stripe Radar or Shopify Protect?
- How does FraudPulse reduce chargebacks?
- How long until rule recommendations?
- Can I improve Stripe/Shopify fraud settings without replacing my stack?
- How do I reduce chargebacks on Shopify?
- FraudPulse vs a fraud dashboard?

Use clear, factual answers (no fluff). Align copy with product truth: **works alongside Radar/Protect; classifies chargebacks; ranked rule changes with estimated impact.**

### 4.2 JSON-LD

Add `FAQPage` JSON-LD on pages that show the FAQ (same Q&A as visible content).

Also recommended sitewide / homepage:

- `Organization` (name, url, logo)
- `WebSite` (name, url)
- `SoftwareApplication` or `Product` if accurate (name, description, url, offers optional)

### 4.3 Acceptance tests

- [ ] FAQ visible without JS-only gating for main content (OK if accordion, but HTML text crawlable)
- [ ] JSON-LD validates (Rich Results / schema validator)
- [ ] FAQ answers match on-page text (no schema spam)

---

## 5. P0 — `llms.txt` + `robots.txt`

### 5.1 `/llms.txt`

Publish at:

```text
https://www.fraud-pulse.com/llms.txt
```

Suggested contents (adjust paths to real URLs):

```text
# FraudPulse
> Fraud intelligence for Shopify and Stripe merchants. Analyzes transactions and chargebacks,
> classifies fraud types, and recommends ranked Stripe Radar / Shopify Protect rule changes.

## Product
- Home: https://www.fraud-pulse.com/
- Pricing: https://www.fraud-pulse.com/pricing/   # if exists

## Key guides
- How to reduce chargebacks on Shopify: https://www.fraud-pulse.com/blog/how-to-reduce-chargebacks-on-shopify-2026/
- Stripe Radar tuning guide: https://www.fraud-pulse.com/blog/<slug>/
- (add other live guides)

## Notes
- FraudPulse does not replace Stripe Radar or Shopify Protect; it works alongside them.
- Official site: https://www.fraud-pulse.com/
```

### 5.2 `/robots.txt`

Allow major AI crawlers (do not block):

- GPTBot
- ChatGPT-User
- ClaudeBot / anthropic-ai (as applicable)
- PerplexityBot
- Google-Extended (optional policy decision — document choice)

Keep normal `Sitemap:` line pointing at the www sitemap.

### 5.3 Acceptance tests

- [ ] `GET /llms.txt` → 200, text/plain, correct host
- [ ] `GET /robots.txt` → 200; no blanket `Disallow: /` for AI bots above
- [ ] Sitemap URL reachable and uses canonical host

---

## 6. P1 — Blog / guide page standard

Every long-form guide (and comparison page) should include:

| Element | Requirement |
|---------|-------------|
| Title H1 | Matches search/AI phrasing where possible |
| Intro | 1–2 short paragraphs stating who it’s for + outcome |
| Author | Visible human author name |
| Dates | `Published` + `Last updated` (visible) |
| Structure | Clear H2/H3; steps and lists OK |
| Concrete claims | Specific tactics, not only vague advice |
| FAQ block | 3–6 questions at bottom (optional but preferred) |
| Schema | `Article` or `BlogPosting` (+ `FAQPage` if FAQ present) |
| Canonical / OG | Same rules as §3 |
| Internal links | To related guides + homepage product pages |
| No orphan pages | Linked from blog index + sitemap |

### Article JSON-LD minimum

- `@type`: `Article` or `BlogPosting`
- `headline`, `datePublished`, `dateModified`
- `author` (Person or Organization)
- `mainEntityOfPage` / `url`
- `publisher` (Organization + logo)

---

## 7. Content pages to support (marketing writes; you ship)

Ship or confirm these URLs exist under the blog (or `/guides/`) with the standard above:

| Priority | Working title | Maps to buyer intent |
|----------|---------------|----------------------|
| Live / confirm | How to reduce chargebacks on Shopify (2026) | Chargeback reduction |
| Live / confirm | Stripe Radar rules — complete tuning guide | Radar false declines / tuning |
| Next | How to stop card testing attacks on Shopify | Card testing |
| Next | False declines — the hidden revenue killer | False declines |
| Later | Best fraud tools for Shopify 2026 (honest listicle) | “Best tools” prompts |
| Later | Stripe Radar vs Signifyd vs FraudPulse | Comparison prompts |
| Optional | Glossary (friendly fraud, reason codes, FP rate) | Definition queries |

**Note:** Comparison/listicle pages must be honest and include competitors. Thin promo pages hurt trust and AI citation quality.

---

## 8. Technical hygiene checklist

- [ ] XML sitemap includes homepage, key product pages, all published guides
- [ ] `noindex` only on thank-you / app / staging — never on guides
- [ ] Staging blocked from indexing
- [ ] Fast mobile LCP; guides readable without login
- [ ] Images have alt text; OG image set for homepage + articles
- [ ] Consistent brand name spelling: **FraudPulse**
- [ ] Prefer HTTPS absolute URLs in schema and `llms.txt`

---

## 9. Definition of done (hand-off)

Developer can mark complete when:

1. Domain redirects + canonical/`og:url` consistent on homepage + sample blog post.  
2. Homepage FAQ visible + valid FAQ JSON-LD.  
3. `/llms.txt` and AI-friendly `/robots.txt` live.  
4. Blog template enforces author, dates, Article schema, canonical/OG.  
5. Sitemap lists only the canonical host.  
6. Short QA notes shared with owner (screenshots or curl results of tags).

---

## 10. Out of scope for this website plan

- Reddit karma / commenting tooling  
- LinkedIn posts  
- Directory listings (G2, Capterra, etc.) — separate workstream  
- Product Hunt  
- Training or fine-tuning third-party AI models (not possible via the website CMS)

---

## 11. Questions for developer (reply in hand-off)

1. What CMS / stack is the public site on? (Webflow, WordPress, Next.js, Framer, custom…)  
2. Who controls DNS and redirects?  
3. Is trailing slash already standardized?  
4. Where should new guides be created (CMS collection vs code)?  
5. Any existing SEO plugin that might override canonical/`og:url`?
