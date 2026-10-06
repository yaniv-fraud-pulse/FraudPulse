import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import { Reveal } from '../../components/Reveal';
import FaqAccordion from '../../components/FaqAccordion';
import { articleJsonLd, faqPageJsonLd, softwareApplicationJsonLd } from '../../lib/geo';
import { pageMetadata } from '../../lib/seo';
import { Eyebrow, FrostedBox, HeroBackdrop, PageCta } from '../../components/Brand';
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
    <div className="flex flex-col min-h-screen bg-white overflow-x-clip">
      <JsonLd data={articleJsonLd(`${page.title} ${page.titleAccent}`, `/alternatives/${page.slug}/`)} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(page.faqs)} />
      <Header />

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip px-5 sm:px-10 text-center">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto pt-16 pb-16 sm:pt-20 sm:pb-20">
            <Eyebrow>{page.kicker}</Eyebrow>
            <h1 className="font-extrabold text-gray-900 mb-5 tracking-[-0.045em] leading-[1.05] text-[2.25rem] sm:text-[3.25rem]">
              {page.title}{' '}
              <span className="text-gradient-flow">{page.titleAccent}</span>
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.75] text-gray-700 font-semibold mb-4 text-balance">
              {page.excerpt}
            </p>
            <p className="ai-answer text-[1rem] sm:text-[1.0625rem] leading-[1.7] text-gray-500 text-balance">
              {page.answer}
            </p>
          </div>
        </section>

        {page.diagram && (
          <section className="py-12 sm:py-16 px-5 sm:px-10 bg-white">
            <div className="max-w-4xl mx-auto">
              <Reveal animation="anim-fadeUp" className="text-center mb-10">
                <Eyebrow>How it fits</Eyebrow>
                <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] text-[1.75rem] sm:text-[2.25rem]">
                  Engine, brain, navigation
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {page.diagram.map((step, i) => (
                  <Reveal key={step.from} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                    <div className="rounded-3xl border border-gray-200/80 bg-white p-6 h-full">
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
              <FrostedBox padded={false} className="overflow-x-auto mt-8">
                <table className="w-full min-w-[560px] text-left text-[0.875rem] sm:text-[0.9375rem]">
                  <thead>
                    <tr className="bg-white/60 border-b" style={{ borderColor: '#e5e7eb' }}>
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
              </FrostedBox>
            </Reveal>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-5 sm:px-10 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {page.points.map((point, i) => (
              <Reveal key={point.title} animation="anim-fadeUp" delay={([0, 75, 150] as const)[i] ?? 0}>
                <h2 className="font-bold text-gray-900 text-[1.375rem] mb-2 tracking-[-0.02em]">{point.title}</h2>
                <p className="text-[1.0625rem] leading-[1.75] text-gray-600">{point.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-28 px-5 sm:px-10 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.05] text-[2.25rem] sm:text-[3rem] mb-5 text-balance">
                Frequently asked questions
              </h2>
              <p className="text-[0.9375rem] text-gray-500">
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
            <FaqAccordion faqs={page.faqs} variant="light" />
          </div>
        </section>

        {others.length > 0 && (
          <section className="px-5 sm:px-10 pb-8">
            <div className="max-w-5xl mx-auto">
              <ul className="flex flex-wrap justify-center gap-2">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/alternatives/${p.slug}/`}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.8125rem] sm:text-[0.875rem] font-semibold text-[#4a96a3] transition-colors hover:border-[#5ba8b4]/50 hover:bg-[#5ba8b4]/[0.06]"
                    >
                      {p.seoTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <PageCta
          pulseId={`altCta-${page.slug}`}
          body="Connect Shopify, Stripe, or Adyen and get ranked rule changes - without replacing the tools you already run."
        />
      </main>

      <Footer />
    </div>
  );
}
