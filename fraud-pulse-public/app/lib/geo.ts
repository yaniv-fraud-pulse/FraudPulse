import type { FaqItem } from './homeFaq';

/** Visible “Last updated” dates — bump when page copy materially changes. */
export const PAGE_LAST_UPDATED = {
  howItWorks: 'August 6, 2026',
  solutions: 'August 6, 2026',
  pricing: 'August 6, 2026',
  blog: 'August 6, 2026',
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
    value: 'Days',
    label: 'Time to first rule recommendations after connecting your transaction data',
  },
  {
    value: '14 days',
    label: 'Free trial on every plan — full access, no credit card required',
  },
  {
    value: '1.5%',
    label: 'Visa VAMP excessive-merchant threshold merchants must stay under in 2026',
  },
  {
    value: '20%',
    label: 'Savings vs monthly when you pay annually on Professional',
  },
] as const;
