import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Pricing | FraudPulse',
  description:
    'FraudPulse is $0.01 per transaction or $199/month Professional ($159 billed annually), with a 14-day trial. It ranks Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect changes. It does not replace those tools.',
  path: '/pricing/',
  keywords:
    'FraudPulse pricing, fraud prevention pricing, chargeback reduction cost, friendly fraud tools pricing',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
