import type { Metadata } from 'next'
import { LocalizedServicePage } from '@/components/LocalizedServicePage'

export const metadata: Metadata = {
  title: 'Ich baue dein Projekt | Vantura',
  description: 'Apps, Web-Apps, MVPs, interne Tools, Automationen und KI-Features — von der Idee bis zum Launch.',
  alternates: { canonical: '/de/projekt/', languages: { en: '/projekt/', de: '/de/projekt/' } },
}

export default function GermanProjectPage() {
  return <LocalizedServicePage locale="de" type="project" />
}
