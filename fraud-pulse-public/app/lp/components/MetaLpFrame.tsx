'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LpTrialCta } from './LpTrialCta';

type MetaLpFrameProps = {
  children: React.ReactNode;
  stickyCta: string;
};

export function MetaLpFrame({ children, stickyCta }: MetaLpFrameProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white -mt-[84px]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/full-logo-light.svg"
              alt="FraudPulse"
              width={240}
              height={62}
              priority
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow pb-24 md:pb-0">{children}</main>

      <footer className="border-t bg-[#f8f9fa] py-8 px-5 sm:px-8" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.8125rem] text-gray-500">
          <p>
            FraudPulse does not replace Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect. ©{' '}
            {new Date().getFullYear()} Fraud Pulse Ltd.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-gray-900">
              Terms
            </Link>
            <Link href="/pricing/" className="hover:text-gray-900">
              Pricing
            </Link>
          </div>
        </div>
      </footer>

      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 border-t bg-white"
        style={{ borderColor: '#e5e7eb', paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <LpTrialCta className="flex items-center justify-center rounded-full py-3.5 font-bold text-white">
          {stickyCta}
        </LpTrialCta>
      </div>
    </div>
  );
}
