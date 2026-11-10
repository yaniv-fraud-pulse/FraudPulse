'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';
import {
  captureEvent,
  ensurePostHog,
  getUtmProperties,
  posthog,
} from '../lib/posthogClient';
import { isPostHogEnabled } from '../lib/posthog';
import { saveFirstTouchAttribution } from '../lib/adParams';

function PostHogPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!ensurePostHog() || !pathname) return;

    const url = window.location.href;
    if (lastUrl.current === url) return;
    lastUrl.current = url;

    posthog.capture('$pageview', {
      $current_url: url,
      path: pathname,
      ...getUtmProperties(),
    });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    saveFirstTouchAttribution();
    if (!ensurePostHog()) return;

    // Team browsers: visit any page with ?internal=1 once (?internal=0 to undo).
    // Sets the person property the "Internal / Test users" cohort (the test-account filter) matches on.
    const internal = new URLSearchParams(window.location.search).get('internal');
    if (internal === '1') posthog.setPersonProperties({ is_internal: true });
    else if (internal === '0') posthog.setPersonProperties({ is_internal: false });
  }, []);

  if (!isPostHogEnabled) {
    return <>{children}</>;
  }

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageviewTracker />
      </Suspense>
      {children}
    </>
  );
}

export { captureEvent };
