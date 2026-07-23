import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Pricing | FraudPulse',
  description:
    'FraudPulse pricing for Shopify and Stripe merchants — usage-based and Professional plans with fraud rule recommendations and chargeback insights.',
  path: '/pricing/',
  keywords:
    'FraudPulse pricing, fraud prevention pricing, Stripe Radar optimization cost, Shopify Protect optimization',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
