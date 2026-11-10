'use client';

import { TrackedAnchor } from '../../components/TrackedCta';
import { APP_SIGNUP_URL } from '../../lib/adParams';

const ctaStyle = {
  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
} as const;

type LpTrialCtaProps = {
  children: React.ReactNode;
  className?: string;
};

export function LpTrialCta({ children, className }: LpTrialCtaProps) {
  return (
    <TrackedAnchor
      event="signup_cta_clicked"
      href={APP_SIGNUP_URL}
      pendingLabel="Opening…"
      className={className}
      style={ctaStyle}
    >
      {children}
    </TrackedAnchor>
  );
}
