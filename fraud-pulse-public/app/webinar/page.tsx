'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { WEBINAR, formatWebinarLocalWhen, type WebinarLocalWhen } from '../lib/webinar';

export default function WebinarPage() {
  const [localWhen, setLocalWhen] = useState<WebinarLocalWhen | null>(null);

  useEffect(() => {
    setLocalWhen(formatWebinarLocalWhen());
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 px-5 sm:px-10 bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div
            className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(165,208,216,0.18) 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto pt-12 sm:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              {/* Left: details */}
              <div>
                <Reveal animation="anim-fadeUp" delay={75}>
                  <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                    Free live webinar
                  </p>
                  <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.25rem] sm:text-[3rem]">
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
                        className="flex items-start gap-3 rounded-[12px] border bg-[#f8f9fa] px-4 py-3"
                        style={{ borderColor: '#e5e7eb' }}
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
                            alt={`${s.name} — ${s.role}, FraudPulse`}
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
                <div
                  id="register"
                  className="rounded-2xl p-8 sm:p-10 bg-white border sticky top-28"
                  style={{
                    borderColor: '#e5e7eb',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <div className="mb-7">
                    <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-gray-900 tracking-[-0.03em]">
                      Reserve your seat
                    </h2>
                    <p className="text-base text-gray-400 mt-2">
                      Free to join · Confirmation + Meet link by email
                    </p>
                  </div>

                  <Script src={WEBINAR.hubspot.scriptSrc} strategy="lazyOnload" />
                  <div
                    className="hs-form-frame"
                    data-region={WEBINAR.hubspot.region}
                    data-form-id={WEBINAR.hubspot.formId}
                    data-portal-id={WEBINAR.hubspot.portalId}
                  />
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
