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
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Radical Transparency',
    description: 'Black-box AI has no place in risk management. Every FraudPulse decision comes with a full explanation, so your team always understands why.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Merchant-First',
    description: 'We built FraudPulse because we saw merchants struggling with tools designed for banks. Our platform is built around the needs of modern commerce.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Intelligence',
    description: 'Fraud never sleeps, and neither does our platform. We continuously update our models and share intelligence across our merchant community.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
            <div className="max-w-[680px]">
              <Reveal animation="anim-fadeUp" delay={0}>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-3 text-[#5ba8b4]">
                  About Us
                </p>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={75}>
                <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-6 text-[2.5rem] sm:text-[3.75rem]">
                  Company Story
                </h1>
              </Reveal>
              <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1rem] leading-[1.8] text-gray-600">
                FraudPulse was co-founded by <strong className="text-gray-900">Idan Hayon</strong> and{' '}
                <strong className="text-gray-900">Yaniv Hayun</strong> after years working inside high-scale fraud,
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
          <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">
            The Founders
          </p>
          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[1.75rem] sm:text-[2.25rem]">
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
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: 'Our Mission',
                text: "To give every merchant access to the kind of fraud intelligence and decision support traditionally reserved for enterprise risk teams.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                label: 'Our Approach',
                text: "We don't just show you data. We tell you what to do about it. FraudPulse's AI Actions module generates specific, ranked rules with fraud capture rates and false positive scores so your team acts with confidence.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map(({ label, text, icon }, i) => (
              <Reveal key={label} animation="anim-scaleIn" delay={([0, 150] as const)[i] ?? 0}>
              <div
                className="rounded-[16px] p-8 border bg-white card-hover h-full"
                style={{ borderColor: '#e5e7eb' }}>
                <div className="w-10 h-10 rounded-[10px] mb-4 flex items-center justify-center border text-[#5ba8b4]"
                  style={{ background: 'rgba(165,208,216,0.1)', borderColor: 'rgba(91,168,180,0.25)' }}>
                  {icon}
                </div>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">
                  {label}
                </p>
                <p className="text-[0.875rem] leading-[1.75] text-gray-500">{text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">
                Our Values
              </p>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[1.75rem] sm:text-[2.25rem]">
                What Drives Us Every Day
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[860px] mx-auto">
              {values.map(({ title, description, icon }, i) => (
                <Reveal key={title} animation="anim-fadeUp" delay={([0, 150, 75, 225] as const)[i] ?? 0}>
                <div
                  className="flex items-start gap-4 rounded-[16px] p-7 border bg-white card-hover"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="w-10 h-10 rounded-[10px] flex-shrink-0 flex items-center justify-center border text-[#5ba8b4]"
                    style={{ background: 'rgba(165,208,216,0.1)', borderColor: 'rgba(91,168,180,0.25)' }}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-[0.9375rem]">{title}</h3>
                    <p className="text-[0.875rem] leading-[1.75] text-gray-500">{description}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">
                Our Journey
              </p>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[1.75rem] sm:text-[2.25rem]">
                How We Got Here
              </h2>
            </div>
            <div className="max-w-[680px] mx-auto flex flex-col gap-0">
              {milestones.map((m, i) => (
                <Reveal key={m.year} animation="anim-slideLeft" delay={0}>
                <div className="flex gap-6">
                  {/* Left: year + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border text-[0.7rem] font-mono font-bold text-[#5ba8b4]"
                      style={{ background: 'rgba(165,208,216,0.1)', borderColor: 'rgba(91,168,180,0.3)' }}>
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 my-1 bg-gray-200" style={{ minHeight: 32 }} />
                    )}
                  </div>
                  {/* Right: content */}
                  <div className="pb-8 pt-1.5">
                    <span className="text-[0.75rem] font-mono font-semibold text-[#5ba8b4]">{m.year}</span>
                    <p className="text-[0.875rem] leading-[1.7] mt-1 text-gray-500">{m.event}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f8f9fa]">
          <Reveal animation="anim-scaleIn">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-3 text-[2rem] sm:text-[2.75rem]">
              Talk Directly With the Team Behind FraudPulse
            </h2>
            <p className="text-[0.9375rem] leading-[1.7] max-w-[440px] mx-auto mb-10 text-gray-500">
              Book a live walkthrough with Idan and see how FraudPulse identifies fraud patterns, approval loss,
              and actionable opportunities inside your own payment data.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact/"
                className="inline-flex items-center gap-2 rounded-[10px] px-8 py-3 text-[0.9375rem] font-bold text-white transition-all hover:-translate-y-px"
                style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 24px rgba(91,168,180,0.35)' }}>
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://www.linkedin.com/in/idan-hayon/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] px-8 py-3 text-[0.9375rem] font-semibold transition-all border hover:border-[#5ba8b4] hover:text-[#5ba8b4]"
                style={{ borderColor: '#d1d5db', color: '#6b7280' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
