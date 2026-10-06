import type { Metadata } from 'next';
import { SITE_URL } from './site';

/** Raster social image. X ignores SVG and often fails on transparent PNGs. */
export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'FraudPulse - ranked fraud rules from your transaction data',
  type: 'image/jpeg',
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: normalized,
      types: {
        'text/plain': `${SITE_URL}/llms.txt`,
      },
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
      images: [
        {
          url: SOCIAL_IMAGE.url,
          alt: SOCIAL_IMAGE.alt,
          width: SOCIAL_IMAGE.width,
          height: SOCIAL_IMAGE.height,
        },
      ],
    },
  };
}
