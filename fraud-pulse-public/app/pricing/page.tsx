'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { Reveal } from '../components/Reveal';

const plans = [
  {
    name: 'Pay as you go',
    priceLabel: '$0.01',
    priceSuffix: '/transaction',
    priceNote: 'Up to 20K transactions / month',
    tagline: 'Usage-based pricing for growing merchants — no monthly commitment, pay only for what you process.',
    cta: 'Book A Demo',
    popular: false,
    features: [
      { label: 'AI advisor recommendations',  included: true },
      { label: 'No monthly subscription',     included: true },
      { label: 'Chargeback ratio monitoring', included: true },
      { label: '2 user seats',                included: true },
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
    cta: 'Book A Demo',
    popular: true,
    features: [
      { label: 'AI advisor recommendations',                 included: true },
      { label: '1-hour monthly meeting with fraud advisor',  included: true },
      { label: 'Up to 50K transactions/month',               included: true },
      { label: 'Real-time fraud scoring',                    included: true },
      { label: 'Chargeback ratio monitoring',                included: true },
      { label: '5 user seats',                              included: true },
      { label: 'Custom rules engine (Up to 10 rules)',       included: true },
      { label: 'Full API access (Shopify, Stripe and more)', included: true },
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
    a: 'Yes — every plan starts with a 14-day free trial, no credit card required. You get full access to all features on your chosen plan so you can verify value before committing.',
  },
  {
    q: 'How is transaction volume counted?',
    a: 'A transaction is any payment event ingested into FraudPulse — authorisations, captures, refunds, and chargebacks each count as one transaction. Only transactions processed within the billing period count toward your monthly limit.',
  },
  {
    q: 'Can I change plans at any time?',
    a: 'Absolutely. You can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately and are prorated; downgrades take effect at the start of the next billing cycle.',
  },
  {
    q: 'What happens if I exceed my transaction limit?',
    a: "We'll notify you when you reach 80% and 100% of your limit. You won't be cut off — overages are billed at a small per-transaction rate until you upgrade. You can set a hard cap in settings if you prefer.",
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes. Paying annually saves you 20% compared to month-to-month billing — equivalent to getting more than 2 months free.',
  },
  {
    q: 'What integrations are included?',
    a: 'All plans include native integrations with Stripe, Braintree, Adyen, PayPal, and Shopify. Professional and Enterprise plans also include webhook delivery and full REST API access. Custom integrations are available on Enterprise.',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(165,208,216,0.15) 0%, transparent 60%)' }} />

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24 text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                Pricing
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-4 text-[2.5rem] sm:text-[3.5rem]">
                Simple, Transparent{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 50%, #5ba8b4 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Pricing
                </span>
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1rem] leading-[1.75] max-w-[480px] mx-auto mb-8 text-gray-500">
                No hidden fees. No per-seat surprises. Choose the plan that fits your transaction volume and grow with confidence.
              </p>
            </Reveal>

            {/* Billing toggle */}
            <Reveal animation="anim-fadeIn" delay={225}>
            <div className="inline-flex items-center rounded-[12px] p-1 border bg-[#f8f9fa]" style={{ borderColor: '#e5e7eb' }}>
              {(['Monthly', 'Annual'] as const).map((period) => {
                const active = (period === 'Annual') === annual;
                return (
                  <button key={period} onClick={() => setAnnual(period === 'Annual')}
                    className="rounded-[9px] px-5 py-1.5 text-[0.875rem] font-medium transition-all"
                    style={{
                      background: active ? '#5ba8b4' : 'transparent',
                      color: active ? 'white' : '#6b7280',
                      fontWeight: active ? 600 : 500,
                    }}>
                    {period}
                    {period === 'Annual' && (
                      <span className="ml-1.5 text-[0.7rem] font-semibold"
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
                <Reveal key={plan.name} animation="anim-scaleIn" delay={cardDelay}>
                <div
                  className="relative flex flex-col rounded-[20px] p-7 border transition-all"
                  style={{
                    background: plan.popular ? 'rgba(165,208,216,0.05)' : '#ffffff',
                    borderColor: plan.popular ? '#5ba8b4' : '#e5e7eb',
                    boxShadow: plan.popular ? '0 4px 20px rgba(91,168,180,0.15)' : '0 1px 3px rgba(0,0,0,0.06)',
                  }}>

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
                    <div className="w-9 h-9 rounded-[10px] flex items-center justify-center border"
                      style={{ background: 'rgba(165,208,216,0.1)', borderColor: 'rgba(91,168,180,0.25)' }}>
                      <svg className="w-4.5 h-4.5" fill="none" stroke="#5ba8b4" viewBox="0 0 24 24" strokeWidth={1.5}>
                        {plan.name === 'Pay as you go'
                          ? <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          : plan.name === 'Professional'
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        }
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-[1.125rem]">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    {(plan as { priceLabel?: string | null }).priceLabel !== undefined && (plan as { priceLabel?: string | null }).priceLabel !== null ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="font-extrabold text-gray-900 text-[3rem] tracking-[-0.04em] leading-none">
                            {(plan as { priceLabel: string }).priceLabel}
                          </span>
                          <span className="text-[0.875rem] text-gray-400">
                            {(plan as { priceSuffix: string }).priceSuffix}
                          </span>
                        </div>
                        <p className="text-[0.75rem] mt-1 text-gray-400">
                          {(plan as { priceNote: string }).priceNote}
                        </p>
                      </>
                    ) : price != null ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="font-extrabold text-gray-900 text-[3rem] tracking-[-0.04em] leading-none">${price}</span>
                          <span className="text-[0.875rem] text-gray-400">/month</span>
                        </div>
                        {annual && saving && (
                          <p className="text-[0.75rem] mt-1 text-gray-400">
                            Billed annually · Save ${saving}/yr
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="font-extrabold text-[2.5rem] tracking-[-0.04em] leading-none text-[#5ba8b4]">
                        Custom
                      </span>
                    )}
                  </div>

                  <p className="text-[0.875rem] leading-[1.65] mb-6 text-gray-500">
                    {plan.tagline}
                  </p>

                  {/* Features */}
                  <div className="flex-1 flex flex-col gap-3 mb-7">
                    {plan.features.map(({ label, included }) => (
                      <div key={label} className="flex items-start gap-3">
                        {included ? (
                          <svg className="w-4 h-4 flex-shrink-0 mt-[2px]" fill="none" stroke="#5ba8b4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 flex-shrink-0 mt-[2px]" fill="none" stroke="#d1d5db" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span className="text-[0.8125rem] leading-[1.5]"
                          style={{ color: included ? '#374151' : '#9ca3af' }}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/contact/"
                    className="block w-full text-center rounded-[10px] py-3 text-[0.9375rem] font-bold transition-all"
                    style={plan.popular ? {
                      background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(91,168,180,0.3)',
                    } : {
                      border: '1px solid #d1d5db',
                      color: '#6b7280',
                      background: 'transparent',
                    }}>
                    {plan.cta}
                  </Link>
                </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <div className="text-center mb-12">
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">FAQ</p>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[1.75rem] sm:text-[2.25rem]">
                  Frequently Asked Questions
                </h2>
              </div>
            </Reveal>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <Reveal key={i} animation="anim-fadeUp" delay={([0, 75, 150, 225, 300, 300] as const)[i] ?? 0}>
                <div
                  className="rounded-[14px] overflow-hidden border bg-white transition-colors"
                  style={{ borderColor: openFaq === i ? '#5ba8b4' : '#e5e7eb' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="font-semibold text-[0.9375rem] text-gray-800">{faq.q}</span>
                    <svg
                      className="w-4.5 h-4.5 flex-shrink-0 transition-transform"
                      style={{
                        color: '#9ca3af',
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                      }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-[0.875rem] leading-[1.75] text-gray-500">{faq.a}</p>
                    </div>
                  )}
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-scaleIn">
            <div className="relative rounded-[20px] overflow-hidden p-12 sm:p-20 text-center border bg-[#f8f9fa]"
              style={{ borderColor: '#e5e7eb' }}>
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
                style={{ background: 'linear-gradient(to bottom, rgba(91,168,180,0.5), transparent)' }} />
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                Get Started Today
              </p>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-3 text-[2rem] sm:text-[3rem]">
                Start Your Free Trial Today
              </h2>
              <p className="text-[0.9375rem] leading-[1.7] max-w-[460px] mx-auto mb-10 text-gray-500">
                14 days free, no credit card required. See FraudPulse working on your own data before you commit.
              </p>
              <Link href="/contact/"
                className="inline-flex items-center gap-2 rounded-[10px] px-8 py-3 text-[0.9375rem] font-bold text-white transition-all hover:-translate-y-px"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 24px rgba(91,168,180,0.35)' }}>
                Book a Free Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
