'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import { PageUpdated } from '../components/GeoBits';
import { faqPageJsonLd } from '../lib/geo';
import { siteFaqs } from '../lib/siteFaqs';

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={faqPageJsonLd(siteFaqs)} />
      <Header />

      <main className="flex-grow">
        <PageUpdated date="August 28, 2026" visible={false} />

        <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 px-5 sm:px-10 bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative max-w-3xl mx-auto py-16 sm:py-24 text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                FraudPulse FAQ
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.75rem] sm:text-[3.5rem]">
                Frequently asked questions
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 max-w-[640px] mx-auto">
                How FraudPulse works alongside Stripe Radar and Shopify Protect - ranked rule changes,
                chargebacks, false declines, and when a full platform is the better buy.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 px-5 sm:px-10 bg-white">
          <div className="w-full md:w-[60%] mx-auto">
            <Reveal animation="anim-fadeUp">
              <FaqAccordion faqs={siteFaqs} className="!w-full" />
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <p className="mt-12 text-center text-[1rem] text-gray-500">
                Still figuring out which rules to change?{' '}
                <Link href="/book-a-demo/" className="font-semibold text-[#4a96a3] hover:underline">
                  Book a demo
                </Link>{' '}
                or read{' '}
                <Link href="/how-it-works/" className="font-semibold text-[#4a96a3] hover:underline">
                  how it works
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
