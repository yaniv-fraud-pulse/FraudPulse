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
    ensurePostHog();
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
