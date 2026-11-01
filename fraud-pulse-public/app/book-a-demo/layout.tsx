import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book a FraudPulse demo | Ranked rule changes on your data',
  description:
    'Book a 30-minute FraudPulse demo. See ranked Shopify Flow, Blockify, Stripe Radar, or Adyen RevenueProtect rule changes from your chargebacks. It does not replace those tools. 14-day trial, no card.',
  path: '/book-a-demo/',
});

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
