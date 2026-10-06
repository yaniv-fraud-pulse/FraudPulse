'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Eyebrow, FrostedBox, HeroBackdrop } from '../components/Brand';
import { WEBINAR, formatWebinarLocalWhen, type WebinarLocalWhen } from '../lib/webinar';

export default function WebinarPage() {
  const [localWhen, setLocalWhen] = useState<WebinarLocalWhen | null>(null);

  useEffect(() => {
    setLocalWhen(formatWebinarLocalWhen());
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip pt-8 pb-12 sm:pb-16 px-5 sm:px-10">
          <HeroBackdrop />

          <div className="relative max-w-6xl mx-auto pt-12 sm:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <Reveal animation="anim-fadeUp" delay={75}>
                  <Eyebrow>Free live webinar</Eyebrow>
                  <h1 className="font-extrabold text-gray-900 tracking-[-0.045em] leading-[1.08] mb-5 text-[2.25rem] sm:text-[3rem]">
                    {WEBINAR.title}
                  </h1>
                  <p className="text-[1.125rem] leading-[1.75] text-gray-500 mb-8">
                    {WEBINAR.subtitle}
                  </p>
                </Reveal>

                <Reveal animation="anim-fadeUp" delay={150}>
                  <div className="flex flex-col gap-3 mb-10">
                    {[
                      {
                        label: 'Date',
                        value: localWhen?.dateLabel ?? 'August 6, 2026',
                      },
                      {
                        label: 'Time',
                        value: localWhen
                          ? `${localWhen.timeLabel} · ${localWhen.timezoneLabel}`
                          : '2:00 PM · EDT',
                      },
                      { label: 'Duration', value: WEBINAR.durationLabel },
                      { label: 'Format', value: 'Google Meet (link sent by email)' },
                    ].map(({ label, value }) => (
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
                    What we&apos;ll dig into together
                  </h2>
                  <ul className="flex flex-col gap-3 mb-10">
                    {WEBINAR.agenda.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#5ba8b4]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[1.0625rem] text-gray-600 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal animation="anim-fadeUp" delay={300}>
                  <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-gray-400">
                    Speakers
                  </p>
                  <div className="flex flex-col gap-4">
                    {WEBINAR.speakers.map((s) => (
                      <div key={s.name} className="flex items-center gap-4">
                        <div className="relative w-14 h-14 flex-shrink-0">
                          <Image
                            src={s.image}
                            alt={`${s.name} - ${s.role}, FraudPulse`}
                            fill
                            className="rounded-full object-cover object-top"
                            style={{
                              border: '2px solid rgba(61,143,160,0.3)',
                              boxShadow: '0 2px 10px rgba(61,143,160,0.12)',
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-[0.975rem] leading-tight">
                            {s.name}
                          </p>
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
              </div>

              {/* Right: HubSpot form */}
              <Reveal animation="anim-scaleIn" delay={150}>
                <div id="register" className="sticky top-28">
                  <FrostedBox padded={false} className="overflow-hidden p-4">
                    <Script src={WEBINAR.hubspot.scriptSrc} strategy="lazyOnload" />
                    <div
                      className="hs-form-frame"
                      data-region={WEBINAR.hubspot.region}
                      data-form-id={WEBINAR.hubspot.formId}
                      data-portal-id={WEBINAR.hubspot.portalId}
                    />
                  </FrostedBox>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
