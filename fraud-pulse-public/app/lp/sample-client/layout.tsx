import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Sample Client Result | FraudPulse',
    description:
      'One FraudPulse merchant’s dashboard: $56,922 in potential savings by implementing recommended actions, 45.2% of their fraud loss.',
    path: '/lp/sample-client/',
    keywords: 'FraudPulse client result, fraud chargeback savings, Stripe Radar rules, Shopify Flow rules',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function SampleClientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
