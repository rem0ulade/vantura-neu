import type { Metadata } from 'next'
import { LocalizedDesignPage } from '@/components/LocalizedDesignPage'

export const metadata: Metadata = {
  title: 'Design Studio | Vantura Studios',
  description: 'Webdesign, Kampagnenmotive, Ads, Banner, Social Assets und visuelle Systeme von Vantura Studios.',
  alternates: { canonical: '/de/design/', languages: { en: '/design/', de: '/de/design/' } },
}

export default function DesignPage() {
  return <LocalizedDesignPage locale="de" />
}
