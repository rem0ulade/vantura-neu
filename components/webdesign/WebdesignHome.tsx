import { Nav } from './Nav'
import { Hero } from './Hero'
import { Strip } from './Strip'
import { FeaturedWork } from './FeaturedWork'
import { Services } from './Services'
import { Offers } from './Offers'
import { Process } from './Process'
import { About } from './About'
import { Faq } from './Faq'
import { Cta } from './Cta'
import { Footer } from './Footer'
import type { Locale } from '@/lib/webdesign-content'

export function WebdesignHome({ locale }: { locale: Locale }) {
  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <Nav locale={locale} />
      <main>
        <Hero locale={locale} />
        <Strip locale={locale} />
        <FeaturedWork locale={locale} />
        <Services locale={locale} />
        <Offers locale={locale} />
        <Process locale={locale} />
        <About locale={locale} />
        <Faq locale={locale} />
        <Cta locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}

