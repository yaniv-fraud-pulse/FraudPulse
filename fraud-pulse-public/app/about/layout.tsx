import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About FraudPulse | Fraud Intelligence from Your Transaction Data',
  description:
    'Learn about FraudPulse and the founders behind AI-powered rules and actions that reduce chargebacks and friendly fraud — for merchants on Shopify, Stripe, PayPal, and Adyen.',
  path: '/about/',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
