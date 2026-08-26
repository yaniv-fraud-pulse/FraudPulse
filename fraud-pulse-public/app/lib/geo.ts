import type { FaqItem } from './homeFaq';

/** “Last updated” dates — bump when page copy materially changes. */
export const PAGE_LAST_UPDATED = {
  home: 'August 26, 2026',
  howItWorks: 'August 26, 2026',
  solutions: 'August 26, 2026',
  pricing: 'August 6, 2026',
  blog: 'August 21, 2026',
} as const;

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/** Cite-friendly product / industry stats used on marketing pages. */
export const GEO_STATS = [
  {
    value: '< 30 min',
    label: 'Get your data analyzed — no code needed',
  },
  {
    value: '14 days',
    label: 'Free trial on every plan — no credit card required',
  },
  {
    value: '15%–50%',
    label: 'Savings on simple rule setup with our AI fraud agent',
  },
  {
    value: '0',
    label: 'Changes to your current tools — we boost them, not replace them',
  },
] as const;
