import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About FraudPulse | Fraud Intelligence from Your Transaction Data',
  description:
    'FraudPulse is the AI fraud analyst for Shopify, Stripe, and Adyen merchants. It ranks Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect rule changes from your chargebacks. It does not replace those tools.',
  path: '/about/',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
