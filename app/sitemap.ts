import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/de/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/reporting/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/projects/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/design/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/websites/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/de/reporting/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/de/projects/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/de/design/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/de/websites/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/impressum/`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE.url}/datenschutz/`, changeFrequency: 'yearly', priority: 0.1 },
  ]
}
