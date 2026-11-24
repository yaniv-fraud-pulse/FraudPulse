'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import FaqAccordion from '../../components/FaqAccordion';
import { Eyebrow, HeroBackdrop, SoftWash } from '../../components/Brand';
import { useClientValue } from '../../hooks/useClientValue';
import { faqPageJsonLd } from '../../lib/geo';
import type { FaqItem } from '../../lib/homeFaq';

const INTRO =
  'A chargeback ratio is disputes divided by payments. Visa’s VAMP excessive-merchant line for the U.S., Canada, the EU, and AP is 1.50% as of 1 April 2026, down from 2.20%. This page divides the numbers you type. It is not your Visa report.';

/** Visa VAMP excessive-merchant line (U.S., Canada, EU, AP) from 1 April 2026, in basis points. */
const VAMP_LINE_BPS = 150;
/** Visa flags a merchant only with at least this many fraud reports + disputes in the month (U.S., Canada, EU, AP). */
const VAMP_MIN_COUNT = 1500;
/** Mastercard Excessive Chargeback Merchant (ECM) and High ECM tiers. */
const MC_ECM = { bps: 150, count: 100 };
const MC_HECM = { bps: 300, count: 300 };

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

/* ---------- Shareable link: numbers live in the URL fragment (#), which browsers never send to a server. ---------- */

const FIELD_KEYS = ['d', 'p', 'f', 'ds', 's', 'mc', 'mt'] as const;
type FieldKey = (typeof FIELD_KEYS)[number];
type Vals = Record<FieldKey, string> & { proc: Processor; rdr: number; cut: number };

const EMPTY: Vals = { d: '', p: '', f: '', ds: '', s: '', mc: '', mt: '', proc: 'shopify', rdr: 0, cut: 0 };

// Read the shared numbers once, as soon as this page's code loads (before hydration).
let sharedHash = '';
if (typeof window !== 'undefined' && window.location.hash.startsWith('#v=')) {
  sharedHash = window.location.hash;
}
const getSharedHash = () => sharedHash;

/** Remove #v=... from the address bar so analytics scripts never see the numbers. */
function stripSharedHash() {
  if (window.location.hash.startsWith('#v=')) {
    window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
  }
}

function clampPct(raw: string | null): number {
  const n = Number(raw);
  return Number.isInteger(n) && n >= 0 && n <= 100 ? n : 0;
}

function valsFromHash(hash: string): Vals {
  if (!hash.startsWith('#v=')) return EMPTY;
  const q = new URLSearchParams(hash.slice(3).replace(/!/g, '&'));
  const out: Vals = { ...EMPTY };
  for (const k of FIELD_KEYS) {
    const v = q.get(k);
    if (v && /^\d{1,15}$/.test(v)) out[k] = v;
  }
  const proc = q.get('proc');
  if (proc === 'shopify' || proc === 'stripe' || proc === 'adyen') out.proc = proc;
  out.rdr = clampPct(q.get('rdr'));
  out.cut = clampPct(q.get('cut'));
  return out;
}

function hashFromVals(v: Vals): string {
  const parts: string[] = [];
  for (const k of FIELD_KEYS) {
    const n = parseInput(v[k]);
    if (n !== null) parts.push(`${k}=${n}`);
  }
  if (v.proc !== 'shopify') parts.push(`proc=${v.proc}`);
  if (v.rdr) parts.push(`rdr=${v.rdr}`);
  if (v.cut) parts.push(`cut=${v.cut}`);
  return parts.length ? `#v=${parts.join('!')}` : '';
}

/* ---------- Math ---------- */

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

/** Exact integer test: count / total ≥ lineBps / 10,000 (no float rounding). */
const atOrOver = (count: number, total: number, lineBps: number) => count * 10000 >= lineBps * total;

const GREEN = 'text-[#067647] bg-[#ecfdf3] border-[#abefc6]';
const AMBER = 'text-[#b54708] bg-[#fffaeb] border-[#fedf89]';
const RED = 'text-[#b42318] bg-[#fef3f2] border-[#fecdca]';

function vampState(count: number, settled: number): { label: string; tone: string } {
  const lhs = count * 10000;
  const rhs = VAMP_LINE_BPS * settled;
  if (lhs < rhs) return { label: 'Under 1.50%', tone: GREEN };
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

/* ---------- UI pieces ---------- */

function NumberField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
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

function Badge({ label, tone }: { label: string; tone: string }) {
  return <span className={`inline-flex rounded-full border px-3 py-1 text-[0.875rem] font-semibold ${tone}`}>{label}</span>;
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="flex justify-between gap-3 text-[0.9375rem] font-semibold text-gray-900 mb-1.5">
        <span>{label}</span>
        <span className="tabular-nums text-[#4a96a3]">{value}%</span>
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#4a96a3]"
      />
    </div>
  );
}

const cardClass = 'rounded-3xl border border-gray-200/80 bg-white p-6';
const linkClass = 'font-semibold text-[#4a96a3] hover:underline';

/* ---------- Page ---------- */

export default function ChargebackRatioPage() {
  const shared = useClientValue(getSharedHash, '');
  // Until the visitor edits anything, show the numbers from a shared link (if any).
  const [edited, setEdited] = useState<Vals | null>(null);
  const vals = edited ?? valsFromHash(shared);
  const set = <K extends keyof Vals>(k: K, v: Vals[K]) => setEdited({ ...vals, [k]: v });
  const [copied, setCopied] = useState<'idle' | 'copied' | 'failed'>('idle');
  const processorId = useId();

  // Next.js writes its own URL (with the hash) during hydration, so strip after that has run.
  useEffect(() => {
    const t = window.setTimeout(stripSharedHash, 0);
    return () => window.clearTimeout(t);
  }, []);

  // 1) Chargeback ratio
  const cbResult = ratio(parseInput(vals.d), parseInput(vals.p), 'number of payments');

  // 2) Visa VAMP (counts)
  const tc40n = parseInput(vals.f);
  const tc15n = parseInput(vals.ds);
  const settledN = parseInput(vals.s);
  const vampCount = tc40n === null || tc15n === null ? null : tc40n + tc15n;
  const vampResult = ratio(vampCount, settledN, 'number of settled card-not-present Visa transactions');
  const vampOk = vampResult.kind === 'ok' && vampCount !== null && settledN !== null && tc40n !== null && tc15n !== null;
  const state = vampOk ? vampState(vampCount, settledN) : null;
  const overRatio = state !== null && state.label !== 'Under 1.50%';
  const room = vampOk ? headroom(vampCount, settledN) : 0;

  // What-if
  const whatIfTc40 = tc40n === null ? 0 : Math.round((tc40n * (100 - vals.cut)) / 100);
  const whatIfTc15 = tc15n === null ? 0 : Math.round((tc15n * (100 - vals.rdr)) / 100);
  const whatIfCount = whatIfTc40 + whatIfTc15;
  const whatIf = vampOk ? ratio(whatIfCount, settledN, '') : null;
  const whatIfState = vampOk ? vampState(whatIfCount, settledN) : null;

  // 3) Mastercard ECM
  const mcN = parseInput(vals.mc);
  const mtN = parseInput(vals.mt);
  const mcResult = ratio(mcN, mtN, 'number of Mastercard transactions last month');
  let mcState: { label: string; tone: string; note: string } | null = null;
  if (mcResult.kind === 'ok' && mcN !== null && mtN !== null) {
    if (atOrOver(mcN, mtN, MC_HECM.bps) && mcN >= MC_HECM.count) {
      mcState = { label: 'High Excessive (HECM) tier', tone: RED, note: '3.00% or higher, with 300 or more chargebacks.' };
    } else if (atOrOver(mcN, mtN, MC_ECM.bps) && mcN >= MC_ECM.count) {
      mcState = { label: 'Excessive (ECM) tier', tone: RED, note: '1.50% or higher, with 100 or more chargebacks.' };
    } else if (atOrOver(mcN, mtN, MC_ECM.bps)) {
      mcState = {
        label: 'Over 1.50%, under 100 chargebacks',
        tone: AMBER,
        note: `The ratio is over the line, but ${fmt(mcN)} chargebacks is under Mastercard's 100-a-month minimum. Your acquirer can still act on the ratio.`,
      };
    } else {
      mcState = { label: 'Under 1.50%', tone: GREEN, note: 'Below the Excessive Chargeback Merchant line.' };
    }
  }

  const hasAny = hashFromVals(vals) !== '';

  async function copyLink() {
    const url = `${window.location.origin}${window.location.pathname}${hashFromVals(vals)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied('copied');
    } catch {
      setCopied('failed');
    }
  }

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
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* 1) Chargeback ratio */}
            <article className={cardClass}>
              <h2 className="font-bold text-gray-900 text-[1.5rem] mb-5 tracking-[-0.02em]">Chargeback ratio</h2>
              <div className="grid grid-cols-1 gap-4 mb-5">
                <NumberField label="Disputes (count)" value={vals.d} onChange={(v) => set('d', v)} />
                <NumberField label="Payments (count)" value={vals.p} onChange={(v) => set('p', v)} />
              </div>
              <ResultPanel result={cbResult} emptyText="Type your disputes and payments to see the ratio." />
              <p className="mt-4 text-[1rem] leading-[1.7] text-gray-600">
                Processors watch this rate, not the raw dispute count.
              </p>
            </article>

            {/* 2) Visa VAMP worksheet */}
            <article className={cardClass}>
              <h2 className="font-bold text-gray-900 text-[1.5rem] mb-2 tracking-[-0.02em]">Visa VAMP worksheet</h2>
              <p className="text-[1rem] leading-[1.7] text-gray-600 mb-5">
                Visa counts transactions, not amounts: (TC40 fraud reports + TC15 disputes) ÷ settled transactions (TC05). Card-not-present Visa transactions only, for one month.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-5">
                <NumberField label="TC40 fraud reports (count)" value={vals.f} onChange={(v) => set('f', v)} />
                <NumberField label="TC15 disputes (count)" value={vals.ds} onChange={(v) => set('ds', v)} />
                <NumberField label="Settled transactions, TC05 (count)" value={vals.s} onChange={(v) => set('s', v)} />
              </div>
              <div className="mb-5">
                <label htmlFor={processorId} className="block text-[0.9375rem] font-semibold text-gray-900 mb-1.5">
                  Processor
                </label>
                <select
                  id={processorId}
                  value={vals.proc}
                  onChange={(e) => set('proc', e.target.value as Processor)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[1.0625rem] text-gray-900 outline-none focus:border-[#5ba8b4] focus:ring-2 focus:ring-[#5ba8b4]/20"
                >
                  <option value="shopify">Shopify</option>
                  <option value="stripe">Stripe</option>
                  <option value="adyen">Adyen</option>
                </select>
              </div>

              <ResultPanel result={vampResult} emptyText="Type the TC40, TC15, and settled transaction counts to see the VAMP ratio." />

              {state && vampOk ? (
                <div className="mt-4 flex flex-col gap-3">
                  <p className="flex flex-wrap items-center gap-2 text-[1rem] leading-[1.6] text-gray-700">
                    <Badge label={state.label} tone={state.tone} />
                    <span>
                      Compared with 1.50% (150 bps), the excessive-merchant line published for the U.S., Canada, the EU, and AP.
                    </span>
                  </p>
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
                  <p className="text-[1rem] leading-[1.7] text-gray-900 font-semibold">{PROCESSOR_ADVICE[vals.proc]}</p>
                  <p className="text-[0.9375rem] text-gray-500">
                    Want this ranked from your own disputes?{' '}
                    <Link href="/book-a-demo/" className={linkClass}>
                      Book a demo
                    </Link>
                    .
                  </p>

                  {/* What-if */}
                  <div className="mt-3 rounded-2xl border border-gray-200/80 p-5 sm:p-6">
                    <h3 className="font-bold text-gray-900 text-[1.125rem] mb-4 tracking-[-0.02em]">What if</h3>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                      <Slider
                        label="Disputes resolved before the dispute stage (RDR or Order Insight)"
                        value={vals.rdr}
                        onChange={(v) => set('rdr', v)}
                      />
                      <Slider label="Fewer fraud reports after a rule change" value={vals.cut} onChange={(v) => set('cut', v)} />
                    </div>
                    {whatIf && whatIf.kind === 'ok' && whatIfState ? (
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[1rem] text-gray-700" aria-live="polite">
                        <span className="font-extrabold text-gray-900 text-[1.75rem] tracking-[-0.03em] tabular-nums">{whatIf.percent}%</span>
                        <span className="font-semibold text-gray-600 tabular-nums">{whatIf.bps} bps</span>
                        <Badge label={whatIfState.label} tone={whatIfState.tone} />
                        <span className="tabular-nums">
                          {fmt(whatIfTc40)} fraud reports + {fmt(whatIfTc15)} disputes
                        </span>
                      </p>
                    ) : null}
                    <p className="mt-3 text-[0.875rem] leading-[1.6] text-gray-500">
                      This keeps settled transactions the same. A rule that blocks orders also lowers settled transactions, which pushes the ratio up a little.
                    </p>
                  </div>
                </div>
              ) : null}

              <p className="mt-5 text-[1rem] leading-[1.7] text-gray-600">
                A refund after authorization does not remove a TC40 unless it was resolved through Visa RDR or Order Insight before the dispute stage. Visa also leaves out fraud reports that qualify for Compelling Evidence 3.0. The 1.50% line applies to merchants when the acquirer is under its own limits, and your acquirer can hold you to a lower line.
              </p>
            </article>

            {/* 3) Mastercard */}
            <article className={cardClass}>
              <h2 className="font-bold text-gray-900 text-[1.5rem] mb-2 tracking-[-0.02em]">Mastercard Excessive Chargeback Program</h2>
              <p className="text-[1rem] leading-[1.7] text-gray-600 mb-5">
                Mastercard divides this month&apos;s chargebacks by last month&apos;s Mastercard transactions. The Excessive Chargeback Merchant (ECM) tier starts at 1.50% with 100 or more chargebacks. The High Excessive (HECM) tier starts at 3.00% with 300 or more.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-5">
                <NumberField label="Mastercard chargebacks this month (count)" value={vals.mc} onChange={(v) => set('mc', v)} />
                <NumberField label="Mastercard transactions last month (count)" value={vals.mt} onChange={(v) => set('mt', v)} />
              </div>
              <ResultPanel result={mcResult} emptyText="Type this month's chargebacks and last month's transactions to see the ratio." />
              {mcState ? (
                <p className="mt-4 flex flex-wrap items-center gap-2 text-[1rem] leading-[1.6] text-gray-700">
                  <Badge label={mcState.label} tone={mcState.tone} />
                  <span>{mcState.note}</span>
                </p>
              ) : null}
            </article>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-2 text-center">
              <button
                type="button"
                onClick={copyLink}
                disabled={!hasAny}
                className="rounded-full bg-[#4a96a3] px-6 py-3 text-[1rem] font-semibold text-white transition-colors hover:bg-[#3d8590] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied === 'copied' ? 'Link copied' : 'Copy a link with these numbers'}
              </button>
              <p className="text-[0.875rem] text-gray-500 max-w-xl" aria-live="polite">
                {copied === 'failed'
                  ? 'Your browser blocked copying. Try the button again.'
                  : 'The numbers go after the # in the link. Browsers do not send that part to any server. Anyone you send the link to will see them.'}
              </p>
            </div>

            <p className="text-[1rem] leading-[1.7] text-gray-600 text-center max-w-3xl mx-auto">
              This page only does arithmetic. It is not FraudPulse analysis. FraudPulse ranks specific rule changes for Blockify, Shopify Fraud Control, Shopify Flow, Stripe Radar, and Adyen RevenueProtect from your own disputes:{' '}
              <Link href="/how-it-works/" className={linkClass}>
                how it works
              </Link>
              . Read more:{' '}
              <Link href="/blog/visa-vamp-threshold-reduction-2026/" className={linkClass}>
                Visa VAMP threshold reduction in 2026
              </Link>
              {' · '}
              <Link href="/blog/stripe-radar-pricing-2027-visa-vamp-guide/" className={linkClass}>
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
