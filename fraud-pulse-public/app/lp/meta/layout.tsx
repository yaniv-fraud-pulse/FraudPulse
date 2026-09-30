import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Catch More Fraud Without Replacing Radar | FraudPulse',
    description:
      'Still relying only on Stripe Radar or your Shopify fraud app? FraudPulse looks at your transaction and dispute history and ranks which rules to change - using the tools you already have.',
    path: '/lp/meta/',
    keywords:
      'Stripe Radar, Shopify fraud, FraudPulse free trial, ranked fraud rules, false declines, chargebacks',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function MetaLongLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
