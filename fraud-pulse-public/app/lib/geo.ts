import type { FaqItem } from './homeFaq';

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

/** Must match live /pricing/ - recheck before changing. */
export const PRICING_FACT =
  'FraudPulse Professional is $199/month, or $159/month billed annually (about 20% savings). Pay as you go starts at $0.01 per transaction for up to 20K transactions a month, and every plan includes a 14-day free trial with no credit card required.';

/** Cite-friendly product / industry stats used on marketing pages. */
export const GEO_STATS = [
  {
    value: '< 30 min',
    label: 'Get your data analyzed - no code needed',
  },
  {
    value: '14 days',
    label: 'Free trial on every plan - no credit card required',
  },
  {
    value: '15%–50%',
    label: 'Savings on simple rule setup with our AI fraud agent',
  },
  {
    value: '0',
    label: 'Changes to your current tools - we boost them, not replace them',
  },
] as const;

export type ComparisonTableData = {
  caption: string;
  otherLabel: string;
  rows: { label: string; fraudPulse: string; other: string }[];
};

export const ANALYST_VS_SCREENING_TABLE: ComparisonTableData = {
  caption: 'FraudPulse vs screening and guarantee vendors',
  otherLabel: 'Screening / guarantee vendors (NoFraud, FraudLabs Pro, ClearSale, SEON, Subuno)',
  rows: [
    {
      label: 'Role',
      fraudPulse: 'AI analyst: classify chargebacks and rank the next rule changes',
      other: 'Score, review, or guarantee orders at checkout',
    },
    {
      label: 'Checkout',
      fraudPulse: 'Does not take over checkout',
      other: 'Often sits in the approval or review path',
    },
    {
      label: 'You keep',
      fraudPulse: 'Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect',
      other: 'Their own screening flow',
    },
    {
      label: 'Output',
      fraudPulse: 'Ranked rules with capture rate and false-positive %',
      other: 'Approve / review / decline',
    },
  ],
};

export const ANALYST_VS_ENFORCEMENT_TABLE: ComparisonTableData = {
  caption: 'FraudPulse vs Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect',
  otherLabel: 'Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect',
  rows: [
    {
      label: 'Role',
      fraudPulse: 'AI analyst: decides which rule or workflow to change next',
      other: 'Enforcement and automation at checkout',
    },
    {
      label: 'Input',
      fraudPulse: 'Your Shopify, Stripe, or Adyen transactions, chargebacks, and disputes',
      other: 'Live orders and payments as they happen',
    },
    {
      label: 'Output',
      fraudPulse: 'Ranked rule changes, each with estimated fraud-capture rate and false-positive %',
      other: 'Block, hold, tag, review, or allow',
    },
    {
      label: 'Checkout',
      fraudPulse: 'Not in the approval path',
      other: 'In the approval path - keep them on',
    },
    {
      label: 'Price',
      fraudPulse: 'From $0.01 per transaction, or $199/month Professional ($159/month billed annually)',
      other: 'Already in the stack you run - nothing to replace',
    },
  ],
};
