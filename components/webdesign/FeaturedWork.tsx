'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { getFeaturedWork, type WorkItem } from '@/lib/work'
import { t, workHref, type Locale } from '@/lib/webdesign-content'
import { Reveal } from './Reveal'

function Project({ item, index, locale }: { item: WorkItem; index: number; locale: Locale }) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [28, -28])
  const descriptions = locale === 'de'
    ? ['Smart Home. Klar gedacht. Lebendig gestaltet.', 'Ein Stück Italien. Auch auf dem Bildschirm.', 'Eine klare Mission. Ein Auftritt mit Haltung.']
    : ['Smart living. Clear thinking. Expressive design.', 'A taste of Italy. On every screen.', 'A clear mission. A confident identity.']

  return (
    <article ref={ref} className={`agency-project agency-project-${index}`}>
      <Reveal className="agency-project-visual">
        <Link href={workHref(locale, item.slug)} className="agency-project-image" aria-label={`${item.title[locale]} – ${locale === 'de' ? 'Demo öffnen' : 'open demo'}`}>
          <motion.div style={{ y: reduce ? 0 : y }}>
            {item.preview && <Image src={item.preview.src} alt={item.preview.alt[locale]} width={1440} height={900} sizes="(min-width: 1000px) 70vw, 100vw" />}
          </motion.div>
          <span className="agency-project-open" aria-hidden>↗</span>
        </Link>
      </Reveal>
      <Reveal className="agency-project-meta" delay={0.08}>
        <div><p className="agency-kicker">0{index + 1} / {item.kind[locale]}</p><h3><Link href={workHref(locale, item.slug)}>{item.title[locale]}</Link></h3><p>{descriptions[index]}</p></div>
        <Link href={workHref(locale, item.slug)} className="agency-text-link">{locale === 'de' ? 'Demo erleben' : 'Explore demo'} <span aria-hidden>↗</span></Link>
      </Reveal>
    </article>
  )
}

export function FeaturedWork({ locale }: { locale: Locale }) {
  const copy = t(locale)
  return (
    <section id="featured" className="agency-work agency-section" aria-labelledby="work-heading">
      <div className="agency-container">
        <Reveal className="agency-section-heading"><p className="agency-kicker">01 / {locale === 'de' ? 'Ausgewählte Arbeiten' : 'Selected work'}</p><h2 id="work-heading">{locale === 'de' ? <>Weniger reden.<br /><span>Mehr zeigen.</span></> : <>Less talking.<br /><span>More showing.</span></>}</h2><p>{locale === 'de' ? 'Drei unterschiedliche Welten. Eine Handschrift: individuell.' : 'Three different worlds. One approach: individual design.'}</p></Reveal>
        <div className="agency-projects">{getFeaturedWork().map((item, index) => <Project key={item.slug} item={item} index={index} locale={locale} />)}</div>
        <Link href={workHref(locale)} className="agency-button agency-button-outline">{copy.allWork} <span aria-hidden>↗</span></Link>
      </div>
    </section>
  )
}
