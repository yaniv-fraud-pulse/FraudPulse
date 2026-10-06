# FraudPulse public site — GEO fix brief

**For:** the agent that develops https://www.fraud-pulse.com  
**Read the live site first.** Product facts below are from https://www.fraud-pulse.com/ (home, `/stack/`, `/solutions/`, `/how-it-works/`, `/faq/`, `/pricing/`, `/about/`) on 2026-10-06.  
**Headline:** GEO extractability is **72 / 100** (re-audited 2026-10-06 on the live page list). Target **90**. Crawler access is already fine.

**Do not write “Shopify Protect” anywhere.** That product is not in the FraudPulse stack. Shopify merchants connect **Shopify data**; rule changes go into **Shopify Flow** and **Blockify** (and **Stripe Radar** if checkout is on Stripe).

You publish HTML/schema on the live site. Recheck live pricing before you type a dollar amount.

---

## 1. What the product actually is

FraudPulse is an **AI fraud analyst** (site line: “your personal fraud advisor”).

Two layers — do not mix them:

| Layer | What | Tools |
|---|---|---|
| **Data you connect** | Transactions, chargebacks, disputes | **Shopify, Stripe, or Adyen** |
| **Rules you change** | Enforcement / automation already at checkout | **Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect** |

Job: classify chargebacks by type (friendly fraud, card testing, ATO, identity theft, fulfillment, unrecognized charges) → ranked **AI Actions** (specific rules) with estimated **fraud-capture rate** and **false-positive %**. Merchant applies the change in Radar / Flow / Blockify / RevenueProtect. FraudPulse does **not** sit in the approval path.

It is **not**:

- Shopify Protect (does not exist in this product)
- a Radar / Flow / Blockify / RevenueProtect replacement
- Signifyd / Riskified / Forter
- a checkout screener (NoFraud, FraudLabs Pro, ClearSale, SEON, Subuno)
- representment (Chargeflow, Chargebacks911, Midigator, Justt, Ethoca, Verifi)

Site metaphor (already on `/alternatives/payment-platform-tools/`): Radar / Flow / Blockify / RevenueProtect are the **engine**. FraudPulse is **navigation**.

Product surfaces on the homepage: Monitoring Dashboard, Chargeback Tracking, Fraud Prevention Actions (AI Actions), Fraud Pattern Detection (classifier), Advanced Analytics, Data Sanity checks. Connect via API, CSV, or native integration. No engineering required. Recommendations in days.

Founders (already on `/about/`): Idan Hayon (CEO), Yaniv Hayun (CTO). Company: Fraud Pulse Ltd.

**Pricing (recheck on ship day — `/pricing/` still says Last updated August 6, 2026):**

- Pay as you go: **$0.01 / transaction**, up to 20K/month
- Professional: **$199/month** or **$159/month** billed annually
- 14-day free trial, no credit card
- Site claim: 15%–50% savings on simple rule setup; connect in &lt; 30 min

---

## 2. Why GEO is 72 (and what already exists)

The 72% average is **twelve 200 OK pages** from the live site (no 404s in the score). Date/author checks apply to blog posts only.

| Path | HTTP | Score | Fix |
|---|---|---|---|
| `/` | 200 | 73 | Add FAQPage JSON-LD. Copy is already correct (Radar, Flow, Blockify, RevenueProtect). |
| `/how-it-works` | 200 | 73 | Add FAQPage JSON-LD. Citation sections **already live** — do not paste old Protect copy. |
| `/solutions` | 200 | 82 | Structure OK. FAQ “Are Shopify Flow and Blockify enough?” **already live**. |
| `/stack/` | 200 | 64 | Add a comparison `<table>` + a true `$` or `%`. Canonical stack page — do not regress copy. |
| `/faq/` | 200 | 64 | Add a `<table>` + a true `$` or `%` in body. Answers already use Flow/Blockify/Radar. |
| `/pricing/` | 200 | 82 | Do not add a last-updated stamp. Leave prices as they are unless product changed. |
| `/blog` | 200 | 64 | FAQPage JSON-LD + one comparison `<table>` using the live stack names. Dates/authors live on **posts**, not this index. |
| `/about/` | 200 | **45** | Biggest drag. Add `<h1>`, table, stat, FAQPage. **No** last-updated stamp and **no** byline. Founder bios stay. |
| `/alternatives/nofraud/` | 200 | 82 | Live. Do not regress. |
| `/alternatives/payment-platform-tools/` | 200 | 73 | Add a true `$` or `%` if missing. |
| `/alternatives/smb-fraud-tools/` | 200 | 82 | Live. Do not regress. |
| `/alternatives/manual-fraud-analyst/` | 200 | 82 | Live. Do not regress. |
| `/faqs` | **404** | — | 301 to `/faq/` |
| `/support` | **404** | — | 301 to `/faq/` or `/contact/` |
| `/blog/hidden-job-babysitting-status` | **404** | — | Leave 404. Wrong product (Leanback). |

Crawlers already allowed. `/llms.txt`, `/pricing.md`, `/pricing.txt` are 200.

**Do not re-add citation blocks that the live site already has.** `/how-it-works/`, `/solutions/`, `/faq/`, `/stack/`, and `/alternatives/*` already answer the Fix Queue queries with Flow / Blockify / Radar / RevenueProtect. The Sep-14 kit drafts that said Shopify Protect are **wrong** — ignore them.

Compare pages that **already exist** (use these URLs, do not invent `/compare/nofraud`):

- `/alternatives/manual-fraud-analyst/`
- `/alternatives/nofraud/`
- `/alternatives/smb-fraud-tools/`
- `/alternatives/payment-platform-tools/`

`/alternatives/chargebacks911/` is still 404. Representment vs prevention is **already** on `/how-it-works/` and `/faq/`. Prefer linking those. Only create `/alternatives/chargebacks911/` if you want a dedicated Chargebacks911 URL; if you do, copy must match §1 (prevention/rule advice, not representment, no Shopify Protect).

---

## 3. Priority 1 — extractability (this is what moves 72 → ~90)

Each check is ~7–9 points. Marketing pages are scored without date/author (those stay on blog posts only). `/about` at 45 is the thin page.

### 3.0 Dates and author — blog posts only

Keep **publish date** and **author** only on individual blog posts (`/blog/<slug>/`).

On a post, show them in the article header as normal (visible to readers and to crawlers):

- Date: `October 6, 2026` (or the real publish / updated date)
- Author: `By Idan Hayon` or `By Yaniv Hayun` (whoever wrote it), with `rel="author"`
- JSON-LD `BlogPosting` with `datePublished` / `dateModified` and `author`

Example:

```html
<p class="post-meta">
  <time datetime="2026-10-06">October 6, 2026</time>
  · <span rel="author">By Yaniv Hayun</span>
</p>
```

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "POST TITLE",
  "datePublished": "2026-10-06",
  "dateModified": "2026-10-06",
  "author": { "@type": "Person", "name": "Yaniv Hayun" }
}
</script>
```

**Do not** add last-updated, dateModified, byline, or author JSON-LD on marketing pages: `/`, `/faq/`, `/how-it-works/`, `/solutions/`, `/pricing/`, `/about/`, `/stack/`, `/alternatives/*`, or the `/blog/` index.

If those pages currently show “Last updated …”, **remove that line**. `/about/` founder names in the bios are fine; that is not a page byline.

### 3.1 `/about` (45 → ~80 with H1 + table + stat + FAQPage)

Skipping last-updated and author on this page leaves those GEO checks off. Still do the rest:

1. Visible `<h1>`: `About FraudPulse` (or keep a single H1 that names FraudPulse).
2. Do **not** add last updated or a byline (visible or hidden).
3. One true statistic from live `/pricing/` (e.g. Professional `$199/month` or 14-day trial) — only if still true that day.
4. Comparison table:

| | FraudPulse | Screening / guarantee vendors (NoFraud, FraudLabs Pro, ClearSale, SEON, Subuno) |
|---|---|---|
| Role | AI analyst: classify chargebacks and rank the next rule changes | Score, review, or guarantee orders at checkout |
| Checkout | Does not take over checkout | Often sits in the approval or review path |
| You keep | Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect | Their own screening flow |
| Output | Ranked rules with capture rate and false-positive % | Approve / review / decline |

5. FAQPage JSON-LD:

- Q: What does FraudPulse do?
- A: FraudPulse is an AI fraud analyst for Shopify, Stripe, and Adyen merchants. Connect transaction and chargeback data from those platforms. It classifies chargebacks by type and ranks specific Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect rule changes, each with an estimated fraud-capture rate and false-positive percentage. It does not replace those tools and does not take over checkout.

### 3.2 FAQPage JSON-LD (merge, do not duplicate)

Add or merge `"@type": "FAQPage"` on `/`, `/how-it-works/`, `/blog`.  
`/faq/`, `/solutions/`, `/pricing/` already have FAQPage — merge only if you add questions. One FAQPage graph per page.

Visible heading must include **FAQ** or **Frequently asked**.

Use questions that already appear on the live FAQ, for example:

- Does FraudPulse replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect?
- Are Shopify Flow and Blockify enough for fraud prevention?

Never use “Is Shopify Protect enough?”.

### 3.3 `/faq` (64 → ~86)

- Add one `<table>` (reuse the table in 3.1 or the live `/solutions/` category table).
- Keep a true `$` or `%` in body (trial, Professional price, or the 15%–50% claim if you still stand behind it).

### 3.4 `/blog` index (64 → ~86)

- FAQPage JSON-LD: what the blog covers (tuning Radar / Flow / Blockify / RevenueProtect from chargeback mix — not screening).
- One comparison `<table>` with those four enforcement tools vs FraudPulse-as-analyst.
- No page-level last-updated or byline on the index. Dates and authors belong on each post (3.0).

### 3.5 Home `/`

Keep `SoftwareApplication` schema. Add FAQPage. Do not remove SoftwareApplication.

### 3.6 404 hygiene

| URL | Do this |
|---|---|
| `/faqs` `/faqs/` | **301** → `/faq/` |
| `/support` `/support/` | **301** → `/faq/` or `/contact/` |
| `/compare/nofraud/` | **301** → `/alternatives/nofraud/` (that page is live) |
| `/blog/hidden-job-babysitting-status` | Leave 404 |

### 3.7 `/pricing`

Do not add or keep a last-updated stamp. Do not change prices unless product has changed.

---

## 4. Copy rules for any new or edited section

Write like the live `/stack/` and `/faq/`:

- Connect **Shopify, Stripe, or Adyen**.
- Change **Radar, Flow, Blockify, or RevenueProtect**.
- Shopify question → **Flow and Blockify**, plus Radar if they use Stripe. Never Protect.
- Signifyd / Riskified / Forter = full platforms / guarantee. Complementary, not “we replace them.”
- NoFraud set = screening. Complementary.
- Chargeflow / Chargebacks911 = representment. FraudPulse is prevention + rule advice only.

If you add an example AI Action, label it as an example. Pattern: `Shopify Flow: hold order when AVS mismatch AND new shipping address` with example capture/FP rates. Do not present example rates as a live merchant result.

### JSON-LD recipe

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does FraudPulse replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Those products remain the enforcement or automation layer at checkout. FraudPulse is the AI analyst: it classifies chargebacks and ranks specific rule or workflow changes with estimated fraud-capture and false-positive impact. You keep Radar, Flow, Blockify, and RevenueProtect."
      }
    }
  ]
}
</script>
```

---

## 5. `/llms.txt`

After this pass, confirm `/llms.txt` lists live canonical URLs (including `/stack/` and `/alternatives/nofraud/`). Descriptions must use Radar / Flow / Blockify / RevenueProtect — never Shopify Protect.

---

## 6. Out of scope

- Do not post on Reddit or X.
- Do not invent GSC rankings or merchant case-study capture rates.
- Do not add Shopify Protect.
- Do not create `/blog/hidden-job-babysitting-status`.
- Do not change Leanback.live.
- Do not overwrite live `/how-it-works/`, `/solutions/`, `/faq/`, or `/stack/` with the old Sep-14 Protect drafts.
- Dates and author belong **only on blog posts**. Do not add last-updated stamps or bylines (visible or hidden) on marketing pages.

---

## 7. Ship order

1. `/about` H1 + table + stat + FAQPage. No date/byline.
2. 301 `/faqs` → `/faq/`. 301 `/support` → `/faq/` or `/contact/`. 301 `/compare/nofraud/` → `/alternatives/nofraud/`.
3. FAQPage on `/`, `/how-it-works/`, `/blog`. Table + number on `/faq` and `/blog`. Strip “Last updated …” from marketing pages.
4. Confirm `/llms.txt`. Keep date + author on each blog post only.
5. Optional: `/alternatives/chargebacks911/` only if you want that URL; otherwise keep prevention-vs-representment on `/how-it-works/` and `/faq/`.

---

## 8. Acceptance

Touched URLs:

- [ ] 200 or 301 to the www trailing-slash canonical
- [ ] One `<h1>` (visible)
- [ ] Marketing pages: **no** last-updated stamp and **no** byline (visible or hidden)
- [ ] Blog posts only: visible date + author, plus `BlogPosting` JSON-LD (`datePublished` / `dateModified` + `author`)
- [ ] ≥300 words
- [ ] A true `%` or `$`
- [ ] A `<table>` (home optional)
- [ ] One FAQPage JSON-LD
- [ ] canonical + og:url
- [ ] Zero occurrences of “Shopify Protect”
- [ ] Stack named as Radar, Flow, Blockify, RevenueProtect; data named as Shopify, Stripe, Adyen
              
GEO target: average extractability **≥ 90** on the 12 live URLs in `brand.json` → `geo.pages`.