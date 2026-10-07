import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_PROFILES, FOOTER_SOCIALS } from '../lib/site';

const socialMeta: Record<(typeof FOOTER_SOCIALS)[number]['name'], { icon: ReactNode; hover: string }> = {
  LinkedIn: {
    hover: 'hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:shadow-[0_10px_24px_-8px_rgba(10,102,194,0.65)]',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  YouTube: {
    hover: 'hover:text-white hover:border-[#FF0000] hover:bg-[#FF0000] hover:shadow-[0_10px_24px_-8px_rgba(255,0,0,0.5)]',
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 002.121-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
  Facebook: {
    hover: 'hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2] hover:shadow-[0_10px_24px_-8px_rgba(24,119,242,0.6)]',
    icon: (
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    ),
  },
  X: {
    hover: 'hover:text-white hover:border-[#111827] hover:bg-[#111827] hover:shadow-[0_10px_24px_-8px_rgba(17,24,39,0.55)]',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.851L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    ),
  },
  G2: {
    hover: 'hover:text-white hover:border-[#FF492C] hover:bg-[#FF492C] hover:shadow-[0_10px_24px_-8px_rgba(255,73,44,0.55)]',
    icon: <span className="text-[11px] font-extrabold tracking-tight leading-none">G2</span>,
  },
};

export default function Footer() {
  return (
    <footer className="border-t bg-[#f8f9fa]" style={{ borderColor: '#e5e7eb' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/full-logo-light.svg" alt="FraudPulse" width={140} height={32} />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[16rem]">
              AI-powered fraud intelligence. Your personal fraud advisor.
            </p>
            <nav aria-label="Social links" className="mt-5 flex w-max items-center gap-1.5">
              {FOOTER_SOCIALS.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[12px] border border-[#5ba8b4]/15 bg-white text-[#4b5563] shadow-[0_1px_2px_rgba(16,24,40,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] ${socialMeta[name].hover}`}
                >
                  {name === 'G2' ? (
                    socialMeta[name].icon
                  ) : (
                    <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      {socialMeta[name].icon}
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { href: '/solutions/', label: 'Solutions' },
                { href: '/stack/', label: 'Stack' },
                { href: '/pricing/', label: 'Pricing' },
                { href: '/faq/', label: 'FAQ' },
                { href: '/webinar/', label: 'Webinar' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Compare</h4>
            <ul className="space-y-3">
              {[
                { href: '/alternatives/manual-fraud-analyst/', label: 'Vs. In-House Analyst' },
                { href: '/alternatives/nofraud/', label: 'Vs. NoFraud & SMB Tools' },
                { href: '/alternatives/smb-fraud-tools/', label: 'Vs. Signifyd & Riskified' },
                { href: '/alternatives/payment-platform-tools/', label: 'Vs. Radar, Flow, Blockify, RevenueProtect' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { href: '/about/', label: 'About Us' },
                { href: '/blog/', label: 'Blog' },
                { href: '/contact/', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link>
                </li>
              ))}
              {FOOTER_PROFILES.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: '/privacy/', label: 'Privacy Policy' },
                { href: '/terms/', label: 'Terms of Use' },
                { href: '/refund/', label: 'Refund Policy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#e5e7eb' }}>
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Fraud Pulse Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
