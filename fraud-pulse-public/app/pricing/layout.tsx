import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Pricing | FraudPulse',
  description:
    'FraudPulse pricing for merchants who connect Shopify, Stripe, PayPal, or Adyen — usage-based and Professional plans with fraud rule recommendations and chargeback insights.',
  path: '/pricing/',
  keywords:
    'FraudPulse pricing, fraud prevention pricing, chargeback reduction cost, friendly fraud tools pricing',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
