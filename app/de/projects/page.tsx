import type { Metadata } from 'next'
import { LocalizedProjectsPage } from '@/components/LocalizedProjectsPage'

export const metadata: Metadata = {
  title: 'Projekte | Vantura Studios',
  description: 'Apps, Web-Apps, MVPs, interne Tools, Automationen, KI-Features und Projekt-Rettung – von der Idee bis zum Launch.',
  alternates: { canonical: '/de/projects/', languages: { en: '/projects/', de: '/de/projects/' } },
}

export default function GermanProjectsPage() {
  return <LocalizedProjectsPage locale="de" />
}
