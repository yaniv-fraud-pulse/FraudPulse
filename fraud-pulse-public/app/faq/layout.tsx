import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ | FraudPulse — Chargebacks, Radar, Shopify Protect',
  description:
    'Answers to common questions: Does FraudPulse replace Stripe Radar or Shopify Protect? How does it reduce chargebacks and false declines? Alternatives to Signifyd for small merchants.',
  path: '/faq/',
  keywords:
    'FraudPulse FAQ, Stripe Radar rules, Shopify Protect, reduce chargebacks, false declines, Signifyd alternative',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
