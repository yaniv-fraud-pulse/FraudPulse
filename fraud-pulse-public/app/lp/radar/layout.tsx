import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Stripe Radar Is Blocking Legitimate Customers | FraudPulse',
    description:
      'Do not lower Radar thresholds blindly. FraudPulse shows which Stripe Radar actions catch good customers and ranks the rule changes to make - without replacing Radar.',
    path: '/lp/radar/',
    keywords:
      'Stripe Radar blocking customers, Stripe false declines, Radar false positives, optimize Stripe Radar rules, FraudPulse',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function RadarLpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
