'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import { posts } from '../lib/blog';
import JsonLd from '../components/JsonLd';
import ComparisonTable from '../components/ComparisonTable';
import FaqAccordion from '../components/FaqAccordion';
import { Eyebrow, FrostedBox, HeroBackdrop, PageCta, SoftWash } from '../components/Brand';
import { ANALYST_VS_ENFORCEMENT_TABLE, articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../lib/geo';
import { blogIndexFaqs } from '../lib/pageFaqs';

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const categoryColors: Record<string, { bg: string; text: string }> = {
  Product:   { bg: 'rgba(91,168,180,0.12)',   text: '#4a96a3' },
  Education: { bg: 'rgba(125,107,160,0.12)',  text: '#7D6BA0' },
  News:      { bg: 'rgba(34,197,94,0.1)',     text: '#16a34a' },
};

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd('Fraud intelligence, explained', '/blog/')} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(blogIndexFaqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">

        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-16 sm:pt-20 sm:pb-20">
            <Eyebrow>FraudPulse Blog</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-6 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem] lg:text-[3.75rem]">
              <span className="block anim-fadeUp delay-75">Fraud intelligence,</span>
              <span className="block pb-[0.08em] text-gradient-flow anim-fadeUp delay-225">explained</span>
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] max-w-[640px] mx-auto text-balance text-gray-500 anim-fadeUp delay-300">
              Practical guides, product updates, and deep-dives on fraud prevention for modern merchants.
            </p>
          </div>
        </section>

        {/* ── Post grid ── */}
        <section className="py-12 sm:py-16 px-5 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {sortedPosts.map((post, i) => {
                const cat = categoryColors[post.category] ?? categoryColors.Product;
                const delay = ([0, 75, 150] as const)[i % 3] ?? 0;
                return (
                  <Reveal key={post.slug} animation="anim-fadeUp" delay={delay}>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="group flex flex-col h-full rounded-3xl bg-white border border-gray-200/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)]"
                    >
                      <div
                        className="h-1.5 w-full shrink-0"
                        style={{ background: 'linear-gradient(90deg, #5ba8b4 0%, #7D6BA0 100%)' }}
                      />

                      <div className="flex flex-col flex-grow p-7 sm:p-8">
                        {/* Category + read time */}
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                            style={{ background: cat.bg, color: cat.text }}
                          >
                            {post.category}
                          </span>
                          <span className="text-[0.75rem] text-gray-400">{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h2
                          className="font-bold text-gray-900 text-[1.25rem] sm:text-[1.375rem] leading-[1.35] mb-3 tracking-[-0.02em] group-hover:text-[#4a96a3] transition-colors"
                        >
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-[0.9375rem] leading-[1.7] text-gray-500 flex-grow mb-6">
                          {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-5 border-t" style={{ borderColor: '#f3f4f6' }}>
                          <div>
                            <p className="text-[0.8125rem] font-semibold text-gray-800">{post.author}</p>
                            <p className="text-[0.75rem] text-gray-400">
                              <time dateTime={new Date(post.date).toISOString().slice(0, 10)}>{post.date}</time>
                            </p>
                          </div>
                          <span
                            className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-[#5ba8b4] group-hover:gap-2 transition-all"
                          >
                            Read more
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <SoftWash>
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-fadeUp" className="text-center">
              <Eyebrow>Compare</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-center mb-3 text-[2rem] sm:text-[2.5rem] leading-[1.05]">
                The tools these guides tune
              </h2>
              <p className="text-center text-[1.0625rem] leading-[1.7] text-gray-500 max-w-2xl mx-auto mb-8">
                Most posts end in a rule change inside Stripe Radar, Shopify Flow, Blockify, or Adyen RevenueProtect. Here is how those tools and FraudPulse split the work.
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FrostedBox>
                <ComparisonTable table={ANALYST_VS_ENFORCEMENT_TABLE} />
              </FrostedBox>
            </Reveal>
          </div>
        </SoftWash>

        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal animation="anim-fadeUp" className="lg:sticky lg:top-28">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.05] text-[2.25rem] sm:text-[3rem] mb-5 text-balance">
                Frequently asked questions
              </h2>
              <Link
                href="/faq/"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-[1rem] font-semibold text-gray-900 transition-all duration-300 hover:border-[#5ba8b4]/50 hover:text-[#4a96a3]"
              >
                View full FAQ
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <FaqAccordion faqs={blogIndexFaqs} variant="light" />
            </Reveal>
          </div>
        </section>

        <PageCta
          pulseId="blogCtaPulse"
          title="See it on your"
          highlight="own data."
          body="Book a live walkthrough and see how FraudPulse turns your payment data into ready-to-apply fraud rules."
        />

      </main>

      <Footer />
    </div>
  );
}
