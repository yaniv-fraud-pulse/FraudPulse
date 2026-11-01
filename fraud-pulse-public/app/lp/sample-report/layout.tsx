import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Sample Fraud Rule Report | FraudPulse',
    description:
      'See an example FraudPulse report with made-up store data: ranked rule changes, estimated fraud caught, and good orders affected. No signup needed.',
    path: '/lp/sample-report/',
    keywords: 'FraudPulse sample report, ranked fraud rules, Stripe Radar rules, Shopify Flow rules',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function SampleReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
