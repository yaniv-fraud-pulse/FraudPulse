'use client';

import { useEffect, useState } from 'react';
import { TrackedAnchor } from '../../components/TrackedCta';
import { trackMetaEvent } from '../../lib/metaPixel';

export const SIGNUP_URL = 'https://app.fraud-pulse.com';

const ctaStyle = {
  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
} as const;

type LpTrialCtaProps = {
  children: React.ReactNode;
  className?: string;
};

export function trialHrefFromLocation(): string {
  if (typeof window === 'undefined') return SIGNUP_URL;
  const params = window.location.search;
  return params ? `${SIGNUP_URL}${params}` : SIGNUP_URL;
}

export function LpTrialCta({ children, className }: LpTrialCtaProps) {
  const [href, setHref] = useState(SIGNUP_URL);

  useEffect(() => {
    setHref(trialHrefFromLocation());
  }, []);

  return (
    <TrackedAnchor
      event="signup_cta_clicked"
      href={href}
      className={className}
      style={ctaStyle}
      onClick={() => trackMetaEvent('Lead', { content_name: 'free_trial' })}
    >
      {children}
    </TrackedAnchor>
  );
}
