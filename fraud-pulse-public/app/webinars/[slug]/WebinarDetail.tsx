'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '../../components/Reveal';
import ProductVideo from '../../components/ProductVideo';
import { Eyebrow, FrostedBox, HeroBackdrop } from '../../components/Brand';
import { useClientValue } from '../../hooks/useClientValue';
import { formatWebinarLocalWhen, getWebinar, webinarPath, type WebinarLocalWhen } from '../../lib/webinar';

// Cached per start time so every read returns the same object, as useClientValue requires.
const localWhenCache = new Map<string, WebinarLocalWhen>();
function getLocalWhen(startsAtIso: string) {
  let v = localWhenCache.get(startsAtIso);
  if (!v) {
    v = formatWebinarLocalWhen(startsAtIso);
    localWhenCache.set(startsAtIso, v);
  }
  return v;
}

export default function WebinarDetail({ slug }: { slug: string }) {
  // The server page only renders this for known slugs.
  const w = getWebinar(slug)!;
  const localWhen = useClientValue<WebinarLocalWhen | null>(() => getLocalWhen(w.startsAtIso), null);
  const rec = w.recording;

  const details = [
    { label: 'Date', value: localWhen?.dateLabel ?? w.fallbackDateLabel },
    {
      label: 'Time',
      value: localWhen ? `${localWhen.timeLabel} · ${localWhen.timezoneLabel}` : w.fallbackTimeLabel,
    },
    { label: 'Duration', value: rec ? `${Math.round(rec.durationSeconds / 60)} minutes (recording)` : w.durationLabel },
    { label: 'Format', value: rec ? 'Recording on YouTube' : 'Google Meet (link sent by email)' },
  ];

  const info = (
    <>
      <Reveal animation="anim-fadeUp" delay={150}>
        <div className="flex flex-col gap-3 mb-10">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur px-4 py-3"
            >
              <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-gray-400 w-20 shrink-0 pt-0.5">
                {label}
              </span>
              <span className="text-[0.9375rem] font-medium text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal animation="anim-fadeUp" delay={225}>
        <h2 className="font-bold text-gray-900 text-[1.25rem] mb-4 tracking-[-0.02em]">
          {rec ? 'What we covered' : 'What we’ll dig into together'}
        </h2>
        <ul className="flex flex-col gap-3 mb-10">
          {w.agenda.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#5ba8b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[1.0625rem] text-gray-600 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal animation="anim-fadeUp" delay={300}>
        <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-gray-400">Speakers</p>
        <div className="flex flex-col gap-4">
          {w.speakers.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={s.image}
                  alt={`${s.name} - ${s.role}, FraudPulse`}
                  fill
                  className="rounded-full object-cover object-top"
                  style={{ border: '2px solid rgba(61,143,160,0.3)', boxShadow: '0 2px 10px rgba(61,143,160,0.12)' }}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-[0.975rem] leading-tight">{s.name}</p>
                <p className="text-[0.8125rem] text-gray-400 mt-0.5">{s.role}</p>
                <a
                  href={s.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-[0.75rem] font-medium text-[#5ba8b4] hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip pt-8 pb-12 sm:pb-16 px-5 sm:px-10">
          <HeroBackdrop />

          <div className="relative max-w-6xl mx-auto pt-12 sm:pt-16">
            <Link href="/webinars/" className="inline-block mb-6 text-[0.9375rem] font-semibold text-[#4a96a3] hover:underline">
              ← All webinars
            </Link>

            {rec ? (
              <>
                <Reveal animation="anim-fadeUp" delay={75}>
                  <div className="max-w-4xl">
                    <Eyebrow>Webinar recording</Eyebrow>
                    <h1 className="font-extrabold text-gray-900 tracking-[-0.045em] leading-[1.08] mb-5 text-[2.25rem] sm:text-[3rem]">
                      {w.title}
                    </h1>
                    <p className="text-[1.125rem] leading-[1.75] text-gray-500 mb-10">{w.subtitle}</p>
                  </div>
                </Reveal>
                <Reveal animation="anim-scaleIn" delay={150}>
                  <div className="max-w-5xl mx-auto mb-14">
                    <ProductVideo page={webinarPath(w)} videoId={rec.youtubeId} title={rec.title} playLabel="Play recording" />
                  </div>
                </Reveal>
                <div className="max-w-3xl">{info}</div>
              </>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div>
                  <Reveal animation="anim-fadeUp" delay={75}>
                    <Eyebrow>Free live webinar</Eyebrow>
                    <h1 className="font-extrabold text-gray-900 tracking-[-0.045em] leading-[1.08] mb-5 text-[2.25rem] sm:text-[3rem]">
                      {w.title}
                    </h1>
                    <p className="text-[1.125rem] leading-[1.75] text-gray-500 mb-8">{w.subtitle}</p>
                  </Reveal>
                  {info}
                </div>

                <Reveal animation="anim-scaleIn" delay={150}>
                  <div id="register" className="sticky top-28">
                    <FrostedBox padded={false} className="overflow-hidden p-4">
                      <Script src={w.hubspot.scriptSrc} strategy="lazyOnload" />
                      <div
                        className="hs-form-frame"
                        data-region={w.hubspot.region}
                        data-form-id={w.hubspot.formId}
                        data-portal-id={w.hubspot.portalId}
                      />
                    </FrostedBox>
                  </div>
                </Reveal>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
