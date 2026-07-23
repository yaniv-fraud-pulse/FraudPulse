import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book a Demo | FraudPulse',
  description:
    'Book a live FraudPulse walkthrough and see fraud rule recommendations on your Stripe or Shopify data.',
  path: '/book-a-demo/',
});

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
