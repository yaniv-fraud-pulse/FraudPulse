import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t bg-[#f8f9fa]" style={{ borderColor: '#e5e7eb' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo-light.svg" alt="FraudPulse" width={28} height={28} />
              <span className="text-sm font-bold text-gray-900 tracking-[-0.03em]">FraudPulse</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[16rem]">
              AI-powered fraud intelligence. Your personal fraud advisor.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></div>
              <span className="text-xs text-gray-400">All systems operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { href: '/features/', label: 'How It Works' },
                { href: '/pricing/', label: 'Pricing' },
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
                { href: '/contact/', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link>
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
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#e5e7eb' }}>
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} FraudPulse Inc. All rights reserved.</p>
          <p className="text-gray-400 text-xs">Built for modern merchants, not legacy banking.</p>
        </div>
      </div>
    </footer>
  );
}
