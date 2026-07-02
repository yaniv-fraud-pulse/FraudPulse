'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Reveal } from '../components/Reveal';
import { posts } from '../lib/blog';

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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-20%] right-[-5%] w-[700px] h-[500px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(91,168,180,0.1) 0%, transparent 60%)' }} />

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24 text-center">
            <Reveal animation="anim-fadeUp" delay={0}>
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                FraudPulse Blog
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[3rem] sm:text-[4rem] lg:text-[4.5rem]">
                Fraud Intelligence,{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Explained
                </span>
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1.25rem] sm:text-[1.375rem] leading-[1.75] max-w-[600px] mx-auto text-gray-500">
                Practical guides, product updates, and deep-dives on fraud prevention for modern merchants.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Post grid ── */}
        <section className="py-12 sm:py-16 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {sortedPosts.map((post, i) => {
                const cat = categoryColors[post.category] ?? categoryColors.Product;
                const delay = ([0, 75, 150] as const)[i % 3] ?? 0;
                return (
                  <Reveal key={post.slug} animation="anim-fadeUp" delay={delay}>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="group flex flex-col h-full rounded-[20px] bg-white border overflow-hidden card-hover"
                      style={{ borderColor: '#e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                    >
                      {/* Featured image or coloured bar */}
                      {post.image ? (
                        <div className="h-44 w-full overflow-hidden shrink-0 bg-gray-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                      ) : (
                        <div
                          className="h-1.5 w-full shrink-0"
                          style={{ background: 'linear-gradient(90deg, #5ba8b4 0%, #7D6BA0 100%)' }}
                        />
                      )}

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
                            <p className="text-[0.75rem] text-gray-400">{post.date}</p>
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

        {/* ── CTA ── */}
        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}
        >
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.75rem] sm:text-[3.25rem]">
                See it on your own data
              </h2>
              <p className="text-[1.0625rem] leading-[1.7] max-w-[480px] mx-auto mb-10 text-gray-400">
                Book a live walkthrough and see how FraudPulse turns your payment data into ready-to-apply fraud rules.
              </p>
              <Link
                href="/book-a-demo/"
                className="inline-flex items-center gap-2 rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  boxShadow: '0 4px 24px rgba(91,168,180,0.35)',
                  transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
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
