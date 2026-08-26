import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { ArboretumFooter } from '@/components/arboretum/Footer'
import { ArboretumNav } from '@/components/arboretum/Nav'
import { AE } from '@/lib/arboretum'
import './arboretum.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: {
    default: `${AE.name} – ${AE.claim}`,
    template: `%s – ${AE.name}`,
  },
  description: AE.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${AE.name} – ${AE.claim}`,
    description: AE.description,
    locale: 'de_DE',
    type: 'website',
    url: AE.url,
  },
}

export default function ArboretumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`ae ${fraunces.variable}`} lang="de">
      <p className="ae-gift">
        Unverbindlicher Website-Entwurf · ein Geschenk von{' '}
        <a href="https://vantura-studios.com">Vantura Studios</a>
        {' '}für das Arboretum Ellerhoop
      </p>
      <ArboretumNav />
      {children}
      <ArboretumFooter />
    </div>
  )
}
