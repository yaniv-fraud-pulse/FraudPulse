import { SITE_URL } from './site';

/** Update these before launch. */
export const WEBINAR = {
  id: 'fraudpulse-webinar-2026-08-04',
  title: 'How to Reduce Chargebacks on Stripe & Shopify — Live Webinar',
  subtitle:
    'Join the FraudPulse team for a live session on tuning fraud rules, cutting false declines, and making Shopify Protect and Stripe Radar work harder for you.',
  dateLabel: 'August 4, 2026',
  /** ISO start in Israel time (UTC+3) — adjust if needed */
  startsAtIso: '2026-08-04T10:00:00+03:00',
  endsAtIso: '2026-08-04T11:00:00+03:00',
  durationLabel: '45 minutes + Q&A',
  timezoneLabel: 'Israel Time (IDT, UTC+3)',
  meetUrl: 'https://meet.google.com/xxx-xxxx-xxx',
  speakers: [
    { name: 'Idan Hayon', role: 'Co-founder & CEO' },
  ],
  agenda: [
    'Where chargebacks and false declines actually come from in Stripe & Shopify',
    'How to audit your fraud rules in under 30 minutes',
    'Live look at prioritized rule recommendations with impact estimates',
    'Q&A — bring your chargeback questions',
  ],
} as const;

export const WEBINAR_API_ENDPOINT =
  'https://fraudpulse-api-961740448824.us-central1.run.app/api/v1/webinar/register';

export type WebinarRegistrationPayload = {
  webinar_id: string;
  name: string;
  email: string;
  company: string;
  job_title?: string;
  consent: boolean;
  page_url: string;
};

export function buildRegistrationPayload(
  form: Omit<WebinarRegistrationPayload, 'webinar_id' | 'page_url' | 'consent'> & {
    consent: boolean;
  },
): WebinarRegistrationPayload {
  return {
    webinar_id: WEBINAR.id,
    name: form.name.trim(),
    email: form.email.trim().toLowerCase(),
    company: form.company.trim(),
    job_title: form.job_title?.trim() || undefined,
    consent: form.consent,
    page_url: `${SITE_URL}/webinar/`,
  };
}
