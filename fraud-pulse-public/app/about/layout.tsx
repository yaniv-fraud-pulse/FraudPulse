import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About FraudPulse | Fraud Intelligence for Stripe & Shopify',
  description:
    'Learn about FraudPulse and the founders behind AI-powered fraud rule recommendations for Shopify and Stripe merchants.',
  path: '/about/',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
