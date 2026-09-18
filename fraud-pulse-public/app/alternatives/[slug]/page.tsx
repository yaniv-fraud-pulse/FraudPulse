import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import { Reveal } from '../../components/Reveal';
import { PageUpdated } from '../../components/GeoBits';
import { faqPageJsonLd } from '../../lib/geo';
import { pageMetadata } from '../../lib/seo';
import { TrackedLink } from '../../components/TrackedCta';
import { alternativePages, getAlternative } from '../../lib/alternatives';

export function generateStaticParams() {
  return alternativePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternative(slug);
  if (!page) return {};
  return pageMetadata({
    title: `${page.seoTitle} | FraudPulse`,
    description: page.seoDescription,
    path: `/alternatives/${page.slug}/`,
    keywords: page.keywords,
  });
}

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAlternative(slug);
  if (!page) notFound();

  const others = alternativePages.filter((p) => p.slug !== page.slug);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={faqPageJsonLd(page.faqs)} />
      <Header />

      <main className="flex-grow">
        <PageUpdated date="September 14, 2026" visible={false} />

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
                {page.kicker}
              </p>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.5rem] sm:text-[3.5rem]">
                {page.title}{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {page.titleAccent}
                </span>
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-500 mb-4">
                {page.excerpt}
              </p>
              <p className="ai-answer text-[1rem] sm:text-[1.0625rem] leading-[1.7] text-gray-600">
                {page.answer}
              </p>
            </Reveal>
          </div>
        </section>

        {page.diagram && (
          <section className="py-12 sm:py-16 px-5 sm:px-10 bg-[#f8f9fa]">
            <div className="max-w-4xl mx-auto">
              <Reveal animation="anim-fadeUp">
                <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-10 text-[1.75rem] sm:text-[2.25rem]">
                  Engine, brain, navigation
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {page.diagram.map((step, i) => (
                  <Reveal key={step.from} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                    <div
                      className="rounded-[16px] border bg-white p-6 h-full"
                      style={{ borderColor: '#e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    >
                      <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#5ba8b4] mb-2">
                        {step.note}
                      </p>
                      <p className="font-bold text-gray-900 mb-1">{step.from}</p>
                      <p className="text-[0.9375rem] text-gray-500">{step.to}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-fadeUp">
              <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-center mb-3 text-[1.75rem] sm:text-[2.25rem]">
                {page.tableCaption}
              </h2>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={75}>
              <div className="overflow-x-auto rounded-[16px] border mt-8" style={{ borderColor: '#e5e7eb' }}>
                <table className="w-full min-w-[560px] text-left text-[0.875rem] sm:text-[0.9375rem]">
                  <thead>
                    <tr className="bg-[#f8f9fa] border-b" style={{ borderColor: '#e5e7eb' }}>
                      <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-500 w-[22%]" />
                      <th className="px-3 sm:px-4 py-3.5 font-semibold text-gray-700">{page.competitorLabel}</th>
                      <th className="px-3 sm:px-4 py-3.5 font-semibold text-[#4a96a3]">FraudPulse</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.rows.map((row) => (
                      <tr key={row.label} className="border-b last:border-b-0" style={{ borderColor: '#f3f4f6' }}>
                        <td className="px-3 sm:px-4 py-3.5 font-medium text-gray-800">{row.label}</td>
                        <td className="px-3 sm:px-4 py-3.5 text-gray-600">{row.competitor}</td>
                        <td className="px-3 sm:px-4 py-3.5 text-gray-700 bg-[rgba(91,168,180,0.04)]">{row.fraudPulse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {page.points.map((point, i) => (
              <Reveal key={point.title} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                <h2 className="font-bold text-gray-900 text-[1.375rem] mb-2 tracking-[-0.02em]">{point.title}</h2>
                <p className="text-[1.0625rem] leading-[1.75] text-gray-600">{point.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] mb-8 text-[1.75rem] sm:text-[2.25rem]">
              FAQ
            </h2>
            <dl className="flex flex-col gap-6">
              {page.faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-semibold text-[1.0625rem] text-gray-900 mb-2">{faq.q}</dt>
                  <dd className="text-[1.0625rem] leading-[1.75] text-gray-600">{faq.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-[0.9375rem] text-gray-500">
              Related:{' '}
              <Link href={page.relatedHref} className="font-semibold text-[#4a96a3] hover:underline">
                {page.relatedLabel}
              </Link>
              {' · '}
              <Link href="/pricing/" className="font-semibold text-[#4a96a3] hover:underline">
                pricing
              </Link>
              {' · '}
              <Link href="/faq/" className="font-semibold text-[#4a96a3] hover:underline">
                full FAQ
              </Link>
            </p>
          </div>
        </section>

        {others.length > 0 && (
          <section className="py-12 sm:py-16 px-5 sm:px-10 bg-[#f8f9fa]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-bold text-gray-900 text-[1.25rem] mb-4">More comparisons</h2>
              <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/alternatives/${p.slug}/`}
                      className="font-semibold text-[#4a96a3] hover:underline"
                    >
                      {p.seoTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section
          className="py-20 sm:py-28 px-5 sm:px-10 text-white"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-extrabold tracking-[-0.03em] mb-4 text-[2.25rem] sm:text-[3rem]">
              See it on your transaction data
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] max-w-[520px] mx-auto mb-10 text-gray-400">
              Connect Shopify, Stripe, or Adyen and get ranked rule changes - without replacing the tools you already run.
            </p>
            <TrackedLink
              event="demo_cta_clicked"
              href="/book-a-demo/"
              className="inline-flex items-center justify-center rounded-full px-12 py-4.5 text-[1.125rem] font-bold text-white hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                transition: 'transform 0.2s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              Book a Demo
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
