'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import FaqAccordion from '../../components/FaqAccordion';
import { Eyebrow, FrostedBox, HeroBackdrop, SoftWash } from '../../components/Brand';
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

const PROCESSOR_TOOLS: Record<Processor, string> = {
  shopify: 'Blockify · Shopify Fraud Control · Shopify Flow',
  stripe: 'Stripe Radar',
  adyen: 'Adyen RevenueProtect',
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

type Tone = 'good' | 'warn' | 'bad';
const TONE_BADGE: Record<Tone, string> = {
  good: 'text-[#067647] bg-[#ecfdf3] border-[#abefc6]',
  warn: 'text-[#b54708] bg-[#fffaeb] border-[#fedf89]',
  bad: 'text-[#b42318] bg-[#fef3f2] border-[#fecdca]',
};
const TONE_FILL: Record<Tone, string> = {
  good: 'linear-gradient(90deg, #5ba8b4, #4a96a3)',
  warn: 'linear-gradient(90deg, #f5b04c, #dc8a1a)',
  bad: 'linear-gradient(90deg, #f0857a, #d92d20)',
};

function vampState(count: number, settled: number): { label: string; tone: Tone } {
  const lhs = count * 10000;
  const rhs = VAMP_LINE_BPS * settled;
  if (lhs < rhs) return { label: 'Under 1.50%', tone: 'good' };
  if (lhs === rhs) return { label: 'At 1.50%', tone: 'bad' };
  return { label: 'Over 1.50%', tone: 'bad' };
}

/** How many more fraud reports + disputes fit before the ratio reaches 1.50%. */
function headroom(count: number, settled: number): number {
  // Largest total n with n / settled < 1.5%, i.e. n * 1000 < 15 * settled.
  const maxBelow = Math.ceil((15 * settled) / 1000) - 1;
  return Math.max(0, maxBelow - count);
}

const fmt = (n: number) => n.toLocaleString('en-US');

/* ---------- UI pieces ---------- */

const linkClass = 'font-semibold text-[#4a96a3] hover:underline';

function NumberField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const id = useId();
  const invalid = value.trim() !== '' && parseInput(value) === null;
  return (
    <div>
      <label htmlFor={id} className="block text-[0.8125rem] font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={invalid}
        className={`w-full rounded-xl border bg-gray-50/60 px-4 py-2.5 text-[1.0625rem] font-semibold text-gray-900 tabular-nums placeholder:font-normal placeholder:text-gray-300 outline-none transition-all focus:bg-white focus:border-[#5ba8b4] focus:ring-4 focus:ring-[#5ba8b4]/15 ${invalid ? 'border-[#fda29b]' : 'border-gray-200'}`}
      />
      {invalid ? <p className="mt-1.5 text-[0.8125rem] text-[#b42318]">Enter a whole number of 0 or more.</p> : null}
    </div>
  );
}

function Badge({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.8125rem] font-semibold ${TONE_BADGE[tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}

/** Horizontal meter with threshold markers. Scale runs from 0 to max bps. */
function Meter({ bps, tone, marks, max }: { bps: number; tone: Tone; marks: { bps: number; label: string }[]; max: number }) {
  const pct = (v: number) => `${Math.min(100, (v / max) * 100)}%`;
  return (
    <div className="mt-4 pb-6" aria-hidden>
      <div className="relative h-2 rounded-full bg-gray-200/80">
        <div className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500" style={{ width: pct(bps), background: TONE_FILL[tone] }} />
        {marks.map((m) => (
          <div key={m.bps} className="absolute -top-1 -bottom-1 w-px bg-gray-900/60" style={{ left: pct(m.bps) }}>
            <span className="absolute top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[0.6875rem] font-semibold text-gray-500 tabular-nums">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultPanel({
  result,
  emptyText,
  children,
}: {
  result: RatioResult;
  emptyText: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      aria-live="polite"
      className="mt-auto rounded-2xl border border-[#5ba8b4]/15 px-5 py-5"
      style={{ background: 'linear-gradient(160deg, rgba(91,168,180,0.07) 0%, rgba(125,107,160,0.06) 100%)' }}
    >
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-2">Result</p>
      {result.kind === 'ok' ? (
        <>
          <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="font-extrabold text-gray-900 tracking-[-0.045em] text-[2.75rem] leading-none tabular-nums">
              {result.percent}%
            </span>
            <span className="rounded-md bg-white/80 border border-gray-200/80 px-2 py-0.5 text-[0.875rem] font-semibold text-gray-600 tabular-nums">
              {result.bps} bps
            </span>
          </p>
          {children}
        </>
      ) : (
        <p className={`text-[0.9375rem] leading-[1.6] ${result.kind === 'invalid' ? 'text-[#b42318] font-semibold' : 'text-gray-400'}`}>
          {result.kind === 'invalid' ? result.message : emptyText}
        </p>
      )}
    </div>
  );
}

function CardHeader({ icon, title, formula }: { icon: React.ReactNode; title: string; formula: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-[0_8px_20px_-8px_rgba(74,150,163,0.7)]"
          style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 55%, #7D6BA0 100%)' }}
          aria-hidden
        >
          {icon}
        </span>
        <h2 className="font-bold text-gray-900 text-[1.1875rem] leading-tight tracking-[-0.02em]">{title}</h2>
      </div>
      <p className="font-mono text-[0.75rem] leading-[1.6] text-gray-500 rounded-lg bg-gray-50 border border-gray-100 px-3 py-2">{formula}</p>
    </div>
  );
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="flex items-start justify-between gap-3 text-[0.875rem] font-semibold text-gray-800 mb-2">
        <span>{label}</span>
        <span className="shrink-0 rounded-md bg-[#5ba8b4]/10 px-2 py-0.5 tabular-nums text-[#4a96a3]">{value}%</span>
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

function Check({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white ${ok ? 'bg-[#d92d20]' : 'bg-gray-300'}`}
        aria-hidden
      >
        {ok ? (
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5}>
            <path strokeLinecap="round" d="M6 12h12" />
          </svg>
        )}
      </span>
      <span className="text-[0.9375rem] leading-[1.5] text-gray-700">{children}</span>
    </li>
  );
}

const ICONS = {
  ratio: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M19 5L5 19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  ),
  card: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path strokeLinecap="round" d="M3 10h18M7 15h4" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" d="M12 8v5M12 16v.01" />
    </svg>
  ),
};

const cardClass =
  'flex h-full flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(17,24,39,0.35)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-36px_rgba(17,24,39,0.4)]';

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
  const overCount = vampCount !== null && vampCount >= VAMP_MIN_COUNT;
  const room = vampOk ? headroom(vampCount, settledN) : 0;
  const fraudShare = vampOk && vampCount > 0 ? Math.round((tc40n / vampCount) * 100) : null;

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
  let mcState: { label: string; tone: Tone; note: string } | null = null;
  if (mcResult.kind === 'ok' && mcN !== null && mtN !== null) {
    if (atOrOver(mcN, mtN, MC_HECM.bps) && mcN >= MC_HECM.count) {
      mcState = { label: 'High Excessive (HECM)', tone: 'bad', note: '3.00% or higher, with 300 or more chargebacks.' };
    } else if (atOrOver(mcN, mtN, MC_ECM.bps) && mcN >= MC_ECM.count) {
      mcState = { label: 'Excessive (ECM)', tone: 'bad', note: '1.50% or higher, with 100 or more chargebacks.' };
    } else if (atOrOver(mcN, mtN, MC_ECM.bps)) {
      mcState = {
        label: 'Over 1.50%, under 100',
        tone: 'warn',
        note: `The ratio is over the line, but ${fmt(mcN)} chargebacks is under Mastercard's 100-a-month minimum. Your acquirer can still act on the ratio.`,
      };
    } else {
      mcState = { label: 'Under 1.50%', tone: 'good', note: 'Below the Excessive Chargeback Merchant line.' };
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
        {/* Hero */}
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-10 sm:pt-20 sm:pb-14">
            <Eyebrow>Free tool</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">Chargeback ratio and</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">Visa VAMP calculator</span>
            </h1>
            <p className="ai-answer text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] max-w-[780px] mx-auto text-balance text-gray-600 anim-fadeUp delay-300">
              {INTRO}
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2 anim-fadeUp delay-400">
              {['Runs in your browser', 'Visa line: 1.50% from 1 April 2026', 'Visa and Mastercard', 'Free, no sign-up'].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-gray-200/80 bg-white/80 backdrop-blur px-3.5 py-1.5 text-[0.8125rem] font-medium text-gray-600"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Calculators */}
        <section className="pb-16 sm:pb-24 px-5 sm:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
              {/* 1) Chargeback ratio */}
              <article className={cardClass}>
                <CardHeader icon={ICONS.ratio} title="Chargeback ratio" formula="disputes ÷ payments" />
                <div className="grid grid-cols-1 gap-4 mb-5">
                  <NumberField label="Disputes (count)" value={vals.d} onChange={(v) => set('d', v)} />
                  <NumberField label="Payments (count)" value={vals.p} onChange={(v) => set('p', v)} />
                </div>
                <p className="mb-5 text-[0.875rem] leading-[1.6] text-gray-500">Processors watch this rate, not the raw dispute count.</p>
                <ResultPanel result={cbResult} emptyText="Type your disputes and payments to see the ratio." />
              </article>

              {/* 2) Visa VAMP */}
              <article className={`${cardClass} ring-1 ring-[#5ba8b4]/25`}>
                <CardHeader icon={ICONS.card} title="Visa VAMP worksheet" formula="(TC40 + TC15) ÷ TC05 · counts, not amounts" />
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <NumberField label="TC40 fraud reports (count)" value={vals.f} onChange={(v) => set('f', v)} />
                  <NumberField label="TC15 disputes (count)" value={vals.ds} onChange={(v) => set('ds', v)} />
                  <NumberField label="Settled transactions, TC05 (count)" value={vals.s} onChange={(v) => set('s', v)} />
                </div>
                <p className="mb-5 text-[0.875rem] leading-[1.6] text-gray-500">
                  Visa counts transactions, not amounts. Card-not-present Visa transactions only, for one month.
                </p>
                <ResultPanel result={vampResult} emptyText="Type the TC40, TC15, and settled transaction counts to see the VAMP ratio.">
                  {state && vampOk && vampResult.kind === 'ok' ? (
                    <>
                      <Meter bps={vampResult.bps} tone={state.tone} max={300} marks={[{ bps: VAMP_LINE_BPS, label: '1.50%' }]} />
                      <div className="flex flex-col gap-2">
                        <Badge label={state.label} tone={state.tone} />
                        <p className="text-[0.8125rem] leading-[1.55] text-gray-500">
                          Compared with 1.50% (150 bps), the excessive-merchant line published for the U.S., Canada, the EU, and AP.
                        </p>
                      </div>
                    </>
                  ) : null}
                </ResultPanel>
              </article>

              {/* 3) Mastercard */}
              <article className={cardClass}>
                <CardHeader
                  icon={ICONS.shield}
                  title="Mastercard Excessive Chargeback Program"
                  formula="chargebacks this month ÷ transactions last month"
                />
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <NumberField label="Mastercard chargebacks this month (count)" value={vals.mc} onChange={(v) => set('mc', v)} />
                  <NumberField label="Mastercard transactions last month (count)" value={vals.mt} onChange={(v) => set('mt', v)} />
                </div>
                <p className="mb-5 text-[0.875rem] leading-[1.6] text-gray-500">
                  Excessive (ECM) starts at 1.50% with 100 or more chargebacks. High Excessive (HECM) starts at 3.00% with 300 or more.
                </p>
                <ResultPanel result={mcResult} emptyText="Type this month's chargebacks and last month's transactions to see the ratio.">
                  {mcState && mcResult.kind === 'ok' ? (
                    <>
                      <Meter
                        bps={mcResult.bps}
                        tone={mcState.tone}
                        max={400}
                        marks={[
                          { bps: MC_ECM.bps, label: '1.50%' },
                          { bps: MC_HECM.bps, label: '3.00%' },
                        ]}
                      />
                      <div className="flex flex-col gap-2">
                        <Badge label={mcState.label} tone={mcState.tone} />
                        <p className="text-[0.8125rem] leading-[1.55] text-gray-500">{mcState.note}</p>
                      </div>
                    </>
                  ) : null}
                </ResultPanel>
              </article>
            </div>

            {/* Processor (drives the "what to change" line) */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-gray-200/80 bg-gray-50/60 px-5 py-4">
              <label htmlFor={processorId} className="text-[0.9375rem] font-semibold text-gray-900">
                Processor
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <select
                  id={processorId}
                  value={vals.proc}
                  onChange={(e) => set('proc', e.target.value as Processor)}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-[1rem] font-semibold text-gray-900 outline-none focus:border-[#5ba8b4] focus:ring-4 focus:ring-[#5ba8b4]/15"
                >
                  <option value="shopify">Shopify</option>
                  <option value="stripe">Stripe</option>
                  <option value="adyen">Adyen</option>
                </select>
                <span className="text-[0.875rem] text-gray-500">{PROCESSOR_TOOLS[vals.proc]}</span>
              </div>
            </div>

            {/* Visa VAMP read-out */}
            {state && vampOk ? (
              <FrostedBox className="mt-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h2 className="font-extrabold text-gray-900 tracking-[-0.035em] text-[1.5rem] sm:text-[1.75rem]">Your Visa VAMP read-out</h2>
                  <Badge label={state.label} tone={state.tone} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-5">
                    {/* Would Visa flag you */}
                    <div className="rounded-2xl border border-gray-200/80 bg-white p-5">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-3">Would Visa flag you?</p>
                      <ul className="flex flex-col gap-2.5 mb-4">
                        <Check ok={overRatio}>Ratio is 1.50% or higher ({vampResult.kind === 'ok' ? vampResult.percent : ''}%)</Check>
                        <Check ok={overCount}>
                          {fmt(vampCount)} fraud reports plus disputes; the minimum is {fmt(VAMP_MIN_COUNT)} a month
                        </Check>
                      </ul>
                      <p className="text-[0.9375rem] leading-[1.6] text-gray-800 font-medium">
                        {overRatio
                          ? overCount
                            ? `Both Visa conditions are met: 1.50% or higher, and ${fmt(vampCount)} fraud reports plus disputes (Visa's minimum is ${fmt(VAMP_MIN_COUNT)} a month).`
                            : `The ratio is at or over the line, but ${fmt(vampCount)} fraud reports plus disputes is under Visa's ${fmt(VAMP_MIN_COUNT)}-a-month minimum for the excessive-merchant program. Your acquirer can still act on the ratio.`
                          : `You can take up to ${fmt(room)} more fraud reports or disputes this month and stay under 1.50%.`}
                      </p>
                    </div>

                    {/* Split */}
                    {fraudShare !== null ? (
                      <div className="rounded-2xl border border-gray-200/80 bg-white p-5">
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-3">What drives the ratio</p>
                        <div className="flex h-3 overflow-hidden rounded-full bg-gray-100" aria-hidden>
                          <div style={{ width: `${fraudShare}%`, background: '#7D6BA0' }} />
                          <div style={{ width: `${100 - fraudShare}%`, background: '#5ba8b4' }} />
                        </div>
                        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.875rem] text-gray-700">
                          <span className="inline-flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: '#7D6BA0' }} aria-hidden />
                            Fraud reports (TC40) <strong className="tabular-nums">{fraudShare}%</strong>
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: '#5ba8b4' }} aria-hidden />
                            Disputes (TC15) <strong className="tabular-nums">{100 - fraudShare}%</strong>
                          </span>
                        </p>
                      </div>
                    ) : null}

                    {/* What to change */}
                    <div className="rounded-2xl p-5 text-white" style={{ background: 'radial-gradient(120% 100% at 0% 0%, #1b3340 0%, #0b0f17 70%)' }}>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#8fd0da] mb-2">
                        What to change · {PROCESSOR_TOOLS[vals.proc]}
                      </p>
                      <p className="text-[1rem] leading-[1.65] font-medium">{PROCESSOR_ADVICE[vals.proc]}</p>
                      <p className="mt-4 text-[0.875rem] text-white/60">
                        Want this ranked from your own disputes?{' '}
                        <Link href="/book-a-demo/" className="font-semibold text-[#8fd0da] hover:underline">
                          Book a demo
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  {/* What-if */}
                  <div className="rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 flex flex-col">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1">What if</p>
                    <p className="text-[0.9375rem] text-gray-600 mb-5">Move the sliders to see the ratio after a change.</p>
                    <div className="flex flex-col gap-6 mb-6">
                      <Slider
                        label="Disputes resolved before the dispute stage (RDR or Order Insight)"
                        value={vals.rdr}
                        onChange={(v) => set('rdr', v)}
                      />
                      <Slider label="Fewer fraud reports after a rule change" value={vals.cut} onChange={(v) => set('cut', v)} />
                    </div>
                    {whatIf && whatIf.kind === 'ok' && whatIfState ? (
                      <div aria-live="polite" className="mt-auto rounded-2xl bg-gray-50 border border-gray-100 p-5">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                          <span className="text-[0.875rem] text-gray-400 tabular-nums line-through">{vampResult.kind === 'ok' ? vampResult.percent : ''}%</span>
                          <span className="font-extrabold text-gray-900 text-[2.25rem] leading-none tracking-[-0.04em] tabular-nums">{whatIf.percent}%</span>
                          <span className="text-[0.875rem] font-semibold text-gray-600 tabular-nums">{whatIf.bps} bps</span>
                        </div>
                        <Meter bps={whatIf.bps} tone={whatIfState.tone} max={300} marks={[{ bps: VAMP_LINE_BPS, label: '1.50%' }]} />
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge label={whatIfState.label} tone={whatIfState.tone} />
                          <span className="text-[0.875rem] text-gray-600 tabular-nums">
                            {fmt(whatIfTc40)} fraud reports + {fmt(whatIfTc15)} disputes
                          </span>
                        </div>
                      </div>
                    ) : null}
                    <p className="mt-4 text-[0.8125rem] leading-[1.6] text-gray-500">
                      This keeps settled transactions the same. A rule that blocks orders also lowers settled transactions, which pushes the ratio up a little.
                    </p>
                  </div>
                </div>
              </FrostedBox>
            ) : null}

            {/* Notes */}
            <div className="mt-8 flex gap-3 rounded-2xl border border-gray-200/80 bg-white px-5 py-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#5ba8b4]/10 text-[#4a96a3] text-[0.8125rem] font-bold" aria-hidden>
                i
              </span>
              <p className="text-[0.875rem] leading-[1.7] text-gray-600">
                A refund after authorization does not remove a TC40 unless it was resolved through Visa RDR or Order Insight before the dispute stage. Visa also leaves out fraud reports that qualify for Compelling Evidence 3.0. The 1.50% line applies to merchants when the acquirer is under its own limits, and your acquirer can hold you to a lower line.
              </p>
            </div>

            {/* Share */}
            <div className="mt-10 flex flex-col items-center gap-2 text-center">
              <button
                type="button"
                onClick={copyLink}
                disabled={!hasAny}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-[0.9375rem] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(17,24,39,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14a4 4 0 005.66 0l3-3a4 4 0 00-5.66-5.66l-1 1M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 005.66 5.66l1-1" />
                </svg>
                {copied === 'copied' ? 'Link copied' : 'Copy a link with these numbers'}
              </button>
              <p className="text-[0.8125rem] text-gray-500 max-w-md" aria-live="polite">
                {copied === 'failed'
                  ? 'Your browser blocked copying. Try the button again.'
                  : 'The numbers go after the # in the link. Browsers do not send that part to any server. Anyone you send the link to will see them.'}
              </p>
            </div>

            <p className="mt-10 text-[0.9375rem] leading-[1.75] text-gray-500 text-center max-w-3xl mx-auto">
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
