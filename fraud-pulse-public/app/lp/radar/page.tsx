'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../../components/Reveal';
import FaqAccordion from '../../components/FaqAccordion';
import { captureEvent } from '../../components/PostHogProvider';
import { CALENDLY_DEMO_URL } from '../../lib/posthog';
import type { FaqItem } from '../../lib/homeFaq';

const PAGE_PATH = '/lp/radar/';

const points = [
  {
    title: 'Radar does not know your business',
    body: 'A high-value first order, an international buyer, or a ship-to-work address can look risky globally and still be normal for you. A useful fraud signal is not automatically a reason to decline.',
  },
  {
    title: 'Lowering the threshold is a guess',
    body: 'Turning risk down or removing an action can raise approvals and fraud together. The useful question is which actions drive false declines, on which segments, before you change anything.',
  },
  {
    title: 'Keep Radar. Change the right rules.',
    body: 'FraudPulse classifies your chargebacks and ranks specific Radar rule changes with estimated fraud-capture and false-positive rates. It does not sit in checkout and does not replace Stripe Radar.',
  },
];

const lpFaqs: FaqItem[] = [
  {
    q: 'Does FraudPulse replace Stripe Radar?',
    a: 'No. Radar still scores and blocks at checkout. FraudPulse is the analyst: it reads your Stripe chargeback mix and tells you which Radar actions or rules to tighten, change, or remove. You apply the change in Stripe.',
  },
  {
    q: 'What happens on the 30-minute demo?',
    a: 'Idan walks through how FraudPulse surfaces patterns and ranked Radar recommendations on transaction data. You will see how false-positive vs fraud-capture estimates work, what a 14-day trial includes, and whether it fits your stack. No prep required.',
  },
  {
    q: 'Do I need an engineer to try this?',
    a: 'No. Connect Stripe (or upload data) and get ranked rule changes. Recommendations are written so a payments or risk owner can apply them in Radar without a migration.',
  },
];

function trackDemo() {
  captureEvent('demo_cta_clicked', {
    page: PAGE_PATH,
    destination: CALENDLY_DEMO_URL,
  });
}

export default function RadarFacebookLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white -mt-[84px]">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
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
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDemo}
            className="inline-flex items-center rounded-full px-5 py-2 text-[0.9375rem] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}
          >
            Book a demo
          </a>
        </div>
      </header>

      <main className="flex-grow pb-24 md:pb-0">
        <section className="relative overflow-hidden pt-12 sm:pt-20 pb-12 sm:pb-16 px-5 sm:px-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                For merchants on Stripe Radar
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.12] mb-5 text-[2.25rem] sm:text-[3.25rem]">
                Stripe Radar is blocking{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  legitimate customers
                </span>
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 mb-4">
                Do not lower thresholds blindly. See which Radar actions catch good orders - and which rules to change - without replacing Radar.
              </p>
              <p className="ai-answer text-[1rem] leading-[1.7] text-gray-600 mb-8 max-w-2xl mx-auto">
                FraudPulse classifies your chargebacks and ranks specific Stripe Radar rule changes with estimated fraud-capture and false-positive rates. Radar still enforces at checkout. You keep control of every action.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={225}>
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold text-white hover:scale-[1.03] transition-transform"
                style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  boxShadow: '0 4px 20px rgba(91,168,180,0.35)',
                }}
              >
                Book a 30-minute demo
              </a>
              <p className="mt-4 text-[0.875rem] text-gray-400">
                14-day free trial after. No credit card. No Radar migration.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-10 text-[1.75rem] sm:text-[2.25rem]">
                Why good customers get declined
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {points.map((point, i) => (
                <Reveal key={point.title} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                  <div
                    className="rounded-[16px] border bg-white p-6 sm:p-8"
                    style={{ borderColor: '#e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                  >
                    <p className="font-bold text-gray-900 mb-2 text-[1.125rem]">{point.title}</p>
                    <p className="text-[1rem] leading-[1.7] text-gray-500">{point.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-4 text-[1.75rem] sm:text-[2.25rem]">
                What you get on the walkthrough
              </h2>
              <p className="text-gray-500 mb-10 text-[1.0625rem] leading-[1.7]">
                30 minutes with Idan Hayon, Co-Founder &amp; CEO. No prep.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-10">
              {[
                { n: '1', t: 'See ranked Radar changes', d: 'Which actions to tighten, change, or remove, with estimated false-positive impact.' },
                { n: '2', t: 'Keep your Stripe stack', d: 'Recommendations you apply in Radar. No replacement, no new checkout layer.' },
                { n: '3', t: 'Start a 14-day trial', d: 'If it fits, go straight to a trial. No credit card required.' },
              ].map((step, i) => (
                <Reveal key={step.n} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                  <div className="rounded-[16px] border p-5 h-full" style={{ borderColor: '#e5e7eb' }}>
                    <span
                      className="inline-flex w-8 h-8 items-center justify-center rounded-full text-sm font-bold mb-3"
                      style={{ background: 'rgba(91,168,180,0.12)', color: '#4a96a3' }}
                    >
                      {step.n}
                    </span>
                    <p className="font-bold text-gray-900 mb-1">{step.t}</p>
                    <p className="text-[0.9375rem] text-gray-500 leading-[1.6]">{step.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal animation="anim-fadeUp" delay={225}>
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDemo}
                className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}
              >
                Book a 30-minute demo
              </a>
            </Reveal>
          </div>
        </section>

        <section className="py-14 sm:py-16 px-5 sm:px-8 bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-extrabold text-white tracking-[-0.03em] text-center mb-8 text-[1.75rem]">
              Questions
            </h2>
            <FaqAccordion faqs={lpFaqs} className="!w-full" />
          </div>
        </section>
      </main>

      <footer className="border-t bg-[#f8f9fa] py-8 px-5 sm:px-8" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.8125rem] text-gray-500">
          <p>FraudPulse does not replace Stripe Radar. © {new Date().getFullYear()} Fraud Pulse Ltd.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-gray-900">
              Terms
            </Link>
            <Link href="/book-a-demo/" className="hover:text-gray-900">
              Book a demo
            </Link>
          </div>
        </div>
      </footer>

      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 border-t bg-white"
        style={{ borderColor: '#e5e7eb', paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={CALENDLY_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackDemo}
          className="flex items-center justify-center rounded-full py-3.5 font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}
        >
          Book a 30-minute demo
        </a>
      </div>
    </div>
  );
}
