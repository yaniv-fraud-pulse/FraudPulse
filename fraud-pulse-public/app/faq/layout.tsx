import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ | FraudPulse - Chargebacks, Radar, Protect, Flow, Blockify',
  description:
    'Answers to common questions: best Shopify fraud tools, reducing chargebacks, Shopify Protect, Flow, and Blockify vs platforms, friendly vs real fraud, and prevention vs representment.',
  path: '/faq/',
  keywords:
    'FraudPulse FAQ, Stripe Radar rules, Shopify Protect, Shopify Flow, Blockify, reduce chargebacks, false declines, Signifyd alternative',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
