/** PostHog config — token is inlined at build time via next.config `env`. */
export const POSTHOG_PROJECT_TOKEN =
  process.env.POSTHOG_PROJECT_TOKEN?.trim() || '';

export const POSTHOG_HOST =
  process.env.POSTHOG_HOST?.trim() || 'https://us.i.posthog.com';

export const isPostHogEnabled = Boolean(POSTHOG_PROJECT_TOKEN);

/** Calendly event for Idan Hayon (CEO) on /book-a-demo. Set confirmation redirect in Calendly to THANKS_URL. */
export const CALENDLY_DEMO_URL = 'https://calendly.com/idan-apis-solutions/30min';
export const CAL_DEMO_THANKS_PATH = '/book-a-demo/thanks/';
