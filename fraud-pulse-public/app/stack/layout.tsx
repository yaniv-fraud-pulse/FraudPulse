import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Using FraudPulse with Radar, Flow, Blockify, and RevenueProtect',
  description:
    'FraudPulse is the AI analyst on the stack you already run. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect enforce or automate at checkout. Ranked rule and action changes - not a replacement.',
  path: '/stack/',
  keywords:
    'FraudPulse Stripe Radar, Shopify Flow, Blockify, Adyen RevenueProtect, AI fraud analyst, complementary fraud tools',
});

export default function StackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
