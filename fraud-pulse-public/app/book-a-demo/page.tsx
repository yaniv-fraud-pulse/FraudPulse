'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '../components/Reveal';

const BOOK_A_DEMO_GA_ID = 'G-DJW8HBM574';

const demoSteps = [
  { n: '1', text: 'Live walkthrough of the AI advisor surfacing patterns and recommendations.' },
  { n: '2', text: 'Explain how FraudPulse can help you reduce chargebacks and increase conversions.' },
  { n: '3', text: 'Answer any questions you have about FraudPulse.' },
  { n: '4', text: 'Get a 14-day free trial, no credit card required.' },
];

export default function BookADemo() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${BOOK_A_DEMO_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="book-a-demo-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${BOOK_A_DEMO_GA_ID}');
        `}
      </Script>
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-16 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(165,208,216,0.15) 0%, transparent 60%)' }} />

          <div className="relative max-w-4xl mx-auto text-center">
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-[-0.04em] mb-5 mt-20">
                See FraudPulse{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #7d6ba0 0%, #6455a0 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  on Your Data
                </span>
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-lg max-w-xl mx-auto text-gray-500">
                Book a 30-minute live walkthrough with the FraudPulse team
                <span className="block font-bold text-gray-900 mt-1">{" "}No prep required.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Book a Demo ── */}
        <section className="py-20 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-scaleIn">
              <div className="rounded-2xl p-10 sm:p-12 bg-white border flex flex-col" style={{ borderColor: '#e5e7eb' }}>
                <div className="mb-8">
                  <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-gray-900 tracking-[-0.03em]">What to Expect</h2>
                  <p className="text-base sm:text-lg text-gray-400 mt-2">A focused session tailored to your payment stack and fraud challenges.</p>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  <div className="space-y-6">
                    {demoSteps.map(({ n, text }) => (
                      <div key={n} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ background: 'rgba(125,107,160,0.08)', border: '1px solid rgba(125,107,160,0.25)', color: '#7d6ba0' }}>{n}</span>
                        <p className="text-base sm:text-lg leading-relaxed text-gray-500">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 flex flex-col gap-4">
                    <a
                      href="https://cal.com/yaniv-hayun/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[10px] text-base sm:text-lg font-bold transition-all hover:-translate-y-px text-white"
                      style={{ background: 'linear-gradient(135deg, #7d6ba0 0%, #6455a0 100%)', boxShadow: '0 4px 20px rgba(125,107,160,0.3)' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book a 30-Minute Demo
                    </a>
                    <div className="text-center">
                      <p className="text-sm sm:text-base text-gray-400">Prefer to send a message instead?{' '}
                        <Link href="/contact/" className="text-[#5ba8b4] hover:underline">Contact us</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
    </>
  );
}
