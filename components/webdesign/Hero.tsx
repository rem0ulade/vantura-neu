'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BookingLink } from './BookingLink'
import { HeroBackdrop } from './HeroBackdrop'
import { getFeaturedWork } from '@/lib/work'
import { WEBSITE_START_PRICE } from '@/lib/webdesign-pricing'
import { t, workHref, type Locale } from '@/lib/webdesign-content'

export function Hero({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const de = locale === 'de'
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const backY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const projects = getFeaturedWork()
  const lines = de ? ['Websites,', 'die Eindruck', 'machen.'] : ['Websites', 'with real', 'character.']

  return (
    <section ref={ref} className="agency-hero" aria-labelledby="hero-heading">
      <HeroBackdrop locale={locale} />
      <div className="agency-container agency-hero-grid">
        <div className="agency-hero-copy">
          <p className="agency-kicker">{de ? 'Vantura Studios · Webdesign aus Rellingen bei Hamburg' : 'Vantura Studios · Webdesign near Hamburg'}</p>
          <h1 id="hero-heading" className="agency-display">
            {lines.map((line, index) => <span className="agency-title-mask" key={line}><span style={{ animationDelay: `${index * 100}ms` }}>{line}</span></span>)}
          </h1>
          <p className="agency-hero-lead">{copy.heroText}</p>
          <div className="agency-actions">
            <BookingLink placement="hero" className="agency-button agency-button-orange">{de ? 'Erstgespräch buchen' : 'Book a discovery call'} <span aria-hidden>↗</span></BookingLink>
            <a className="agency-text-link" href="#featured">{de ? 'Arbeiten entdecken' : 'Explore the work'} <span aria-hidden>↓</span></a>
          </div>
          <p className="agency-micro">{de ? '30 Minuten. Kostenlos. Ganz unverbindlich.' : '30 minutes. Free. No obligation.'}</p>
        </div>
        <div className="agency-hero-art" aria-label={de ? 'Drei Website-Beispiele zum Entdecken' : 'Explore three website examples'}>
          {projects.map((item, index) => item.preview ? (
            <motion.div key={item.slug} className={`agency-floating-site agency-floating-site-${index}`} style={{ y: reduce ? 0 : index === 1 ? frontY : backY }}>
              <Link href={workHref(locale, item.slug)} aria-label={`${item.title[locale]} – ${de ? 'Demo ansehen' : 'explore demo'}`}>
                <div className="agency-browser-bar"><span aria-hidden>● ● ●</span><span>{item.title[locale]}</span><span aria-hidden>↗</span></div>
                <Image src={item.preview.src} alt={item.preview.alt[locale]} width={1440} height={900} sizes="(max-width: 760px) 80vw, 520px" priority={index === 0} />
              </Link>
            </motion.div>
          ) : null)}
          <a href="#angebote" className="agency-price-stamp"><span>{de ? 'Deine Website ab' : 'Your website from'}</span><strong>{WEBSITE_START_PRICE} €</strong><span>{de ? 'einmalig · netto ↗' : 'one-time · excl. VAT ↗'}</span></a>
          <span className="agency-art-caption">{de ? 'Echte Gestaltung. Direkt ausprobieren.' : 'Real design. Ready to explore.'}</span>
        </div>
      </div>
      <div className="agency-container agency-hero-bottom"><span>{de ? 'Design & Entwicklung aus einer Hand' : 'Design & development in one place'}</span><a href="#featured">{de ? 'Runterscrollen. Eindruck gewinnen.' : 'Scroll down. Get a feel for it.'} <span aria-hidden>↓</span></a></div>
    </section>
  )
}
