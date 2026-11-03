'use client';

import { TrackedAnchor } from '../../components/TrackedCta';
import { CALENDLY_DEMO_URL } from '../../lib/posthog';

const ctaStyle = {
  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
} as const;

type LpDemoCtaProps = {
  children: React.ReactNode;
  className?: string;
};

export function LpDemoCta({ children, className }: LpDemoCtaProps) {
  return (
    <TrackedAnchor
      event="demo_cta_clicked"
      href={CALENDLY_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={ctaStyle}
    >
      {children}
    </TrackedAnchor>
  );
}
