export const SITE_URL = 'https://www.fraud-pulse.com';

/**
 * Live Organization sameAs — only profiles that return 200.
 * Do not add Medium (deleted 6 Oct).
 */
export const ORGANIZATION_SAME_AS = [
  'https://www.crunchbase.com/organization/fraudpulse',
  'https://www.saashub.com/fraudpulse',
  'https://www.youtube.com/@FraudPulse',
  'https://x.com/FraudPulse',
  'https://www.producthunt.com/products/fraudpulse',
  'https://www.linkedin.com/company/fraudpulse-fraud-analytics',
  'https://www.facebook.com/people/FraudPulse/61594130112237/',
  'https://www.g2.com/products/fraud-pulse/reviews',
  // add AlternativeTo to sameAs when https://alternativeto.net/software/fraudpulse/ returns 200
] as const;

/** Labeled directory links — visible twin of live sameAs (no pending AlternativeTo). */
export const FOOTER_PROFILES = [
  {
    name: 'Crunchbase',
    href: 'https://www.crunchbase.com/organization/fraudpulse',
  },
  {
    name: 'SaaSHub',
    href: 'https://www.saashub.com/fraudpulse',
  },
  {
    name: 'Product Hunt',
    href: 'https://www.producthunt.com/products/fraudpulse',
  },
] as const;

export const FOOTER_SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/fraudpulse-fraud-analytics',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@FraudPulse',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/FraudPulse/61594130112237/',
  },
  {
    name: 'X',
    href: 'https://x.com/FraudPulse',
  },
  {
    name: 'G2',
    href: 'https://www.g2.com/products/fraud-pulse/reviews',
  },
] as const;
