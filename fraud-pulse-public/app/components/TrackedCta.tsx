'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { ComponentProps, MouseEvent } from 'react';
import { withAdParams } from '../lib/adParams';
import { trackMetaEvent } from '../lib/metaPixel';
import { captureEvent } from './PostHogProvider';

export type CtaEvent = 'signup_cta_clicked' | 'demo_cta_clicked' | 'sample_report_cta_clicked';

/** How long a tapped CTA shows its pending label and ignores repeat taps. */
const PENDING_MS = 3000;

function trackCta(event: CtaEvent, destination: string) {
  captureEvent(event, {
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    destination,
  });
  if (event === 'signup_cta_clicked') {
    trackMetaEvent('Lead', { content_name: 'free_trial' });
  }
}

/**
 * Forwards the visitor's ad parameters on links to app signup (all of them) and
 * Calendly (UTM tags only). Other links are returned unchanged.
 */
export function useAdHref(href: string): string {
  const [resolved, setResolved] = useState(href);

  useEffect(() => {
    let host = '';
    try {
      host = new URL(href).hostname;
    } catch {
      // Relative link: nothing to forward.
    }
    if (host === 'app.fraud-pulse.com') setResolved(withAdParams(href, 'all'));
    else if (host === 'calendly.com') setResolved(withAdParams(href, 'utm'));
    else setResolved(href);
  }, [href]);

  return resolved;
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
  /** Shown after a tap while repeat taps are ignored, so slow phones show the tap landed. */
  pendingLabel?: string;
};

export function TrackedAnchor({ event, href, onClick, pendingLabel, children, ...rest }: TrackedAnchorProps) {
  const resolvedHref = useAdHref(href ?? '');
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!pending) return;
    const timer = window.setTimeout(() => setPending(false), PENDING_MS);
    // Back button restores the page from bfcache with the label still pending.
    const reset = (e: PageTransitionEvent) => {
      if (e.persisted) setPending(false);
    };
    window.addEventListener('pageshow', reset);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pageshow', reset);
    };
  }, [pending]);

  return (
    <a
      href={href === undefined ? undefined : resolvedHref}
      aria-busy={pending || undefined}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        if (pending) {
          e.preventDefault();
          return;
        }
        if (pendingLabel) setPending(true);
        trackCta(event, resolvedHref);
        onClick?.(e);
      }}
      {...rest}
    >
      {pending && pendingLabel ? pendingLabel : children}
    </a>
  );
}
