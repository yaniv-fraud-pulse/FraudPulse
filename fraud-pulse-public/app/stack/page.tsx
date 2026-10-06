'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import JsonLd from '../components/JsonLd';
import FaqAccordion from '../components/FaqAccordion';
import ComparisonTable from '../components/ComparisonTable';
import { Eyebrow, FrostedBox, HeroBackdrop, PageCta, SoftWash } from '../components/Brand';
import { ANALYST_VS_ENFORCEMENT_TABLE, PRICING_FACT, articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';
import type { FaqItem } from '../lib/homeFaq';

const STACK_ANSWER =
  'FraudPulse sits on Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect. Those tools enforce or automate at checkout. Connect Shopify, Stripe, or Adyen data; FraudPulse classifies your chargebacks and ranks specific rules and actions to change. It does not replace Radar, Flow, Blockify, or RevenueProtect.';

const layers = [
  {
    kicker: 'Enforcement',
    name: 'Stripe Radar',
    role: 'Scores and blocks risk at Stripe checkout. Keep it on.',
    output: 'FraudPulse ranks specific Radar rule and action changes from your chargeback mix, with estimated fraud-capture and false-positive impact.',
  },
  {
    kicker: 'Automation',
    name: 'Shopify Flow',
    role: 'Workflows that tag, hold, or route orders. Keep it on.',
    output: 'FraudPulse ranks which Flow actions to add or tighten from classified chargebacks, not a new checkout engine.',
  },
  {
    kicker: 'Blocking',
    name: 'Blockify',
    role: 'Blocks and filters you already configure. Keep it on.',
    output: 'FraudPulse ranks Blockify changes against your history so blocks match real risk instead of a generic list.',
  },
  {
    kicker: 'Enforcement',
    name: 'Adyen RevenueProtect',
    role: 'Adyen risk rules and actions at checkout. Keep it on.',
    output: 'FraudPulse ranks specific RevenueProtect rule and action changes from your Adyen chargeback mix, with estimated fraud-capture and false-positive impact.',
  },
];

const stackFaqs: FaqItem[] = [
  {
    q: 'Does FraudPulse replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect?',
    a: 'No. Those products remain the enforcement or automation layer at checkout. FraudPulse is the AI analyst: it classifies chargebacks and ranks specific rule or workflow changes with estimated impact. You keep Radar, Flow, Blockify, and RevenueProtect.',
  },
  {
    q: 'Does FraudPulse create rules for Adyen RevenueProtect?',
    a: 'Yes. Connect Adyen transactions and disputes, get ranked analysis, then apply rule and action changes in RevenueProtect. Shopify and Stripe merchants get the same job in Flow, Blockify, or Radar.',
  },
  {
    q: 'What do I change after I connect data?',
    a: 'You get a ranked list of Radar, Flow, Blockify, or RevenueProtect changes tied to your chargeback types, each with estimated fraud-capture and false-positive impact. FraudPulse does not sit in the approval path and is not representment.',
  },
];

export default function StackPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('Using FraudPulse with Radar, Flow, Blockify, and RevenueProtect', '/stack/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(stackFaqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-16 sm:pt-20 sm:pb-20">
            <Eyebrow>Your stack</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">Using FraudPulse with Radar, Flow,</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">Blockify, and RevenueProtect</span>
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] max-w-[820px] mx-auto text-balance text-gray-700 font-semibold mb-4 anim-fadeUp delay-300">
              Keep the tools that enforce or automate at checkout. FraudPulse is the AI analyst that ranks which rules and actions to change for your chargeback mix.
            </p>
            <p className="ai-answer text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] max-w-[840px] mx-auto text-balance text-gray-500 anim-fadeUp delay-400">
              {STACK_ANSWER}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-5 sm:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center mb-10">
              <Eyebrow>Keep enforcement on</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2rem] sm:text-[2.5rem] leading-[1.05] text-balance">
                Enforcement stays. The analyst ranks the next change.
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {layers.map((layer, i) => (
                <Reveal key={layer.name} animation="anim-fadeUp" delay={([0, 75, 150, 225] as const)[i] ?? 0}>
                  <article className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]">
                    <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4] mb-2">
                      {layer.kicker}
                    </p>
                    <h3 className="font-bold text-gray-900 text-[1.25rem] mb-2 tracking-[-0.02em]">{layer.name}</h3>
                    <p className="text-[1.0625rem] leading-[1.7] text-gray-600 mb-3">{layer.role}</p>
                    <p className="text-[1.0625rem] leading-[1.7] text-gray-700">{layer.output}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SoftWash>
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Compare</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2rem] sm:text-[2.75rem] leading-[1.05] mb-4 text-balance">
                Enforcement tools vs the analyst layer
              </h2>
              <p className="text-center text-[1.0625rem] leading-[1.7] text-gray-500 max-w-2xl mx-auto mb-10">
                Same stack, two jobs. Radar, Flow, Blockify, and RevenueProtect act on each order. FraudPulse decides what they should act on.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FrostedBox>
                <ComparisonTable table={ANALYST_VS_ENFORCEMENT_TABLE} />
              </FrostedBox>
              <p className="mt-6 text-center text-[0.9375rem] leading-[1.7] text-gray-500 max-w-2xl mx-auto">
                {PRICING_FACT}
              </p>
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
                Related:{' '}
                <Link href="/solutions/" className="font-semibold text-[#4a96a3] hover:underline">
                  AI fraud analyst for Shopify, Stripe, and Adyen merchants
                </Link>
                {' · '}
                <Link href="/alternatives/payment-platform-tools/" className="font-semibold text-[#4a96a3] hover:underline">
                  vs Radar, Flow, Blockify, and RevenueProtect
                </Link>
                {' · '}
                <Link href="/alternatives/nofraud/" className="font-semibold text-[#4a96a3] hover:underline">
                  vs NoFraud and SMB tools
                </Link>
                {' · '}
                <Link href="/blog/fraudpulse-does-not-replace-stripe-radar-shopify-flow/" className="font-semibold text-[#4a96a3] hover:underline">
                  why we do not replace Radar, Flow, Blockify, or RevenueProtect
                </Link>
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={stackFaqs} variant="light" />
            </Reveal>
          </div>
        </section>

        <PageCta
          pulseId="stackCtaPulse"
          title="See ranked changes"
          highlight="on your data."
          body="Connect Shopify, Stripe, or Adyen. Keep Radar, Flow, Blockify, and RevenueProtect. Get the next rule and action changes ranked for your mix."
        />
      </main>

      <Footer />
    </div>
  );
}
