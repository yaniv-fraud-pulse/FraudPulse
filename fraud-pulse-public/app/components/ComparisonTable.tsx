import type { ComparisonTableData } from '../lib/geo';

export default function ComparisonTable({ table }: { table: ComparisonTableData }) {
  return (
    <div className="overflow-x-auto rounded-[16px] border" style={{ borderColor: '#e5e7eb' }}>
      <table className="w-full min-w-[560px] text-left text-[0.875rem] sm:text-[0.9375rem]">
        <caption className="sr-only">{table.caption}</caption>
        <thead>
          <tr className="bg-[#f8f9fa] border-b" style={{ borderColor: '#e5e7eb' }}>
            <th scope="col" className="px-3 sm:px-4 py-3.5 font-semibold text-gray-500 w-[18%]">
              <span className="sr-only">Dimension</span>
            </th>
            <th scope="col" className="px-3 sm:px-4 py-3.5 font-semibold text-[#4a96a3]">FraudPulse</th>
            <th scope="col" className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">{table.otherLabel}</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.label} className="border-b last:border-b-0" style={{ borderColor: '#f3f4f6' }}>
              <th scope="row" className="px-3 sm:px-4 py-3.5 font-medium text-gray-800">{row.label}</th>
              <td className="px-3 sm:px-4 py-3.5 text-gray-700 bg-[rgba(91,168,180,0.04)]">{row.fraudPulse}</td>
              <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.other}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
