import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Adyen RevenueProtect, Stripe Radar, Shopify Flow, and Blockify',
  description:
    'Adyen RevenueProtect, Stripe Radar, Shopify Flow, and Blockify enforce at checkout. FraudPulse ranks which of those rules to change from your chargebacks. It does not replace them.',
  path: '/stack/',
  keywords:
    'FraudPulse Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect, AI fraud analyst, complementary fraud tools',
});

export default function StackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
