'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import GeoStatStrip, { PageUpdated } from '../components/GeoBits';
import { GEO_STATS, PAGE_LAST_UPDATED, faqPageJsonLd } from '../lib/geo';
import { howItWorksFaqs } from '../lib/pageFaqs';

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={faqPageJsonLd(howItWorksFaqs)} />
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
                <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.75rem] sm:text-[3.75rem] lg:text-[4.25rem]">
                  From Transaction Data to{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Rules That Cut Chargebacks
                  </span>
                </h1>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={150}>
                <p className="text-[1.125rem] sm:text-[1.375rem] leading-[1.75] max-w-[680px] mx-auto text-gray-500 mb-2">
                  Get actionable fraud insights in days — not analytics reports you never act on.
                </p>
                <p className="text-[1rem] sm:text-[1.125rem] leading-[1.75] max-w-[620px] mx-auto text-gray-400 mb-4">
                  Connect data from <strong className="text-gray-600">Shopify</strong>, <strong className="text-gray-600">Stripe</strong>, <strong className="text-gray-600">PayPal</strong>, or <strong className="text-gray-600">Adyen</strong>. We analyze transactions, chargebacks, and friendly fraud — then recommend the rules and actions to change.
                </p>
                <PageUpdated date={PAGE_LAST_UPDATED.howItWorks} />
              </Reveal>

              {/* Data sources → FraudPulse → recommended rules */}
              <Reveal animation="anim-fadeUp" delay={225}>
                <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
                  <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                    Transaction data in
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
                    {[
                      { name: 'Shopify', slug: 'shopify', color: '95BF47' },
                      { name: 'Stripe', slug: 'stripe', color: '635BFF' },
                      { name: 'PayPal', slug: 'paypal', color: '00457C' },
                      { name: 'Adyen', slug: 'adyen', color: '0ABF53' },
                    ].map(({ name, slug, color }) => (
                      <div
                        key={name}
                        className="flex flex-col items-center gap-2 rounded-[14px] px-3 py-4 border bg-white card-hover"
                        style={{ borderColor: '#e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                      >
                        <div className="w-10 h-10 rounded-[10px] bg-gray-50 border border-gray-100 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width={22} height={22} className="object-contain" />
                        </div>
                        <span className="text-[0.8125rem] font-semibold text-gray-800 text-center leading-tight">{name}</span>
                      </div>
                    ))}
                  </div>

                  <svg className="w-full h-[56px] my-1" viewBox="0 0 400 56" fill="none" aria-hidden>
                    <path className="flow-path-split" d="M200 4 L200 52" />
                    <path className="flow-path-split-animated" d="M200 4 L200 52" />
                  </svg>

                  <div
                    className="mx-auto flex flex-col items-center gap-3 rounded-[16px] px-8 py-6 border w-[240px] anim-glowPulse"
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
                    <span className="text-[0.7rem] text-[#5ba8b4] uppercase tracking-wider font-semibold">Rules &amp; actions out</span>
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

        {/* ── Data in → rules out ── */}
        <section
          className="py-16 sm:py-24 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(180deg, #0a0c10 0%, #111827 50%, #0f1419 100%)' }}
        >
          <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16 text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <div>
                <p className="flex items-center justify-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-5 text-[#5ba8b4]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5ba8b4] shrink-0" aria-hidden />
                  Works with your payment data
                </p>
                <p className="font-bold text-white text-[2rem] sm:text-[2.375rem] leading-[1.45] tracking-[-0.02em] mb-4">
                  Your stack processes payments. <span className="font-extrabold">FraudPulse</span> tells you which rules to change.
                </p>
                <p className="text-[1.25rem] sm:text-[1.375rem] leading-[1.7] text-gray-400">
                  Reduce chargebacks and friendly fraud with ranked recommendations — without migrating into another fraud prevention tool.
                </p>
              </div>
            </Reveal>

            <Reveal animation="anim-fadeUp" delay={150}>
              <div>
                <p className="flex items-center justify-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-5 text-gray-500">
                  <span className="w-2.5 h-2.5 rounded-full border border-gray-500 shrink-0" aria-hidden />
                  Works with your stack
                </p>
                <p className="font-bold text-white text-[1.375rem] sm:text-[1.625rem] leading-[1.45] tracking-[-0.02em]">
                  Keep Shopify, Stripe, PayPal, or Adyen — and your fraud prevention tools. We help you use the data better.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Steps summary ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-3 text-[2.75rem] sm:text-[3.25rem]">
                How It Works
              </h2>
              <p className="text-center text-[1.0625rem] text-gray-500 max-w-xl mx-auto mb-12">
                From connecting your store to implementing live rule changes — in four clear steps.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Connect Transaction Data',
                  description: 'Connect Shopify, Stripe, PayPal, or Adyen in minutes via API, CSV upload, or native integration. No engineering work required.',
                  color: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                },
                {
                  step: '02',
                  title: 'We Analyze Your Fraud Patterns',
                  description: 'FraudPulse analyzes your transactions, chargebacks, and friendly fraud patterns to identify what is driving disputes and false declines.',
                  color: 'linear-gradient(135deg, #7D6BA0 0%, #6a5890 100%)',
                },
                {
                  step: '03',
                  title: 'Receive Prioritized Rule Changes',
                  description: (
                    <>
                      You receive a ranked list of rules and actions with estimated revenue and chargeback impact — so your team can act with confidence.
                    </>
                  ),
                  color: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                },
                {
                  step: '04',
                  title: 'Implement & Track Improvements',
                  description: (
                    <>
                      Apply recommended rules in your existing payment stack, then track improvements in chargebacks, friendly fraud, and approval rates over time.
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

        {/* ── FAQ ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-3 text-[2.5rem] sm:text-[3rem]">
                Frequently asked questions
              </h2>
              <p className="text-center text-[1.0625rem] text-gray-500 max-w-xl mx-auto mb-10">
                How FraudPulse turns your transaction data into ranked rules and actions that reduce chargebacks and friendly fraud.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={howItWorksFaqs} />
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.75rem] sm:text-[3.25rem]">
                See It on Your Transaction Data
              </h2>
              <p className="text-[1.0625rem] leading-[1.7] max-w-[480px] mx-auto mb-10 text-gray-400">
                Book a walkthrough and see the exact rules and actions FraudPulse would recommend — reduce chargebacks and friendly fraud without replacing your fraud prevention tools.
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
