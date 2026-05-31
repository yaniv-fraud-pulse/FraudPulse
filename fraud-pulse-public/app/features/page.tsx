'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';

const steps = [
  {
    number: '01',
    tag: 'AI Onboarding',
    title: 'Onboard with the FraudPulse AI Assistant',
    description: 'When you first log in, FraudPulse asks a few simple questions about your business, industry, transaction volume, and payment flows to better understand your risk environment. This helps tailor the analysis and recommendations to your business context from day one.',
    details: [
      'Conversational onboarding — no technical setup required',
      'Industry-specific fraud model configuration',
      'Personalized risk thresholds based on your business type',
      'Live in minutes, not days',
    ],
  },
  {
    number: '02',
    tag: 'Data',
    title: 'Connect Your Payment & Chargeback Data',
    description: 'FraudPulse imports your transaction history, chargeback records, and dispute data, then validates the data quality before analysis begins.',
    details: [
      'Connect via API, CSV upload, or native integrations',
      'Automatic Data Sanity Check on all imported data',
      'Historical data analysis from day one',
      'Filter by Issuer (Card Brand) and Billing Country',
    ],
  },
  {
    number: '03',
    tag: 'Dashboard',
    title: 'Monitor Your Live Dashboard',
    description: 'Monitor approval rates, chargebacks, fraud exposure, and transaction trends from one centralized dashboard. Identify where fraud is increasing, where legitimate customers are being blocked, and how performance changes over time.',
    details: [
      'Fraud vs Non-Fraud Cases bar chart',
      'Chargeback Reason Breakdown visualization',
      'Incoming Chargebacks by Daily/Weekly bucket',
      'Projected Chargebacks cohort analysis',
    ],
  },
  {
    number: '04',
    tag: 'AI Actions',
    title: 'Run AI Analysis & Get Action Items',
    description: 'The AI Actions module generates specific, ranked recommendations with fraud capture rates and false positive scores — so your team can act with confidence.',
    details: [
      'AI Summary with risk level badge (Low / Medium / High)',
      'Key insights on top-performing rules and blind spots',
      'Recommended Rules with Fraud Rate, False Positive %, and Ranking',
      'Full Report PDF download for your risk committee',
    ],
  },
];

const integrations = [
  { name: 'Stripe',    category: 'Payment Processor', slug: 'stripe' },
  { name: 'Braintree', category: 'Payment Processor', slug: 'braintree' },
  { name: 'Adyen',     category: 'Payment Platform',  slug: 'adyen' },
  { name: 'PayPal',    category: 'Payment Platform',  slug: 'paypal' },
  { name: 'Shopify',   category: 'E-Commerce Online Store',        slug: 'shopify' },
];



export default function Features() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-0 px-5 sm:px-10 bg-white" style={{ minHeight: 420 }}>
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-20%] right-[-5%] w-[700px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(165,208,216,0.15) 0%, transparent 60%)' }} />

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24">
            <div className="max-w-[640px]">
              <Reveal animation="anim-fadeUp" delay={0}>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                  How It Works
                </p>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={75}>
                <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem]">
                  From Onboarding to{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 50%, #5ba8b4 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    AI Insights in Minutes
                  </span>
                </h1>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={150}>
                <p className="text-[1.0625rem] leading-[1.75] max-w-[520px] text-gray-500">
                  FraudPulse combines real-time fraud monitoring with an AI Assistant that helps businesses understand chargebacks, approval loss, transaction risk, and fraud exposure from one centralized platform.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-2xl mx-auto flex flex-col gap-16 sm:gap-24">
            {steps.map((step) => (
              <Reveal key={step.number} animation="anim-fadeUp" delay={0}>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.02em] mb-3 text-[1.375rem] sm:text-[1.625rem]">
                  {step.title}
                </h2>
                <p className="text-[0.9375rem] leading-[1.75] mb-5 text-gray-500">
                  {step.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {step.details.map((detail, di) => (
                    <li key={detail} className="flex items-start gap-3 anim-fadeUp"
                      style={{ animationDelay: `${di * 60}ms` }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: 'rgb(61,143,160)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[0.875rem] leading-[1.6] text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Integrations ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <div className="text-center mb-12">
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">
                  Integrations
                </p>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-3 text-[1.75rem] sm:text-[2.25rem]">
                  Connect FraudPulse to Your Existing Payment Stack
                </h2>
                <p className="text-[0.9375rem] leading-[1.7] max-w-[480px] mx-auto text-gray-500">
                  Connect directly through supported integrations or simply upload CSV exports from your existing systems.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((int, i) => (
                <Reveal key={int.name} animation="anim-scaleIn" delay={([0,75,150,225,300] as const)[i] ?? 0}>
                  <div
                    className="flex flex-col items-center gap-2 rounded-[14px] p-6 border w-[140px] bg-white card-hover"
                    style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    <div className="w-10 h-10 rounded-[10px] bg-gray-50 border border-gray-100 flex items-center justify-center mb-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://cdn.simpleicons.org/${int.slug}`}
                        alt={`${int.name} logo`}
                        width={22} height={22}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[0.875rem] font-semibold text-gray-800">{int.name}</span>
                    <span className="text-[0.75rem] text-gray-400">{int.category}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal animation="anim-fadeIn" delay={300}>
              <p className="text-center mt-8 text-[0.875rem] text-gray-400">
                Don&apos;t see your platform?{' '}
                <Link href="/contact/" className="hover:underline text-[#5ba8b4]">
                  Contact us
                </Link>
                {' '}— we build custom integrations.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-0">
          <div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-[#f8f9fa]">
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-3 text-[2rem] sm:text-[2.75rem]">
                See FraudPulse Working on Your Own Data
              </h2>
              <p className="text-[0.9375rem] leading-[1.7] max-w-[420px] mx-auto mb-10 text-gray-500">
                Book a live walkthrough and see how FraudPulse analyzes payment data, identifies fraud patterns, and generates actionable recommendations for your business.
              </p>
              <Link href="/contact/"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[0.9375rem] font-bold text-white transition-all hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 24px rgba(91,168,180,0.35)', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
