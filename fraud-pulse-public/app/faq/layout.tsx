import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ | FraudPulse - Chargebacks, Radar, Shopify Protect',
  description:
    'Answers to common questions: best Shopify fraud tools, reducing chargebacks, Shopify Protect vs platforms, friendly vs real fraud, and prevention vs representment.',
  path: '/faq/',
  keywords:
    'FraudPulse FAQ, Stripe Radar rules, Shopify Protect, reduce chargebacks, false declines, Signifyd alternative',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
