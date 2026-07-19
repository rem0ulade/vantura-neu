import type { Metadata } from 'next'
import { LocalizedLanding } from '@/components/LocalizedLanding'

export const metadata: Metadata = {
  title: 'Vantura Studios | Data, Websites & Digital Products',
  description: 'Explore reporting and dashboards, websites, custom projects, selected work and Grace by Vantura Studios.',
  alternates: { canonical: '/', languages: { en: '/', de: '/de/' } },
}

export default function Home() {
  return <LocalizedLanding locale="en" />
}