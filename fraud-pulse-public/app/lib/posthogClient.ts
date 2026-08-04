'use client';

import posthog from 'posthog-js';
import {
  POSTHOG_HOST,
  POSTHOG_PROJECT_TOKEN,
  isPostHogEnabled,
} from './posthog';

let didInit = false;

/** Idempotent client init — safe to call before every capture. */
export function ensurePostHog(): boolean {
  if (!isPostHogEnabled || typeof window === 'undefined') return false;
  if (didInit || posthog.__loaded) {
    didInit = true;
    return true;
  }

  const onFraudPulseDomain = window.location.hostname.endsWith('fraud-pulse.com');

  posthog.init(POSTHOG_PROJECT_TOKEN, {
    api_host: POSTHOG_HOST,
    person_profiles: 'always',
    capture_pageview: false,
    capture_pageleave: true,
    persistence: 'localStorage+cookie',
    ...(onFraudPulseDomain
      ? { cross_subdomain_cookie: true, cookie_domain: '.fraud-pulse.com' }
      : {}),
  });

  didInit = true;
  return true;
}

export function getUtmProperties(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export function captureEvent(
  event: string,
  properties?: Record<string, string | number | boolean | undefined | null>,
) {
  if (!ensurePostHog()) return;
  posthog.capture(event, {
    ...getUtmProperties(),
    ...properties,
  });
}

export { posthog };
