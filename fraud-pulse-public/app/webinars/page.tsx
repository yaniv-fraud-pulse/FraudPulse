import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Eyebrow, HeroBackdrop } from '../components/Brand';
import { pageMetadata } from '../lib/seo';
import { WEBINARS, webinarPath } from '../lib/webinar';

export const metadata: Metadata = pageMetadata({
  title: 'FraudPulse webinars: chargebacks, fraud rules, and false declines',
  description:
    'Recordings and upcoming FraudPulse webinars on chargebacks, friendly fraud, false declines, and tuning Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect rules.',
  path: '/webinars/',
});

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/New_York',
  }).format(new Date(iso));
}

export default function WebinarsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-10 sm:pt-20 sm:pb-14">
            <Eyebrow>Webinars</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              FraudPulse webinars
            </h1>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] max-w-[760px] mx-auto text-balance text-gray-600">
              Live sessions and recordings on chargebacks, friendly fraud, false declines, and which fraud rules to change.
            </p>
          </div>
        </section>

        <section className="pb-20 sm:pb-28 px-5 sm:px-10 bg-white">
          <ul className="max-w-4xl mx-auto flex flex-col gap-5">
            {WEBINARS.map((w) => {
              const thumb = w.recording ? `https://i.ytimg.com/vi/${w.recording.youtubeId}/hqdefault.jpg` : null;
              return (
                <li key={w.slug}>
                  <Link
                    href={webinarPath(w)}
                    className="group grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-5 rounded-3xl border border-gray-200/80 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]"
                  >
                    {thumb ? (
                      <div className="relative overflow-hidden rounded-2xl bg-[#0b0f17]" style={{ aspectRatio: '16 / 9' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={thumb} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div
                        className="rounded-2xl bg-gradient-to-br from-[#5ba8b4]/15 to-[#7D6BA0]/15"
                        style={{ aspectRatio: '16 / 9' }}
                        aria-hidden
                      />
                    )}
                    <div>
                      <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4] mb-2">
                        {w.recording ? 'Recording' : 'Live webinar'} · {formatDate(w.startsAtIso)}
                      </p>
                      <h2 className="font-bold text-gray-900 text-[1.25rem] mb-2 tracking-[-0.02em] group-hover:text-[#4a96a3] transition-colors">
                        {w.title}
                      </h2>
                      <p className="text-[1rem] leading-[1.65] text-gray-600 line-clamp-3">{w.subtitle}</p>
                      <p className="mt-3 text-[0.9375rem] font-semibold text-[#4a96a3]">
                        {w.recording ? 'Watch the recording →' : 'Register →'}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
