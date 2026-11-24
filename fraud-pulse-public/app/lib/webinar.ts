export type WebinarRecording = {
  youtubeId: string;
  /** Title as published on YouTube. */
  title: string;
  /** ISO publish date from YouTube (used in VideoObject JSON-LD). */
  uploadDate: string;
  durationSeconds: number;
};

export type Webinar = {
  slug: string;
  title: string;
  subtitle: string;
  /** Canonical start. Shown in each visitor's local timezone. */
  startsAtIso: string;
  endsAtIso: string;
  durationLabel: string;
  /** Fallback labels for the static HTML before the client formats local time. */
  fallbackDateLabel: string;
  fallbackTimeLabel: string;
  hubspot: {
    portalId: string;
    formId: string;
    region: string;
    scriptSrc: string;
  };
  speakers: readonly { name: string; role: string; image: string; linkedIn: string }[];
  agenda: readonly string[];
  /** Set once the recording is on YouTube; the page then shows the video instead of the form. */
  recording?: WebinarRecording;
};

/** All webinars, newest first. Add new ones at the top. */
export const WEBINARS: readonly Webinar[] = [
  {
    slug: 'chargebacks-friendly-fraud-fraud-rules',
    title:
      'Fraud Management Webinar: Chargebacks, Friendly Fraud & Rules That Actually Help',
    subtitle:
      "An open conversation for online merchants who want to compare notes on the fraud and chargeback challenges they're actually dealing with. We'll bring some starting points around common friction areas (tuning fraud rules from transaction data, false declines, reducing friendly fraud), but the real value is hearing what's working - and what isn't.",
    // 2:00 PM Eastern (EDT on this date).
    startsAtIso: '2026-08-06T14:00:00-04:00',
    endsAtIso: '2026-08-06T14:30:00-04:00',
    durationLabel: '30 minutes + Q&A',
    fallbackDateLabel: 'August 6, 2026',
    fallbackTimeLabel: '2:00 PM · EDT',
    hubspot: {
      portalId: '246448181',
      formId: '2a819781-1590-46b2-aa13-fe6ce46ca1d7',
      region: 'na2',
      scriptSrc: 'https://js-na2.hsforms.net/forms/embed/246448181.js',
    },
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
      "How other merchants are approaching fraud rule audits - what's worked, what's been a waste of time",
      "Open discussion: what's the hardest part of fraud management right now for you?",
      'Bring your specific questions, edge cases, and chargeback headaches.',
    ],
    recording: {
      youtubeId: 'IrCA5s8tS_A',
      title: 'Stripe Radar Rules Explained: How to Cut Fraud Without Blocking Sales',
      uploadDate: '2026-08-07T08:23:17-07:00',
      durationSeconds: 1989,
    },
  },
];

export function getWebinar(slug: string): Webinar | undefined {
  return WEBINARS.find((w) => w.slug === slug);
}

export function webinarPath(w: Pick<Webinar, 'slug'>): string {
  return `/webinars/${w.slug}/`;
}

/** ISO 8601 duration (PT33M9S) for VideoObject JSON-LD. */
export function isoDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  return `PT${m}M${sec}S`;
}

export type WebinarLocalWhen = {
  dateLabel: string;
  timeLabel: string;
  timezoneLabel: string;
};

/** Format webinar start in the visitor's local timezone (call from the client). */
export function formatWebinarLocalWhen(
  startsAtIso: string,
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
