'use client';

import { MetaLpFrame } from '../components/MetaLpFrame';
import { LpGoogleCta } from '../components/LpGoogleCta';
import { LpTrialCta } from '../components/LpTrialCta';
import { Eyebrow, HeroBackdrop } from '../../components/Brand';
import { DashboardSummary } from '../components/DashboardSummary';

// From one client's FraudPulse dashboard, shared with their permission. Wording follows the dashboard.
const fraudLoss = { label: 'Fraud loss', value: '$125,961', note: '293 fraud chargebacks' };
const savings = { label: 'Potential savings', value: '$56,922', note: 'By implementing recommended actions' };
const coverage = { label: 'Coverage of their fraud loss', value: '45.2%', note: 'Share of the fraud loss covered by the actions' };

const store = [
  { label: 'Transactions', value: '65,552' },
  { label: 'Payment volume', value: '$25.9M' },
  { label: 'Chargebacks', value: '1,101', note: '1.7% rate · $481,491' },
  { label: 'Good orders blocked', value: '0.03%' },
];

export default function SampleClient() {
  return (
    <MetaLpFrame stickyCta="Find my savings">
      <section className="relative overflow-x-clip pt-8 sm:pt-10 pb-8 px-5 sm:px-8">
        <HeroBackdrop />
        <div className="relative max-w-3xl mx-auto text-center">
          <Eyebrow>Real client dashboard</Eyebrow>
          <h1 className="font-extrabold text-gray-900 tracking-[-0.045em] leading-[1.08] mb-5 text-[2.15rem] sm:text-[3.1rem]">
            $56,922 in potential savings for one of our merchants
          </h1>
          <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-gray-500">
            45.2% of their $125,961 fraud loss, by implementing 7 recommended actions in the fraud tools they already
            use.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-10">
        <div className="max-w-3xl mx-auto">
          <DashboardSummary
            title="From their FraudPulse dashboard"
            fraudLoss={fraudLoss}
            savings={savings}
            coverage={coverage}
            store={store}
          />
          <p className="mt-4 text-[0.875rem] leading-[1.6] text-gray-500">
            Shared with the merchant&apos;s permission. Potential savings are FraudPulse&apos;s estimate from the
            merchant&apos;s own data, by implementing the recommended actions. Your results depend on your data.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-8 text-[1.75rem] sm:text-[2.25rem]">
            How FraudPulse found it
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ['Connected their data', 'Stripe or Shopify, read-only. Nothing changed in checkout.'],
              ['Matched chargebacks to rules', 'Which fraud got through, and which rule could have stopped it.'],
              ['Recommended 7 actions', 'Each with fraud caught and good orders affected, before changing anything.'],
            ].map(([title, body], i) => (
              <li key={title} className="rounded-3xl border border-gray-200/80 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#4a96a3] text-[0.875rem] font-bold text-white mb-4">
                  {i + 1}
                </span>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-[0.9375rem] leading-[1.6] text-gray-500">{body}</p>
              </li>
            ))}
          </ol>
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
              Find my savings
            </LpTrialCta>
            <LpGoogleCta className="flex" />
          </div>
        </div>
      </section>
    </MetaLpFrame>
  );
}
