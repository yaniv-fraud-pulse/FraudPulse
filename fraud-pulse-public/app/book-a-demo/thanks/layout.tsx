import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo booked | FraudPulse',
  description: 'Your FraudPulse demo is confirmed.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookADemoThanksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
