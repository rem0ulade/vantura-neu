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
            {item.preview && <Image src={item.preview.src} alt={item.preview.alt[locale]} width={1440} height={900} sizes="(min-width: 1000px) 30vw, (min-width: 600px) 45vw, 90vw" />}
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
        <Reveal className="agency-section-heading"><p className="agency-kicker">01 / {locale === 'de' ? 'Ausgewählte Arbeiten' : 'Selected work'}</p><h2 id="work-heading">{locale === 'de' ? <>Weniger reden.<br /><span>Mehr zeigen.</span></> : <>Less talking.<br /><span>More showing.</span></>}</h2><p>{locale === 'de' ? 'Digitale Auftritte mit eigener Persönlichkeit.' : 'Digital experiences with a distinct personality.'}</p></Reveal>
        <div className="agency-projects">{getFeaturedWork().map((item, index) => <Project key={item.slug} item={item} index={index} locale={locale} />)}</div>
        <div className="agency-live-projects">
          {[
            { name: 'Grace', url: 'https://meet-grace.com/', label: 'grace' },
            { name: 'Nestpure', url: 'https://nestpure-landing.vercel.app/', label: 'nestpure' },
            { name: 'Jonathan Kokalj', url: 'https://www.jonathankokalj.com/de/', label: 'jonathan' },
          ].map((project, index) => (
            <a key={project.url} href={project.url} target="_blank" rel="noopener noreferrer" className="agency-live-project">
              <div className="agency-project-visual"><div className="agency-project-image"><Image src={`/work-previews/${project.label}.png`} alt={`Screenshot – ${project.name}`} width={1440} height={900} sizes="(min-width:1000px) 30vw, 90vw" /></div></div>
              <span className="agency-kicker">{locale === 'de' ? 'Weitere Arbeit' : 'More work'} / 0{index + 4}</span>
              <strong>{project.name}<span aria-hidden>↗</span></strong>

              <span className="agency-case-note">{locale === 'de' ? (index === 0 ? 'Komplexe Software verständlich machen: klare Funktionsbereiche, echte Interface-Ansichten und ein direkter Weg zur Early-Access-Anfrage.' : index === 1 ? 'Ein Produkt greifbar machen: visuelle Vorher-nachher-Demo, Anwendungsschritte und ein klar aufgebautes Bundle-Angebot.' : 'Beratung konkret zeigen: verständliche Leistungen, interaktive Reporting-Demo und direkter Kontakt zum Ansprechpartner.') : (index === 0 ? 'Explaining complex software through feature sections, real interface views and a direct early-access inquiry.' : index === 1 ? 'Making a product tangible with a before-and-after demo, usage steps and a clear bundle offer.' : 'Making consulting tangible with clear services, an interactive reporting demo and direct contact.')}</span>
              <span className="agency-text-link">{locale === 'de' ? 'Website ansehen' : 'Visit website'}</span>
            </a>
          ))}
        </div>
        <Link href={workHref(locale)} className="agency-button agency-button-outline">{copy.allWork} <span aria-hidden>↗</span></Link>
      </div>
    </section>
  )
}
