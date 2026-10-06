'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedLink } from './components/TrackedCta';
import { useState, useEffect } from 'react';
import { useInView } from './hooks/useInView';
import JsonLd from './components/JsonLd';
import FaqAccordion from './components/FaqAccordion';
import ToolComparisonTable from './components/ToolComparisonTable';
import { articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from './lib/geo';
import {
  FAQ_FALSE_DECLINES,
  FAQ_FLOW_BLOCKIFY_ENOUGH,
  FAQ_HOW_REDUCE_CHARGEBACKS,
  FAQ_REPLACE_STACK,
  FAQ_TIME_TO_VALUE,
  pickSiteFaqs,
} from './lib/siteFaqs';
import { SITE_URL } from './lib/site';

const homeFaqs = pickSiteFaqs([
  FAQ_REPLACE_STACK,
  FAQ_FLOW_BLOCKIFY_ENOUGH,
  FAQ_HOW_REDUCE_CHARGEBACKS,
  FAQ_FALSE_DECLINES,
  FAQ_TIME_TO_VALUE,
]);

/* ── Animated section wrapper ── */
function Reveal({ children, className = '', delay = 0, animation = 'anim-fadeUp' }: {
  children: React.ReactNode; className?: string; delay?: number; animation?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} ${inView ? `${animation} delay-${delay}` : 'anim-hidden'}`}
    >
      {children}
    </div>
  );
}

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

const DATA_SOURCES = [
  { name: 'Shopify', slug: 'shopify', color: '95BF47', sub: 'Orders & disputes' },
  { name: 'Stripe', slug: 'stripe', color: '635BFF', sub: 'Charges & chargebacks' },
  { name: 'Adyen', slug: 'adyen', color: '0ABF53', sub: 'Payments & risk data' },
];

const RULE_TARGETS = [
  { name: 'Stripe Radar', logo: '/logos/stripe-radar.png', fit: 'contain', wide: true },
  { name: 'Shopify Flow', logo: '/logos/shopify-flow.webp', fit: 'cover', wide: false },
  { name: 'Blockify', logo: '/logos/blockify.webp', fit: 'cover', wide: false },
  { name: 'Adyen RevenueProtect', logo: '/logos/adyen-revenueprotect.png', fit: 'contain', wide: false },
] as const;

const CAPABILITY_ICONS = {
  dashboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />,
  chargebacks: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />,
  actions: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  patterns: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  analytics: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  validate: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
};

function CapabilityIcon({ name, tone = 'teal' }: { name: keyof typeof CAPABILITY_ICONS; tone?: 'teal' | 'purple' | 'glass' }) {
  const toneClass = {
    teal: 'text-white bg-gradient-to-br from-[#6bb8c3] to-[#4a96a3] shadow-[0_8px_20px_-8px_rgba(74,150,163,0.7)]',
    purple: 'text-white bg-gradient-to-br from-[#9483b8] to-[#7D6BA0] shadow-[0_8px_20px_-8px_rgba(125,107,160,0.7)]',
    glass: 'text-white bg-white/10 border border-white/15',
  }[tone];
  return (
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${toneClass}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{CAPABILITY_ICONS[name]}</svg>
    </div>
  );
}

const tabs = [
  {
    label: 'AI Actions',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Get ranked actions, not just charts.',
    body: 'The AI Actions module generates specific fraud rules ranked by impact each one showing estimated fraud capture rate and false positive percentage so your team acts with confidence, not guesswork.',
    bullets: ['AI Summary with risk level badge', 'Designated rules with fraud rate & FP%', 'Key insights on blind spots', 'Full PDF report for your risk committee'],
    visual: (
      <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" style={{ boxShadow: '0 0 6px #34d399' }} />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">AI Recommendations</span>
        </div>
        {[
          { rule: 'Block cards with prior chargeback history', fraud: '87%', fp: '0%', rank: 1, delay: 100 },
          { rule: 'Flag orders from high-risk email domains', fraud: '63%', fp: '2.1%', rank: 2, delay: 200 },
          { rule: 'Review orders over $500 from high-risk countries', fraud: '41%', fp: '4.3%', rank: 3, delay: 300 },
        ].map((r) => (
          <div key={r.rank} className="py-2.5 border-b last:border-0 anim-fadeUp"
            style={{ borderColor: '#f3f4f6', animationDelay: `${r.delay}ms` }}>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xs text-gray-700 flex-1 min-w-0 leading-snug">{r.rule}</span>
              <span className="text-xs font-bold text-[#5ba8b4]">{r.fraud}</span>
              <span className="text-xs text-gray-400">FP {r.fp}</span>
            </div>
           
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Dashboard',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Everything live, in one view.',
    body: 'Monitor approval rates, chargeback trends, and fraud exposure from a single real-time dashboard. Filter by date range, card brand, or billing country - always know exactly where you stand.',
    bullets: ['Total volume & approval rate', 'Fraud vs non-fraud breakdown', 'Chargeback trend charts', 'Projected chargeback cohorts'],
    visual: (
      <div className="rounded-2xl border bg-[#f8f9fa] p-4 sm:p-5 w-full max-w-full min-w-0 overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        {/* Top KPI row */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className="rounded-xl bg-white p-2.5 border border-gray-100 anim-scaleIn" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)' }}>
                <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-[0.55rem] font-medium text-gray-500">Potential Savings</span>
            </div>
            <div className="text-sm font-bold text-emerald-600">$54,872</div>
            <div className="text-[0.5rem] text-gray-400 mt-0.5">47.8% coverage</div>
          </div>
          <div className="rounded-xl bg-white p-2.5 border border-gray-100 anim-scaleIn" style={{ animationDelay: '80ms' }}>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <svg className="w-2.5 h-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <span className="text-[0.55rem] font-medium text-gray-500">Fraud Loss</span>
            </div>
            <div className="text-sm font-bold text-red-500">$114,699</div>
            <div className="text-[0.5rem] text-gray-400 mt-0.5">343 fraud chargebacks</div>
          </div>
          <div className="rounded-xl bg-white p-2.5 border border-gray-100 anim-scaleIn" style={{ animationDelay: '160ms' }}>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: 'rgba(91,168,180,0.15)' }}>
                <svg className="w-2.5 h-2.5 text-[#5ba8b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              <span className="text-[0.55rem] font-medium text-gray-500">Actions</span>
            </div>
            <div className="text-sm font-bold text-[#5ba8b4]">5</div>
            <div className="text-[0.5rem] text-[#5ba8b4] mt-0.5">Rules to implement</div>
          </div>
        </div>

        {/* Volume metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-2">
          {[
            { label: 'Total Volume', value: '$27.1M', sub: '281K transactions' },
            { label: 'Total Approved', value: '$22.05K', sub: '84.9%' },
            { label: 'Chargebacks', value: '$464K', sub: '483 CBs', accent: true },
            { label: 'Declined', value: '$4.09M', sub: '3,327' },
          ].map((m, i) => (
            <div key={m.label} className="rounded-lg bg-white px-2 py-1.5 border border-gray-100 anim-scaleIn"
              style={{ animationDelay: `${i * 60 + 200}ms`, borderTop: m.accent ? '2px solid #374151' : undefined }}>
              <div className="text-[0.45rem] text-gray-400 mb-0.5 leading-tight">{m.label}</div>
              <div className="text-[0.65rem] font-bold text-gray-900">{m.value}</div>
              <div className="text-[0.4rem] text-gray-400">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-2">
          {/* Quadrant chart */}
          <div className="rounded-xl bg-white p-2.5 border border-gray-100 anim-fadeUp" style={{ animationDelay: '400ms' }}>
            <div className="text-[0.5rem] font-semibold text-gray-700 mb-2 leading-tight">Fraud Rate vs False Positive</div>
            <div className="relative h-16 border-l border-b border-gray-200">
              <div className="absolute bottom-[45%] left-[55%] w-2 h-2 rounded-full bg-[#5ba8b4]" />
              <div className="absolute bottom-1/3 left-1/5 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7D6BA0]" />
              <div className="absolute bottom-0 left-0 text-[0.35rem] text-gray-400">0</div>
              <div className="absolute -left-3 top-0 text-[0.35rem] text-gray-400 -rotate-90 origin-center">FP%</div>
            </div>
          </div>
          {/* Bar chart */}
          <div className="rounded-xl bg-white p-2.5 border border-gray-100 anim-fadeUp" style={{ animationDelay: '480ms' }}>
            <div className="text-[0.5rem] font-semibold text-gray-700 mb-2 leading-tight">Chargeback Reason Breakdown</div>
            <div className="flex items-end gap-0.5 h-16">
              {[
                { h: 85, color: '#5ba8b4' },
                { h: 80, color: '#7D6BA0' },
                { h: 35, color: '#5ba8b4' },
                { h: 30, color: '#7D6BA0' },
                { h: 25, color: '#5ba8b4' },
                { h: 20, color: '#7D6BA0' },
              ].map((b, i) => (
                <div key={i} className="flex-1 rounded-t-sm bar-grow"
                  style={{ height: `${b.h}%`, background: b.color, animationDelay: `${i * 40 + 500}ms` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Chargebacks',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 36 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    title: 'Track every dispute, never miss a response.',
    body: 'Every chargeback logged with full context - reason code, dispute status, fraud pattern, and category. Know exactly which cases need a response today.',
    bullets: ['Reason code & dispute status', 'Won / Lost / Needs Response tracking', 'Pattern severity scoring', 'Fraud category classification'],
    visual: (
      <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div className="flex items-start sm:items-center gap-2 mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5 sm:mt-0">Chargebacks</span>
          <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-500 sm:ml-auto">3 need response</span>
        </div>
        {[
          { id: 'CB-1041', reason: '10.4 Card Absent Fraud', status: 'Needs Response', color: 'text-red-500 bg-red-50', delay: 0 },
          { id: 'CB-1040', reason: '13.1 Merchandise Not Received', status: 'Under Review', color: 'text-amber-600 bg-amber-50', delay: 100 },
          { id: 'CB-1039', reason: '10.5 Visa Fraud Monitoring', status: 'Won', color: 'text-emerald-600 bg-emerald-50', delay: 200 },
        ].map((c) => (
          <div key={c.id} className="py-2.5 border-b last:border-0 anim-fadeUp"
            style={{ borderColor: '#f3f4f6', animationDelay: `${c.delay}ms` }}>
            <div className="flex items-start sm:items-center gap-2">
              <span className="text-xs font-mono text-gray-400 flex-shrink-0 mt-0.5 sm:mt-0">{c.id}</span>
              <span className="text-xs text-gray-700 flex-1 min-w-0 leading-snug">{c.reason}</span>
              <span className={`text-[0.65rem] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${c.color}`}>{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Fraud Patterns',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Find the patterns behind the fraud.',
    body: 'Run the Fraud Classifier to automatically analyze chargebacks, assign categories, and surface the exact rule logic that separates fraud from legitimate transactions.',
    bullets: ['Automatic fraud categorization', 'Rule pattern extraction', 'Risk feature radar chart', 'Email & country fraud breakdown'],
    visual: (
      <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Fraud Classifier</span>
        </div>
        {[
          { category: 'Card Testing', pct: 78, count: 34, delay: 0 },
          { category: 'Account Takeover', pct: 55, count: 22, delay: 100 },
          { category: 'Friendly Fraud', pct: 38, count: 15, delay: 200 },
          { category: 'Identity Theft', pct: 20, count: 8, delay: 300 },
        ].map((p) => (
          <div key={p.category} className="mb-3 last:mb-0 anim-fadeUp" style={{ animationDelay: `${p.delay}ms` }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600">{p.category}</span>
              <span className="text-xs font-semibold text-gray-900">{p.count} cases</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-[#5ba8b4] bar-grow" style={{ width: `${p.pct}%`, animationDelay: `${p.delay + 150}ms` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const heroSteps = [
  {
    step: '01',
    title: 'Connect Your Transaction Data',
    description: 'Connect Shopify, Stripe, or Adyen in minutes - no engineering work required',
    visual: tabs[1].visual,
    color: '#5ba8b4',
  },
  {
    step: '02',
    title: 'We Analyze Your Fraud Patterns',
    description: "We analyze your transactions, chargebacks, and friendly fraud patterns to find what's driving disputes",
    visual: tabs[3].visual,
    color: '#7D6BA0',
  },
  {
    step: '03',
    title: 'Receive Prioritized Rule Changes',
    description: 'You receive a prioritized list of rules and actions with estimated revenue and chargeback impact',
    visual: tabs[0].visual,
    color: '#5ba8b4',
  },
  // {
  //   step: '04',
  //   title: 'Apply Rules & Track Results',
  //   description: 'Implement recommended rules in your payment stack and track chargebacks and approvals over time',
  //   visual: tabs[4].visual,
  //   color: '#5ba8b4',
  // },
];


const TAB_ROTATE_MS = 7000;
const HERO_ROTATE_MS = 4500;

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabKey, setTabKey] = useState(0);
  const [heroStep, setHeroStep] = useState(0);

  function switchTab(i: number) {
    setActiveTab(i);
    setTabKey(k => k + 1);
  }

  // Timers restart on every change so the progress bars stay in sync after a click.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
      setTabKey(k => k + 1);
    }, TAB_ROTATE_MS);
    return () => clearTimeout(timeout);
  }, [tabKey]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroStep(prev => (prev + 1) % heroSteps.length);
    }, HERO_ROTATE_MS);
    return () => clearTimeout(timeout);
  }, [heroStep]);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'FraudPulse',
            url: SITE_URL,
            description:
              'FraudPulse connects to your transaction data and recommends rules and actions that reduce chargebacks and friendly fraud.',
          }),
        }}
      />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={articleJsonLd('Stop Losing Money to Fraud and False Declines.', '/')} />
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <Header />
      <main className="flex-grow overflow-x-clip">

        {/* ── Hero ── */}
        <section className="relative overflow-x-clip lg:overflow-x-visible px-5 sm:px-10 text-center flex items-center justify-center" style={{ minHeight: 'calc(100vh - 84px)' }}>
          <div className="pointer-events-none absolute inset-x-0 -top-[84px] bottom-0 overflow-hidden" aria-hidden>
            <div className="hero-aurora w-[220px] h-[200px] sm:w-[520px] sm:h-[420px] -top-20 sm:-top-32 -left-16 sm:left-[8%]" style={{ background: 'rgba(91,168,180,0.45)' }} />
            <div className="hero-aurora w-[200px] h-[180px] sm:w-[480px] sm:h-[380px] -top-16 sm:-top-24 -right-16 sm:right-[6%]" style={{ background: 'rgba(125,107,160,0.38)', animationDelay: '-9s' }} />
            <div className="absolute inset-0 hero-dot-grid" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
          </div>

          <div className="relative max-w-6xl mx-auto pt-16 pb-20 sm:pt-20 w-full min-w-0">

            <p className="mb-7 sm:mb-9 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3.5 font-semibold leading-[1.15] tracking-[-0.025em] text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] anim-fadeUp"
              style={{ fontFamily: 'var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif' }}>
              <span className="flex items-center gap-2.5 text-gray-900">
                <PulseMark id="heroPulse" className="w-7 h-7 sm:w-8 sm:h-8" />
                FraudPulse
              </span>
              <span className="hidden sm:block h-6 lg:h-7 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" aria-hidden />
              <span className="sr-only"> - </span>
              <span className="text-gradient-flow">AI Fraud Prevention Analyst</span>
            </p>

            <h1 className="font-extrabold text-gray-900 mb-7 tracking-[-0.045em] leading-[1.02] text-[2.25rem] sm:text-[3.75rem] lg:text-[5rem]">
              <span className="block anim-fadeUp delay-75">Stop Losing Money to</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">Fraud and False Declines.</span>
            </h1>

            <p className="ai-answer text-[1.0625rem] sm:text-[1.25rem] leading-[1.7] max-w-[740px] mx-auto text-balance text-gray-500 anim-fadeUp delay-300">
              Make{' '}
              <strong className=" font-semibold text-gray-900">Stripe Radar, Shopify Flow, Blockify, and RevenueProtect</strong>{' '}
              smarter. FraudPulse finds what&apos;s driving your chargebacks and tells you exactly which rules to change.
            </p>

            {/* Process flow */}
            <div className="mt-14 sm:mt-20 anim-fadeUp delay-500 w-full min-w-0">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-center text-left">
                <ol className="flex flex-col gap-3 min-w-0">
                  {heroSteps.map((step, i) => {
                    const active = i === heroStep;
                    return (
                      <li key={step.step}>
                        <button
                          type="button"
                          onClick={() => setHeroStep(i)}
                          aria-current={active ? 'step' : undefined}
                          className={`group relative w-full overflow-hidden rounded-2xl border px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-500 ${active
                            ? 'bg-white/90 border-[#5ba8b4]/30 shadow-[0_18px_40px_-20px_rgba(74,150,163,0.45)]'
                            : 'bg-white/40 border-gray-200/70 hover:bg-white/70'}`}
                        >
                          <div className="flex items-start gap-4">
                            <span
                              className={`mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-[0.8125rem] font-bold tabular-nums transition-colors duration-500 ${active ? 'text-white' : 'text-gray-400 bg-gray-100'}`}
                              style={active ? { background: `linear-gradient(135deg, ${step.color}, #4a96a3)` } : undefined}
                            >
                              {step.step}
                            </span>
                            <span className="min-w-0">
                              <span className={`block text-[1.0625rem] sm:text-[1.1875rem] font-bold tracking-[-0.015em] transition-colors duration-500 ${active ? 'text-gray-900' : 'text-gray-500'}`}>
                                {step.title}
                              </span>
                              <span className={`grid transition-all duration-500 ${active ? 'grid-rows-[1fr] opacity-100 mt-1.5' : 'grid-rows-[0fr] opacity-0'}`}>
                                <span className="overflow-hidden text-[0.9375rem] sm:text-base leading-relaxed text-gray-600">
                                  {step.description}
                                </span>
                              </span>
                            </span>
                          </div>
                          {active && (
                            <span key={heroStep} className="progress-fill absolute bottom-0 left-0 h-[2px] w-full"
                              style={{ background: `linear-gradient(90deg, ${step.color}, #7D6BA0)`, ['--progress-duration' as string]: `${HERO_ROTATE_MS}ms` }} />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ol>

                <div className="product-tray min-w-0">
                  <div className="flex items-center gap-1.5 px-3 pt-1 pb-3" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                    <span className="ml-3 truncate rounded-md bg-gray-900/[0.04] px-3 py-0.5 text-[0.6875rem] font-medium text-gray-400">
                      app.fraud-pulse.com
                    </span>
                  </div>
                  <div className="grid items-center">
                    {heroSteps.map((step, i) => (
                      <div key={step.step} className="[grid-area:1/1] min-w-0 transition-all duration-700"
                        style={{
                          opacity: i === heroStep ? 1 : 0,
                          transform: i === heroStep ? 'none' : 'translateY(8px)',
                          pointerEvents: i === heroStep ? 'auto' : 'none',
                        }}
                        aria-hidden={i !== heroStep}>
                        {step.visual}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── Works with your stack ── */}
        <section className="px-3 sm:px-6 py-6 sm:py-10">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] max-w-7xl mx-auto px-5 sm:px-12 py-20 sm:py-24 text-white"
            style={{ background: 'radial-gradient(120% 80% at 50% 0%, #142430 0%, #0b0f17 55%, #090b10 100%)' }}>
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute inset-0 dark-dot-grid" />
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full blur-[110px] opacity-40" style={{ background: '#5ba8b4' }} />
              <div className="absolute -bottom-40 right-0 w-[520px] h-[360px] rounded-full blur-[120px] opacity-30" style={{ background: '#7D6BA0' }} />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="relative max-w-3xl mx-auto text-center">
              <Reveal animation="anim-fadeUp">
                <Eyebrow dark>Works with your stack</Eyebrow>
                <h2 className="font-extrabold tracking-[-0.035em] text-[2rem] sm:text-[3rem] leading-[1.08] mb-5 text-balance">
                  We don&apos;t replace your payment tools.
                </h2>
                <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold tracking-[-0.015em] text-gray-400 mb-6 text-balance">
                  We use your transaction data to tell you what to change.
                </p>
                <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] text-gray-400 text-balance">
                  Connect <span className="font-semibold text-white">Shopify</span>,{' '}
                  <span className="font-semibold text-white">Stripe</span>, or{' '}
                  <span className="font-semibold text-white">Adyen</span>. FraudPulse analyzes your transactions and disputes, then recommends rules and actions that reduce chargebacks and friendly fraud - without replacing your fraud prevention tools.
                </p>
              </Reveal>
            </div>

            <Reveal animation="anim-fadeUp" delay={150} className="relative">
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-0 max-w-5xl mx-auto">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-3 px-1">Your transaction data</p>
                  <div className="flex flex-col gap-2">
                    {DATA_SOURCES.map(({ name, slug, color, sub }) => (
                      <div key={name} className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-3">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width={18} height={18} className="object-contain" />
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="text-[0.9375rem] font-semibold text-white leading-tight">{name}</div>
                          <div className="text-[0.75rem] text-gray-500">{sub}</div>
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
                      <PulseMark id="stackPulse" className="w-11 h-11" />
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
              <Link
                href="/how-it-works/"
                className="group mt-12 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[1.0625rem] font-bold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(91,168,180,0.6)]"
              >
                See How It Works
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Core Capabilities ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Platform</Eyebrow>
              <h2 className="font-extrabold text-gray-900 text-[2.25rem] sm:text-[3.25rem] tracking-[-0.04em] mb-5 max-w-3xl mx-auto leading-[1.05] text-balance">
                Reduce Chargebacks.{' '}
                <span className="text-gradient-flow">Increase Approvals.</span>
              </h2>
              <p className="text-[1.0625rem] sm:text-[1.125rem] text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed text-balance">
                Connect transaction data from <strong className="font-semibold text-gray-900">Shopify</strong>, <strong className="font-semibold text-gray-900">Stripe</strong>, or <strong className="font-semibold text-gray-900">Adyen</strong> - then get better rules to cut chargebacks and friendly fraud, without replacing your fraud prevention tools.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {/* Monitoring Dashboard - wide */}
              <Reveal animation="anim-fadeUp" className="md:col-span-2 h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-gray-200/80 bg-gradient-to-br from-white to-[#f4fafb] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(74,150,163,0.45)]">
                  <div className="grid sm:grid-cols-[1fr_1.1fr] gap-8 items-center h-full">
                    <div>
                      <CapabilityIcon name="dashboard" />
                      <h3 className="mt-6 font-bold text-[1.375rem] sm:text-[1.5rem] tracking-[-0.02em] text-gray-900">Monitoring Dashboard</h3>
                      <p className="mt-3 text-[1.0625rem] leading-relaxed text-gray-600">Volumes, Approval Rates and Chargebacks Breakdown - all in one live view with date-range filtering.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200/70 bg-white p-4 shadow-[0_10px_30px_-18px_rgba(17,24,39,0.25)]" aria-hidden>
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-gray-400">Approval rate</span>
                        <span className="text-[0.75rem] font-semibold text-emerald-600">+3.2%</span>
                      </div>
                      <div className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-gray-900 mb-3">84.9%</div>
                      <div className="flex items-end gap-1.5 h-20">
                        {[38, 52, 44, 61, 57, 70, 66, 78, 72, 85, 80, 92].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-md bar-grow"
                            style={{ height: `${h}%`, background: i === 11 ? 'linear-gradient(180deg,#5ba8b4,#4a96a3)' : 'rgba(91,168,180,0.22)', animationDelay: `${i * 40}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Chargeback Tracking - dark */}
              <Reveal animation="anim-fadeUp" delay={75} className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 p-7 sm:p-9 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.7)]">
                  <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-40" style={{ background: '#7D6BA0' }} aria-hidden />
                  <div className="relative">
                    <CapabilityIcon name="chargebacks" tone="glass" />
                    <h3 className="mt-6 font-bold text-[1.375rem] sm:text-[1.5rem] tracking-[-0.02em]">Chargeback Tracking &amp; Insights</h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-gray-400">Track every chargeback with full context: Reason Code, Dispute Status and Pattern Severity.</p>
                    <div className="mt-6 flex flex-wrap gap-2" aria-hidden>
                      <span className="rounded-full bg-red-500/15 px-2.5 py-1 text-[0.6875rem] font-semibold text-red-300">Needs Response</span>
                      <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[0.6875rem] font-semibold text-amber-300">Under Review</span>
                      <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[0.6875rem] font-semibold text-emerald-300">Won</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {[
                { icon: 'actions' as const, tone: 'teal' as const, title: 'Fraud Prevention Actions', body: 'Clear, simple action items that immediately improve fraud and false-positive rates, so your team can make confident, data-based decisions.' },
                { icon: 'patterns' as const, tone: 'purple' as const, title: 'Fraud Pattern Detection', body: 'Run the Fraud Classifier to automatically analyze chargebacks and extract the exact rule patterns separating fraud from legitimate transactions.' },
                { icon: 'analytics' as const, tone: 'teal' as const, title: 'Advanced Analytics', body: 'Visualize Fraud Breakdown by Dispute Reason, Risk Feature radar, Incoming Chargebacks by daily bucket, and Projected Chargeback cohorts.' },
              ].map((cap, i) => (
                <Reveal key={cap.title} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i]} className="h-full">
                  <div className="h-full rounded-3xl border border-gray-200/80 bg-white p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]">
                    <CapabilityIcon name={cap.icon} tone={cap.tone} />
                    <h3 className="mt-6 font-bold text-[1.25rem] sm:text-[1.375rem] tracking-[-0.02em] text-gray-900">{cap.title}</h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-gray-600">{cap.body}</p>
                  </div>
                </Reveal>
              ))}

              {/* Clean & Validate - full-width strip */}
              <Reveal animation="anim-fadeUp" className="md:col-span-3">
                <div className="relative overflow-hidden rounded-3xl p-7 sm:p-9 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(74,150,163,0.6)]"
                  style={{ background: 'linear-gradient(120deg, #4a96a3 0%, #5ba8b4 45%, #7D6BA0 100%)' }}>
                  <div className="pointer-events-none absolute inset-0 opacity-30 dark-dot-grid" aria-hidden />
                  <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="flex items-start gap-5 md:max-w-xl">
                      <CapabilityIcon name="validate" tone="glass" />
                      <div>
                        <h3 className="font-bold text-[1.375rem] sm:text-[1.5rem] tracking-[-0.02em]">Clean &amp; Validate Your Data</h3>
                        <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/85">Built-in Data Sanity checks validate the quality of your transaction data before analysis begins - every insight built on reliable data.</p>
                      </div>
                    </div>
                    <div className="md:ml-auto flex flex-wrap gap-2" aria-hidden>
                      {['Completeness', 'Duplicates', 'Consistency', 'Freshness'].map((check) => (
                        <span key={check} className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[0.8125rem] font-semibold backdrop-blur">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          {check}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>



        {/* ── Tabs section ── */}
        <section className="relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden bg-[#fafbfc]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -top-32 -left-32 w-[560px] h-[480px] rounded-full blur-[120px] opacity-30" style={{ background: '#7D6BA0' }} />
            <div className="absolute -bottom-32 -right-32 w-[560px] h-[480px] rounded-full blur-[120px] opacity-25" style={{ background: '#5ba8b4' }} />
            <div className="absolute inset-0 hero-dot-grid opacity-60" />
          </div>
          <div className="relative max-w-6xl mx-auto">

            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Inside FraudPulse</Eyebrow>
              <h2 className="font-extrabold text-gray-900 text-[2.25rem] sm:text-[3.25rem] tracking-[-0.04em] leading-[1.05] mb-10 text-balance">
                Get actionable recommendations,<br className="hidden sm:block" /> not just analytics
              </h2>
            </Reveal>

            <Reveal animation="anim-fadeUp" delay={150}>
              <div className="flex justify-center mb-10 sm:mb-12">
                <div role="tablist" aria-label="Product areas" className="inline-flex max-w-full overflow-x-auto gap-1 rounded-full border border-gray-200/80 bg-white/80 p-1.5 shadow-[0_8px_24px_-16px_rgba(17,24,39,0.3)] backdrop-blur">
                  {tabs.map((tab, i) => {
                    const active = activeTab === i;
                    return (
                      <button
                        key={tab.label}
                        role="tab"
                        aria-selected={active}
                        onClick={() => switchTab(i)}
                        className={`relative inline-flex flex-shrink-0 items-center gap-2 overflow-hidden rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${active ? 'bg-gray-900 text-white shadow-[0_6px_16px_-6px_rgba(17,24,39,0.6)]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
                      >
                        {tab.icon}{tab.label}
                        {active && (
                          <span key={tabKey} className="progress-fill absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#5ba8b4] to-[#7D6BA0]"
                            style={{ ['--progress-duration' as string]: `${TAB_ROTATE_MS}ms` }} aria-hidden />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <div className="rounded-[32px] border border-gray-200/70 bg-white/70 p-6 sm:p-10 lg:p-12 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.35)] backdrop-blur-xl">
              <div key={tabKey} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="anim-slideLeft delay-0">
                  <h3 className="text-[1.75rem] sm:text-[2.25rem] font-extrabold text-gray-900 tracking-[-0.03em] leading-[1.15] mb-5 text-balance">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="text-[1.0625rem] sm:text-[1.125rem] text-gray-500 leading-[1.75] mb-8">
                    {tabs[activeTab].body}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {tabs[activeTab].bullets.map((b, i) => (
                      <li key={b} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 anim-fadeUp"
                        style={{ animationDelay: `${i * 60}ms` }}>
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5ba8b4]/15 text-[#4a96a3]">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-[0.9375rem] font-medium text-gray-700 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="anim-slideRight delay-75 w-full min-w-0">
                  <div className="product-tray">
                    {tabs[activeTab].visual}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden bg-white">
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
                How FraudPulse fits next to Stripe Radar, Shopify Flow, Blockify, and RevenueProtect - and how fast you see results.
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
              <FaqAccordion faqs={homeFaqs} variant="light" />
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-3 sm:px-6 pb-10 sm:pb-16">
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
                <PulseMark id="ctaPulse" className="w-10 h-10 mx-auto mb-6" />
                <h2 className="font-extrabold text-[2.5rem] sm:text-[4rem] tracking-[-0.045em] leading-[1.02] mb-6">
                  See it on your own
                  <br />
                  <span className="text-gradient-flow">transaction data.</span>
                </h2>
                <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-gray-400 max-w-[620px] mx-auto mb-10 text-balance">
                  Book a walkthrough and see the exact rules and actions FraudPulse would recommend to reduce chargebacks and friendly fraud.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <TrackedLink event="demo_cta_clicked" href="/book-a-demo/"
                    className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[1.0625rem] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(91,168,180,0.8)]"
                    style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}>
                    Book a Demo
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  </TrackedLink>
                  <Link href="/pricing/"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-[1.0625rem] font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30">
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
