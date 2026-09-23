import type { Metadata } from 'next';
import { SITE_URL } from './site';

/** Raster social image. X/LinkedIn ignore SVG logos. */
export const SOCIAL_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'FraudPulse - ranked fraud rules from your transaction data',
} as const;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  keywords?: string;
};

/** Absolute www canonical + matching og:url for public pages. */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  keywords,
}: PageSeoInput): Metadata {
  const normalized = path.endsWith('/') || path === '/' ? path : `${path}/`;
  const url = normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: normalized,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'FraudPulse',
      type,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
