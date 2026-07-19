import type { Metadata } from 'next'
import { LocalizedServicePage } from '@/components/LocalizedServicePage'

export const metadata: Metadata = {
  title: 'Projects | Vantura Studios',
  description: 'Apps, web apps, MVPs, internal tools, automation, AI features and project rescue — from idea to launch.',
  alternates: { canonical: '/projects/', languages: { en: '/projects/', de: '/de/projects/' } },
}

export default function ProjectsPage() {
  return <LocalizedServicePage locale="en" type="project" />
}
