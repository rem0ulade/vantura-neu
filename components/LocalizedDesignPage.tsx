import Link from 'next/link'
import { ArrowRight, Badge, Brush, FileImage, Globe2, Image, Layers3, Megaphone, MonitorSmartphone, Palette, PanelsTopLeft, Sparkles } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    badge: 'Vantura Design Studio',
    title: 'Design that makes the offer unmistakable.',
    lead: 'Web design, campaign assets, ads, banners and visual systems for businesses that need a clear and coherent presence.',
    primary: 'Discuss a design project',
    secondary: 'Explore web design',
    servicesTitle: 'From one asset to a complete visual system.',
    servicesLead: 'Flexible support for launches, campaigns, ongoing marketing and complete digital presences.',
    services: [
      ['Web design','Responsive websites and landing pages with clear structure, strong hierarchy and conversion-focused design.',Globe2],
      ['Ads & campaign creatives','Visual concepts and format families for paid social, display and digital campaigns.',Megaphone],
      ['Social media assets','Reusable templates, post designs, story formats and launch visuals for consistent communication.',Image],
      ['Banners & promotional graphics','Digital banners, event visuals, campaign headers and promotional material across formats.',FileImage],
      ['Brand systems','Colours, typography, layout principles and practical guidelines that make design repeatable.',Palette],
      ['Presentation & sales design','Pitch decks, proposals, one-pagers and visual sales material that present information clearly.',PanelsTopLeft],
    ],
    systemTitle: 'One visual idea. Every required format.',
    systemLead: 'A strong concept should not break when it moves from a website to an ad, a banner or a presentation.',
    systemItems: ['Clear visual direction','Responsive format system','Reusable design components','Consistent brand language'],
    workTitle: 'Typical design engagements.',
    work: [
      ['Launch system','Landing page, campaign key visual, ads and social assets for a coordinated product launch.'],
      ['Campaign package','A central creative direction translated into the required paid and organic formats.'],
      ['Website refresh','New visual direction and conversion-focused page design without losing the existing brand.'],
      ['Ongoing creative support','Fast, consistent design support for recurring marketing and communication needs.'],
    ],
    processTitle: 'Clear direction before decoration.',
    steps: [['01','Understand','Clarify audience, message, channels and the action the design should support.'],['02','Direct','Develop a visual direction and establish the system behind it.'],['03','Create','Produce the required assets and adapt them across formats.'],['04','Deliver','Provide organised, ready-to-use files and reusable components.']],
    webTitle: 'Looking specifically for a website?',
    webLead: 'The dedicated web design page covers positioning, structure, responsive design, implementation and launch.',
    webButton: 'Open web design',
    cta: 'Make every touchpoint feel like the same strong brand.',
  },
  de: {
    badge: 'Vantura Design Studio',
    title: 'Design, das dein Angebot unverwechselbar macht.',
    lead: 'Webdesign, Kampagnenmotive, Ads, Banner und visuelle Systeme für Unternehmen, die klar und konsistent auftreten wollen.',
    primary: 'Designprojekt besprechen',
    secondary: 'Webdesign ansehen',
    servicesTitle: 'Vom einzelnen Motiv bis zum vollständigen Designsystem.',
    servicesLead: 'Flexible Unterstützung für Launches, Kampagnen, laufendes Marketing und komplette digitale Auftritte.',
    services: [
      ['Webdesign','Responsive Websites und Landingpages mit klarer Struktur, starker Hierarchie und einem direkten Weg zur Anfrage.',Globe2],
      ['Ads & Kampagnenmotive','Visuelle Konzepte und Formatfamilien für Paid Social, Display und digitale Kampagnen.',Megaphone],
      ['Social-Media-Assets','Wiederverwendbare Vorlagen, Posts, Story-Formate und Launch-Visuals für konsistente Kommunikation.',Image],
      ['Banner & Werbegrafiken','Digitale Banner, Eventvisuals, Kampagnenheader und Werbemittel in den benötigten Formaten.',FileImage],
      ['Brand-Systeme','Farben, Typografie, Layoutprinzipien und praktische Regeln, mit denen Design reproduzierbar wird.',Palette],
      ['Präsentations- & Sales-Design','Pitchdecks, Angebote, One-Pager und Vertriebsunterlagen, die Informationen klar präsentieren.',PanelsTopLeft],
    ],
    systemTitle: 'Eine visuelle Idee. Alle benötigten Formate.',
    systemLead: 'Ein gutes Konzept darf nicht auseinanderfallen, sobald es von der Website in eine Ad, einen Banner oder eine Präsentation übertragen wird.',
    systemItems: ['Klare visuelle Richtung','Responsives Formatsystem','Wiederverwendbare Komponenten','Konsistente Markensprache'],
    workTitle: 'Typische Designprojekte.',
    work: [
      ['Launch-System','Landingpage, Key Visual, Ads und Social Assets für einen koordinierten Produktlaunch.'],
      ['Kampagnenpaket','Eine zentrale kreative Richtung, übersetzt in alle benötigten Paid- und Organic-Formate.'],
      ['Website-Refresh','Neue visuelle Richtung und stärkeres Seitendesign, ohne die bestehende Marke zu verlieren.'],
      ['Laufende Creative-Unterstützung','Schnelle, konsistente Designhilfe für wiederkehrende Marketing- und Kommunikationsaufgaben.'],
    ],
    processTitle: 'Erst die Richtung. Dann die Gestaltung.',
    steps: [['01','Verstehen','Zielgruppe, Botschaft, Kanäle und gewünschte Handlung klären.'],['02','Ausrichten','Eine visuelle Richtung entwickeln und das System dahinter festlegen.'],['03','Gestalten','Benötigte Assets erstellen und auf alle Formate übertragen.'],['04','Übergeben','Sauber organisierte, einsatzbereite Dateien und wiederverwendbare Komponenten liefern.']],
    webTitle: 'Du suchst konkret eine Website?',
    webLead: 'Die eigene Webdesign-Seite zeigt Positionierung, Struktur, responsives Design, Umsetzung und Launch im Detail.',
    webButton: 'Webdesign öffnen',
    cta: 'Lass jeden Touchpoint wie dieselbe starke Marke wirken.',
  }
} as const

export function LocalizedDesignPage({ locale }: { locale: 'en' | 'de' }) {
  const t = copy[locale]
  const prefix = locale === 'de' ? '/de' : ''
  const contact = `mailto:jk@vantura-studios.com?subject=${encodeURIComponent(locale === 'de' ? 'Design-Anfrage' : 'Design enquiry')}`
  return <div className="min-h-screen bg-[#f7f5f2] text-ink">
    <LanguageRedirect locale={locale}/>
    <header className="border-b border-black/10 bg-[#f7f5f2]/90 backdrop-blur"><nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"><Link href={`${prefix}/`} className="font-semibold tracking-[-.03em]">Vantura Studios</Link><div className="flex items-center gap-3"><LanguageSwitch locale={locale}/><a href={contact} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white sm:block">{t.primary}</a></div></nav></header>
    <main>
      <section className="overflow-hidden border-b border-black/10"><div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-28"><div><div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em]"><Sparkles size={14}/>{t.badge}</div><h1 className="mt-6 text-5xl font-semibold leading-[.94] tracking-[-.06em] sm:text-7xl">{t.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{t.lead}</p><div className="mt-9 flex flex-wrap gap-3"><a href={contact} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white">{t.primary}<ArrowRight size={17}/></a><Link href={`${prefix}/websites/`} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold">{t.secondary}<ArrowRight size={17}/></Link></div></div><div className="relative min-h-[460px] overflow-hidden rounded-[34px] bg-slate-950 p-7 text-white shadow-2xl"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-2xl"/><div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-amber-400/20 blur-2xl"/><div className="relative grid h-full grid-cols-2 gap-4"><div className="rounded-[26px] bg-gradient-to-br from-fuchsia-400 to-violet-600 p-5"><Badge size={28}/><p className="mt-28 text-2xl font-semibold">Campaign<br/>creative</p></div><div className="rounded-[26px] bg-white p-5 text-slate-950"><MonitorSmartphone size={28}/><p className="mt-28 text-2xl font-semibold">Digital<br/>experience</p></div><div className="col-span-2 flex items-center justify-between rounded-[26px] bg-amber-300 p-5 text-slate-950"><p className="text-2xl font-semibold">One idea.<br/>Every format.</p><Layers3 size={42}/></div></div></div></div></section>
      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="max-w-3xl"><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{t.servicesTitle}</h2><p className="mt-5 text-lg leading-8 text-muted">{t.servicesLead}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.services.map(([title,description,Icon])=><article key={title} className="rounded-[26px] border border-black/10 bg-[#f7f5f2] p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm"><Icon size={21}/></span><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted">{description}</p></article>)}</div></div></section>
      <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div className="rounded-[30px] bg-slate-950 p-8 text-white lg:p-10"><Brush size={28}/><h2 className="mt-7 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{t.systemTitle}</h2><p className="mt-5 leading-8 text-white/65">{t.systemLead}</p></div><div className="grid gap-4 sm:grid-cols-2">{t.systemItems.map((item,index)=><div key={item} className="rounded-[24px] border border-black/10 bg-white p-6"><span className="text-xs font-semibold text-black/35">0{index+1}</span><p className="mt-10 text-xl font-semibold">{item}</p></div>)}</div></div></section>
      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{t.workTitle}</h2><div className="mt-12 grid gap-5 md:grid-cols-2">{t.work.map(([title,description],index)=><article key={title} className="rounded-[28px] border border-black/10 p-7"><span className="text-xs font-semibold text-black/35">0{index+1}</span><h3 className="mt-9 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted">{description}</p></article>)}</div></div></section>
      <section className="bg-slate-950 py-20 text-white lg:py-28"><div className="mx-auto max-w-6xl px-6 lg:px-8"><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{t.processTitle}</h2><div className="mt-10 divide-y divide-white/10 border-y border-white/10">{t.steps.map(([n,title,description])=><div key={n} className="grid gap-3 py-6 sm:grid-cols-[60px_180px_1fr]"><p className="text-white/35">{n}</p><p className="font-semibold">{title}</p><p className="text-white/60">{description}</p></div>)}</div></div></section>
      <section className="py-20 lg:py-28"><div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[32px] bg-gradient-to-br from-amber-200 via-white to-fuchsia-100 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12"><div><Globe2/><h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">{t.webTitle}</h2><p className="mt-4 max-w-2xl leading-7 text-muted">{t.webLead}</p></div><Link href={`${prefix}/websites/`} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white">{t.webButton}<ArrowRight size={17}/></Link></div></section>
      <section className="bg-white px-6 py-24 text-center"><h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{t.cta}</h2><a href={contact} className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white">{t.primary}<ArrowRight size={17}/></a></section>
    </main>
  </div>
}
