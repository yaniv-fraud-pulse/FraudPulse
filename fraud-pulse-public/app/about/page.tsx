'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../components/Reveal';

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

const milestones = [
  { year: '2014', event: 'Idan joins Riskified as a Fraud & Data Analyst — his first deep dive into payment fraud patterns at scale.' },
  { year: '2016', event: 'Idan is promoted to Senior Data Analyst, then Analytics Team Lead at Riskified. Meanwhile, Yaniv begins building distributed systems and engineering teams in the Israeli tech ecosystem.' },
  { year: '2017', event: 'Yaniv joins Upstream Security as Director of Engineering, architecting real-time data pipelines and scalable backend infrastructure for connected vehicle cybersecurity.' },
  { year: '2018', event: 'Idan becomes Head of Analytics Operations at Riskified, overseeing fraud analytics infrastructure serving global merchants.' },
  { year: '2020', event: 'Idan joins Melio as Risk Research Manager, then Director of Risk Analytics — leading risk strategy for a fast-growing B2B payments platform.' },
  { year: '2023', event: 'Both Idan and Yaniv join Creednz — Idan as Head of Analytics, Yaniv as VP R&D. Working side by side, they see first-hand how underserved merchants are for actionable fraud tooling.' },
  { year: '2025', event: "FraudPulse is born. Idan and Yaniv co-found the platform with a shared mission: give every merchant the same fraud intelligence as the world's largest banks." },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Page Header ── */}
        <section className="relative overflow-hidden pt-8 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-10%] right-0 w-[600px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(165,208,216,0.12) 0%, transparent 60%)' }} />

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24">
            <div className="max-w-[880px]">
              <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1.25rem] leading-[1.8] text-gray-600">
                FraudPulse was co-founded by <strong className="text-gray-900">Idan Hayon</strong> and{' '}
                <strong className="text-gray-900">Yaniv Hayun</strong>{" "} after years working inside high-scale fraud,
                payments, and risk systems. Idan led fraud analytics and risk operations roles at Riskified, Melio,
                and Creednz. Yaniv built large-scale engineering and real-time data infrastructure at Upstream
                Security and Creednz. Over time, they noticed the same problem repeated everywhere: merchants had
                more fraud data than ever, but very little clarity on what to do with it. FraudPulse was built to
                change that, giving every merchant access to the same fraud intelligence tools used by the world&apos;s
                largest payment processors, delivered simply and affordably.
              </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Founders title ── */}
        <div className="py-6 text-center px-5 bg-white">
          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[2.75rem] sm:text-[3.25rem]">
            The People Behind{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 50%, #5ba8b4 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              FraudPulse
            </span>
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
                    alt="Idan Hayon — Co-Founder & CEO, FraudPulse"
                    fill
                    className="rounded-[20px] object-cover object-top"
                    style={{ border: '2px solid rgba(61,143,160,0.3)', boxShadow: '0 4px 20px rgba(61,143,160,0.15)' }}
                  />
                </div>
                <div className="rounded-[14px] p-6 w-full max-w-[280px] border bg-white"
                  style={{ borderColor: 'rgba(61,143,160,0.25)' }}>
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
                    Idan spent over a decade at the heart of payments fraud — rising from analyst to{' '}
                    <strong className="text-gray-900">Head of Analytics Operations at Riskified</strong>, then{' '}
                    <strong className="text-gray-900">Director of Risk Analytics at Melio</strong>, before advising{' '}
                    <strong className="text-gray-900">Creednz</strong> on risk engine design.
                  </p>
                  <p className="text-[0.9375rem] leading-[1.8] text-gray-600">
                    Throughout his career he noticed the same gap:{' '}
                    <strong className="text-gray-900">small and mid-size merchants were flying blind</strong>. In 2025 he
                    co-founded FraudPulse to give every merchant the same fraud intelligence used by the world&apos;s
                    largest payment processors — without the enterprise complexity.
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
              {/* Story — left */}
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
                    As CTO, Yaniv architects the entire FraudPulse platform — from the real-time data pipeline to the
                    AI Actions module. His philosophy:{' '}
                    <strong className="text-gray-900">powerful technology should feel effortless to use</strong>.
                  </p>
                </div>
              </Reveal>

              {/* Photo + card — right */}
              <Reveal animation="anim-slideRight" className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
                <div className="relative w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] flex-shrink-0">
                  <Image
                    src="/yaniv.jpeg"
                    alt="Yaniv Hayun — Co-Founder & CTO, FraudPulse"
                    fill
                    className="rounded-[20px] object-cover object-top"
                    style={{ border: '2px solid rgba(125,107,160,0.3)', boxShadow: '0 4px 20px rgba(125,107,160,0.15)' }}
                  />
                </div>
                <div className="rounded-[14px] p-6 w-full max-w-[280px] border bg-white"
                  style={{ borderColor: 'rgba(125,107,160,0.25)' }}>
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

        {/* ── Mission & Approach ── */}
        <section className="py-16 sm:py-20 px-5 sm:px-10 bg-[#f8f9fa]">
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
              <div
                className="rounded-[20px] p-10 sm:p-12 h-full"
                style={{
                  background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                  boxShadow: '0 8px 32px rgba(17,24,39,0.2)',
                }}>
                <p className="text-[0.8125rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                  {label}
                </p>
                <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-white/90">{text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[2.75rem] sm:text-[3.25rem]">
                What Drives Us Every Day
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {values.map(({ title, description }, i) => {
                const isPrimary = i === 1 || i === 2;
                const cardStyle = isPrimary
                  ? {
                      background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                      boxShadow: '0 8px 32px rgba(91,168,180,0.25)',
                    }
                  : {
                      background: 'linear-gradient(135deg, #7D6BA0 0%, #6a5890 100%)',
                      boxShadow: '0 8px 32px rgba(125,107,160,0.25)',
                    };

                return (
                <Reveal key={title} animation="anim-fadeUp" delay={([0, 150, 75, 225] as const)[i] ?? 0}>
                <div
                  className="rounded-[20px] p-10 sm:p-12 h-full"
                  style={cardStyle}>
                  <h3 className="font-bold text-white mb-3 text-[1.25rem] sm:text-[1.375rem]">{title}</h3>
                  <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.75] text-white/90">{description}</p>
                </div>
                </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <Reveal animation="anim-scaleIn">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-4 text-[2.75rem] sm:text-[3.25rem]">
              Talk Directly With the Team Behind FraudPulse
            </h2>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] max-w-[560px] mx-auto mb-12 text-gray-500">
              Book a live walkthrough with Idan and see how FraudPulse identifies fraud patterns, approval loss,
              and actionable opportunities inside your own payment data.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-a-demo/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white transition-all hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
                Book a Demo
              </Link>
              <a
                href="https://www.linkedin.com/company/fraudpulse-fraud-analytics"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-semibold transition-all border hover:border-[#5ba8b4] hover:text-[#5ba8b4]"
                style={{ borderColor: '#d1d5db', color: '#6b7280' }}>
                <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
