/** PostHog config — token is inlined at build time via next.config `env`. */
export const POSTHOG_PROJECT_TOKEN =
  process.env.POSTHOG_PROJECT_TOKEN?.trim() || '';

export const POSTHOG_HOST =
  process.env.POSTHOG_HOST?.trim() || 'https://us.i.posthog.com';

export const isPostHogEnabled = Boolean(POSTHOG_PROJECT_TOKEN);

/** Cal.com event used on /book-a-demo — set success redirect in Cal dashboard to THANKS_URL. */
export const CAL_DEMO_URL = 'https://cal.com/yaniv-hayun/30min';
export const CAL_DEMO_THANKS_PATH = '/book-a-demo/thanks/';
