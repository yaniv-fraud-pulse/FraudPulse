'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import FaqAccordion from '../../components/FaqAccordion';
import { Eyebrow, HeroBackdrop, SoftWash } from '../../components/Brand';
import { faqPageJsonLd } from '../../lib/geo';
import type { FaqItem } from '../../lib/homeFaq';

const INTRO =
  'A chargeback ratio is disputes divided by payments. Visa’s VAMP excessive-merchant line for the U.S., Canada, the EU, and AP is 1.50% as of 1 April 2026, down from 2.20%. This page divides the numbers you type. It is not your Visa report.';

/** Visa VAMP excessive-merchant line (U.S., Canada, EU, AP) from 1 April 2026, in basis points. */
const VAMP_LINE_BPS = 150;

type Processor = 'shopify' | 'stripe' | 'adyen';

const PROCESSOR_ADVICE: Record<Processor, string> = {
  shopify:
    'Put a hard block that must fire before checkout in Blockify or Shopify Fraud Control. Put a hold that needs AVS, CVV, or risk level in Shopify Flow, and capture only after that check passes.',
  stripe:
    'In Stripe Radar, use review before block, and count the good orders in that queue before the rule declines anyone.',
  adyen: 'In Adyen RevenueProtect, run the new rule in test before it blocks.',
};

const faqs: FaqItem[] = [
  {
    q: 'What is a chargeback ratio?',
    a: 'Disputes divided by payments.',
  },
  {
    q: 'What is the Visa VAMP excessive-merchant threshold?',
    a: '1.50% (150 bps) as of 1 April 2026 for the U.S., Canada, the EU, and AP, down from 2.20%.',
  },
  {
    q: 'Does this page send my numbers to FraudPulse?',
    a: 'No. The math runs in the browser.',
  },
];

/** Visa flags a merchant only with at least this many fraud reports + disputes in the month (U.S., Canada, EU, AP). */
const VAMP_MIN_COUNT = 1500;

/** Parses a typed whole-number count. Commas and spaces are allowed. Empty or invalid input returns null. */
function parseInput(raw: string): number | null {
  const cleaned = raw.replace(/[,\s]/g, '');
  if (!/^\d+$/.test(cleaned)) return null;
  const n = Number(cleaned);
  return Number.isSafeInteger(n) ? n : null;
}

type RatioResult =
  | { kind: 'empty' }
  | { kind: 'invalid'; message: string }
  | { kind: 'ok'; percent: string; bps: number };

/** numerator ÷ divisor as a two-decimal percent and whole basis points. Never divides by 0. */
function ratio(numerator: number | null, divisor: number | null, divisorLabel: string): RatioResult {
  if (numerator === null || divisor === null) return { kind: 'empty' };
  if (divisor === 0) {
    return { kind: 'invalid', message: `Enter your ${divisorLabel}. It must be more than 0.` };
  }
  const bps = Math.round((numerator / divisor) * 10000);
  return { kind: 'ok', percent: (bps / 100).toFixed(2), bps };
}

function NumberField({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-[0.9375rem] font-semibold text-gray-900 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[1.0625rem] text-gray-900 tabular-nums outline-none transition-colors focus:border-[#5ba8b4] focus:ring-2 focus:ring-[#5ba8b4]/20"
      />
      {hint ? <p className="mt-1.5 text-[0.8125rem] text-gray-500">{hint}</p> : null}
      {value.trim() !== '' && parseInput(value) === null ? (
        <p className="mt-1.5 text-[0.8125rem] text-[#b42318]">Enter a whole number of 0 or more.</p>
      ) : null}
    </div>
  );
}

function ResultPanel({ result, emptyText }: { result: RatioResult; emptyText: string }) {
  return (
    <div aria-live="polite" className="rounded-2xl border border-gray-200/80 bg-[#f8f9fa] px-5 py-5 sm:px-6">
      {result.kind === 'ok' ? (
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2.5rem] sm:text-[3rem] leading-none tabular-nums">
            {result.percent}%
          </span>
          <span className="text-[1.125rem] font-semibold text-gray-600 tabular-nums">{result.bps} bps</span>
        </p>
      ) : (
        <p className={`text-[1rem] leading-[1.6] ${result.kind === 'invalid' ? 'text-[#b42318] font-semibold' : 'text-gray-500'}`}>
          {result.kind === 'invalid' ? result.message : emptyText}
        </p>
      )}
    </div>
  );
}

const RED = 'text-[#b42318] bg-[#fef3f2] border-[#fecdca]';

/** Exact integer comparison with Visa's ≥ 150 bps line (no float rounding). */
function vampState(count: number, settled: number): { label: string; tone: string } {
  const lhs = count * 10000;
  const rhs = VAMP_LINE_BPS * settled;
  if (lhs < rhs) return { label: 'Under 1.50%', tone: 'text-[#067647] bg-[#ecfdf3] border-[#abefc6]' };
  if (lhs === rhs) return { label: 'At 1.50%', tone: RED };
  return { label: 'Over 1.50%', tone: RED };
}

/** How many more fraud reports + disputes fit before the ratio reaches 1.50%. */
function headroom(count: number, settled: number): number {
  // Largest total n with n / settled < 1.5%, i.e. n * 1000 < 15 * settled.
  const maxBelow = Math.ceil((15 * settled) / 1000) - 1;
  return Math.max(0, maxBelow - count);
}

const fmt = (n: number) => n.toLocaleString('en-US');

export default function ChargebackRatioPage() {
  const [disputes, setDisputes] = useState('');
  const [payments, setPayments] = useState('');
  const [tc40, setTc40] = useState('');
  const [tc15, setTc15] = useState('');
  const [sales, setSales] = useState('');
  const [processor, setProcessor] = useState<Processor>('shopify');
  const processorId = useId();

  const cbResult = ratio(parseInput(disputes), parseInput(payments), 'number of payments');

  const tc40n = parseInput(tc40);
  const tc15n = parseInput(tc15);
  const settledN = parseInput(sales);
  const vampCount = tc40n === null || tc15n === null ? null : tc40n + tc15n;
  const vampResult = ratio(vampCount, settledN, 'number of settled card-not-present Visa transactions');
  const ok = vampResult.kind === 'ok' && vampCount !== null && settledN !== null && tc40n !== null && tc15n !== null;
  const state = ok ? vampState(vampCount, settledN) : null;
  const overRatio = state !== null && state.label !== 'Under 1.50%';
  const room = ok ? headroom(vampCount, settledN) : 0;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-12 sm:pt-20 sm:pb-16">
            <Eyebrow>Free tool</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">Chargeback ratio and</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">Visa VAMP calculator</span>
            </h1>
            <p className="ai-answer text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] max-w-[820px] mx-auto text-balance text-gray-600 anim-fadeUp delay-300">
              {INTRO}
            </p>
          </div>
        </section>

        <section className="pb-12 sm:pb-20 px-5 sm:px-10 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {/* 1) Chargeback ratio */}
            <article className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8">
              <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4] mb-2">Calculator 1</p>
              <h2 className="font-bold text-gray-900 text-[1.5rem] mb-5 tracking-[-0.02em]">Chargeback ratio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <NumberField label="Disputes (count)" value={disputes} onChange={setDisputes} />
                <NumberField label="Payments (count)" value={payments} onChange={setPayments} />
              </div>
              <ResultPanel result={cbResult} emptyText="Type your disputes and payments to see the ratio." />
              <p className="mt-4 text-[1rem] leading-[1.7] text-gray-600">
                Processors watch this rate, not the raw dispute count.
              </p>
            </article>

            {/* 2) Visa VAMP worksheet */}
            <article className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8">
              <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4] mb-2">Calculator 2</p>
              <h2 className="font-bold text-gray-900 text-[1.5rem] mb-2 tracking-[-0.02em]">Visa VAMP worksheet</h2>
              <p className="text-[1rem] leading-[1.7] text-gray-600 mb-5">
                Visa counts transactions, not amounts: (TC40 fraud reports + TC15 disputes) ÷ settled transactions (TC05). Card-not-present Visa transactions only, for one month.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <NumberField label="TC40 fraud reports (count)" value={tc40} onChange={setTc40} />
                <NumberField label="TC15 disputes (count)" value={tc15} onChange={setTc15} />
                <NumberField label="Settled transactions, TC05 (count)" value={sales} onChange={setSales} />
              </div>
              <div className="mb-5">
                <label htmlFor={processorId} className="block text-[0.9375rem] font-semibold text-gray-900 mb-1.5">
                  Processor
                </label>
                <select
                  id={processorId}
                  value={processor}
                  onChange={(e) => setProcessor(e.target.value as Processor)}
                  className="w-full sm:w-auto rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[1.0625rem] text-gray-900 outline-none focus:border-[#5ba8b4] focus:ring-2 focus:ring-[#5ba8b4]/20"
                >
                  <option value="shopify">Shopify</option>
                  <option value="stripe">Stripe</option>
                  <option value="adyen">Adyen</option>
                </select>
              </div>

              <ResultPanel result={vampResult} emptyText="Type the TC40, TC15, and settled transaction counts to see the VAMP ratio." />

              {state ? (
                <div className="mt-4 flex flex-col gap-3">
                  <p className="flex flex-wrap items-center gap-2 text-[1rem] leading-[1.6] text-gray-700">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-[0.875rem] font-semibold ${state.tone}`}>
                      {state.label}
                    </span>
                    <span>
                      Compared with 1.50% (150 bps), the excessive-merchant line published for the U.S., Canada, the EU, and AP.
                    </span>
                  </p>
                  {ok ? (
                    <ul className="flex flex-col gap-2 text-[1rem] leading-[1.6] text-gray-700">
                      <li>
                        {overRatio
                          ? vampCount >= VAMP_MIN_COUNT
                            ? `Both Visa conditions are met: 1.50% or higher, and ${fmt(vampCount)} fraud reports plus disputes (Visa's minimum is ${fmt(VAMP_MIN_COUNT)} a month).`
                            : `The ratio is at or over the line, but ${fmt(vampCount)} fraud reports plus disputes is under Visa's ${fmt(VAMP_MIN_COUNT)}-a-month minimum for the excessive-merchant program. Your acquirer can still act on the ratio.`
                          : `You can take up to ${fmt(room)} more fraud reports or disputes this month and stay under 1.50%.`}
                      </li>
                      {vampCount > 0 ? (
                        <li>
                          Fraud reports are {Math.round((tc40n / vampCount) * 100)}% of the total and disputes are{' '}
                          {100 - Math.round((tc40n / vampCount) * 100)}%.
                        </li>
                      ) : null}
                    </ul>
                  ) : null}
                  <p className="text-[1rem] leading-[1.7] text-gray-900 font-semibold">{PROCESSOR_ADVICE[processor]}</p>
                  <p className="text-[0.9375rem] text-gray-500">
                    Want this ranked from your own disputes?{' '}
                    <Link href="/book-a-demo/" className="font-semibold text-[#4a96a3] hover:underline">
                      Book a demo
                    </Link>
                    .
                  </p>
                </div>
              ) : null}

              <p className="mt-5 text-[1rem] leading-[1.7] text-gray-600">
                A refund after authorization does not remove a TC40 unless it was resolved through Visa RDR or Order Insight before the dispute stage. Visa also leaves out fraud reports that qualify for Compelling Evidence 3.0. The 1.50% line applies to merchants when the acquirer is under its own limits, and your acquirer can hold you to a lower line.
              </p>
            </article>

            <p className="text-[1rem] leading-[1.7] text-gray-600 text-center max-w-3xl mx-auto">
              This page only does arithmetic. It is not FraudPulse analysis. FraudPulse ranks specific rule changes for Blockify, Shopify Fraud Control, Shopify Flow, Stripe Radar, and Adyen RevenueProtect from your own disputes:{' '}
              <Link href="/how-it-works/" className="font-semibold text-[#4a96a3] hover:underline">
                how it works
              </Link>
              . Read more:{' '}
              <Link href="/blog/visa-vamp-threshold-reduction-2026/" className="font-semibold text-[#4a96a3] hover:underline">
                Visa VAMP threshold reduction in 2026
              </Link>
              {' · '}
              <Link href="/blog/stripe-radar-pricing-2027-visa-vamp-guide/" className="font-semibold text-[#4a96a3] hover:underline">
                Stripe Radar 2027 pricing and Visa VAMP
              </Link>
              .
            </p>
          </div>
        </section>

        <SoftWash>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.05] text-[2.25rem] sm:text-[3rem] mb-5 text-balance">
                Frequently asked questions
              </h2>
            </div>
            <FaqAccordion faqs={faqs} variant="light" />
          </div>
        </SoftWash>
      </main>

      <Footer />
    </div>
  );
}
