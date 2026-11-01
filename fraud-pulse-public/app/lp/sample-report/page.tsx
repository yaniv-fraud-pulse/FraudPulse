'use client';

import { MetaLpFrame } from '../components/MetaLpFrame';
import { LpTrialCta } from '../components/LpTrialCta';
import { Eyebrow, HeroBackdrop } from '../../components/Brand';

const summary = [
  { label: 'Orders reviewed', value: '48,200' },
  { label: 'Fraud chargebacks', value: '212' },
  { label: 'Fraud chargeback cost', value: '$31,800' },
];

const rules = [
  {
    rank: 1,
    rule: 'Block cards with prior chargeback history',
    tool: 'Stripe Radar',
    caught: '34%',
    chargebacks: '72 chargebacks',
    saved: '$10,800',
    goodOrders: '12 good orders blocked',
  },
  {
    rank: 2,
    rule: 'Review first-time buyers shipping to a new address over $300',
    tool: 'Shopify Flow',
    caught: '22%',
    chargebacks: '47 chargebacks',
    saved: '$7,050',
    goodOrders: '96 good orders sent to review',
  },
  {
    rank: 3,
    rule: 'Block orders from high-risk email domains',
    tool: 'Blockify',
    caught: '14%',
    chargebacks: '30 chargebacks',
    saved: '$4,500',
    goodOrders: '64 good orders blocked',
  },
];

export default function SampleReport() {
  return (
    <MetaLpFrame stickyCta="Run this on my data">
      <section className="relative overflow-x-clip pt-8 sm:pt-10 pb-8 px-5 sm:px-8">
        <HeroBackdrop />
        <div className="relative max-w-3xl mx-auto text-center">
          <Eyebrow>Sample report</Eyebrow>
          <h1 className="font-extrabold text-gray-900 tracking-[-0.045em] leading-[1.08] mb-5 text-[2.15rem] sm:text-[3.1rem]">
            Which rule should this store change first?
          </h1>
          <p className="text-[1.125rem] leading-[1.7] text-gray-500">
            This example uses a made-up store and 90 days of made-up data. It is not a customer or a promised result.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-10">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {summary.map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200/80 bg-white px-5 py-4 text-center">
                <p className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-gray-900">{item.value}</p>
                <p className="text-[0.875rem] text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-5 text-[1.5rem] sm:text-[1.875rem]">
            Ranked rule changes
          </h2>
          <ol className="flex flex-col gap-4">
            {rules.map((item) => (
              <li key={item.rank} className="rounded-3xl border border-gray-200/80 bg-white p-6">
                <div className="flex items-start gap-4 mb-5">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#4a96a3] text-[0.875rem] font-bold text-white">
                    {item.rank}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-[1.125rem] leading-snug">{item.rule}</p>
                    <p className="mt-1 text-[0.875rem] text-gray-500">Change it in {item.tool}</p>
                  </div>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-[#f8f9fa] px-4 py-3">
                    <dt className="text-[0.8125rem] text-gray-500">Fraud chargebacks caught</dt>
                    <dd className="font-extrabold text-[#4a96a3] text-[1.25rem]">{item.caught}</dd>
                    <dd className="text-[0.8125rem] text-gray-500">{item.chargebacks}</dd>
                  </div>
                  <div className="rounded-2xl bg-[#f8f9fa] px-4 py-3">
                    <dt className="text-[0.8125rem] text-gray-500">Estimated savings</dt>
                    <dd className="font-extrabold text-gray-900 text-[1.25rem]">{item.saved}</dd>
                  </div>
                  <div className="rounded-2xl bg-[#f8f9fa] px-4 py-3">
                    <dt className="text-[0.8125rem] text-gray-500">Cost to good customers</dt>
                    <dd className="font-semibold text-gray-900 text-[0.9375rem] leading-snug mt-1">{item.goodOrders}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[0.875rem] leading-[1.6] text-gray-500">
            Each estimate stands alone. Rules can catch some of the same orders, so the results do not add up.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-[#f8f9fa]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-4 text-[1.75rem] sm:text-[2.25rem]">
            See this for your own store
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-gray-600 mb-8">
            Connect Stripe or Shopify during a 14-day trial. No credit card. You keep your current fraud tools.
          </p>
          <LpTrialCta className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform">
            Run this on my data
          </LpTrialCta>
        </div>
      </section>
    </MetaLpFrame>
  );
}
