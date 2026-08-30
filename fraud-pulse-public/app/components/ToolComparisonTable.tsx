'use client';

import {
  COMPARISON_FEATURES,
  TOOL_COMPARISON_FOOTNOTE,
  type ComparisonValue,
} from '../lib/toolComparison';

function CellMark({ value, highlight }: { value: ComparisonValue; highlight?: boolean }) {
  if (value === 'yes') {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[0.875rem] font-bold"
        style={{
          background: highlight ? 'rgba(91,168,180,0.15)' : 'rgba(34,197,94,0.12)',
          color: highlight ? '#4a96a3' : '#16a34a',
        }}
        aria-label="Yes"
      >
        ✓
      </span>
    );
  }
  if (value === 'partial') {
    return (
      <span className="text-[1.125rem] font-semibold text-gray-400" aria-label="Partial">
        ~
      </span>
    );
  }
  return (
    <span className="text-[1.125rem] font-semibold text-red-400" aria-label="No">
      ✕
    </span>
  );
}

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
              <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-500 w-[28%]" />
              <th className="px-3 sm:px-4 py-3.5 text-center font-semibold text-[#4a96a3]">
                FraudPulse
              </th>
              <th className="px-3 sm:px-4 py-3.5 text-center font-semibold text-gray-700">
                Manual
                <span className="block text-[0.7rem] font-normal text-gray-400 mt-0.5">
                  In-house team or founder
                </span>
              </th>
              <th className="px-3 sm:px-4 py-3.5 text-center font-semibold text-gray-700">
                SMB Fraud Prevention
                <span className="block text-[0.7rem] font-normal text-gray-400 mt-0.5">
                  NoFraud · ClearSale
                </span>
              </th>
              <th className="px-3 sm:px-4 py-3.5 text-center font-semibold text-gray-700">
                Payment Platform Tools
                <span className="block text-[0.7rem] font-normal text-gray-400 mt-0.5">
                  Stripe Radar · Shopify Protect
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_FEATURES.map((row) => (
              <tr
                key={row.feature}
                className="border-b last:border-b-0"
                style={{ borderColor: '#f3f4f6' }}
              >
                <td className="px-3 sm:px-4 py-3.5 font-medium text-gray-800">{row.feature}</td>
                <td className="px-3 sm:px-4 py-3.5 text-center bg-[rgba(91,168,180,0.04)]">
                  <CellMark value={row.fraudPulse} highlight />
                </td>
                <td className="px-3 sm:px-4 py-3.5 text-center">
                  <CellMark value={row.manual} />
                </td>
                <td className="px-3 sm:px-4 py-3.5 text-center">
                  <CellMark value={row.smb} />
                </td>
                <td className="px-3 sm:px-4 py-3.5 text-center">
                  <CellMark value={row.platform} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[0.9375rem] leading-[1.65] text-gray-500">{TOOL_COMPARISON_FOOTNOTE}</p>
    </div>
  );
}
