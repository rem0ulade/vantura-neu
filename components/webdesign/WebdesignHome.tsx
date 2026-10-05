import { LanguageRedirect } from '@/components/LanguageRedirect'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { Services } from './Services'
import { Capabilities } from './Capabilities'
import { WorkGrid } from './WorkGrid'
import { Process } from './Process'
import { Cta } from './Cta'
import { Footer } from './Footer'
import type { Locale } from '@/lib/webdesign-content'

export function WebdesignHome({ locale }: { locale: Locale }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <LanguageRedirect locale={locale} />
      <Nav locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Capabilities locale={locale} />
        <WorkGrid locale={locale} />
        <Process locale={locale} />
        <Cta locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
