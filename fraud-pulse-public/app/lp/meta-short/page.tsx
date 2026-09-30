'use client';

import { Reveal } from '../../components/Reveal';
import { MetaLpFrame } from '../components/MetaLpFrame';
import { LpTrialCta } from '../components/LpTrialCta';

const outcomes = [
  { value: 'Fewer chargebacks', detail: 'Change the rules that let fraud through.' },
  { value: 'Higher approval rates', detail: 'Stop blocking good customers by guesswork.' },
  { value: 'No guesswork', detail: 'See expected impact before you change anything.' },
];

export default function MetaShortLanding() {
  return (
    <MetaLpFrame stickyCta="Try FraudPulse free">
      <section className="relative overflow-hidden pt-8 sm:pt-10 pb-10 sm:pb-14 px-5 sm:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal animation="anim-fadeUp" delay={0}>
            <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
              Stripe Radar and Shopify fraud tools
            </p>
          </Reveal>
          <Reveal animation="anim-fadeUp" delay={75}>
            <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.12] mb-5 text-[2.15rem] sm:text-[3.1rem]">
              Using Stripe Radar or Shopify&apos;s built-in fraud tools?
            </h1>
          </Reveal>
          <Reveal animation="anim-fadeUp" delay={150}>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 mb-8">
              They are a solid foundation, but they cannot tell you why your rules behave the way they do, or which one
              to change to stop losing good customers - or catching more fraud.
            </p>
          </Reveal>
          <Reveal animation="anim-fadeUp" delay={225}>
            <LpTrialCta className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform">
              Try FraudPulse free
            </LpTrialCta>
            <p className="mt-4 text-[0.875rem] text-gray-400">14-day free trial. No credit card required.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto">
          <Reveal animation="anim-fadeUp">
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-gray-600 text-center mb-10">
              FraudPulse connects to your real transaction and dispute data and gives you clear, ranked actions - with
              the expected impact of each one, before you make the change. Built by a team with 20+ years combined in
              risk, data, and R&amp;D.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {outcomes.map((item, i) => (
              <Reveal key={item.value} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                <div
                  className="rounded-[16px] border bg-white p-6 h-full text-center"
                  style={{ borderColor: '#e5e7eb' }}
                >
                  <p className="font-bold text-gray-900 mb-2 text-[1.0625rem]">{item.value}</p>
                  <p className="text-[0.9375rem] leading-[1.6] text-gray-500">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal animation="anim-fadeUp" delay={225}>
            <div className="text-center">
              <LpTrialCta className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform">
                Try FraudPulse free
              </LpTrialCta>
            </div>
          </Reveal>
        </div>
      </section>
    </MetaLpFrame>
  );
}
