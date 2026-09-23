import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';
import { WEBINAR } from '../lib/webinar';

export const metadata: Metadata = pageMetadata({
  title: `${WEBINAR.title} | FraudPulse`,
  description: WEBINAR.subtitle,
  path: '/webinar/',
});

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
