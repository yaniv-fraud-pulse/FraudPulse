import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Reveal } from '../../components/Reveal';
import { getPost, posts } from '../../lib/blog';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Product:   { bg: 'rgba(91,168,180,0.12)',   text: '#4a96a3' },
  Education: { bg: 'rgba(125,107,160,0.12)',  text: '#7D6BA0' },
  News:      { bg: 'rgba(34,197,94,0.1)',     text: '#16a34a' },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return null;
  }

  const cat = categoryColors[post.category] ?? categoryColors.Product;
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-0 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />

          <div className="relative max-w-3xl mx-auto py-16 sm:py-24">
            {/* Back breadcrumb */}
            <Reveal animation="anim-fadeUp" delay={0}>
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold mb-8 transition-colors"
                style={{ color: '#5ba8b4' }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                All posts
              </Link>
            </Reveal>

            {/* Category + meta */}
            <Reveal animation="anim-fadeUp" delay={75}>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: cat.bg, color: cat.text }}
                >
                  {post.category}
                </span>
                <span className="text-[0.8125rem] text-gray-400">{post.date}</span>
                <span className="text-[0.8125rem] text-gray-400">·</span>
                <span className="text-[0.8125rem] text-gray-400">{post.readTime}</span>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal animation="anim-fadeUp" delay={150}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.03em] leading-[1.15] mb-6 text-[2.25rem] sm:text-[3rem]">
                {post.title}
              </h1>
            </Reveal>

            {/* Excerpt */}
            <Reveal animation="anim-fadeUp" delay={225}>
              <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 mb-10">
                {post.excerpt}
              </p>
            </Reveal>

            {/* Author */}
            <Reveal animation="anim-fadeUp" delay={300}>
              <div className="flex items-center gap-3 pb-10 border-b" style={{ borderColor: '#e5e7eb' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[0.75rem] text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)' }}
                >
                  FP
                </div>
                <div>
                  <p className="text-[0.875rem] font-semibold text-gray-800">{post.author}</p>
                  <p className="text-[0.75rem] text-gray-400">{post.authorRole}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Featured image ── */}
        {post.image && (
          <section className="px-5 sm:px-10 bg-white pt-10">
            <Reveal animation="anim-scaleIn" delay={0}>
              <div className="max-w-3xl mx-auto rounded-[20px] overflow-hidden border" style={{ borderColor: '#e5e7eb', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
          </section>
        )}

        {/* ── Article body ── */}
        <section className="py-10 pb-20 px-5 sm:px-10 bg-white">
          <Reveal animation="anim-fadeUp" delay={0}>
            <div
              className="max-w-3xl mx-auto blog-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>
        </section>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section className="py-16 sm:py-20 px-5 sm:px-10 bg-[#f8f9fa]">
            <div className="max-w-3xl mx-auto">
              <Reveal animation="anim-fadeUp">
                <h2 className="font-bold text-gray-900 text-[1.5rem] mb-8 tracking-[-0.02em]">More from the blog</h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel, i) => {
                  const relCat = categoryColors[rel.category] ?? categoryColors.Product;
                  return (
                    <Reveal key={rel.slug} animation="anim-fadeUp" delay={([0, 75] as const)[i] ?? 0}>
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="group flex flex-col h-full rounded-[16px] bg-white border p-6 card-hover"
                        style={{ borderColor: '#e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full"
                            style={{ background: relCat.bg, color: relCat.text }}
                          >
                            {rel.category}
                          </span>
                          <span className="text-[0.75rem] text-gray-400">{rel.readTime}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-[1.0625rem] leading-snug mb-2 tracking-[-0.01em] group-hover:text-[#4a96a3] transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-[0.875rem] text-gray-500 leading-relaxed line-clamp-2 flex-grow mb-4">{rel.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-[#5ba8b4] group-hover:gap-2 transition-all mt-auto">
                          Read more
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}
        >
          <Reveal animation="anim-scaleIn">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.75rem] sm:text-[3.25rem]">
                Ready to See It on Your Data?
              </h2>
              <p className="text-[1.0625rem] leading-[1.7] max-w-[480px] mx-auto mb-10 text-gray-400">
                Book a live walkthrough and see how FraudPulse turns your payment data into actionable fraud intelligence.
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
