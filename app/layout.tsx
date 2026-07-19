import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const title = `${SITE.name} — ${SITE.claim}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Reporting',
    'Dashboards',
    'Business Intelligence',
    'Automation',
    'Forecasting',
    'KPI',
    'Data Analysis',
    'Controlling',
  ],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
