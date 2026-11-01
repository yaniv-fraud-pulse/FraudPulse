export function SampleRule() {
  return (
    <div className="mx-auto mb-8 max-w-xl rounded-3xl border border-[#5ba8b4]/25 bg-white p-6 text-left shadow-[0_18px_40px_-28px_rgba(74,150,163,0.55)]">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#4a96a3] mb-3">
        Example, not your data
      </p>
      <p className="font-bold text-gray-900 text-[1.0625rem] mb-4">
        Rule to change: review first-time buyers shipping to a new address over $300
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-2xl bg-[#f8f9fa] px-4 py-3">
          <p className="text-[1.375rem] font-extrabold text-[#4a96a3]">22%</p>
          <p className="text-[0.8125rem] leading-[1.4] text-gray-500">of fraud chargebacks caught</p>
        </div>
        <div className="rounded-2xl bg-[#f8f9fa] px-4 py-3">
          <p className="text-[1.375rem] font-extrabold text-gray-900">96</p>
          <p className="text-[0.8125rem] leading-[1.4] text-gray-500">good orders sent to review</p>
        </div>
      </div>
      <p className="text-[0.9375rem] leading-[1.65] text-gray-600">
        Your 14-day trial ranks changes like this from your own Shopify or Stripe data.
      </p>
    </div>
  );
}
