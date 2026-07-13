'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useInView } from './hooks/useInView';
import FaqAccordion from './components/FaqAccordion';
import { homeFaqs } from './lib/homeFaq';
import { SITE_URL } from './lib/site';

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


const applyActionsVisual = (
  <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 anim-float overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-[#5ba8b4] flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(91,168,180,0.6)' }} />
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Apply in Your Stack</span>
    </div>
    {[
      { name: 'Shopify Protect', slug: 'shopify', color: '95BF47', rule: 'Tighten high-risk country rules', delay: 0 },
      { name: 'Stripe Radar', slug: 'stripe', color: '635BFF', rule: 'Block cards with prior chargebacks', delay: 100 },
    ].map(({ name, slug, color, rule, delay }) => (
      <div key={name} className="py-3 border-b last:border-0 anim-fadeUp" style={{ borderColor: '#f3f4f6', animationDelay: `${delay}ms` }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width={18} height={18} className="object-contain" />
          </div>
          <span className="text-xs font-semibold text-gray-800">{name}</span>
          <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 ml-auto">Ready to apply</span>
        </div>
        <p className="text-xs text-gray-500 pl-11">{rule}</p>
      </div>
    ))}
  </div>
);

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
    bullets: ['AI Summary with risk level badge', 'Ranked rules with fraud rate & FP%', 'Key insights on blind spots', 'Full PDF report for your risk committee'],
    visual: (
      <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 anim-float overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
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
    body: 'Monitor approval rates, chargeback trends, and fraud exposure from a single real-time dashboard. Filter by date range, card brand, or billing country — always know exactly where you stand.',
    bullets: ['Total volume & approval rate', 'Fraud vs non-fraud breakdown', 'Chargeback trend charts', 'Projected chargeback cohorts'],
    visual: (
      <div className="rounded-2xl border bg-[#f8f9fa] p-4 sm:p-5 w-full max-w-full min-w-0 anim-float overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
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
    body: 'Every chargeback logged with full context — reason code, dispute status, fraud pattern, and category. Know exactly which cases need a response today.',
    bullets: ['Reason code & dispute status', 'Won / Lost / Needs Response tracking', 'Pattern severity scoring', 'Fraud category classification'],
    visual: (
      <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 anim-float overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
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
      <div className="rounded-2xl border bg-white p-4 sm:p-5 w-full max-w-full min-w-0 anim-float overflow-hidden text-left" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
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
  {
    label: 'Shopify & Stripe',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Apply recommendations in Shopify Protect and Stripe Radar.',
    body: 'FraudPulse doesn\'t replace your fraud tools — it tells you exactly how to tune Shopify Protect and Stripe Radar so you capture more fraud with fewer false positives.',
    bullets: [
      'Apply ranked rules in Shopify Protect',
      'Apply ranked rules in Stripe Radar',
      'No rip and replace — keep your existing stack',
      'Turn insights into live fraud settings',
    ],
    visual: applyActionsVisual,
  },
];

const heroSteps = [
  {
    step: '01',
    title: 'Connect Stripe / Shopify',
    description: 'Connect your Stripe or Shopify store in minutes — no engineering work required',
    visual: tabs[1].visual,
    color: '#5ba8b4',
  },
  {
    step: '02',
    title: 'We Analyze Your Fraud Patterns',
    description: "We analyze your fraud and transaction patterns to find what's causing chargebacks and false declines",
    visual: tabs[3].visual,
    color: '#7D6BA0',
  },
  {
    step: '03',
    title: 'Receive Prioritized Rule Changes',
    description: 'You receive a prioritized list of rule changes with estimated revenue and chargeback impact',
    visual: tabs[0].visual,
    color: '#5ba8b4',
  },
  {
    step: '04',
    title: 'Apply in Shopify & Stripe',
    description: 'Implement changes directly in Shopify Protect and Stripe Radar and track your improvements',
    visual: tabs[4].visual,
    color: '#5ba8b4',
  },
];


export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabKey, setTabKey] = useState(0);
  const [heroStep, setHeroStep] = useState(0);

  function switchTab(i: number) {
    setActiveTab(i);
    setTabKey(k => k + 1);
  }

  // Auto-rotate tabs every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const next = (prev + 1) % tabs.length;
        setTabKey(k => k + 1);
        return next;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate hero steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroStep(prev => (prev + 1) % heroSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homeFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'FraudPulse',
            url: SITE_URL,
            description:
              'FraudPulse tells merchants exactly which fraud rules to change in Stripe and Shopify to reduce chargebacks and increase approvals.',
          }),
        }}
      />
      <Header />
      <main className="flex-grow overflow-x-clip">
        {/* ── Hero ── */}
        <section className="relative overflow-x-clip lg:overflow-x-visible px-5 sm:px-10 text-center flex items-center justify-center" style={{ minHeight: 'calc(100vh - 84px)' }}>
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(165,208,216,0.18) 0%, transparent 65%)' }} />
          <div className="pointer-events-none absolute bottom-0 right-0 w-full max-w-[700px] h-[600px]"
            style={{ background: 'radial-gradient(ellipse at 80% 80%, rgba(125,107,160,0.22) 0%, transparent 70%)' }} />

          <div className="relative max-w-6xl mx-auto py-20 w-full min-w-0">


            {/* Headline */}
            <h1 className="font-extrabold leading-[1.05] text-gray-900 mb-5 tracking-[-0.04em] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem]">
              <span className="block anim-fadeUp delay-75">Stop Losing Money to</span>
              <span className="block anim-fadeUp delay-225" style={{
                lineHeight: '1.4',
                background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Fraud and False Declines.</span>
            </h1>

            <p className="text-[1.25rem] leading-[1.75] mb-3 max-w-[760px] mx-auto text-gray-900 font-semibold anim-fadeUp delay-300">
              FraudPulse tells you exactly which fraud rules to change in{' '}
              <span className="inline-flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/stripe/635BFF" alt="" width={16} height={16} className="inline-block relative -top-px" />
                <span style={{ color: '#635BFF' }}>Stripe</span>
              </span>
              {' '}&amp;{' '}
              <span className="inline-flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/shopify/95BF47" alt="" width={16} height={16} className="inline-block relative -top-px" />
                <span style={{ color: '#95BF47' }}>Shopify</span>
              </span>
              {' '}to reduce chargebacks and increase approvals.
            </p>

            <p className="text-[1.0625rem] leading-[1.75] mb-8 max-w-[620px] mx-auto text-gray-500 anim-fadeUp delay-400">
              Get actionable fraud insights in days not dashboards you never use.
            </p>

            {/* CTA */}
            <div className="anim-fadeUp delay-500">
              <Link href="/book-a-demo/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-5 text-lg font-bold text-white transition-all hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)',
                }}>
                Book a Demo
              </Link>
            </div>

            {/* Subheadline */}
            <p className="mt-6 text-[1rem] leading-[1.7] max-w-[640px] mx-auto text-gray-500 anim-fadeUp delay-600">
              We analyze your transactions, chargebacks, and customer patterns to generate clear, implementable fraud rule recommendations.
            </p>

            {/* Process Flow Animation */}
            <div className="mt-12 sm:mt-20 anim-fadeUp delay-500 w-full max-w-full min-w-0 overflow-x-clip lg:overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-full min-w-0">
                {/* Left: Step Info */}
                <div className="text-left w-full min-w-0">
                  <div className="flex gap-2 mb-6 justify-center lg:justify-start">
                    {heroSteps.map((_, i) => (
                      <div key={i} className="transition-all duration-500"
                        style={{
                          width: i === heroStep ? '32px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          background: i === heroStep ? heroSteps[heroStep].color : '#e5e7eb'
                        }} />
                    ))}
                  </div>
                  <div className="relative min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] text-center lg:text-left">
                    {heroSteps.map((step, i) => (
                      <div key={i} className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          opacity: i === heroStep ? 1 : 0,
                          pointerEvents: i === heroStep ? 'auto' : 'none'
                        }}>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-[-0.02em]">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Visual Demo */}
                <div className="relative w-full max-w-full min-w-0 overflow-x-clip lg:overflow-visible min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
                  <div className="relative w-full min-h-full lg:scale-[1.15] lg:origin-top-left">
                    {heroSteps.map((step, i) => (
                      <div key={i} className="absolute top-0 left-0 w-full max-w-full transition-opacity duration-700"
                        style={{
                          opacity: i === heroStep ? 1 : 0,
                          pointerEvents: i === heroStep ? 'auto' : 'none',
                        }}>
                        {step.visual}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* ── Works with Shopify Protect & Stripe Radar ── */}
                <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(180deg, #0a0c10 0%, #111827 50%, #0f1419 100%)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Reveal animation="anim-fadeUp">
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-5 text-[#5ba8b4]">
                Works with your stack
              </p>
              <h2 className="font-extrabold tracking-[-0.03em] text-[2rem] sm:text-[2.75rem] leading-[1.15] mb-6">
                We don&apos;t replace Stripe or Shopify.
                <br />
                <span className="text-gray-400 font-bold text-[1.375rem] sm:text-[1.625rem]">
                  We make them work Better for you.
                </span>
              </h2>
              <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] text-gray-400 mb-8">
                <span className="font-bold text-white">Shopify Protect</span> and{' '}
                <span className="font-bold text-white">Stripe Radar</span> block transactions. FraudPulse analyzes your data and tells you exactly which rules to change — no rip and replace, no migration risk.
              </p>
            </Reveal>

            <Reveal animation="anim-fadeUp" delay={150}>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { name: 'Shopify Protect', slug: 'shopify', color: '95BF47' },
                  { name: 'Stripe Radar', slug: 'stripe', color: '635BFF' },
                ].map(({ name, slug, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-[14px] px-5 py-3.5 border"
                    style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(75,85,99,0.4)' }}
                  >
                    <div className="w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" width={20} height={20} className="object-contain" />
                    </div>
                    <span className="text-[0.875rem] font-semibold text-white">{name}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal animation="anim-fadeUp" delay={225}>
              <Link
                href="/how-it-works/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white transition-all hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  boxShadow: '0 4px 24px rgba(91,168,180,0.35)',
                  transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                See How It Works
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Core Capabilities ── */}
        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="text-center font-extrabold text-gray-900 text-[2.7rem] sm:text-[3.1rem] tracking-[-0.03em] mb-4 max-w-3xl mx-auto leading-tight">
                Reduce Chargebacks.{' '}
                <span style={{
                  background: 'linear-gradient(135deg, rgb(125,107,160) 0%, rgb(125,107,160) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Increase Approvals.</span>
              </h2>
              <p className="text-center text-[1.0625rem] text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                Improve your <strong className="text-gray-800">Stripe</strong> and <strong className="text-gray-800">Shopify</strong> fraud settings without replacing your stack — just better rules, backed by your own data.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>, title: 'Monitoring Dashboard', body: 'Volumes, Approval Rates and Chargebacks Breakdown - all in one live view with date-range filtering.', color: 'rgb(61,143,160)', bg: 'rgba(61,143,160,0.08)', border: 'rgba(61,143,160,0.2)', featured: false, featuredType: null },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>, title: 'Chargeback Tracking & Insights', body: 'Track every chargeback with full context: Reason Code, Dispute Status and Pattern Severity.', color: 'rgb(125,107,160)', bg: 'rgba(125,107,160,0.08)', border: 'rgba(125,107,160,0.2)', featured: true, featuredType: null },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'Fraud Prevention Actions', body: 'Clear and simple action items -Immediate improve of fraud and false positive rates, so your team could take confident and data-based decisions.', color: 'rgb(61,143,160)', bg: 'rgba(61,143,160,0.08)', border: 'rgba(61,143,160,0.2)', featured: false, featuredType: null },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>, title: 'Fraud Pattern Detection', body: 'Run the Fraud Classifier to automatically analyze chargebacks and extract the exact rule patterns separating fraud from legitimate transactions.', color: 'rgb(125,107,160)', bg: 'rgba(125,107,160,0.08)', border: 'rgba(125,107,160,0.2)', featuredType: 'purple' },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Advanced Analytics', body: 'Visualize Fraud Breakdown by Dispute Reason, Risk Feature radar, Incoming Chargebacks by daily bucket, and Projected Chargeback cohorts.', color: 'rgb(61,143,160)', bg: 'rgba(61,143,160,0.08)', border: 'rgba(61,143,160,0.2)', featuredType: null },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Clean & Validate Your Data', body: 'Built-in Data Sanity checks validate the quality of your transaction data before analysis begins — every insight built on reliable data.', color: 'rgb(125,107,160)', bg: 'rgba(125,107,160,0.08)', border: 'rgba(125,107,160,0.2)', featuredType: 'teal' },
              ].map((cap, i) => {
                const getBgClass = () => {
                  if (cap.featured) return 'bg-gray-900';
                  if (cap.featuredType === 'purple') return 'bg-[#7D6BA0]';
                  if (cap.featuredType === 'teal') return 'bg-[#5ba8b4]';
                  return 'bg-white';
                };
                const getTextColor = () => {
                  if (cap.featured || cap.featuredType) return 'text-white';
                  return 'text-gray-900';
                };
                const getBodyTextColor = () => {
                  if (cap.featured || cap.featuredType) return 'text-white/90';
                  return 'text-gray-600';
                };
                const getBorderColor = () => {
                  if (cap.featured) return '#1f2937';
                  if (cap.featuredType === 'purple') return '#7D6BA0';
                  if (cap.featuredType === 'teal') return '#5ba8b4';
                  return cap.border;
                };
                
                return (
                <Reveal key={cap.title} animation="anim-fadeUp" delay={([0, 75, 150, 0, 75, 150] as const)[i] ?? 0} className="h-full">
                  <div className={`rounded-2xl p-10 h-full flex flex-col ${getBgClass()}`}
                    style={{ border: `1px solid ${getBorderColor()}`, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s cubic-bezier(0.22,1,0.36,1)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                    <h3 className={`font-bold text-[1.5rem] mb-5 tracking-[-0.02em] ${getTextColor()}`}>{cap.title}</h3>
                    <p className={`text-[1.125rem] leading-relaxed ${getBodyTextColor()}`}>{cap.body}</p>
                  </div>
                </Reveal>
              );
              })}
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
              <h2 className="text-center font-extrabold text-gray-900 text-[2.7rem] sm:text-[3.1rem] tracking-[-0.03em] mb-10">
                Get actionable recommendations,<br className="hidden sm:block" /> not dashboards
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
            <div key={tabKey} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="anim-slideLeft delay-0">
                <h3 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-gray-900 tracking-[-0.02em] leading-snug mb-6">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-[1.125rem] text-gray-500 leading-[1.75] mb-8">
                  {tabs[activeTab].body}
                </p>
                <ul className="flex flex-col gap-4">
                  {tabs[activeTab].bullets.map((b, i) => (
                    <li key={b} className="flex items-center gap-3 anim-fadeUp"
                      style={{ animationDelay: `${i * 60}ms` }}>
                      <svg className="w-5 h-5 flex-shrink-0 text-[#5ba8b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[1.0625rem] text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="anim-slideRight delay-75 w-full min-w-0 max-w-full lg:scale-110 lg:self-start">
                {tabs[activeTab].visual}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 sm:py-28 bg-[#7D6BA0]/20">
          <div className="px-5 sm:px-10">
            <Reveal animation="anim-fadeUp">
              <div className="text-center mb-12">
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">FAQ</p>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[2.75rem] sm:text-[3.25rem]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-[1.0625rem] text-gray-500 max-w-2xl mx-auto">
                  Common questions from merchants using Stripe and Shopify who want to reduce chargebacks without replacing their fraud stack.
                </p>
              </div>
              <FaqAccordion faqs={homeFaqs} />
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 sm:py-32 px-5 sm:px-10 text-center">
          <Reveal animation="anim-scaleIn">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-extrabold text-gray-900 text-[3rem] sm:text-[4rem] tracking-[-0.04em] leading-[1.05] mb-4">
                See it on your own
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Stripe & Shopify data.</span>
              </h2>
              <p className="text-[1.5rem] leading-[1.75] max-w-[620px] mx-auto mb-8">
                Book a walkthrough and see the exact fraud rule changes FraudPulse would recommend for your store.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/book-a-demo/"
                  className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-[1.0625rem] font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
                  Book a Demo

                </Link>
                <Link href="/pricing/"
                  className="inline-flex items-center rounded-full px-10 py-4 text-[1.0625rem] font-semibold border"
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
