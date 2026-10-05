import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { getWorkSlugs } from '@/lib/work'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const workSlugs = getWorkSlugs()

  return [
    { url: `${SITE.url}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/de/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/work/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/de/work/`, changeFrequency: 'weekly', priority: 0.9 },
    ...workSlugs.flatMap((slug) => [
      { url: `${SITE.url}/work/${slug}/`, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${SITE.url}/de/work/${slug}/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
    { url: `${SITE.url}/impressum/`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE.url}/datenschutz/`, changeFrequency: 'yearly', priority: 0.1 },
  ]
}
