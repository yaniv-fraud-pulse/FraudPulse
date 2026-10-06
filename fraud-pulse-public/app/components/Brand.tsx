import Link from 'next/link';
import { TrackedLink } from './TrackedCta';
import { Reveal } from './Reveal';
import { GEO_STATS } from '../lib/geo';

export function PulseMark({ id, className = 'w-7 h-7' }: { id: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M2 16h7l3-7 5 14 3-7h10" stroke="#5ba8b4" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className="hero-pulse-path" d="M2 16h7l3-7 5 14 3-7h10" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5ba8b4" />
          <stop offset="1" stopColor="#7D6BA0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] border ${dark ? 'text-[#8fd0da] border-white/10 bg-white/[0.04]' : 'text-[#4a96a3] border-[#5ba8b4]/20 bg-[#5ba8b4]/[0.06]'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#5ba8b4]" style={{ boxShadow: '0 0 8px #5ba8b4' }} />
      {children}
    </p>
  );
}

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-[84px] bottom-0 overflow-hidden" aria-hidden>
      <div className="hero-aurora w-[220px] h-[200px] sm:w-[520px] sm:h-[420px] -top-20 sm:-top-32 -left-16 sm:left-[8%]" style={{ background: 'rgba(91,168,180,0.45)' }} />
      <div className="hero-aurora w-[200px] h-[180px] sm:w-[480px] sm:h-[380px] -top-16 sm:-top-24 -right-16 sm:right-[6%]" style={{ background: 'rgba(125,107,160,0.38)', animationDelay: '-9s' }} />
      <div className="absolute inset-0 hero-dot-grid" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}

export function StatGrid({ stats = GEO_STATS }: { stats?: readonly { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.value + stat.label}
          className="rounded-3xl border border-gray-200/80 bg-white/80 px-4 py-6 text-center backdrop-blur shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
        >
          <p className="font-extrabold text-[1.5rem] sm:text-[1.875rem] tracking-[-0.03em] text-gradient-flow mb-2">
            {stat.value}
          </p>
          <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.5] text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function DarkPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-3 sm:px-6 py-6 sm:py-10 ${className}`}>
      <div
        className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] max-w-7xl mx-auto px-5 sm:px-12 py-20 sm:py-24 text-white"
        style={{ background: 'radial-gradient(120% 80% at 50% 0%, #142430 0%, #0b0f17 55%, #090b10 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 dark-dot-grid" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full blur-[110px] opacity-40" style={{ background: '#5ba8b4' }} />
          <div className="absolute -bottom-40 right-0 w-[520px] h-[360px] rounded-full blur-[120px] opacity-30" style={{ background: '#7D6BA0' }} />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

export function FrostedBox({ children, className = '', padded = true }: { children: React.ReactNode; className?: string; padded?: boolean }) {
  return (
    <div className={`rounded-[32px] border border-gray-200/70 bg-white/70 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.35)] backdrop-blur-xl ${padded ? 'p-5 sm:p-8' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function SoftWash({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative py-20 sm:py-28 px-5 sm:px-10 overflow-hidden bg-[#fafbfc] ${className}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[560px] h-[480px] rounded-full blur-[120px] opacity-30" style={{ background: '#7D6BA0' }} />
        <div className="absolute -bottom-32 -right-32 w-[560px] h-[480px] rounded-full blur-[120px] opacity-25" style={{ background: '#5ba8b4' }} />
        <div className="absolute inset-0 hero-dot-grid opacity-60" />
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}

export function PageCta({
  title = 'See it on your',
  highlight = 'transaction data.',
  body = 'Book a walkthrough and see the exact rules and actions FraudPulse would recommend - reduce chargebacks and friendly fraud without replacing your fraud prevention tools.',
  pulseId = 'pageCtaPulse',
  secondaryHref,
  secondaryLabel,
  children,
}: {
  title?: string;
  highlight?: string;
  body?: string;
  pulseId?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-3 sm:px-6 pb-10 sm:pb-16">
      <Reveal animation="anim-scaleIn">
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] max-w-7xl mx-auto px-6 sm:px-12 py-20 sm:py-28 text-center text-white"
          style={{ background: 'radial-gradient(120% 90% at 50% 100%, #1a2f3a 0%, #0b0f17 60%, #090b10 100%)' }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 dark-dot-grid" />
            <div className="hero-aurora w-[460px] h-[360px] -bottom-40 left-[10%]" style={{ background: 'rgba(91,168,180,0.55)' }} />
            <div className="hero-aurora w-[420px] h-[340px] -bottom-40 right-[10%]" style={{ background: 'rgba(125,107,160,0.5)', animationDelay: '-9s' }} />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <PulseMark id={pulseId} className="w-10 h-10 mx-auto mb-6" />
            <h2 className="font-extrabold text-[2.5rem] sm:text-[4rem] tracking-[-0.045em] leading-[1.02] mb-6">
              {title}
              <br />
              <span className="text-gradient-flow">{highlight}</span>
            </h2>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-gray-400 max-w-[680px] mx-auto mb-10 text-balance">
              {body}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <TrackedLink
                event="demo_cta_clicked"
                href="/book-a-demo/"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[1.0625rem] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(91,168,180,0.8)]"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}
              >
                Book a Demo
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </TrackedLink>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-[1.0625rem] font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30"
                >
                  {secondaryLabel}
                </Link>
              )}
              {children}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
