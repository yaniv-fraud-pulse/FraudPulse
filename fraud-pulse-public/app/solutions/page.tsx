'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';

const steps = [
  {
    number: '01',
    tag: 'Connect',
    title: 'Connect Stripe / Shopify',
    description: 'Connect your Stripe or Shopify store in minutes — no engineering work required. FraudPulse imports your transaction history, chargeback records, and dispute data, then validates data quality before analysis begins.',
    details: [
      'Connect via API, CSV upload, or native integrations',
      'Stripe Radar & Shopify Protect supported out of the box',
      'Automatic Data Sanity Check on all imported data',
      'Historical data analysis from day one',
    ],
  },
  {
    number: '02',
    tag: 'Analysis',
    title: 'We Analyze Your Fraud Patterns',
    description: 'FraudPulse analyzes your fraud and transaction patterns to identify the root causes of chargebacks and false declines — so you know exactly what to fix.',
    details: [
      'Fraud vs Non-Fraud pattern breakdown',
      'Chargeback Reason Code analysis',
      'Approval loss root-cause identification',
      'Risk feature radar across your transaction data',
    ],
  },
  {
    number: '03',
    tag: 'Recommendations',
    title: 'Receive Prioritized Rule Changes',
    description: 'You receive a ranked list of specific fraud rule changes — each with estimated chargeback reduction and false-positive impact — so your team can act with confidence.',
    details: [
      'AI Summary with risk level badge (Low / Medium / High)',
      'Recommended rules with Fraud Rate, False Positive %, and Ranking',
      'Estimated revenue and chargeback impact per rule',
      'Full Report PDF download for your risk committee',
    ],
  },
  {
    number: '04',
    tag: 'Implement',
    title: 'Apply Changes in Shopify & Stripe',
    description: 'Implement changes directly in Shopify Protect and Stripe Radar, then track your improvements in chargebacks and approval rates over time — no rip and replace, no migration risk.',
    details: [
      'Apply ranked rules in Shopify Protect',
      'Apply ranked rules in Stripe Radar',
      'Track chargeback and approval rate improvements',
      'No rip and replace — improve your existing stack',
    ],
  },
];

const integrations = [
  { name: 'Stripe',    category: 'Payment Processor', slug: 'stripe' },
  { name: 'Shopify',   category: 'E-Commerce Online Store',        slug: 'shopify' },
];



export default function Solutions() {
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
            <div className="max-w-[900px] mx-auto text-center">
              <Reveal animation="anim-fadeUp" delay={75}>
                <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[3rem] sm:text-[4rem] lg:text-[4.5rem]">
                  Stop Losing Money to{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, rgb(125, 107, 160) 0%, rgb(125, 107, 160) 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Fraud &amp; False Declines
                  </span>
                </h1>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={150}>
                <p className="text-[1.25rem] leading-[1.75] max-w-[720px] mx-auto text-gray-600 font-semibold mb-3">
                  FraudPulse tells you exactly which fraud rules to change in{' '}
                  <strong className="text-gray-900">Stripe</strong> &amp;{' '}
                  <strong className="text-gray-900">Shopify</strong> to reduce chargebacks and increase approvals.
                </p>
                <p className="text-[1.0625rem] leading-[1.75] max-w-[600px] mx-auto text-gray-500">
                  Get actionable fraud insights in days not dashboards you never use.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
            {steps.map((step, index) => {
              const stepStyles = [
                {
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  boxShadow: '0 8px 32px rgba(91,168,180,0.25)',
                },
                {
                  background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                  boxShadow: '0 8px 32px rgba(17,24,39,0.2)',
                },
                {
                  background: 'linear-gradient(135deg, #7D6BA0 0%, #6a5890 100%)',
                  boxShadow: '0 8px 32px rgba(125,107,160,0.25)',
                },
                {
                  background: '#ffffff',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  border: '1px solid #e5e7eb',
                },
              ][index];

              const isLight = index === 3;
              const slideAnimation = index % 2 === 0 ? 'anim-slideLeft-slow' : 'anim-slideRight-slow';

              return (
              <Reveal key={step.number} animation={slideAnimation} delay={([0, 150, 300, 400] as const)[index]} className="w-full">
                <div
                  className="rounded-2xl p-8 sm:p-10"
                  style={stepStyles}>
                  <h2 className={`font-extrabold tracking-[-0.02em] mb-4 text-[1.625rem] sm:text-[2rem] ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    {step.title}
                  </h2>
                  <p className={`text-[1.125rem] sm:text-[1.25rem] leading-[1.75] mb-6 ${isLight ? 'text-gray-600' : 'text-white/90'}`}>
                    {step.description}
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {step.details.map((detail, di) => (
                      <li key={detail} className="flex items-start gap-3 anim-fadeUp"
                        style={{ animationDelay: `${di * 60}ms` }}>
                        <svg className={`w-5 h-5 flex-shrink-0 mt-[3px] ${isLight ? 'text-[#5ba8b4]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`text-[1.0625rem] sm:text-[1.125rem] leading-[1.6] ${isLight ? 'text-gray-700' : 'text-white/95'}`}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Integrations ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-3 text-[2.75rem] sm:text-[3.25rem]">
                  Works With Your Existing Stack
                </h2>
                <p className="text-[1.125rem] leading-[1.7] max-w-[580px] mx-auto">
                  Connect Stripe and Shopify directly — or upload CSV exports from any platform. No migration, no rip and replace.
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
              <p className="text-center mt-8 text-[1.125rem] text-gray-400">
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
        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold tracking-[-0.03em] mb-3 text-[2.75rem] sm:text-[3.25rem]">
                See It on Your Stripe &amp; Shopify Data
              </h2>
              <p className="text-[1.25rem] leading-[1.7] max-w-[680px] mx-auto mb-10 text-gray-400">
                Book a walkthrough and see the exact fraud rule changes FraudPulse would recommend for your store — reduce chargebacks and increase approvals without replacing your stack.
              </p>
              <Link href="/book-a-demo/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white transition-all hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
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
