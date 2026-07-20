import type { Metadata } from 'next'
import { LocalizedDesignPage } from '@/components/LocalizedDesignPage'

export const metadata: Metadata = {
  title: 'Design Studio | Vantura Studios',
  description: 'Web design, campaign creatives, ads, banners, social assets and visual systems by Vantura Studios.',
  alternates: { canonical: '/design/', languages: { en: '/design/', de: '/de/design/' } },
}

export default function DesignPage() {
  return <LocalizedDesignPage locale="en" />
}
