'use client';

import { PREVENTION_VS_REPRESENTMENT } from '../lib/toolComparison';

export default function PreventionVsRepresentmentTable() {
  return (
    <div
      className="overflow-x-auto rounded-[16px] border -mx-1 sm:mx-0"
      style={{ borderColor: '#e5e7eb' }}
    >
      <table className="w-full min-w-[640px] text-left text-[0.875rem] sm:text-[0.9375rem]">
        <thead>
          <tr className="bg-[#f8f9fa] border-b" style={{ borderColor: '#e5e7eb' }}>
            <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Need</th>
            <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">What it does</th>
            <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Typical tools</th>
            <th className="px-3 sm:px-4 py-3.5 font-semibold text-[#4a96a3]">FraudPulse</th>
          </tr>
        </thead>
        <tbody>
          {PREVENTION_VS_REPRESENTMENT.map((row) => (
            <tr key={row.need} className="border-b last:border-b-0" style={{ borderColor: '#f3f4f6' }}>
              <td className="px-3 sm:px-4 py-3.5 font-medium text-gray-800">{row.need}</td>
              <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.does}</td>
              <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.tools}</td>
              <td className="px-3 sm:px-4 py-3.5 text-gray-700 bg-[rgba(91,168,180,0.04)]">{row.fraudPulse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
