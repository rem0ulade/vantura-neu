import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Cost } from '@/components/sections/Cost'
import { Solutions } from '@/components/sections/Solutions'
import { Showcase } from '@/components/sections/Showcase'
import { Process } from '@/components/sections/Process'
import { WhyUs } from '@/components/sections/WhyUs'
import { References } from '@/components/sections/References'
import { Faq } from '@/components/sections/Faq'
import { Cta } from '@/components/sections/Cta'
import { Footer } from '@/components/sections/Footer'

/**
 * Dramaturgie der Seite:
 * Problem → Schmerz → Lösung → Beweis → Ablauf → Vertrauen → Abschluss
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Cost />
        <Solutions />
        <Showcase />
        <Process />
        <WhyUs />
        <References />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
