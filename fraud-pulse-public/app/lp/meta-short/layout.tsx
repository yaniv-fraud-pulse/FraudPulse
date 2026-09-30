import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Try FraudPulse Free | Ranked Fraud Rule Changes',
    description:
      'Stripe Radar and Shopify fraud tools are a solid foundation, but they cannot tell you which rule to change. FraudPulse ranks actions from your real data. Try it free.',
    path: '/lp/meta-short/',
    keywords: 'FraudPulse free trial, Stripe Radar, Shopify fraud tools, ranked fraud rules',
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function MetaShortLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
