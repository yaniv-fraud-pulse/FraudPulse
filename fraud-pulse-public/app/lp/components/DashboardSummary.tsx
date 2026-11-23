type Stat = { label: string; value: string; note?: string };

type DashboardSummaryProps = {
  title: string;
  fraudLoss: Stat;
  savings: Stat;
  coverage: Stat;
  store: Stat[];
};

/** The top of a FraudPulse dashboard: fraud loss (red), potential savings (green), coverage, then store totals. */
export function DashboardSummary({ title, fraudLoss, savings, coverage, store }: DashboardSummaryProps) {
  const headline = [
    { ...fraudLoss, tone: 'text-[#dc2626]' },
    { ...savings, tone: 'text-[#2f9e6b]' },
    { ...coverage, tone: 'text-[#4a96a3]' },
  ];

  return (
    <div className="rounded-3xl border border-[#5ba8b4]/25 bg-white p-6 sm:p-8 shadow-[0_18px_40px_-28px_rgba(74,150,163,0.55)]">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[#4a96a3] mb-5">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {headline.map((item) => (
          <div key={item.label} className="rounded-2xl bg-[#f8f9fa] px-5 py-4">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-gray-500">{item.label}</p>
            <p className={`text-[1.75rem] font-extrabold tracking-[-0.03em] ${item.tone}`}>{item.value}</p>
            <p className="text-[0.8125rem] leading-snug text-gray-500">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {store.map((item) => (
          <div key={item.label} className="rounded-2xl border border-gray-200/80 px-4 py-3">
            <p className="text-[0.8125rem] text-gray-500">{item.label}</p>
            <p className="text-[1.25rem] font-extrabold text-gray-900">{item.value}</p>
            {item.note && <p className="text-[0.75rem] text-gray-500">{item.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
