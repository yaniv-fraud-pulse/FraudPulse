'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-0 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-20%] left-[-5%] w-[700px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(125,107,160,0.12) 0%, transparent 60%)' }} />

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24">
            <div className="max-w-[860px] mx-auto text-center">
              <Reveal animation="anim-fadeUp" delay={0}>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                  How It Works
                </p>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={75}>
                <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[3rem] sm:text-[4rem] lg:text-[4.5rem]">
                  From Data to{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Actionable Insights
                  </span>
                </h1>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={150}>
                <p className="text-[1.25rem] sm:text-[1.5rem] leading-[1.75] max-w-[680px] mx-auto text-gray-500">
                  Watch how FraudPulse connects to your payment data, runs AI analysis, and delivers ready-to-implement fraud rules in minutes.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Video embed ── */}
        <section className="py-12 sm:py-20 px-5 sm:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-scaleIn" delay={0}>
              <div
                className="w-full rounded-[20px] overflow-hidden border"
                style={{
                  borderColor: '#e5e7eb',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
                  aspectRatio: '16 / 9',
                }}
              >
                
                <iframe
                  src="https://embed.app.guidde.com/playbooks/nCQR61BXRRS2S45ZaZbXMi?mode=videoOnly&autoplay=true"
                  title="How FraudPulse Works"
                  allow="fullscreen"
                 
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Steps summary ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-12 text-[2.75rem] sm:text-[3.25rem]">
                Four Steps to Fraud Intelligence
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Connect Your Data',
                  description: 'Upload a CSV or connect via API integration with Stripe, Braintree, Adyen, PayPal, or Shopify.',
                  color: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                },
                {
                  step: '02',
                  title: 'AI Onboarding',
                  description: 'Answer a few questions about your business. FraudPulse tailors its analysis to your industry and transaction profile.',
                  color: 'linear-gradient(135deg, #7D6BA0 0%, #6a5890 100%)',
                },
                {
                  step: '03',
                  title: 'Monitor Your Dashboard',
                  description: 'Track approval rates, chargebacks, and fraud exposure in real-time — filtered by card brand, country, and date.',
                  color: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                },
                {
                  step: '04',
                  title: 'Get AI Recommendations',
                  description: 'Receive ranked fraud rules with fraud capture rates and false positive scores so your team acts with confidence.',
                  color: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                },
              ].map(({ step, title, description, color }, i) => (
                <Reveal key={step} animation="anim-fadeUp" delay={([0, 75, 150, 225] as const)[i] ?? 0}>
                  <div
                    className="rounded-[20px] p-8 sm:p-10 h-full"
                    style={{ background: color, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
                  >
                    <p className="text-white/60 text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">{step}</p>
                    <h3 className="font-bold text-white text-[1.25rem] mb-3">{title}</h3>
                    <p className="text-white/85 text-[1rem] leading-[1.7]">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.75rem] sm:text-[3.25rem]">
                Ready to See It on Your Data?
              </h2>
              <p className="text-[1.0625rem] leading-[1.7] max-w-[480px] mx-auto mb-10 text-gray-400">
                Book a live walkthrough and see how FraudPulse turns your payment data into actionable fraud intelligence.
              </p>
              <Link href="/book-a-demo/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white transition-all hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 24px rgba(91,168,180,0.35)', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
                Book a Demo
              </Link>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
