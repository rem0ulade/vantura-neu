import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { SITE } from '@/lib/site'
import { SiteStatus } from '@/components/SiteStatus'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const title = 'Vantura Studios · Website geschlossen'
const description = 'Diese Website ist geschlossen. Vantura Studios bietet kein Webdesign mehr an.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: '%s — Vantura Studios' },
  description,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: 'Vantura Studios',
    title,
    description,
  },
  twitter: { card: 'summary', title, description },
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased"><SiteStatus>{children}</SiteStatus></body>
    </html>
  )
}
