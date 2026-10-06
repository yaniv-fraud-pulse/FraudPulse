'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import { TrackedLink } from '../components/TrackedCta';
import JsonLd from '../components/JsonLd';
import FaqAccordion from '../components/FaqAccordion';
import ComparisonTable from '../components/ComparisonTable';
import ToolComparisonTable from '../components/ToolComparisonTable';
import StackCategoryTable from '../components/StackCategoryTable';
import { FrostedBox, SoftWash } from '../components/Brand';
import { ANALYST_VS_SCREENING_TABLE, GEO_STATS, PRICING_FACT, articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';
import {
  FAQ_FLOW_BLOCKIFY_ENOUGH,
  FAQ_REPLACE_STACK,
  pickSiteFaqs,
} from '../lib/siteFaqs';

const SOLUTIONS_ANSWER =
  'FraudPulse is the AI fraud analyst for Shopify, Stripe, and Adyen merchants. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect enforce or automate at checkout. FraudPulse classifies your chargebacks and ranks which rules and actions to change, without replacing those tools or taking over checkout.';

const FAQ_REPLACE_SMB =
  'Does FraudPulse replace NoFraud, FraudLabs Pro, ClearSale, SEON, or Subuno?';

const clusterLinks = [
  { href: '/stack/', label: 'Using FraudPulse with Radar, Flow, Blockify, and RevenueProtect' },
  { href: '/alternatives/nofraud/', label: 'FraudPulse vs NoFraud, FraudLabs Pro, ClearSale, SEON, Subuno' },
  { href: '/alternatives/payment-platform-tools/', label: 'Vs Radar, Flow, Blockify, and RevenueProtect' },
  { href: '/alternatives/smb-fraud-tools/', label: 'Vs Signifyd and Riskified' },
  { href: '/blog/best-fraud-prevention-tools-for-shopify-2026/', label: 'Best fraud prevention tools for Shopify (2026)' },
];

const solutionsFaqs = pickSiteFaqs([
  FAQ_REPLACE_STACK,
  FAQ_REPLACE_SMB,
  FAQ_FLOW_BLOCKIFY_ENOUGH,
]);

const steps = [
  {
    number: '01',
    tag: 'Connect',
    title: 'Connect Your Transaction Data',
    description: 'Connect Shopify, Stripe, or Adyen in minutes - no engineering work required. FraudPulse imports your transaction history, chargeback records, and dispute data, then validates data quality before analysis begins.',
    details: [
      'Connect via API, CSV upload, or native integrations',
      'Shopify, Stripe, and Adyen supported',
      'Automatic Data Sanity Check on all imported data',
      'Historical data analysis from day one',
    ],
    tone: 'teal' as const,
  },
  {
    number: '02',
    tag: 'Analysis',
    title: 'We Analyze Your Fraud Patterns',
    description: 'FraudPulse analyzes your fraud and transaction patterns to identify the root causes of chargebacks, friendly fraud, and false declines - so you know exactly what to fix.',
    details: [
      'Fraud vs Non-Fraud pattern breakdown',
      'Chargeback & friendly fraud reason analysis',
      'Approval loss root-cause identification',
      'Risk feature radar across your transaction data',
    ],
    tone: 'purple' as const,
  },
  {
    number: '03',
    tag: 'Recommendations',
    title: 'Receive Prioritized Rule Changes',
    description: 'You receive a ranked list of specific fraud rules and actions - each with estimated chargeback reduction and false-positive impact - so your team can act with confidence.',
    details: [
      'AI Summary with risk level badge (Low / Medium / High)',
      'Designated rules with Fraud Rate, False Positive %, and Ranking',
      'Estimated revenue and chargeback impact per rule',
      'Full Report PDF download for your risk committee',
    ],
    tone: 'teal' as const,
  },
  {
    number: '04',
    tag: 'Implement',
    title: 'Apply Rules & Track Results',
    description: 'Implement recommended rules in your existing payment stack, then track improvements in chargebacks, friendly fraud, and approval rates - without replacing your fraud prevention tools.',
    details: [
      'Apply ranked rules where you already manage risk',
      'Clear actions tied to chargeback and friendly fraud patterns',
      'Track chargeback and approval rate improvements',
      'Works alongside fraud prevention tools - improve your existing stack',
    ],
    tone: 'purple' as const,
  },
];

function PulseMark({ id, className = 'w-7 h-7' }: { id: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M2 16h7l3-7 5 14 3-7h10" stroke="#5ba8b4" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className="hero-pulse-path" d="M2 16h7l3-7 5 14 3-7h10" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5ba8b4" />
          <stop offset="1" stopColor="#7D6BA0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] border ${dark ? 'text-[#8fd0da] border-white/10 bg-white/[0.04]' : 'text-[#4a96a3] border-[#5ba8b4]/20 bg-[#5ba8b4]/[0.06]'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#5ba8b4]" style={{ boxShadow: '0 0 8px #5ba8b4' }} />
      {children}
    </p>
  );
}

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('AI fraud analyst for Shopify, Stripe, and Adyen merchants', '/solutions/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(solutionsFaqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">

        {/* ── Hero ── */}
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <div className="pointer-events-none absolute inset-x-0 -top-[84px] bottom-0 overflow-hidden" aria-hidden>
            <div className="hero-aurora w-[220px] h-[200px] sm:w-[520px] sm:h-[420px] -top-20 sm:-top-32 -left-16 sm:left-[8%]" style={{ background: 'rgba(91,168,180,0.45)' }} />
            <div className="hero-aurora w-[200px] h-[180px] sm:w-[480px] sm:h-[380px] -top-16 sm:-top-24 -right-16 sm:right-[6%]" style={{ background: 'rgba(125,107,160,0.38)', animationDelay: '-9s' }} />
            <div className="absolute inset-0 hero-dot-grid" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
          </div>

          <div className="relative max-w-6xl mx-auto pt-16 pb-16 sm:pt-20 sm:pb-20 w-full min-w-0">
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">AI fraud analyst for</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">Shopify, Stripe, and Adyen merchants</span>
            </h1>

            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] max-w-[820px] mx-auto text-balance text-gray-700 font-semibold mb-4 anim-fadeUp delay-300">
              Ranked Radar, Flow, Blockify, and RevenueProtect changes from your chargebacks - without replacing the tools you already run.
            </p>
            <p className="ai-answer text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] max-w-[840px] mx-auto text-balance text-gray-500 anim-fadeUp delay-400">
              {SOLUTIONS_ANSWER}
            </p>
          </div>
        </section>

        {/* ── Cite-friendly stats ── */}
        <section className="relative px-5 sm:px-10 pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {GEO_STATS.map((stat) => (
                  <div
                    key={stat.value + stat.label}
                    className="rounded-3xl border border-gray-200/80 bg-white/80 px-4 py-6 text-center backdrop-blur shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                  >
                    <p className="font-extrabold text-[1.5rem] sm:text-[1.875rem] tracking-[-0.03em] text-gradient-flow mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.5] text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Steps ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center mb-12 sm:mb-16">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="font-extrabold text-gray-900 text-[2.25rem] sm:text-[3.25rem] tracking-[-0.04em] leading-[1.05] max-w-3xl mx-auto text-balance">
                From transaction data to <span className="text-gradient-flow">ranked rule changes</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {steps.map((step, index) => {
                const isTeal = step.tone === 'teal';
                return (
                  <Reveal key={step.number} animation="anim-fadeUp" delay={([0, 75, 150, 225] as const)[index]} className="h-full">
                    <article className="relative h-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]">
                      <div className="flex items-center gap-3 mb-6">
                        {/* <span
                          className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[0.8125rem] font-bold tabular-nums text-white"
                          style={{
                            background: isTeal
                              ? 'linear-gradient(135deg, #6bb8c3, #4a96a3)'
                              : 'linear-gradient(135deg, #9483b8, #7D6BA0)',
                          }}
                        >
                          {step.number}
                        </span> */}
                        <span className={`text-[0.75rem] font-semibold uppercase tracking-[0.14em] ${isTeal ? 'text-[#4a96a3]' : 'text-[#7D6BA0]'}`}>
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-[1.375rem] sm:text-[1.5rem] tracking-[-0.02em] text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[1.0625rem] leading-relaxed text-gray-600 mb-6">
                        {step.description}
                      </p>
                      <ul className="grid gap-2.5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafbfc] px-4 py-3">
                            <span className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${isTeal ? 'bg-[#5ba8b4]/15 text-[#4a96a3]' : 'bg-[#7D6BA0]/15 text-[#7D6BA0]'}`}>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-[0.9375rem] font-medium text-gray-700 leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <SoftWash>
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Where we fit</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-center mb-3 text-[2rem] sm:text-[2.5rem] leading-[1.05]">
                Where FraudPulse fits in your stack
              </h2>
              <p className="text-center text-[1.0625rem] leading-[1.7] text-gray-500 max-w-2xl mx-auto mb-8">
                FraudPulse is the analyst, not the screener. Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect keep enforcing at checkout; FraudPulse tells you which of their rules to change.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FrostedBox>
                <ComparisonTable table={ANALYST_VS_SCREENING_TABLE} />
              </FrostedBox>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="mt-8 text-center text-[1rem] leading-[1.7] text-gray-600 max-w-2xl mx-auto">
                {PRICING_FACT}{' '}
                <Link href="/pricing/" className="font-semibold text-[#4a96a3] hover:underline">
                  See pricing
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </SoftWash>

        {/* ── Comparison ── */}
        <section className="relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden bg-[#fafbfc]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -top-32 -left-32 w-[560px] h-[480px] rounded-full blur-[120px] opacity-30" style={{ background: '#7D6BA0' }} />
            <div className="absolute -bottom-32 -right-32 w-[560px] h-[480px] rounded-full blur-[120px] opacity-25" style={{ background: '#5ba8b4' }} />
            <div className="absolute inset-0 hero-dot-grid opacity-60" />
          </div>
          <div className="relative max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Compare</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2.25rem] sm:text-[3.25rem] leading-[1.05] mb-4 text-balance">
                FraudPulse vs the competition
              </h2>
              <p className="text-[1.0625rem] sm:text-[1.125rem] text-gray-500 max-w-2xl mx-auto mb-10 text-balance">
                How FraudPulse compares to manual review, SMB fraud tools, and payment-platform controls.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <div className="rounded-[32px] border border-gray-200/70 bg-white/70 p-5 sm:p-8 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.35)] backdrop-blur-xl">
                <ToolComparisonTable />
              </div>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <div className="mt-10 rounded-[32px] border border-gray-200/70 bg-white/80 p-6 sm:p-10 backdrop-blur">
                <h3 className="font-bold text-gray-900 text-[1.25rem] sm:text-[1.5rem] mb-3 tracking-[-0.02em]">
                  Are Shopify Flow and Blockify enough?
                </h3>
                <p className="ai-answer text-[1.0625rem] leading-[1.7] text-gray-600 mb-8">
                  Shopify Flow and Blockify are enough for enforcement if default settings already match your risk. They are not enough if chargebacks or false declines keep rising and you do not know which control to change. Full platforms add scoring or a guarantee. FraudPulse sits alongside Flow and Blockify and ranks which settings or workflows to change for your mix.
                </p>
                <h3 className="font-bold text-gray-900 text-[1.25rem] sm:text-[1.5rem] mb-3 tracking-[-0.02em]">
                  How categories compare
                </h3>
                <p className="text-[1.0625rem] text-gray-500 mb-6">
                  Name the job first, then the product. FraudPulse is a rule-advisor layer - not a Flow, Blockify, or Radar replacement and not a representment app.
                </p>
                <StackCategoryTable />
                <p className="mt-6 text-[0.9375rem] text-gray-500">
                  Full listicle:{' '}
                  <Link href="/blog/best-fraud-prevention-tools-for-shopify-2026/" className="font-semibold text-[#4a96a3] hover:underline">
                    best fraud prevention tools for Shopify
                  </Link>
                  . Stack:{' '}
                  <Link href="/stack/" className="font-semibold text-[#4a96a3] hover:underline">
                    using FraudPulse with Radar, Flow, Blockify, and RevenueProtect
                  </Link>
                  . Compare:{' '}
                  <Link href="/alternatives/nofraud/" className="font-semibold text-[#4a96a3] hover:underline">
                    vs NoFraud
                  </Link>
                  {' · '}
                  <Link href="/blog/fraudpulse-does-not-replace-stripe-radar-shopify-flow/" className="font-semibold text-[#4a96a3] hover:underline">
                    how FraudPulse works alongside Flow and Blockify
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal animation="anim-fadeUp" className="lg:sticky lg:top-28">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.05] text-[2.25rem] sm:text-[3rem] mb-5 text-balance">
                Frequently asked questions
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-gray-500 mb-8 max-w-md">
                Answers on Radar, Flow, Blockify, RevenueProtect, chargebacks, false declines, and Signifyd alternatives.
              </p>
              <Link
                href="/faq/"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-[1rem] font-semibold text-gray-900 transition-all duration-300 hover:border-[#5ba8b4]/50 hover:text-[#4a96a3]"
              >
                View FAQ
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={solutionsFaqs} variant="light" />
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-3 sm:px-6 pb-6 sm:pb-10">
          <Reveal animation="anim-scaleIn">
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] max-w-7xl mx-auto px-6 sm:px-12 py-20 sm:py-28 text-center text-white"
              style={{ background: 'radial-gradient(120% 90% at 50% 100%, #1a2f3a 0%, #0b0f17 60%, #090b10 100%)' }}>
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute inset-0 dark-dot-grid" />
                <div className="hero-aurora w-[460px] h-[360px] -bottom-40 left-[10%]" style={{ background: 'rgba(91,168,180,0.55)' }} />
                <div className="hero-aurora w-[420px] h-[340px] -bottom-40 right-[10%]" style={{ background: 'rgba(125,107,160,0.5)', animationDelay: '-9s' }} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="relative max-w-3xl mx-auto">
                <PulseMark id="solutionsCtaPulse" className="w-10 h-10 mx-auto mb-6" />
                <h2 className="font-extrabold text-[2.5rem] sm:text-[4rem] tracking-[-0.045em] leading-[1.02] mb-6">
                  See it on your
                  <br />
                  <span className="text-gradient-flow">transaction data.</span>
                </h2>
                <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-gray-400 max-w-[680px] mx-auto mb-10 text-balance">
                  Book a walkthrough and see the exact rules and actions FraudPulse would recommend - reduce chargebacks and friendly fraud without replacing your fraud prevention tools.
                </p>
                <TrackedLink event="demo_cta_clicked" href="/book-a-demo/"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[1.0625rem] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(91,168,180,0.8)]"
                  style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}>
                  Book a Demo
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </TrackedLink>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-5 sm:px-10 pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto">
            <ul className="flex flex-wrap justify-center gap-2">
              {clusterLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.8125rem] sm:text-[0.875rem] font-semibold text-[#4a96a3] transition-colors hover:border-[#5ba8b4]/50 hover:bg-[#5ba8b4]/[0.06]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
