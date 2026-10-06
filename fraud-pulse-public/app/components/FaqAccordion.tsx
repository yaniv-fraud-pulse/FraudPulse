'use client';

import { useState } from 'react';
import type { FaqItem } from '../lib/homeFaq';

type FaqAccordionProps = {
  faqs: FaqItem[];
  className?: string;
  variant?: 'dark' | 'light';
};

const VARIANTS = {
  dark: {
    wrapper: 'w-full sm:w-[60%] mx-auto',
    item: 'rounded-[14px] bg-gray-900',
    open: 'border-[#5ba8b4]',
    closed: 'border-gray-800',
    question: 'text-white',
    icon: 'text-gray-400',
    answer: 'text-gray-400',
  },
  light: {
    wrapper: 'w-full',
    item: 'rounded-2xl bg-white/80 backdrop-blur shadow-[0_1px_2px_rgba(16,24,40,0.04)]',
    open: 'border-[#5ba8b4]/60 shadow-[0_12px_32px_-12px_rgba(74,150,163,0.35)]',
    closed: 'border-gray-200/80 hover:border-gray-300',
    question: 'text-gray-900',
    icon: 'text-[#4a96a3]',
    answer: 'text-gray-600',
  },
} as const;

export default function FaqAccordion({ faqs, className = '', variant = 'dark' }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const v = VARIANTS[variant];

  return (
    <div className={`flex flex-col gap-3 ${v.wrapper} ${className}`}>
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div
            key={faq.q}
            className={`overflow-hidden border transition-all duration-300 ${v.item} ${isOpen ? v.open : v.closed}`}
          >
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-[1.0625rem] sm:text-[1.125rem] ${v.question}`}>{faq.q}</span>
              <svg
                className={`w-4.5 h-4.5 flex-shrink-0 transition-transform ${v.icon}`}
                style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            {/* Always in the DOM so crawlers / AI can read answers; visually collapsed when closed */}
            <div className={isOpen ? 'px-6 pb-5' : 'sr-only'} aria-hidden={!isOpen}>
              <p className={`text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] ${v.answer}`}>{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
