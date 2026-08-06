/** Payment / commerce sources FraudPulse connects to for transaction data. */
export const DATA_SOURCES = [
  { name: 'Shopify', slug: 'shopify', color: '95BF47', category: 'E-Commerce' },
  { name: 'Stripe', slug: 'stripe', color: '635BFF', category: 'Payments' },
  { name: 'PayPal', slug: 'paypal', color: '00457C', category: 'Payments' },
  { name: 'Adyen', slug: 'adyen', color: '0ABF53', category: 'Payments' },
] as const;

export const DATA_SOURCES_LABEL = 'Shopify, Stripe, PayPal, and Adyen';

/** One-line product positioning for metadata, FAQs, and AI crawlers. */
export const PRODUCT_TAGLINE =
  'We analyze your transaction data and deliver concrete actions and rules to reduce chargebacks and friendly fraud.';
