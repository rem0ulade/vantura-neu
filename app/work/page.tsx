import type { Metadata } from 'next'
import { WorkIndex } from '@/components/webdesign/WorkIndex'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected webdesign demos hosted on vantura-studios.com.',
  alternates: { canonical: '/work/', languages: { en: '/work/', de: '/de/work/' } },
}

export default function WorkPage() {
  return <WorkIndex locale="en" />
}
