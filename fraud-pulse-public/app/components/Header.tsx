'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4">
      {/* Floating navbar pill */}
      <nav
        className="w-full max-w-7xl rounded-full border px-6 py-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(125,107,160,0.08) 100%)',
          borderColor: '#e5e7eb',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/full-logo-light.svg"
              alt="FraudPulse"
              width={180}
              height={46}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {[
              { href: '/',          label: 'Home' },
              { href: '/features/', label: 'How It Works' },
              { href: '/pricing/',  label: 'Pricing' },
              { href: '/about/',    label: 'About Us' },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="px-4 py-2 text-base font-medium rounded-lg transition-colors"
                style={{ color: '#111827' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f3f4f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Sign In only */}
          <div className="hidden md:flex md:items-center">
            <Link href="/contact/"
              className="px-5 py-2 text-base font-medium rounded-full border transition-all"
              style={{ color: '#111827', borderColor: 'transparent', transition: 'all 0.2s cubic-bezier(0.22,1,0.36,1)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgb(61,143,160)'; e.currentTarget.style.background = 'rgb(61,143,160)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111827'; }}>
              Sign In
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg transition-colors"
            style={{ color: '#6b7280' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f3f4f6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t" style={{ borderColor: '#f3f4f6' }}>
            <div className="flex flex-col gap-0.5">
              {[
                { href: '/',          label: 'Home' },
                { href: '/features/', label: 'How It Works' },
                { href: '/pricing/',  label: 'Pricing' },
                { href: '/about/',    label: 'About Us' },
                { href: '/contact/',  label: 'Sign In' },
              ].map(({ href, label }) => (
                <Link key={href} href={href}
                  className="px-3 py-2 text-base font-medium rounded-lg transition-colors"
                  style={{ color: '#6b7280' }}
                  onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
