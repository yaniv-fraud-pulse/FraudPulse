import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Chargeback ratio and Visa VAMP calculator',
  description:
    'Work out your chargeback ratio from the numbers you type and compare it with Visa’s 1.50% VAMP excessive-merchant line.',
  path: '/tools/chargeback-ratio/',
  keywords:
    'chargeback ratio calculator, Visa VAMP calculator, VAMP ratio, TC40, TC15, excessive merchant threshold 1.50%',
});

export default function ChargebackRatioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
