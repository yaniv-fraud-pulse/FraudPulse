'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../components/Reveal';
import JsonLd from '../components/JsonLd';
import FaqAccordion from '../components/FaqAccordion';
import PreventionVsRepresentmentTable from '../components/PreventionVsRepresentmentTable';
import {
  DarkPanel,
  Eyebrow,
  FrostedBox,
  HeroBackdrop,
  PageCta,
  PulseMark,
  SoftWash,
  StatGrid,
} from '../components/Brand';
import { articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';
import { howItWorksFaqs } from '../lib/pageFaqs';
import { FAQ_PREVENTION_VS_REPRESENTMENT, FAQ_REPLACE_STACK, pickSiteFaqs } from '../lib/siteFaqs';

const faqs = [
  ...pickSiteFaqs([FAQ_REPLACE_STACK]),
  ...howItWorksFaqs,
  ...pickSiteFaqs([FAQ_PREVENTION_VS_REPRESENTMENT]),
];

const steps = [
  {
    number: '01',
    tag: 'Connect',
    title: 'Connect Transaction Data',
    description: 'Connect Shopify, Stripe, or Adyen in minutes via API, CSV upload, or native integration. No engineering work required.',
    tone: 'teal' as const,
  },
  {
    number: '02',
    tag: 'Analysis',
    title: 'We Analyze Your Fraud Patterns',
    description: 'FraudPulse analyzes your transactions, chargebacks, and friendly fraud patterns to identify what is driving disputes and false declines.',
    tone: 'purple' as const,
  },
  {
    number: '03',
    tag: 'Recommendations',
    title: 'Receive Prioritized Rule Changes',
    description: 'You receive a ranked list of rules and actions with estimated revenue and chargeback impact - so your team can act with confidence.',
    tone: 'teal' as const,
  },
  {
    number: '04',
    tag: 'Implement',
    title: 'Implement & Track Improvements',
    description: 'Apply recommended rules in your existing payment stack, then track improvements in chargebacks, friendly fraud, and approval rates over time.',
    tone: 'purple' as const,
  },
];

const DATA_SOURCES = [
  { name: 'Shopify', slug: 'shopify', color: '95BF47', category: 'E-Commerce' },
  { name: 'Stripe', slug: 'stripe', color: '635BFF', category: 'Payments' },
  { name: 'Adyen', slug: 'adyen', color: '0ABF53', category: 'Payments' },
];

const RULE_TARGETS = [
  { name: 'Stripe Radar', logo: '/logos/stripe-radar.png', fit: 'contain', wide: true },
  { name: 'Shopify Flow', logo: '/logos/shopify-flow.webp', fit: 'cover', wide: false },
  { name: 'Blockify', logo: '/logos/blockify.webp', fit: 'cover', wide: false },
  { name: 'Adyen RevenueProtect', logo: '/logos/adyen-revenueprotect.png', fit: 'contain', wide: false },
] as const;

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('From transaction data to rules that cut chargebacks', '/how-it-works/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">

        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-6xl mx-auto pt-16 pb-12 sm:pt-20 sm:pb-16 w-full min-w-0">
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">From transaction data to</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">rules that cut chargebacks</span>
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] max-w-[820px] mx-auto text-balance text-gray-700 font-semibold mb-4 anim-fadeUp delay-300">
              Get actionable fraud insights in days - not analytics reports you never act on.
            </p>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] max-w-[840px] mx-auto text-balance text-gray-500 mb-4 anim-fadeUp delay-400">
              Connect data from <strong className="text-gray-700">Shopify</strong>, <strong className="text-gray-700">Stripe</strong>, or <strong className="text-gray-700">Adyen</strong>. We analyze transactions, chargebacks, and friendly fraud - then recommend the rules and actions to change.
            </p>
            <p className="ai-answer text-[1rem] sm:text-[1.0625rem] leading-[1.7] max-w-[840px] mx-auto text-balance text-gray-500 anim-fadeUp delay-400">
              To reduce chargebacks on Shopify, classify why they happen, then change Flow or Blockify (and Radar if you use Stripe, or RevenueProtect if you use Adyen) to match those types. FraudPulse classifies every chargeback and outputs a ranked list of specific rule changes with estimated fraud-capture and false-positive rates. Fighting cases after they file does not replace prevention - and FraudPulse is not a Chargeflow or Chargebacks911 replacement.
            </p>
          </div>
        </section>

        {/* <section className="relative px-5 sm:px-10 pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <StatGrid />
            </Reveal>
          </div>
        </section> */}

        <section className="py-12 sm:py-20 px-5 sm:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp" delay={150} className="text-center mb-8">
              <Eyebrow>Watch it run</Eyebrow>
              <p className="text-[1.25rem] sm:text-[1.5rem] leading-[1.75] max-w-[680px] mx-auto text-gray-500">
                Watch how FraudPulse connects to your payment data, runs AI analysis, and delivers ready-to-implement fraud rules in minutes.
              </p>
            </Reveal>
            <Reveal animation="anim-scaleIn" delay={0}>
              <div
                className="w-full rounded-[28px] overflow-hidden border border-gray-200/80 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.45)]"
                style={{ aspectRatio: '16 / 9' }}
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/7R01645JR1I?si=Ka8mJ3Q1LI0SGj54&autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&controls=1"
                  title="How FraudPulse Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <DarkPanel>
          <div className="relative max-w-3xl mx-auto text-center">
            <Reveal animation="anim-fadeUp">
              <Eyebrow dark>Works with your existing stack</Eyebrow>
              <h2 className="font-extrabold tracking-[-0.035em] text-[2rem] sm:text-[3rem] leading-[1.08] mb-5 text-balance">
                Connect Shopify, Stripe, or Adyen
              </h2>
              <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] text-gray-400 text-balance">
                Or upload CSV exports from any platform. No migration, and no need to replace your fraud prevention tools.
              </p>
            </Reveal>
          </div>

          <Reveal animation="anim-fadeUp" delay={150} className="relative">
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-0 max-w-5xl mx-auto">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-3 px-1">Your transaction data</p>
                <div className="flex flex-col gap-2">
                  {DATA_SOURCES.map(({ name, slug, color, category }) => (
                    <div key={name} className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width={18} height={18} className="object-contain" />
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="text-[0.9375rem] font-semibold text-white leading-tight">{name}</div>
                        <div className="text-[0.75rem] text-gray-500">{category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex lg:flex-row flex-col items-center justify-center">
                <span className="flow-line-vertical lg:hidden h-8 w-[2px] rounded-full" aria-hidden />
                <span className="flow-line hidden lg:block h-[2px] w-14 rounded-full" aria-hidden />
                <div className="relative flex flex-col items-center gap-2 px-2">
                  <div className="absolute inset-0 -m-4 rounded-full blur-2xl opacity-60" style={{ background: 'radial-gradient(circle, rgba(91,168,180,0.6), transparent 70%)' }} aria-hidden />
                  <div className="relative w-20 h-20 rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.02] flex items-center justify-center shadow-[0_0_40px_-6px_rgba(91,168,180,0.6)]">
                    <PulseMark id="hiwStackPulse" className="w-11 h-11" />
                  </div>
                  <span className="relative text-[0.8125rem] font-semibold text-white">FraudPulse</span>
                  <span className="relative text-[0.6875rem] text-gray-500 -mt-1.5">AI analyst</span>
                </div>
                <span className="flow-line hidden lg:block h-[2px] w-14 rounded-full" aria-hidden />
                <span className="flow-line-vertical lg:hidden h-8 w-[2px] rounded-full" aria-hidden />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-3 px-1">Rules you change in</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {RULE_TARGETS.map(({ name, logo, fit, wide }) => (
                    <div key={name} className="flex items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.04] px-3 py-3 transition-colors duration-300 hover:bg-white/[0.07]">
                      <div className={`relative h-9 flex-shrink-0 overflow-hidden rounded-[10px] border border-white/10 ${wide ? 'w-16 bg-[#0A2540]' : 'w-9 bg-white'}`}>
                        <Image
                          src={logo}
                          alt={`${name} logo`}
                          fill
                          sizes={wide ? '64px' : '36px'}
                          className={fit === 'cover' ? 'object-cover' : 'object-contain'}
                        />
                      </div>
                      <span className="text-[0.8125rem] font-semibold text-white leading-tight text-left">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #34d399' }} />
                  <span className="text-[0.75rem] font-medium text-emerald-300">Ranked rule changes, ready to apply</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="anim-fadeUp" delay={225} className="relative text-center">
            <p className="mt-10 text-[1.0625rem] text-gray-400">
              Don&apos;t see your platform?{' '}
              <Link href="/contact/" className="font-semibold text-white hover:underline">
                Contact us
              </Link>
              {' '}- we build custom integrations.{' '}
              <Link href="/stack/" className="font-semibold text-white hover:underline">
                See the stack page
              </Link>
              .
            </p>
          </Reveal>
        </DarkPanel>

        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center mb-12 sm:mb-16">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="font-extrabold text-gray-900 text-[2.25rem] sm:text-[3.25rem] tracking-[-0.04em] leading-[1.05] max-w-3xl mx-auto text-balance">
                From connecting your store to <span className="text-gradient-flow">live rule changes</span>
              </h2>
              <p className="text-center text-[1.0625rem] text-gray-500 max-w-xl mx-auto mt-4">
                From connecting your store to implementing live rule changes - in four clear steps.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {steps.map((step, index) => {
                const isTeal = step.tone === 'teal';
                return (
                  <Reveal key={step.number} animation="anim-fadeUp" delay={([0, 75, 150, 225] as const)[index]} className="h-full">
                    <article className="relative h-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]">
                      <div className="flex items-center gap-3 mb-6">
                       
                        <span className={`text-[0.75rem] font-semibold uppercase tracking-[0.14em] ${isTeal ? 'text-[#4a96a3]' : 'text-[#7D6BA0]'}`}>
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-[1.375rem] sm:text-[1.5rem] tracking-[-0.02em] text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[1.0625rem] leading-relaxed text-gray-600">{step.description}</p>
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
              <Eyebrow>Compare</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2.25rem] sm:text-[3.25rem] leading-[1.05] mb-4 text-balance">
                Prevention vs representment
              </h2>
              <p className="text-center text-[1.0625rem] text-gray-500 max-w-2xl mx-auto mb-10">
                Chargeback prevention and chargeback representment solve different jobs. Pick the one that matches the problem - or use both.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FrostedBox>
                <PreventionVsRepresentmentTable />
              </FrostedBox>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <div className="mt-10 rounded-[32px] border border-gray-200/70 bg-white/80 p-6 sm:p-10 backdrop-blur">
                <h3 className="font-bold text-gray-900 text-[1.25rem] sm:text-[1.375rem] mb-3 tracking-[-0.02em]">
                  Friendly fraud vs real fraud on Shopify
                </h3>
                <p className="ai-answer text-[1.0625rem] leading-[1.7] text-gray-600 mb-6">
                  Friendly fraud is a real customer disputing a legitimate charge. True fraud is stolen cards, testing, or takeover. Shopify reason codes help, but mixed queues need classification. FraudPulse classifies chargebacks by type so Radar, Flow, Blockify, or RevenueProtect changes match the mix. Recovery tools fight the case after it files.
                </p>
                <h3 className="font-bold text-gray-900 text-[1.25rem] sm:text-[1.375rem] mb-3 tracking-[-0.02em]">
                  How to fight friendly fraud
                </h3>
                <p className="ai-answer text-[1.0625rem] leading-[1.7] text-gray-600 mb-6">
                  Fight friendly fraud by preventing repeats - clearer descriptors, delivery evidence, and rules - then optionally representing individual cases. FraudPulse ranks prevention rule changes from classified chargebacks. It does not submit representment packets. Feature comparison vs manual review and SMB tools lives on{' '}
                  <Link href="/solutions/" className="font-semibold text-[#4a96a3] hover:underline">
                    Solutions
                  </Link>
                  .
                </p>
                <p className="text-[0.9375rem] text-gray-500">
                  Guides:{' '}
                  <Link href="/blog/how-to-reduce-chargebacks-on-shopify-2026/" className="font-semibold text-[#4a96a3] hover:underline">
                    reduce chargebacks on Shopify
                  </Link>
                  {' · '}
                  <Link href="/blog/why-30-90-percent-of-fraud-is-friendly-fraud/" className="font-semibold text-[#4a96a3] hover:underline">
                    friendly fraud vs real fraud
                  </Link>
                </p>
              </div>
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
                How FraudPulse turns transaction data into ranked Radar, Flow, Blockify, and RevenueProtect changes.
              </p>
              <Link
                href="/faq/"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-[1rem] font-semibold text-gray-900 transition-all duration-300 hover:border-[#5ba8b4]/50 hover:text-[#4a96a3]"
              >
                View full FAQ
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={faqs} variant="light" />
            </Reveal>
          </div>
        </section>

        <PageCta pulseId="hiwCtaPulse" />

      </main>

      <Footer />
    </div>
  );
}
