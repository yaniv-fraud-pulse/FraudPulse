'use client';

import { Reveal } from '../../components/Reveal';
import { MetaLpFrame } from '../components/MetaLpFrame';
import { LpTrialCta } from '../components/LpTrialCta';
import { Eyebrow, HeroBackdrop } from '../../components/Brand';

const gaps = [
  {
    title: 'Requires fraud expertise',
    body: 'Knowing which rules to adjust, and how, demands a level of fraud analytics know-how most merchants simply do not have in-house.',
  },
  {
    title: 'Lack of data accessibility',
    body: 'The raw dispute and transaction data needed to make smart decisions is either hard to reach or requires manual, time-consuming digging.',
  },
  {
    title: 'Unexplainable decision logic',
    body: "You're told a transaction was flagged, but not why your current rules behave the way they do, or what changing them would actually achieve.",
  },
];

export default function MetaLongLanding() {
  return (
    <MetaLpFrame stickyCta="Start your free trial">
      <section className="relative overflow-x-clip pt-8 sm:pt-10 pb-12 sm:pb-16 px-5 sm:px-8">
        <HeroBackdrop />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal animation="anim-fadeUp" delay={0}>
            <Eyebrow>For merchants on Stripe Radar and Shopify</Eyebrow>
          </Reveal>
          <Reveal animation="anim-fadeUp" delay={75}>
            <h1 className="font-extrabold text-gray-900 tracking-[-0.045em] leading-[1.08] mb-5 text-[2.15rem] sm:text-[3.1rem]">
              Still relying only on Stripe Radar or your Shopify fraud app to catch fraud?
            </h1>
          </Reveal>
          <Reveal animation="anim-fadeUp" delay={150}>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 mb-8">
              You are probably losing money - in both directions.
            </p>
          </Reveal>
          <Reveal animation="anim-fadeUp" delay={225}>
            <LpTrialCta className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform">
              Start your free trial
            </LpTrialCta>
            <p className="mt-4 text-[0.875rem] text-gray-400">14-day free trial. No credit card required.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal animation="anim-fadeUp">
            <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-center mb-4 text-[1.75rem] sm:text-[2.25rem]">
              Built-in fraud tools leave three gaps
            </h2>
            <p className="text-center text-gray-500 mb-10 text-[1.0625rem] leading-[1.7]">
              Most online merchants use the fraud tools built into their payment processor, such as Stripe Radar. These
              tools are a solid foundation, but they leave three critical gaps unaddressed.
            </p>
          </Reveal>
          <div className="flex flex-col gap-4">
            {gaps.map((gap, i) => (
              <Reveal key={gap.title} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8">
                  <p className="font-bold text-gray-900 mb-2 text-[1.125rem]">{gap.title}</p>
                  <p className="text-[1rem] leading-[1.7] text-gray-500">{gap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal animation="anim-fadeUp" delay={225}>
            <p className="mt-10 text-[1.0625rem] leading-[1.75] text-gray-600 text-center">
              The result: without dedicated fraud expertise and easy access to the right data, it is nearly impossible
              to manage this well on your own - and that gap shows up directly on your bottom line, in the form of lost
              revenue and false declines that turn away good customers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal animation="anim-fadeUp">
            <p className="text-center text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
              That is the gap FraudPulse was built to close
            </p>
            <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-6 text-[1.75rem] sm:text-[2.25rem]">
              Catch more fraud and approve more good customers
            </h2>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-gray-600 mb-5">
              FraudPulse helps you catch more fraud and approve more good customers - using the same tools you already
              have. No need to switch systems or start from scratch. We look at your actual transaction and dispute
              history and tell you exactly what is going wrong: which rules are blocking legitimate customers, and which
              ones are letting fraud slip through. And before you change anything, you will already know what to expect
              - how much fraud you will catch, and how many good orders you will stop losing.
            </p>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-gray-600">
              No new fraud engine to learn. No rebuilding your stack. Just clear, ranked, data-backed actions your team
              can implement in minutes - not weeks of manual dispute analysis.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal animation="anim-fadeUp">
            <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-5 text-[1.75rem] sm:text-[2.25rem]">
              Built by people who have lived this problem
            </h2>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-gray-600 mb-8">
              We have come to know this problem closely, over years of hands-on experience. Between the two of us, we
              bring over 20 years of combined experience across risk, data, and R&amp;D - Idan on the fraud and risk
              analytics side, Yaniv on the engineering and data infrastructure side. We have seen fraud from a few
              different angles - the data, the decisions, and the systems that run underneath it all.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
              <div className="rounded-3xl border border-gray-200/80 bg-white p-6">
                <p className="font-bold text-gray-900">Idan Hayon</p>
                <p className="text-[0.8125rem] text-[#4a96a3] mb-2">Co-Founder &amp; CEO</p>
                <p className="text-[0.9375rem] leading-[1.65] text-gray-500">
                  Fraud and risk analytics. The decisions side of the problem.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200/80 bg-white p-6">
                <p className="font-bold text-gray-900">Yaniv Hayun</p>
                <p className="text-[0.8125rem] text-[#4a96a3] mb-2">Co-Founder &amp; CTO</p>
                <p className="text-[0.9375rem] leading-[1.65] text-gray-500">
                  Engineering and data infrastructure. The systems underneath it all.
                </p>
              </div>
            </div>
            <p className="text-[1.125rem] leading-[1.75] text-gray-700 mb-8">
              If you are tired of guessing whether your fraud rules are helping or hurting your approval rate, it is
              time to see what FraudPulse can show you.
            </p>
            <LpTrialCta className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform">
              Start your free trial
            </LpTrialCta>
            <p className="mt-4 text-[0.875rem] text-gray-400">14-day free trial. No credit card. No stack rebuild.</p>
          </Reveal>
        </div>
      </section>
    </MetaLpFrame>
  );
}
