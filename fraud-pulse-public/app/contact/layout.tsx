import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact FraudPulse | Talk to the AI fraud analyst team',
  description:
    'Contact FraudPulse about ranked Shopify Flow, Blockify, Stripe Radar, and Adyen RevenueProtect rule changes from your chargebacks. It does not replace those tools. The team replies personally.',
  path: '/contact/',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
