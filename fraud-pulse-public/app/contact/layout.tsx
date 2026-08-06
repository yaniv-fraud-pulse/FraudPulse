import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact FraudPulse',
  description: 'Contact FraudPulse for demos, sales, and support questions about fraud intelligence, chargebacks, and friendly fraud.',
  path: '/contact/',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
