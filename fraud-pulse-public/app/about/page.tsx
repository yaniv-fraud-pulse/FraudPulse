'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import JsonLd from '../components/JsonLd';
import FaqAccordion from '../components/FaqAccordion';
import { DarkPanel, Eyebrow, HeroBackdrop, PageCta } from '../components/Brand';
import { PRICING_FACT, articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';
import { FAQ_REPLACE_STACK, pickSiteFaqs } from '../lib/siteFaqs';
import type { FaqItem } from '../lib/homeFaq';

const aboutFaqs: FaqItem[] = [
  {
    q: 'What does FraudPulse do?',
    a: 'FraudPulse is an AI fraud analyst for Shopify, Stripe, and Adyen merchants. Connect transaction and chargeback data from those platforms. It classifies chargebacks by type and ranks specific Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect rule changes, each with an estimated fraud-capture rate and false-positive percentage. It does not replace those tools and does not take over checkout.',
  },
  ...pickSiteFaqs([FAQ_REPLACE_STACK]),
  {
    q: 'Who founded FraudPulse?',
    a: 'FraudPulse (Fraud Pulse Ltd.) was co-founded in 2025 by Idan Hayon, CEO, and Yaniv Hayun, CTO. Idan led fraud analytics and risk operations at Riskified, Melio, and Creednz. Yaniv built real-time data infrastructure and engineering teams at Upstream Security and Creednz.',
  },
  {
    q: 'How much does FraudPulse cost?',
    a: PRICING_FACT,
  },
];

const values = [
  {
    title: 'Precision Over Volume',
    description: 'We believe in surgical fraud detection that minimises false positives. Every legitimate transaction that gets blocked is revenue lost and we take that seriously.',
  },
  {
    title: 'Radical Transparency',
    description: 'Black-box AI has no place in risk management. Every FraudPulse decision comes with a full explanation, so your team always understands why.',
  },
  {
    title: 'Merchant-First',
    description: 'We built FraudPulse because we saw merchants struggling with tools designed for banks. Our platform is built around the needs of modern commerce.',
  },
  {
    title: 'Continuous Intelligence',
    description: 'Fraud never sleeps, and neither does our platform. We continuously update our models and share intelligence across our merchant community.',
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('About FraudPulse', '/about/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(aboutFaqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">

        <section className="relative overflow-x-clip px-5 sm:px-10">
          <HeroBackdrop />
          <div className="relative max-w-7xl mx-auto pt-16 pb-16 sm:pt-20 sm:pb-20">
            <div className="max-w-[880px] text-left">
              <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.1] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem] anim-fadeUp delay-75">
                About <span className="text-gradient-flow">FraudPulse</span>
              </h1>
              <p className="ai-answer text-[1.125rem] leading-[1.75] text-gray-700 mb-6 anim-fadeUp delay-300">
                {aboutFaqs[0].a}
              </p>
              <p className="text-[1.125rem] leading-[1.8] text-gray-600 anim-fadeUp delay-400">
                FraudPulse was co-founded by <strong className="text-gray-900">Idan Hayon</strong> and{' '}
                <strong className="text-gray-900">Yaniv Hayun</strong>{" "} after years working inside high-scale fraud,
                payments, and risk systems. Idan led fraud analytics and risk operations roles at Riskified, Melio,
                and Creednz. Yaniv built large-scale engineering and real-time data infrastructure at Upstream
                Security and Creednz. Over time, they noticed the same problem repeated everywhere: merchants had
                more fraud data than ever, but very little clarity on what to do with it. FraudPulse was built to
                change that, giving every merchant access to the same fraud intelligence tools used by the world&apos;s
                largest payment processors, delivered simply and affordably.
              </p>
            </div>
          </div>
        </section>

        <div className="py-10 text-center px-5 bg-white">
          <Eyebrow>The team</Eyebrow>
          <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2.25rem] sm:text-[3.25rem] leading-[1.05]">
            The people behind <span className="text-gradient-flow">FraudPulse</span>
          </h2>
        </div>

        {/* ── Idan ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10" style={{ background: 'linear-gradient(135deg, rgba(61,143,160,0.06) 0%, rgba(61,143,160,0.02) 100%)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 items-center">
              {/* Photo + card */}
              <Reveal animation="anim-slideLeft" className="flex flex-col items-center lg:items-start gap-6">
                <div className="relative w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] flex-shrink-0">
                  <Image
                    src="/idan.jpeg"
                    alt="Idan Hayon - Co-Founder & CEO, FraudPulse"
                    fill
                    className="rounded-[20px] object-cover object-top border-2 border-[#5ba8b4]/30 shadow-[0_24px_48px_-24px_rgba(61,143,160,0.45)]"
                  />
                </div>
                <div className="rounded-2xl p-6 w-full max-w-[280px] border border-[#5ba8b4]/25 bg-white/80 backdrop-blur">
                  <p className="text-gray-900 font-bold text-[1.125rem] mb-1">Idan Hayon</p>
                  <p className="mb-4 text-[0.8rem] font-mono" style={{ color: 'rgb(61,143,160)' }}>Co-Founder &amp; CEO</p>
                  <a
                    href="https://www.linkedin.com/in/idan-hayon/"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium transition-opacity hover:opacity-100 opacity-85"
                    style={{ color: 'rgb(61,143,160)', textDecoration: 'none' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </Reveal>

              {/* Story */}
              <Reveal animation="anim-slideRight">
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: 'rgb(61,143,160)' }}>
                  Co-Founder &amp; CEO
                </p>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] leading-[1.2] mb-6 text-[1.75rem] sm:text-[2.25rem]">
                  A Decade Inside Modern{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, rgb(61,143,160) 0%, rgb(44,110,125) 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Payments Fraud
                  </span>
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="text-[0.9375rem] leading-[1.8] text-gray-600">
                    Idan spent over a decade at the heart of payments fraud - rising from analyst to{' '}
                    <strong className="text-gray-900">Head of Analytics Operations at Riskified</strong>, then{' '}
                    <strong className="text-gray-900">Director of Risk Analytics at Melio</strong>, before advising{' '}
                    <strong className="text-gray-900">Creednz</strong> on risk engine design.
                  </p>
                  <p className="text-[0.9375rem] leading-[1.8] text-gray-600">
                    Throughout his career he noticed the same gap:{' '}
                    <strong className="text-gray-900">small and mid-size merchants were flying blind</strong>. In 2025 he
                    co-founded FraudPulse to give every merchant the same fraud intelligence used by the world&apos;s
                    largest payment processors - without the enterprise complexity.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Yaniv ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10" style={{ background: 'linear-gradient(135deg, rgba(125,107,160,0.06) 0%, rgba(125,107,160,0.02) 100%)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 items-center">
              {/* Story - left */}
              <Reveal animation="anim-slideLeft" className="order-2 lg:order-1">
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: 'rgb(125,107,160)' }}>
                  Co-Founder &amp; CTO
                </p>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] leading-[1.2] mb-6 text-[1.75rem] sm:text-[2.25rem]">
                  The Engineer Behind the{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, rgb(125,107,160) 0%, rgb(100,82,135) 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Platform
                  </span>
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="text-[0.9375rem] leading-[1.8] text-gray-600">
                    Yaniv is the engineering backbone of FraudPulse. He spent six years at{' '}
                    <strong className="text-gray-900">Upstream Security</strong> reaching{' '}
                    <strong className="text-gray-900">Director of Engineering</strong>, then served as{' '}
                    <strong className="text-gray-900">VP R&amp;D at Creednz</strong> where he and Idan first worked
                    together and spotted the gap in the market.
                  </p>
                  <p className="text-[0.9375rem] leading-[1.8] text-gray-600">
                    As CTO, Yaniv architects the entire FraudPulse platform - from the real-time data pipeline to the
                    AI Actions module. His philosophy:{' '}
                    <strong className="text-gray-900">powerful technology should feel effortless to use</strong>.
                  </p>
                </div>
              </Reveal>

              {/* Photo + card - right */}
              <Reveal animation="anim-slideRight" className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
                <div className="relative w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] flex-shrink-0">
                  <Image
                    src="/yaniv.jpeg"
                    alt="Yaniv Hayun - Co-Founder & CTO, FraudPulse"
                    fill
                    className="rounded-[20px] object-cover object-top border-2 border-[#7D6BA0]/30 shadow-[0_24px_48px_-24px_rgba(125,107,160,0.45)]"
                  />
                </div>
                <div className="rounded-2xl p-6 w-full max-w-[280px] border border-[#7D6BA0]/25 bg-white/80 backdrop-blur">
                  <p className="text-gray-900 font-bold text-[1.125rem] mb-1">Yaniv Hayun</p>
                  <p className="mb-4 text-[0.8rem] font-mono" style={{ color: 'rgb(125,107,160)' }}>Co-Founder &amp; CTO</p>
                  <a
                    href="https://www.linkedin.com/in/yaniv-hayun-86075836/"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium transition-opacity hover:opacity-100 opacity-85"
                    style={{ color: 'rgb(125,107,160)', textDecoration: 'none' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <DarkPanel>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                label: 'Our Mission',
                text: "To give every merchant access to the kind of fraud intelligence and decision support traditionally reserved for enterprise risk teams.",
              },
              {
                label: 'Our Approach',
                text: "We don't just show you data. We tell you what to do about it. FraudPulse's AI Actions module generates specific, ranked rules with fraud capture rates and false positive scores so your team acts with confidence.",
              },
            ].map(({ label, text }, i) => (
              <Reveal key={label} animation="anim-scaleIn" delay={([0, 150] as const)[i] ?? 0}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 sm:p-12 h-full backdrop-blur">
                  <p className="text-[0.8125rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#8fd0da]">
                    {label}
                  </p>
                  <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-white/90">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </DarkPanel>

        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow>Values</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2.25rem] sm:text-[3.25rem] leading-[1.05]">
                What drives us every day
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {values.map(({ title, description }, i) => (
                <Reveal key={title} animation="anim-fadeUp" delay={([0, 150, 75, 225] as const)[i] ?? 0}>
                  <article className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]">
                    <h3 className="font-bold text-gray-900 mb-3 text-[1.25rem] sm:text-[1.375rem]">{title}</h3>
                    <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] text-gray-600">{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal animation="anim-fadeUp" className="lg:sticky lg:top-28">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.05] text-[2.25rem] sm:text-[3rem] mb-5 text-balance">
                FAQ about FraudPulse
              </h2>
              <p className="text-[0.9375rem] text-gray-500">
                More answers on the{' '}
                <Link href="/faq/" className="font-semibold text-[#4a96a3] hover:underline">
                  full FAQ
                </Link>
                {' · '}
                <Link href="/stack/" className="font-semibold text-[#4a96a3] hover:underline">
                  using FraudPulse with Radar, Flow, Blockify, and RevenueProtect
                </Link>
                {' · '}
                <Link href="/alternatives/nofraud/" className="font-semibold text-[#4a96a3] hover:underline">
                  vs NoFraud and SMB tools
                </Link>
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={aboutFaqs} variant="light" />
            </Reveal>
          </div>
        </section>

        <PageCta
          pulseId="aboutCtaPulse"
          title="Talk with the team"
          highlight="behind FraudPulse."
          body="Book a live walkthrough with Idan and see how FraudPulse identifies fraud patterns, approval loss, and actionable opportunities inside your own payment data."
        >
          <a
            href="https://www.linkedin.com/company/fraudpulse-fraud-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-[1.0625rem] font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30"
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </PageCta>

      </main>

      <Footer />
    </div>
  );
}
