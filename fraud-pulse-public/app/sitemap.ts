import type { MetadataRoute } from 'next'
import { posts } from './lib/blog'
import { SITE_URL } from './lib/site'

export const dynamic = 'force-static'

const latestPostDate = posts
  .map((p) => new Date(p.date))
  .sort((a, b) => b.getTime() - a.getTime())[0]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/how-it-works/`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}/`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      })),
    {
      url: `${SITE_URL}/pricing/`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/book-a-demo/`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/webinar/`,
      lastModified: new Date('2026-08-04'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy/`,
      lastModified: latestPostDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms/`,
      lastModified: latestPostDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/refund/`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
