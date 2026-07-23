import { SITE_URL } from './site';

/** Update these before launch. */
export const WEBINAR = {
  id: 'fraudpulse-webinar-2026-08-04',
  title:
    'Fraud Management Webinar for Stripe Merchants: Chargebacks, False Declines & Other Common Pain Points',
  subtitle:
    "An open conversation for online merchants using Stripe who want to compare notes on the fraud and chargeback challenges they're actually dealing with. We'll bring some starting points around common friction areas (tuning fraud rules, false declines, getting more out of Stripe Radar), but the real value is hearing what's working — and what isn't.",
  /** Canonical start: 2:00 PM Eastern (EDT on this date). Shown in each visitor's local timezone. */
  startsAtIso: '2026-08-06T14:00:00-04:00',
  endsAtIso: '2026-08-06T14:30:00-04:00',
  durationLabel: '30 minutes + Q&A',
  meetUrl: 'https://meet.google.com/xxx-xxxx-xxx',
  speakers: [
    {
      name: 'Idan Hayon',
      role: 'Co-founder & CEO',
      image: '/idan.jpeg',
      linkedIn: 'https://www.linkedin.com/in/idan-hayon/',
    },
  ],
  agenda: [
    'Where chargebacks and false declines are actually coming from for your store',
    "How other merchants are approaching fraud rule audits — what's worked, what's been a waste of time",
    "Open discussion: what's the hardest part of fraud management right now for you?",
    'Bring your specific questions, edge cases, and chargeback headaches.',
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

export type WebinarLocalWhen = {
  dateLabel: string;
  timeLabel: string;
  timezoneLabel: string;
};

/** Format webinar start in the visitor's local timezone (call from the client). */
export function formatWebinarLocalWhen(
  startsAtIso: string = WEBINAR.startsAtIso,
  timeZone?: string,
): WebinarLocalWhen {
  const date = new Date(startsAtIso);
  const resolvedZone =
    timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateLabel = new Intl.DateTimeFormat(undefined, {
    timeZone: resolvedZone,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);

  const timeLabel = new Intl.DateTimeFormat(undefined, {
    timeZone: resolvedZone,
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);

  const timezoneLabel =
    new Intl.DateTimeFormat(undefined, {
      timeZone: resolvedZone,
      timeZoneName: 'short',
    })
      .formatToParts(date)
      .find((part) => part.type === 'timeZoneName')?.value ?? resolvedZone;

  return { dateLabel, timeLabel, timezoneLabel };
}
