import type { Metadata } from 'next';
import { SITE_URL } from '../lib/site';
import { WEBINAR } from '../lib/webinar';

export const metadata: Metadata = {
  title: `${WEBINAR.title} | FraudPulse`,
  description: WEBINAR.subtitle,
  alternates: {
    canonical: '/webinar/',
  },
  openGraph: {
    title: WEBINAR.title,
    description: WEBINAR.subtitle,
    url: `${SITE_URL}/webinar/`,
    siteName: 'FraudPulse',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: WEBINAR.title,
    description: WEBINAR.subtitle,
  },
};

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
