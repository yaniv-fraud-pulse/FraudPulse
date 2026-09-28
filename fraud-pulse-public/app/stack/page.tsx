'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import { TrackedLink } from '../components/TrackedCta';
import JsonLd from '../components/JsonLd';
import { PageUpdated } from '../components/GeoBits';
import { faqPageJsonLd, PAGE_LAST_UPDATED } from '../lib/geo';
import type { FaqItem } from '../lib/homeFaq';

const STACK_ANSWER =
  'FraudPulse sits on Stripe Radar, Shopify Protect, Shopify Flow, and Blockify. Those tools enforce or automate at checkout. Adyen is a data source: connect Adyen transactions and disputes, then apply ranked recommendations in the tools you already run. FraudPulse does not replace Radar, Protect, Flow, or Blockify, and it is not Adyen RevenueProtect.';

const layers = [
  {
    kicker: 'Enforcement',
    name: 'Stripe Radar',
    role: 'Scores and blocks risk at Stripe checkout. Keep it on.',
    output: 'FraudPulse ranks specific Radar rule changes from your chargeback mix, with estimated fraud-capture and false-positive impact.',
  },
  {
    kicker: 'Enforcement',
    name: 'Shopify Protect',
    role: 'Shopify’s built-in checkout risk layer. Keep it on.',
    output: 'FraudPulse ranks Protect settings that match your dispute types so you stop guessing thresholds.',
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
    kicker: 'Data source',
    name: 'Adyen',
    role: 'Transaction and dispute data you connect. Adyen is not the rule console we configure in this product.',
    output: 'FraudPulse analyzes Adyen history the same way as Shopify or Stripe, then you apply ranked changes in Radar, Protect, Flow, or Blockify - not Adyen RevenueProtect.',
  },
];

const stackFaqs: FaqItem[] = [
  {
    q: 'Does FraudPulse replace Stripe Radar, Shopify Protect, Shopify Flow, or Blockify?',
    a: 'No. Those products remain the enforcement or automation layer at checkout. FraudPulse is the AI analyst: it classifies chargebacks and ranks specific rule or workflow changes with estimated impact. You keep Radar, Protect, Flow, and Blockify.',
  },
  {
    q: 'How does Adyen fit if FraudPulse is not Adyen RevenueProtect?',
    a: 'Adyen is a data source. Connect Adyen transactions and disputes, get the same ranked analysis, then apply changes in the tools you already run - Radar, Protect, Flow, or Blockify. We do not claim native Adyen risk-rule output.',
  },
  {
    q: 'What do I change after I connect data?',
    a: 'You get a ranked list of Radar, Protect, Flow, or Blockify changes tied to your chargeback types, each with estimated fraud-capture and false-positive impact. FraudPulse does not sit in the approval path and is not representment.',
  },
];

export default function StackPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={faqPageJsonLd(stackFaqs)} />
      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 px-5 sm:px-10 bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative max-w-3xl mx-auto py-16 sm:py-24 text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                Your stack
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.5rem] sm:text-[3.5rem]">
                Using FraudPulse with Radar, Protect, Flow, Blockify, and Adyen
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 mb-4">
                Keep the tools that enforce or automate at checkout. FraudPulse is the AI analyst that ranks which rules to change for your chargeback mix.
              </p>
              <p className="ai-answer text-[1rem] sm:text-[1.0625rem] leading-[1.7] text-gray-600 mb-4">
                {STACK_ANSWER}
              </p>
              <PageUpdated date={PAGE_LAST_UPDATED.stack} />
            </Reveal>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-10 text-[1.75rem] sm:text-[2.25rem]">
                Enforcement stays. The analyst ranks the next change.
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {layers.map((layer, i) => (
                <Reveal key={layer.name} animation="anim-fadeUp" delay={([0, 75, 150, 225, 300] as const)[i] ?? 0}>
                  <div
                    className="rounded-[16px] border bg-white p-6 sm:p-8"
                    style={{ borderColor: '#e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                  >
                    <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4] mb-2">
                      {layer.kicker}
                    </p>
                    <h3 className="font-bold text-gray-900 text-[1.25rem] mb-2 tracking-[-0.02em]">{layer.name}</h3>
                    <p className="text-[1.0625rem] leading-[1.7] text-gray-600 mb-3">{layer.role}</p>
                    <p className="text-[1.0625rem] leading-[1.7] text-gray-700">{layer.output}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-8 text-[1.75rem] sm:text-[2.25rem]">
              FAQ
            </h2>
            <dl className="flex flex-col gap-6">
              {stackFaqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-semibold text-[1.0625rem] text-gray-900 mb-2">{faq.q}</dt>
                  <dd className="text-[1.0625rem] leading-[1.75] text-gray-600">{faq.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-[0.9375rem] text-gray-500">
              Related:{' '}
              <Link href="/solutions/" className="font-semibold text-[#4a96a3] hover:underline">
                AI fraud analyst for Shopify, Stripe, and Adyen merchants
              </Link>
              {' · '}
              <Link href="/alternatives/payment-platform-tools/" className="font-semibold text-[#4a96a3] hover:underline">
                vs Radar, Protect, Flow, and Blockify
              </Link>
              {' · '}
              <Link href="/alternatives/nofraud/" className="font-semibold text-[#4a96a3] hover:underline">
                vs NoFraud and SMB tools
              </Link>
              {' · '}
              <Link href="/blog/fraudpulse-does-not-replace-stripe-radar-shopify-protect/" className="font-semibold text-[#4a96a3] hover:underline">
                why we do not replace Radar or Protect
              </Link>
            </p>
          </div>
        </section>

        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.25rem] sm:text-[3rem]">
              See ranked changes on your data
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] max-w-[520px] mx-auto mb-10 text-gray-400">
              Connect Shopify, Stripe, or Adyen. Keep Radar, Protect, Flow, and Blockify. Get the next rule changes ranked for your mix.
            </p>
            <TrackedLink
              event="demo_cta_clicked"
              href="/book-a-demo/"
              className="inline-flex items-center justify-center rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              Book a Demo
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
