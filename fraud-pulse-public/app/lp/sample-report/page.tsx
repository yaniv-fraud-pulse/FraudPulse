'use client';

import { MetaLpFrame } from '../components/MetaLpFrame';
import { LpGoogleCta } from '../components/LpGoogleCta';
import { LpTrialCta } from '../components/LpTrialCta';
import { Eyebrow, HeroBackdrop } from '../../components/Brand';
import { DashboardSummary } from '../components/DashboardSummary';

// Made-up store. Each action's share is of the fraud loss in dollars, so the three add up to the savings and coverage.
const fraudLoss = { label: 'Fraud loss', value: '$31,847', note: '213 fraud chargebacks' };
const savings = { label: 'Potential savings', value: '$15,344', note: 'By implementing recommended actions' };
const coverage = { label: 'Coverage of fraud loss', value: '48.2%', note: 'Share of the fraud loss covered by the actions' };

const store = [
  { label: 'Transactions', value: '48,317' },
  { label: 'Payment volume', value: '$6,284,519' },
  { label: 'Chargebacks', value: '643', note: '1.3% rate · $83,412' },
  { label: 'Good orders blocked', value: '0.16%' },
];

const rules = [
  {
    rank: 1,
    rule: 'Block cards with prior chargeback history',
    tool: 'Stripe Radar',
    caught: '24.8%',
    chargebacks: '53 chargebacks',
    saved: '$7,912',
    goodOrders: '11 good orders blocked',
  },
  {
    rank: 2,
    rule: 'Review first-time buyers shipping to a new address over $300',
    tool: 'Shopify Flow',
    caught: '14.9%',
    chargebacks: '31 chargebacks',
    saved: '$4,738',
    goodOrders: '93 good orders sent to review',
  },
  {
    rank: 3,
    rule: 'Block orders from high-risk email domains',
    tool: 'Blockify',
    caught: '8.5%',
    chargebacks: '19 chargebacks',
    saved: '$2,694',
    goodOrders: '67 good orders blocked',
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
            $15,344 in potential savings for this example store
          </h1>
          <p className="text-[1.125rem] leading-[1.7] text-gray-500">
            This example uses a made-up store and 90 days of made-up data. It is not a customer or a promised result.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <DashboardSummary
              title="Example dashboard, made-up data"
              fraudLoss={fraudLoss}
              savings={savings}
              coverage={coverage}
              store={store}
            />
          </div>

          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-5 text-[1.5rem] sm:text-[1.875rem]">
            Top recommended actions
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
                    <dt className="text-[0.8125rem] text-gray-500">Fraud loss caught</dt>
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
            Together, these three actions add up to the $15,344 in potential savings (48.2% of the fraud loss).
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-[#f8f9fa]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-4 text-[1.75rem] sm:text-[2.25rem]">
            What are your potential savings?
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-gray-600 mb-8">
            Connect Stripe or Shopify during a 14-day trial. No credit card. You keep your current fraud tools.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-stretch">
            <LpTrialCta className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform">
              Run this on my data
            </LpTrialCta>
            <LpGoogleCta className="flex" />
          </div>
        </div>
      </section>
    </MetaLpFrame>
  );
}
