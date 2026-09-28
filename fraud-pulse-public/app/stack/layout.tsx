import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Using FraudPulse with Radar, Protect, Flow, Blockify, and Adyen',
  description:
    'FraudPulse is the AI analyst on the stack you already run. Stripe Radar, Shopify Protect, Shopify Flow, and Blockify enforce or automate at checkout. Adyen is a data source. Ranked rule changes - not a replacement.',
  path: '/stack/',
  keywords:
    'FraudPulse Stripe Radar, Shopify Protect rules, Shopify Flow fraud, Blockify rules, Adyen fraud data, AI fraud analyst, complementary fraud tools',
});

export default function StackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
