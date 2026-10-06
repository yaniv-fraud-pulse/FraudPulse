'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import { TrackedLink } from '../components/TrackedCta';
import FaqAccordion from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import ComparisonTable from '../components/ComparisonTable';
import { Eyebrow, FrostedBox, HeroBackdrop, PageCta, SoftWash } from '../components/Brand';
import { ANALYST_VS_SCREENING_TABLE, articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';
import { siteFaqs } from '../lib/siteFaqs';

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('Frequently asked questions', '/faq/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(siteFaqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-16 sm:pt-20 sm:pb-20">
            <Eyebrow>FraudPulse FAQ</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">Frequently asked</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">questions</span>
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] max-w-[720px] mx-auto text-balance text-gray-500 anim-fadeUp delay-300">
              How FraudPulse works alongside Stripe Radar, Shopify Flow, Blockify, and Adyen RevenueProtect - ranked rule changes, chargebacks, friendly vs real fraud, and prevention vs representment.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 px-5 sm:px-10 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <FaqAccordion faqs={siteFaqs} variant="light" />
            </Reveal>
          </div>
        </section>

        <SoftWash>
          <div className="max-w-5xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Compare</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[2.25rem] sm:text-[3rem] leading-[1.05] mb-4 text-balance">
                FraudPulse vs screening and guarantee vendors
              </h2>
              <p className="mb-10 text-center text-[1.0625rem] leading-[1.7] text-gray-500 max-w-2xl mx-auto">
                Screening tools decide on each order. FraudPulse decides which rules your existing tools should run.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FrostedBox>
                <ComparisonTable table={ANALYST_VS_SCREENING_TABLE} />
              </FrostedBox>
              <p className="mt-6 text-center text-[0.9375rem] text-gray-500">
                Dedicated comparison:{' '}
                <Link href="/alternatives/nofraud/" className="font-semibold text-[#4a96a3] hover:underline">
                  FraudPulse vs NoFraud, FraudLabs Pro, ClearSale, SEON, and Subuno
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </SoftWash>

        <p className="px-5 sm:px-10 pb-10 text-center text-[1rem] text-gray-500">
          Still figuring out which rules to change?{' '}
          <TrackedLink event="demo_cta_clicked" href="/book-a-demo/" className="font-semibold text-[#4a96a3] hover:underline">
            Book a demo
          </TrackedLink>{' '}
          or read{' '}
          <Link href="/how-it-works/" className="font-semibold text-[#4a96a3] hover:underline">
            how it works
          </Link>
          .
        </p>

        <PageCta pulseId="faqCtaPulse" />
      </main>

      <Footer />
    </div>
  );
}
