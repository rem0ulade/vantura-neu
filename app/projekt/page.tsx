import type { Metadata } from 'next'
import { LocalizedServicePage } from '@/components/LocalizedServicePage'

export const metadata: Metadata = {
  title: 'I Build Your Project | Vantura',
  description: 'Apps, web apps, MVPs, internal tools, automation and AI features — from idea to launch.',
  alternates: { canonical: '/projekt/', languages: { en: '/projekt/', de: '/de/projekt/' } },
}

export default function ProjectPage() {
  return <LocalizedServicePage locale="en" type="project" />
}
