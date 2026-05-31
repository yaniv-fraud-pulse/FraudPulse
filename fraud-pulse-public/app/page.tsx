'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useInView } from './hooks/useInView';

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

/* ── Animated counter ── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView();
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    let current = 0;
    const inc = to / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= to) { setVal(to); clearInterval(timer); }
      else setVal(Math.floor(current * 10) / 10);
    }, step);
  }, [inView, to]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {suffix === '%' ? `${val.toFixed(val >= 10 ? 1 : 1)}%` : val}{suffix !== '%' ? suffix : ''}
    </span>
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
    body: 'The AI Actions module generates specific fraud rules ranked by impact — each one showing estimated fraud capture rate and false positive percentage so your team acts with confidence, not guesswork.',
    bullets: ['AI Summary with risk level badge', 'Ranked rules with fraud rate & FP%', 'Key insights on blind spots', 'Full PDF report for your risk committee'],
    visual: (
      <div className="rounded-2xl border bg-white p-5 w-full anim-float" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">AI Recommendations</span>
        </div>
        {[
          { rule: 'Block cards with prior chargeback history', fraud: '87%', fp: '0%', rank: 1, delay: 100 },
          { rule: 'Flag orders from high-risk email domains', fraud: '63%', fp: '2.1%', rank: 2, delay: 200 },
          { rule: 'Review orders over $500 from high-risk countries', fraud: '41%', fp: '4.3%', rank: 3, delay: 300 },
        ].map((r) => (
          <div key={r.rank} className="flex items-center gap-3 py-2.5 border-b last:border-0 anim-fadeUp"
            style={{ borderColor: '#f3f4f6', animationDelay: `${r.delay}ms` }}>
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold bg-[#5ba8b4] text-white flex-shrink-0">{r.rank}</span>
            <span className="text-xs text-gray-700 flex-1 leading-tight">{r.rule}</span>
            <span className="text-xs font-bold text-[#5ba8b4] flex-shrink-0">{r.fraud}</span>
            <span className="text-xs text-gray-400 flex-shrink-0">FP {r.fp}</span>
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
    body: 'Monitor approval rates, chargeback trends, and fraud exposure from a single real-time dashboard. Filter by date range, card brand, or billing country — always know exactly where you stand.',
    bullets: ['Total volume & approval rate', 'Fraud vs non-fraud breakdown', 'Chargeback trend charts', 'Projected chargeback cohorts'],
    visual: (
      <div className="rounded-2xl border bg-white p-5 w-full anim-float" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Live Dashboard</span>
          <span className="text-xs text-gray-300">Last 30 days</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Approval Rate', value: '96.9%', up: true },
            { label: 'Fraud Rate', value: '0.8%', up: false },
            { label: 'Chargebacks', value: '12', up: false },
            { label: 'Volume', value: '$248K', up: true },
          ].map((s, i) => (
            <div key={s.label} className="rounded-xl px-3 pt-3 pb-2 anim-scaleIn" style={{ background: '#f8f9fa', animationDelay: `${i * 80}ms` }}>
              <div className="text-[0.65rem] leading-5 text-gray-400 mb-1">{s.label}</div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold text-gray-900">{s.value}</span>
                <span className={`text-[0.6rem] font-semibold ${s.up ? 'text-emerald-500' : 'text-red-400'}`}>{s.up ? '↑' : '↓'}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 h-12">
          {[30, 45, 35, 60, 40, 75, 55, 80, 50, 65, 45, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bar-grow"
              style={{ height: `${h}%`, background: i === 7 ? '#5ba8b4' : '#e5e7eb', animationDelay: `${i * 40}ms` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Chargebacks',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    title: 'Track every dispute, never miss a response.',
    body: 'Every chargeback logged with full context — reason code, dispute status, fraud pattern, and category. Know exactly which cases need a response today.',
    bullets: ['Reason code & dispute status', 'Won / Lost / Needs Response tracking', 'Pattern severity scoring', 'Fraud category classification'],
    visual: (
      <div className="rounded-2xl border bg-white p-5 w-full anim-float" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Chargebacks</span>
          <span className="ml-auto text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-500">3 need response</span>
        </div>
        {[
          { id: 'CB-1041', reason: '10.4 — Card Absent Fraud', status: 'Needs Response', color: 'text-red-500 bg-red-50', delay: 0 },
          { id: 'CB-1040', reason: '13.1 — Merchandise Not Received', status: 'Under Review', color: 'text-amber-600 bg-amber-50', delay: 100 },
          { id: 'CB-1039', reason: '10.5 — Visa Fraud Monitoring', status: 'Won', color: 'text-emerald-600 bg-emerald-50', delay: 200 },
        ].map((c) => (
          <div key={c.id} className="flex items-center gap-3 py-2.5 border-b last:border-0 anim-fadeUp"
            style={{ borderColor: '#f3f4f6', animationDelay: `${c.delay}ms` }}>
            <span className="text-xs font-mono text-gray-400 flex-shrink-0">{c.id}</span>
            <span className="text-xs text-gray-700 flex-1 leading-tight">{c.reason}</span>
            <span className={`text-[0.65rem] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${c.color}`}>{c.status}</span>
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
      <div className="rounded-2xl border bg-white p-5 w-full anim-float" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
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


export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabKey, setTabKey] = useState(0);

  function switchTab(i: number) {
    setActiveTab(i);
    setTabKey(k => k + 1);
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-5 sm:px-10 text-center flex items-center justify-center" style={{ minHeight: 'calc(100vh - 84px)' }}>
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(165,208,216,0.18) 0%, transparent 65%)' }} />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[700px] h-[600px]"
            style={{ background: 'radial-gradient(ellipse at 80% 80%, rgba(125,107,160,0.22) 0%, transparent 70%)' }} />

          <div className="relative max-w-4xl mx-auto py-20">


            {/* Headline — each line staggers */}
            <h1 className="font-extrabold leading-[1.05] text-gray-900 mb-5 tracking-[-0.04em] text-[2.75rem] sm:text-[4rem] lg:text-[5rem]"
              style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}>
              <span className="block anim-fadeUp delay-75 capitalize">Increase Conversion</span>
              <span className="block anim-fadeUp delay-225 capitalize" style={{
                lineHeight: '1.5',
                background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
              }}>Reduce Chargebacks.</span>
            </h1>

            <p className="text-[1.0625rem] leading-[1.75] mb-8 max-w-[540px] mx-auto text-gray-500 anim-fadeUp delay-300">
              FraudPulse AI agents analyze your transactions, identify fraud patterns, and tell you exactly what rules to implement, With fraud capture rates and false positive scores.
            </p>

            {/* CTA */}
            <div className="anim-fadeUp delay-400">
              <Link href="/contact/"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[0.9375rem] font-bold text-white transition-all hover:scale-[1.03] hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  boxShadow: '0 4px 24px rgba(91,168,180,0.4)',
                  transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s cubic-bezier(0.22,1,0.36,1)',
                }}>
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* ── Core Capabilities ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <p className="text-center text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: 'rgb(123, 160, 168)' }}>
                Core Capabilities
              </p>
              <h2 className="text-center font-extrabold text-gray-900 text-[1.875rem] sm:text-[2.5rem] tracking-[-0.03em] mb-12 max-w-2xl mx-auto leading-tight">
                Everything You Need to{' '}
                <span style={{
                  background: 'linear-gradient(135deg, rgb(125,107,160) 0%, rgb(125,107,160) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Understand and Manage Fraud</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>, title: 'Real-Time Dashboard', body: 'Monitor Total Volume, Approval Rate, Declined Transactions, Chargebacks, and Non-Fraud Chargebacks — all in one live view with date-range filtering.', color: 'rgb(61,143,160)', bg: 'rgba(61,143,160,0.08)', border: 'rgba(61,143,160,0.2)' },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>, title: 'Chargeback Tracking & Insights', body: 'Track every chargeback with full context: Reason Code, Dispute Status, Recommended Actions, Pattern Severity, Fraud Pattern, and Fraud Category.', color: 'rgb(125,107,160)', bg: 'rgba(125,107,160,0.08)', border: 'rgba(125,107,160,0.2)' },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'AI & Recommendations', body: 'Ranked recommended actions with fraud capture rate and false positive scores — so your team acts with confidence, not guesswork.', color: 'rgb(61,143,160)', bg: 'rgba(61,143,160,0.08)', border: 'rgba(61,143,160,0.2)' },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>, title: 'Fraud Pattern Detection', body: 'Run the Fraud Classifier to automatically analyze chargebacks and extract the exact rule patterns separating fraud from legitimate transactions.', color: 'rgb(125,107,160)', bg: 'rgba(125,107,160,0.08)', border: 'rgba(125,107,160,0.2)' },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Advanced Analytics', body: 'Visualize Fraud Breakdown by Dispute Reason, Risk Feature radar, Incoming Chargebacks by daily bucket, and Projected Chargeback cohorts.', color: 'rgb(61,143,160)', bg: 'rgba(61,143,160,0.08)', border: 'rgba(61,143,160,0.2)' },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Clean & Validate Your Data', body: 'Built-in Data Sanity checks validate the quality of your transaction data before analysis begins — every insight built on reliable data.', color: 'rgb(125,107,160)', bg: 'rgba(125,107,160,0.08)', border: 'rgba(125,107,160,0.2)' },
              ].map((cap, i) => (
                <Reveal key={cap.title} animation="anim-fadeUp" delay={([0, 75, 150, 0, 75, 150] as const)[i] ?? 0} className="h-full">
                  <div className="rounded-2xl p-6 h-full flex flex-col bg-white"
                    style={{ border: `1px solid ${cap.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s cubic-bezier(0.22,1,0.36,1)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <h3 className="font-bold text-[1.125rem] mb-3 tracking-[-0.02em] text-gray-900">{cap.title}</h3>
                    <p className="text-[1rem] text-gray-600 ">{cap.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tabs section ── */}
        <section className="relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden" style={{ background: 'rgba(125,107,160,0.08)', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
          <div className="pointer-events-none absolute top-0 left-0 w-[900px] h-[700px]"
            style={{ background: 'radial-gradient(ellipse at 0% 20%, rgba(125,107,160,0.25) 0%, transparent 55%)' }} />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[800px] h-[600px]"
            style={{ background: 'radial-gradient(ellipse at 100% 80%, rgba(91,168,180,0.20) 0%, transparent 60%)' }} />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(125,107,160,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto">

            <Reveal animation="anim-fadeUp">
              <p className="text-center text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-3 text-[#5ba8b4]">
                Platform Features
              </p>
              <h2 className="text-center font-extrabold text-gray-900 text-[2rem] sm:text-[2.5rem] tracking-[-0.03em] mb-10">
                Everything in one platform.
              </h2>
            </Reveal>

            {/* Tab strip */}
            <Reveal animation="anim-fadeUp" delay={150}>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => switchTab(i)}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      ...(activeTab === i ? {
                        background: '#5ba8b4', color: 'white',
                        boxShadow: '0 2px 12px rgba(91,168,180,0.35)',
                      } : {
                        background: 'white', color: '#6b7280',
                        border: '1px solid #e5e7eb',
                      }),
                      transition: 'all 0.2s cubic-bezier(0.22,1,0.36,1)',
                    }}>
                    {tab.icon}{tab.label}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Tab content */}
            <div key={tabKey} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="anim-slideLeft delay-0">
                <h3 className="text-[1.5rem] sm:text-[1.875rem] font-extrabold text-gray-900 tracking-[-0.02em] leading-snug mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-[0.9375rem] text-gray-500 leading-[1.75] mb-6">
                  {tabs[activeTab].body}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {tabs[activeTab].bullets.map((b, i) => (
                    <li key={b} className="flex items-center gap-2.5 anim-fadeUp"
                      style={{ animationDelay: `${i * 60}ms` }}>
                      <svg className="w-4 h-4 flex-shrink-0 text-[#5ba8b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[0.9rem] text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="anim-slideRight delay-75">
                {tabs[activeTab].visual}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 sm:py-32 px-5 sm:px-10 text-center">
          <Reveal animation="anim-scaleIn">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-extrabold text-gray-900 text-[2rem] sm:text-[3rem] tracking-[-0.04em] leading-[1.05] mb-4">
                See it working on
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>your own data.</span>
              </h2>
              <p className="text-[1rem] leading-[1.75] max-w-[420px] mx-auto mb-8 text-gray-500">
                Book a walkthrough and see how FraudPulse finds patterns in your transactions and hands you a prioritized action list.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[0.9375rem] font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    boxShadow: '0 4px 24px rgba(91,168,180,0.4)',
                    transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
                  Book a Demo

                </Link>
                <Link href="/pricing/"
                  className="inline-flex items-center rounded-full px-8 py-3.5 text-[0.9375rem] font-semibold border"
                  style={{
                    borderColor: '#e5e7eb', color: '#6b7280',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#5ba8b4'; (e.currentTarget as HTMLElement).style.color = '#5ba8b4'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLElement).style.color = '#6b7280'; }}>
                  View Pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
