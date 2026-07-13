'use client';

import { useState } from 'react';
import type { FaqItem } from '../lib/homeFaq';

type FaqAccordionProps = {
  faqs: FaqItem[];
  className?: string;
};

export default function FaqAccordion({ faqs, className = '' }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={`flex flex-col gap-3 w-full sm:w-[60%] mx-auto ${className}`}>
      {faqs.map((faq, i) => (
        <div
          key={faq.q}
          className={`rounded-[14px] overflow-hidden border bg-gray-900 transition-colors ${openFaq === i ? 'border-[#5ba8b4]' : 'border-gray-800'}`}
        >
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
            aria-expanded={openFaq === i}
          >
            <span className="font-semibold text-[1.0625rem] sm:text-[1.125rem] text-white">{faq.q}</span>
            <svg
              className="w-4.5 h-4.5 flex-shrink-0 text-gray-400 transition-transform"
              style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {openFaq === i && (
            <div className="px-6 pb-5">
              <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] text-gray-400">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
