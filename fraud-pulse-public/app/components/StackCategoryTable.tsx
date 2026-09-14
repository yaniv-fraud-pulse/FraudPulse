'use client';

import { STACK_CATEGORIES } from '../lib/toolComparison';

export default function StackCategoryTable() {
  return (
    <div>
      <div
        className="overflow-x-auto rounded-[16px] border -mx-1 sm:mx-0"
        style={{ borderColor: '#e5e7eb' }}
      >
        <table className="w-full min-w-[640px] text-left text-[0.875rem] sm:text-[0.9375rem]">
          <thead>
            <tr className="bg-[#f8f9fa] border-b" style={{ borderColor: '#e5e7eb' }}>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Category</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Examples</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Primary job</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-[#4a96a3]">FraudPulse</th>
            </tr>
          </thead>
          <tbody>
            {STACK_CATEGORIES.map((row) => (
              <tr key={row.category} className="border-b last:border-b-0" style={{ borderColor: '#f3f4f6' }}>
                <td className="px-3 sm:px-4 py-3.5 font-medium text-gray-800">{row.category}</td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.examples}</td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.job}</td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-700 bg-[rgba(91,168,180,0.04)]">{row.fraudPulse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
