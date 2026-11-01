import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Yaniv Hayun | FraudPulse Co-Founder and CTO',
  description:
    'Yaniv Hayun is co-founder and CTO of FraudPulse, the AI fraud analyst that ranks Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect rule changes. It does not replace those tools.',
  path: '/about/',
  keywords: 'Yaniv Hayun, Yaniv Hayun FraudPulse, Yaniv Hayun CTO, who is Yaniv Hayun',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
