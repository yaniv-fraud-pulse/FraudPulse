# FraudPulse — remaining GEO fixes

**For:** the agent that develops https://www.fraud-pulse.com  
**Score now:** 82 / 100 (re-audited 2026-10-06 18:02 UTC). Target **90**.  
Every other check on these 12 pages already passes. Do not redo earlier work.

**Do not write “Shopify Protect”.** Marketing pages: no person author and no date in these blocks. Blog posts keep `BlogPosting`.

---

## Blocks 90%

Add one JSON-LD block with `"@type": "Article"` on all 12 URLs. Use the page’s live `<h1>` as `headline`. This takes every page from 82 to 91.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PAGE H1",
  "publisher": { "@type": "Organization", "name": "FraudPulse", "url": "https://www.fraud-pulse.com/" }
}
</script>
```

| Page | Still failing |
|---|---|
| `/` | Article schema, comparison `<table>` |
| `/faq` | Article schema, SoftwareApplication schema |
| `/how-it-works` | Article schema, SoftwareApplication schema |
| `/solutions` | Article schema, SoftwareApplication schema |
| `/pricing` | Article schema, SoftwareApplication schema |
| `/about` | Article schema, SoftwareApplication schema |
| `/blog` | Article schema, SoftwareApplication schema |
| `/stack` | Article schema, SoftwareApplication schema |
| `/alternatives/nofraud` | Article schema, SoftwareApplication schema |
| `/alternatives/payment-platform-tools` | Article schema, SoftwareApplication schema |
| `/alternatives/smb-fraud-tools` | Article schema, SoftwareApplication schema |
| `/alternatives/manual-fraud-analyst` | Article schema, SoftwareApplication schema |

---

## Optional — toward 100%

Not required to clear 90 once `Article` is present.

- `/` — add a comparison `<table>`.
- The other 11 pages — add `"@type": "SoftwareApplication"` JSON-LD (home already has it). Keep the existing FAQPage block. One graph per type is fine.
