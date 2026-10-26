import type { Metadata } from 'next'
import { WorkIndex } from '@/components/webdesign/WorkIndex'

export const metadata: Metadata = {
  title: 'Website-Beispiele',
  description: 'Ausgewählte Webdesign-Demos auf vantura-studios.com.',
  alternates: { canonical: '/de/work/', languages: { en: '/work/', de: '/de/work/' } },
}

export default function DeWorkPage() {
  return <WorkIndex locale="de" />
}
