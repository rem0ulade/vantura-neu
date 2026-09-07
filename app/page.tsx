import type { Metadata } from 'next'
import { LocalizedLanding } from '@/components/LocalizedLanding'

export const metadata: Metadata = {
  title: 'Vantura Studios | Data, AI, Software & Design',
  description: 'Reporting, external AI leadership, AI systems, software products and digital design — strategy and implementation from one owner-led studio.',
  alternates: { canonical: '/', languages: { en: '/', de: '/de/' } },
}

export default function Home() {
  return <LocalizedLanding locale="en" />
}