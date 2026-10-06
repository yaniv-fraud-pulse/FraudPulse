'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { captureEvent } from '../components/PostHogProvider';
import { TrackedAnchor } from '../components/TrackedCta';
import FaqAccordion from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import { Eyebrow, FrostedBox, HeroBackdrop, PageCta, SoftWash } from '../components/Brand';
import { articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';

const plans = [
  {
    name: 'Pay as you go',
    priceLabel: '$0.01',
    priceSuffix: '/transaction',
    priceNote: 'Up to 20K transactions / month',
    tagline: 'Usage-based pricing for growing merchants - no monthly commitment, pay only for what you process.',
    cta: 'Start Free Trial',
    popular: false,
    features: [
      { label: 'AI advisor recommendations',  included: true },
      { label: 'No monthly subscription',     included: true },
      { label: 'Chargeback ratio monitoring', included: true },
      { label: '2 user seats',                included: true },
      { label: 'Payment Enrichment',          included: false },
      { label: 'Custom rules engine',         included: false },
      { label: 'API access',                  included: false },
      { label: 'Dedicated account manager',   included: false },
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 199,
    annualPrice: 159,
    annualSaving: 480,
    tagline: 'For established merchants who need AI-powered insights and full platform access.',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      { label: 'AI advisor recommendations',                 included: true },
      { label: '1-hour monthly meeting with fraud advisor',  included: true },
      { label: 'Up to 50K transactions/month',               included: true },
      { label: 'Real-time fraud scoring',                    included: true },
      { label: 'Chargeback ratio monitoring',                included: true },
      { label: '5 user seats',                              included: true },
      { label: 'Custom rules engine (Up to 10 rules)',       included: true },
      { label: 'Full API access (Shopify, Stripe, and Adyen)', included: true },
      { label: 'Dedicated account manager',                  included: false },
    ],
  },
  {
    name: 'Enterprise',
    priceLabel: null,
    tagline: 'For high-volume merchants and enterprises requiring custom solutions and SLAs.',
    cta: 'Contact Sales',
    popular: false,
    features: [
      { label: 'AI advisor recommendations',       included: true },
      { label: 'Unlimited transactions',           included: true },
      { label: 'Real-time fraud scoring',          included: true },
      { label: 'Chargeback ratio monitoring',      included: true },
      { label: 'All alert channels + custom',      included: true },
      { label: 'Custom analytics & reporting',     included: true },
      { label: 'Unlimited user seats',             included: true },
      { label: 'Custom rules engine + ML models',  included: true },
      { label: 'Full API access + webhooks',       included: true },
      { label: 'Dedicated account manager + SLA',  included: true },
    ],
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every FraudPulse plan includes a 14-day free trial with no credit card required. You get full access to the features on your chosen plan so you can connect transaction data from Shopify, Stripe, or Adyen, review ranked fraud rule recommendations, and confirm value before you commit to paid billing.',
  },
  {
    q: 'How is transaction volume counted?',
    a: 'A transaction is any payment event FraudPulse ingests - authorisations, captures, refunds, and chargebacks each count as one. Only events processed in the current billing period count toward your monthly limit, so historical backfills used for analysis do not silently consume your plan capacity.',
  },
  {
    q: 'Can I change plans at any time?',
    a: 'Yes. You can upgrade or downgrade from account settings whenever your volume or team needs change. Upgrades take effect immediately and are prorated for the rest of the cycle; downgrades apply at the start of the next billing period so you keep access you already paid for.',
  },
  {
    q: 'What happens if I exceed my transaction limit?',
    a: 'We notify you at about 80% and 100% of your monthly transaction limit. Service is not cut off by default - overages bill at a small per-transaction rate until you upgrade. If you prefer a hard stop, you can set a cap in settings so volume cannot exceed the ceiling you choose.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes. Paying annually on Professional saves about 20% versus month-to-month pricing - more than two months of value across the year. Annual billing is optional; you can stay monthly if you want flexibility while you validate FraudPulse on your own chargeback and approval metrics.',
  },
  {
    q: 'What integrations are included?',
    a: 'Plans support connecting transaction data from Shopify, Stripe, and Adyen. Professional and Enterprise add fuller API access and webhooks; Enterprise can include custom integrations when your stack needs a dedicated connector.',
  },
];

const planCompareRows = [
  { feature: 'AI advisor recommendations', payg: 'Yes', pro: 'Yes', ent: 'Yes' },
  { feature: 'Monthly fraud advisor meeting', payg: '-', pro: '1 hour', ent: 'Custom' },
  { feature: 'Monthly transaction allowance', payg: 'Up to 20K', pro: 'Up to 50K', ent: 'Unlimited' },
  { feature: 'Custom rules engine', payg: '-', pro: 'Up to 10 rules', ent: 'Yes + ML models' },
  { feature: 'API / webhooks', payg: '-', pro: 'Full API', ent: 'API + webhooks' },
  { feature: 'Dedicated account manager', payg: '-', pro: '-', ent: 'Yes + SLA' },
  { feature: 'Starting price', payg: '$0.01 / txn', pro: '$159–$199 / mo', ent: 'Custom' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  useEffect(() => {
    captureEvent('pricing_page_viewed', {
      page: '/pricing/',
      referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('Simple, transparent pricing', '/pricing/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">

        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-12 sm:pt-20 sm:pb-16">
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">Simple, transparent</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">pricing</span>
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] max-w-[720px] mx-auto text-balance text-gray-700 font-semibold mb-3 anim-fadeUp delay-300">
              No hidden fees. No per-seat surprises. Choose the plan that fits your transaction volume and grow with confidence.
            </p>
            <p className="text-[1rem] leading-[1.7] max-w-[640px] mx-auto mb-8 text-gray-500 anim-fadeUp delay-400">
              Pay-as-you-go starts at $0.01 per transaction (up to 20K/month). Professional is $199/month or $159/month billed annually (20% savings). Every plan includes a 14-day free trial.
            </p>

            <Reveal animation="anim-fadeIn" delay={225}>
              <div className="inline-flex items-center rounded-full p-1 border border-gray-200/80 bg-white/80 backdrop-blur">
                {(['Monthly', 'Annual'] as const).map((period) => {
                  const active = (period === 'Annual') === annual;
                  return (
                    <button key={period} onClick={() => setAnnual(period === 'Annual')}
                      className="rounded-full px-7 py-2.5 text-[1rem] font-medium transition-all"
                      style={{
                        background: active ? 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' : 'transparent',
                        color: active ? 'white' : '#6b7280',
                        fontWeight: active ? 600 : 500,
                      }}>
                      {period}
                      {period === 'Annual' && (
                        <span className="ml-1.5 text-[0.8125rem] font-semibold"
                          style={{ color: active ? 'rgba(255,255,255,0.8)' : '#5ba8b4' }}>
                          Save 20%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Plan Cards ── */}
        <section className="pb-20 sm:pb-28 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {plans.map((plan, pi) => {
              const price = annual ? (plan as { annualPrice?: number }).annualPrice : (plan as { monthlyPrice?: number }).monthlyPrice;
              const saving = annual ? (plan as { annualSaving?: number }).annualSaving : null;
              const cardDelay = ([0, 150, 300] as const)[pi] ?? 0;

              return (
                <Reveal key={plan.name} animation="anim-scaleIn" delay={cardDelay} className="h-full">
                <div
                  className={`group relative flex flex-col rounded-[20px] p-7 border transition-all duration-300 h-full hover:border-[#5ba8b4] hover:shadow-[0_8px_32px_rgba(17,24,39,0.25)] hover:[background:linear-gradient(135deg,#111827_0%,#1f2937_100%)] ${
                    plan.popular
                      ? 'bg-[rgba(165,208,216,0.05)] border-[#5ba8b4] shadow-[0_4px_20px_rgba(91,168,180,0.15)]'
                      : 'bg-white border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
                  }`}>

                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full border whitespace-nowrap bg-white"
                      style={{ borderColor: '#5ba8b4' }}>
                      <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-[10px] flex items-center justify-center border bg-[rgba(165,208,216,0.1)] border-[rgba(91,168,180,0.25)] transition-colors group-hover:bg-white/10 group-hover:border-white/30">
                      <svg className="w-4.5 h-4.5 stroke-[#5ba8b4] transition-colors group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                        {plan.name === 'Pay as you go'
                          ? <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          : plan.name === 'Professional'
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        }
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors text-[1.125rem]">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    {(plan as { priceLabel?: string | null }).priceLabel !== undefined && (plan as { priceLabel?: string | null }).priceLabel !== null ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="font-extrabold text-gray-900 group-hover:text-white transition-colors text-[3rem] tracking-[-0.04em] leading-none">
                            {(plan as { priceLabel: string }).priceLabel}
                          </span>
                          <span className="text-[0.875rem] text-gray-400 group-hover:text-gray-400 transition-colors">
                            {(plan as { priceSuffix: string }).priceSuffix}
                          </span>
                        </div>
                        <p className="text-[0.75rem] mt-1 text-gray-400 group-hover:text-gray-400 transition-colors">
                          {(plan as { priceNote: string }).priceNote}
                        </p>
                      </>
                    ) : price != null ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="font-extrabold text-gray-900 group-hover:text-white transition-colors text-[3rem] tracking-[-0.04em] leading-none">${price}</span>
                          <span className="text-[0.875rem] text-gray-400 group-hover:text-gray-400 transition-colors">/month</span>
                        </div>
                        {annual && saving && (
                          <p className="text-[0.75rem] mt-1 text-gray-400 group-hover:text-gray-400 transition-colors">
                            Billed annually · Save ${saving}/yr
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="font-extrabold text-[2.5rem] tracking-[-0.04em] leading-none text-[#5ba8b4] group-hover:text-white transition-colors">
                        Custom
                      </span>
                    )}
                  </div>

                  <p className="text-[0.875rem] leading-[1.65] mb-6 text-gray-500 group-hover:text-gray-300 transition-colors">
                    {plan.tagline}
                  </p>

                  {/* Features */}
                  <div className="flex-1 flex flex-col gap-3 mb-7">
                    {plan.features.map(({ label, included }) => (
                      <div key={label} className="flex items-start gap-3">
                        {included ? (
                          <svg className="w-4 h-4 flex-shrink-0 mt-[2px] stroke-[#5ba8b4] group-hover:stroke-[#5ba8b4]" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 flex-shrink-0 mt-[2px] stroke-[#d1d5db] group-hover:stroke-gray-600 transition-colors" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span className={`text-[0.8125rem] leading-[1.5] transition-colors ${included ? 'text-gray-700 group-hover:text-gray-200' : 'text-gray-400 group-hover:text-gray-500'}`}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {plan.cta === 'Contact Sales' ? (
                  <Link href="/contact/"
                    className={`block w-full text-center rounded-[10px] py-3 text-[0.9375rem] font-bold transition-all ${
                      plan.popular
                        ? 'text-white shadow-[0_4px_20px_rgba(91,168,180,0.3)] [background:linear-gradient(135deg,#5ba8b4_0%,#4a96a3_100%)]'
                        : 'border border-[#d1d5db] text-gray-500 bg-transparent group-hover:border-white/30 group-hover:text-white group-hover:bg-white/10'
                    }`}>
                    {plan.cta}
                  </Link>
                  ) : (
                  <TrackedAnchor
                    event="signup_cta_clicked"
                    href="https://app.fraud-pulse.com/signup"
                    className={`block w-full text-center rounded-[10px] py-3 text-[0.9375rem] font-bold transition-all ${
                      plan.popular
                        ? 'text-white shadow-[0_4px_20px_rgba(91,168,180,0.3)] [background:linear-gradient(135deg,#5ba8b4_0%,#4a96a3_100%)]'
                        : 'border border-[#d1d5db] text-gray-500 bg-transparent group-hover:border-white/30 group-hover:text-white group-hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </TrackedAnchor>
                  )}
                </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <SoftWash>
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Compare</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-center mb-3 text-[2.25rem] sm:text-[3rem] leading-[1.05]">
                Compare plans
              </h2>
              <p className="text-center text-[1.0625rem] text-gray-500 max-w-2xl mx-auto mb-10">
                Side-by-side features for Pay as you go, Professional, and Enterprise.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FrostedBox padded={false} className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-[0.9375rem]">
                  <thead>
                    <tr className="bg-white/60 border-b" style={{ borderColor: '#e5e7eb' }}>
                      <th className="px-4 py-3.5 font-semibold text-gray-700">Feature</th>
                      <th className="px-4 py-3.5 font-semibold text-gray-700">Pay as you go</th>
                      <th className="px-4 py-3.5 font-semibold text-[#4a96a3]">Professional</th>
                      <th className="px-4 py-3.5 font-semibold text-gray-700">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planCompareRows.map((row) => (
                      <tr key={row.feature} className="border-b last:border-b-0" style={{ borderColor: '#f3f4f6' }}>
                        <td className="px-4 py-3.5 font-medium text-gray-800">{row.feature}</td>
                        <td className="px-4 py-3.5 text-gray-500">{row.payg}</td>
                        <td className="px-4 py-3.5 font-semibold text-gray-900">{row.pro}</td>
                        <td className="px-4 py-3.5 text-gray-500">{row.ent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </FrostedBox>
            </Reveal>
          </div>
        </SoftWash>

        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal animation="anim-fadeUp" className="lg:sticky lg:top-28">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.05] text-[2.25rem] sm:text-[3rem] mb-5 text-balance">
                Frequently asked questions
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-gray-500 mb-8 max-w-md">
                Clear answers on trials, transaction limits, billing, and integrations - written so you can cite them when comparing fraud tools.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={faqs} variant="light" />
            </Reveal>
          </div>
        </section>

        <PageCta
          pulseId="pricingCtaPulse"
          title="Start your free"
          highlight="trial today."
          body="14 days free, no credit card required. See FraudPulse working on your own data before you commit."
        />

      </main>

      <Footer />
    </div>
  );
}
