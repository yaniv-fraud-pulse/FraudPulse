'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import { Reveal } from '../components/Reveal';
import { captureEvent } from '../components/PostHogProvider';
import { Eyebrow, FrostedBox, HeroBackdrop } from '../components/Brand';
import { CAL_DEMO_THANKS_PATH, CALENDLY_DEMO_URL } from '../lib/posthog';
import { SITE_URL } from '../lib/site';

const BOOK_A_DEMO_GA_ID = 'G-DJW8HBM574';

/** Must also be set in Calendly event → Redirect after booking (see POSTHOG_PLAN.md). */
const CALENDLY_BOOKING_HREF = CALENDLY_DEMO_URL;

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
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <Header />

      <main className="flex-grow overflow-x-clip">

        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-12 sm:pt-20 sm:pb-16">
            <h1 className="font-extrabold text-gray-900 mb-5 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">See FraudPulse</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">on your data</span>
            </h1>
            <p className="text-[1.125rem] max-w-xl mx-auto text-gray-500 anim-fadeUp delay-300">
              Book a 30-minute live walkthrough with Idan Hayon, Co-Founder &amp; CEO
              <span className="block font-bold text-gray-900 mt-1">{" "}No prep required.</span>
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-16 px-5 sm:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-scaleIn">
              <FrostedBox padded={false} className="p-10 sm:p-12 flex flex-col">
                <div className="mb-8">
                  <Eyebrow>What to expect</Eyebrow>
                  <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-gray-900 tracking-[-0.03em]">A focused 30-minute session</h2>
                  <p className="text-base sm:text-lg text-gray-400 mt-2">A focused session tailored to your payment stack and fraud challenges.</p>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  <div className="space-y-6">
                    {demoSteps.map(({ n, text }) => (
                      <div key={n} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ background: 'linear-gradient(135deg, #6bb8c3, #4a96a3)' }}>{n}</span>
                        <p className="text-base sm:text-lg leading-relaxed text-gray-500">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 flex flex-col gap-4">
                    <a
                      href={CALENDLY_BOOKING_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        captureEvent('demo_cta_clicked', {
                          page: '/book-a-demo/',
                          destination: CALENDLY_BOOKING_HREF,
                        })
                      }
                      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full text-base sm:text-lg font-bold transition-all hover:-translate-y-px text-white"
                      style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 20px rgba(91,168,180,0.3)' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book a 30-Minute Demo
                    </a>
                    {/* Calendly confirmation redirect (configure in Calendly): */}
                    <p className="sr-only">
                      After booking, redirect to {SITE_URL}
                      {CAL_DEMO_THANKS_PATH}
                    </p>
                    <div className="text-center">
                      <p className="text-sm sm:text-base text-gray-400">Prefer to send a message instead?{' '}
                        <Link href="/contact/" className="text-[#5ba8b4] hover:underline">Contact us</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </FrostedBox>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
    </>
  );
}
