import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { SITE } from '@/lib/site'
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

const title = `${SITE.name} Studios — ${SITE.claim}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Webdesign',
    'Website',
    'Online Shop',
    'Shopify',
    'Relaunch',
    'Landing Page',
    'UI Design',
    'Vantura',
  ],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: `${SITE.name} Studios`,
    title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
