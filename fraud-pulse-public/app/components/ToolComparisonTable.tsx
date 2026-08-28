'use client';

import { TOOL_COMPARISON_FOOTNOTE, TOOL_COMPARISON_ROWS } from '../lib/toolComparison';

export default function ToolComparisonTable({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className="overflow-x-auto rounded-[16px] border -mx-1 sm:mx-0"
        style={{ borderColor: '#e5e7eb' }}
      >
        <table className="w-full min-w-[720px] text-left text-[0.875rem] sm:text-[0.9375rem]">
          <thead>
            <tr className="bg-[#f8f9fa] border-b" style={{ borderColor: '#e5e7eb' }}>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Tool</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Best for</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Works with</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">What it does</th>
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">Setup</th>
            </tr>
          </thead>
          <tbody>
            {TOOL_COMPARISON_ROWS.map((row) => (
              <tr
                key={row.tool}
                className="border-b last:border-b-0"
                style={{ borderColor: '#f3f4f6' }}
              >
                <td
                  className={`px-3 sm:px-4 py-3.5 font-semibold ${
                    row.highlight ? 'text-[#4a96a3]' : 'text-gray-900'
                  }`}
                >
                  {row.tool}
                </td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.bestFor}</td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.worksWith}</td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.whatItDoes}</td>
                <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.setup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[0.9375rem] leading-[1.65] text-gray-500">{TOOL_COMPARISON_FOOTNOTE}</p>
    </div>
  );
}
