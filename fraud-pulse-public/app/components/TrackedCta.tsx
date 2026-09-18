'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';
import { captureEvent } from './PostHogProvider';

export type CtaEvent = 'signup_cta_clicked' | 'demo_cta_clicked';

function trackCta(event: CtaEvent, destination: string) {
  captureEvent(event, {
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    destination,
  });
}

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: CtaEvent;
};

export function TrackedLink({ event, href, onClick, ...rest }: TrackedLinkProps) {
  const destination = typeof href === 'string' ? href : href.pathname ?? '';
  return (
    <Link
      href={href}
      onClick={(e) => {
        trackCta(event, destination);
        onClick?.(e);
      }}
      {...rest}
    />
  );
}

type TrackedAnchorProps = ComponentProps<'a'> & {
  event: CtaEvent;
};

export function TrackedAnchor({ event, href, onClick, ...rest }: TrackedAnchorProps) {
  return (
    <a
      href={href}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        trackCta(event, href ?? '');
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
