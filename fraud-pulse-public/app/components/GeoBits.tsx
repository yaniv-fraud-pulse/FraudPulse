type Stat = {
  value: string;
  label: string;
};

export default function GeoStatStrip({
  stats,
  className = '',
}: {
  stats: readonly Stat[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.value + stat.label}
          className="rounded-[14px] border bg-white px-4 py-5 text-center"
          style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <p className="font-extrabold text-[1.75rem] sm:text-[2rem] tracking-[-0.03em] text-[#4a96a3] mb-2">
            {stat.value}
          </p>
          <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.5] text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Freshness signal for GEO / AI crawlers.
 * Use `visible={false}` when the date should stay in the DOM (and JSON-parseable
 * HTML) but not show on the page for humans.
 */
export function PageUpdated({
  date,
  visible = true,
}: {
  date: string;
  visible?: boolean;
}) {
  return (
    <p className={visible ? 'text-[0.8125rem] text-gray-400' : 'sr-only'}>
      <time dateTime={toIsoDate(date)}>Last updated {date}</time>
    </p>
  );
}

function toIsoDate(label: string): string {
  const d = new Date(label);
  return Number.isNaN(d.getTime()) ? label : d.toISOString().slice(0, 10);
}
