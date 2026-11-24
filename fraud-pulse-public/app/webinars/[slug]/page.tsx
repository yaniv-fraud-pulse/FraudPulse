import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '../../lib/seo';
import { WEBINARS, getWebinar, isoDuration, webinarPath } from '../../lib/webinar';
import WebinarDetail from './WebinarDetail';

export function generateStaticParams() {
  return WEBINARS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWebinar(slug);
  if (!w) return {};
  const base = pageMetadata({
    title: `${w.title} | FraudPulse`,
    description: w.subtitle,
    path: webinarPath(w),
  });
  // Registration-only pages stay out of the index; recordings are indexable.
  return w.recording ? base : { ...base, robots: { index: false, follow: true } };
}

export default async function WebinarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWebinar(slug);
  if (!w) notFound();

  return (
    <>
      {w.recording ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: w.recording.title,
            description: w.subtitle,
            thumbnailUrl: [`https://i.ytimg.com/vi/${w.recording.youtubeId}/hqdefault.jpg`],
            uploadDate: w.recording.uploadDate,
            duration: isoDuration(w.recording.durationSeconds),
            contentUrl: `https://www.youtube.com/watch?v=${w.recording.youtubeId}`,
            embedUrl: `https://www.youtube.com/embed/${w.recording.youtubeId}`,
            publisher: { '@type': 'Organization', name: 'FraudPulse', url: 'https://fraud-pulse.com' },
          }}
        />
      ) : null}
      <WebinarDetail slug={w.slug} />
    </>
  );
}
