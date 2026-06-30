'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../components/Reveal';

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-20%] left-[-5%] w-[700px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(125,107,160,0.12) 0%, transparent 60%)' }} />

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24">
            <div className="max-w-[860px] mx-auto text-center">
              <Reveal animation="anim-fadeUp" delay={75}>
                <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[3rem] sm:text-[4rem] lg:text-[4.5rem]">
                  From Data to{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Actionable Insights
                  </span>
                </h1>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={150}>
                <p className="text-[1.25rem] sm:text-[1.5rem] leading-[1.75] max-w-[680px] mx-auto text-gray-500">
                  Make the tools you already pay for work harder
                </p>
              </Reveal>

              {/* FraudPulse → Shopify Protect & Stripe Radar */}
              <Reveal animation="anim-fadeUp" delay={225}>
                <div className="mt-12 sm:mt-16 max-w-xl mx-auto">
                  <div
                    className="mx-auto flex flex-col items-center gap-3 rounded-[16px] px-8 py-6 border w-[220px] anim-glowPulse"
                    style={{
                      background: 'linear-gradient(135deg, rgba(91,168,180,0.12) 0%, rgba(91,168,180,0.04) 100%)',
                      borderColor: 'rgba(91,168,180,0.45)',
                      boxShadow: '0 8px 32px rgba(91,168,180,0.12)',
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center p-2.5 bg-white border border-[#5ba8b4]/25">
                      <Image
                        src="/logo-light.svg"
                        alt="FraudPulse"
                        width={28}
                        height={28}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[0.9375rem] font-bold text-gray-900">FraudPulse</span>
                    <span className="text-[0.7rem] text-[#5ba8b4] uppercase tracking-wider font-semibold">Insights out</span>
                  </div>

                  <svg
                    className="w-full h-[72px] sm:h-[80px] -mt-1"
                    viewBox="0 0 400 80"
                    fill="none"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5ba8b4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#5ba8b4" stopOpacity="1" />
                        <stop offset="100%" stopColor="#5ba8b4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="flow-path-split" d="M200 4 L200 28 L72 76" />
                    <path className="flow-path-split" d="M200 4 L200 28 L328 76" />
                    <path className="flow-path-split-animated" d="M200 4 L200 28 L72 76" />
                    <path className="flow-path-split-animated" d="M200 4 L200 28 L328 76" style={{ animationDelay: '0.9s' }} />
                  </svg>

                  <div className="grid grid-cols-2 gap-4 sm:gap-8 -mt-1">
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-[#5ba8b4] anim-arrowBounceDown" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <div
                        className="flex flex-col items-center gap-2.5 rounded-[14px] px-4 py-5 border w-full bg-white card-hover"
                        style={{ borderColor: '#e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                      >
                        <div className="w-10 h-10 rounded-[10px] bg-gray-50 border border-gray-100 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://cdn.simpleicons.org/shopify/95BF47" alt="" width={22} height={22} className="object-contain" />
                        </div>
                        <span className="text-[0.8125rem] sm:text-[0.875rem] font-semibold text-gray-800 text-center leading-tight">Shopify Protect</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-[#5ba8b4] anim-arrowBounceDown" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden style={{ animationDelay: '0.7s' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <div
                        className="flex flex-col items-center gap-2.5 rounded-[14px] px-4 py-5 border w-full bg-white card-hover"
                        style={{ borderColor: '#e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                      >
                        <div className="w-10 h-10 rounded-[10px] bg-gray-50 border border-gray-100 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://cdn.simpleicons.org/stripe/635BFF" alt="" width={22} height={22} className="object-contain" />
                        </div>
                        <span className="text-[0.8125rem] sm:text-[0.875rem] font-semibold text-gray-800 text-center leading-tight">Stripe Radar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Video embed ── */}
        <section className="py-12 sm:py-20 px-5 sm:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
          <Reveal animation="anim-fadeUp" delay={150} className="text-center mb-8">
                <p className="text-[1.25rem] sm:text-[1.5rem] leading-[1.75] max-w-[680px] mx-auto text-gray-500">
                  Watch how FraudPulse connects to your payment data, runs AI analysis, and delivers ready-to-implement fraud rules in minutes.
                </p>
              </Reveal>
            <Reveal animation="anim-scaleIn" delay={0}>
              <div
                className="w-full rounded-[20px] overflow-hidden border"
                style={{
                  borderColor: '#e5e7eb',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
                  aspectRatio: '16 / 9',
                }}
              >
                
                <iframe
                  src="https://embed.app.guidde.com/playbooks/nCQR61BXRRS2S45ZaZbXMi?mode=videoOnly&autoplay=true"
                  title="How FraudPulse Works"
                  allow="fullscreen"
                 
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Works with Shopify Protect & Stripe Radar ── */}
        <section
          className="py-16 sm:py-24 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(180deg, #0a0c10 0%, #111827 50%, #0f1419 100%)' }}
        >
          <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16 text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <div>
                <p className="flex items-center justify-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-5 text-[#5ba8b4]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5ba8b4] shrink-0" aria-hidden />
                  What we are
                </p>
                <p className="font-bold text-white text-[2.375rem] sm:text-[2.625rem] leading-[1.45] tracking-[-0.02em] mb-4">
                  <span className="font-extrabold">Shopify Protect</span> and <span className="font-extrabold">Stripe Radar</span> block transactions.
                </p>
                <p className="text-[1.625rem] sm:text-[1.625rem] leading-[1.7] text-gray-400">
                  FraudPulse tells you how to make them work even better.
                </p>
              </div>
            </Reveal>

            <Reveal animation="anim-fadeUp" delay={150}>
              <div>
                <p className="flex items-center justify-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-5 text-gray-500">
                  <span className="w-2.5 h-2.5 rounded-full border border-gray-500 shrink-0" aria-hidden />
                  What we&apos;re not
                </p>
                <p className="font-bold text-white text-[1.375rem] sm:text-[1.625rem] leading-[1.45] tracking-[-0.02em]">
                  We&apos;re not here to replace your fraud tools.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Steps summary ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-12 text-[2.75rem] sm:text-[3.25rem]">
                Four Steps to Fraud Intelligence
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Connect Your Data',
                  description: 'Upload a CSV or connect via API integration with Stripe, Braintree, Adyen, PayPal, or Shopify.',
                  color: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                },
                {
                  step: '02',
                  title: 'AI Onboarding',
                  description: 'Answer a few questions about your business. FraudPulse tailors its analysis to your industry and transaction profile.',
                  color: 'linear-gradient(135deg, #7D6BA0 0%, #6a5890 100%)',
                },
                {
                  step: '03',
                  title: 'Monitor Your Dashboard',
                  description: 'Track approval rates, chargebacks, and fraud exposure in real-time — filtered by card brand, country, and date.',
                  color: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                },
                {
                  step: '04',
                  title: 'Get AI Recommendations',
                  description: (
                    <>
                      Receive ranked fraud rules with fraud capture rates and false positive scores so your team acts with confidence. Apply recommendations directly in{' '}
                      <span className="font-bold text-white">Shopify Protect</span> and{' '}
                      <span className="font-bold text-white">Stripe Radar</span>.
                    </>
                  ),
                  color: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                },
              ].map(({ step, title, description, color }, i) => (
                <Reveal key={step} animation="anim-fadeUp" delay={([0, 75, 150, 225] as const)[i] ?? 0}>
                  <div
                    className="rounded-[20px] p-8 sm:p-10 h-full"
                    style={{ background: color, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
                  >
                    <p className="text-white/60 text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">{step}</p>
                    <h3 className="font-bold text-white text-[1.25rem] mb-3">{title}</h3>
                    <p className="text-white/85 text-[1rem] leading-[1.7]">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.75rem] sm:text-[3.25rem]">
                Ready to See It on Your Data?
              </h2>
              <p className="text-[1.0625rem] leading-[1.7] max-w-[480px] mx-auto mb-10 text-gray-400">
                Book a live walkthrough and see how FraudPulse turns your payment data into actionable fraud intelligence.
              </p>
              <Link href="/book-a-demo/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white transition-all hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 24px rgba(91,168,180,0.35)', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
                Book a Demo
              </Link>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
