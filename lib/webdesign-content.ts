import { WEBSITE_PRICING, WEBSITE_START_PRICE } from '@/lib/webdesign-pricing'
import { BOOKING_HREF, CONTACT_HREF, CONTACT_HREF_DE } from '@/lib/site'

export type Locale = 'en' | 'de'

export const webdesignCopy = {
  en: {
    navWork: 'Projects',
    navServices: 'Services',
    navAbout: 'About us',
    navCta: 'Book a call',
    heroBrand: 'Webdesign for businesses · Hamburg · Working remotely',
    heroTitle: 'Your new website. Built to turn interest into inquiries.',
    heroText:
      'Individual websites for businesses. Designed and built by Vantura Studios — from the first idea to launch.',
    heroCta: 'Book a free discovery call',
    heroSecondary: 'See website examples',
    heroNote: 'Design & development from one studio · Fixed price agreed before we start',
    strip: [
      'Company websites',
      'Landing pages',
      'Online shops',
      'Relaunches',
      'Hosting & care',
      'Personal support',
    ],
    featuredEyebrow: 'Website examples',
    featuredTitle: 'See what your website could look like.',
    featuredLead: 'A product, a restaurant and an association: three different website examples to explore.',
    featuredChallenge: 'The brief',
    featuredResult: 'The implementation',
    featuredCta: 'Explore website',
    servicesEyebrow: 'Services',
    servicesTitle: 'From your offer to a finished website.',
    servicesLead:
      'For small businesses, service providers and local companies. We define what your website needs to do, then I take care of its design and development.',
    services: [
      {
        number: '01',
        title: 'New company website',
        text: 'A professional website that explains your services and gives potential customers a clear way to inquire.',
        points: [
          'Page structure & individual design',
          'Phone, tablet & desktop layouts',
          'Contact paths & basic SEO'
        ]
      },
      {
        number: '02',
        title: 'Website redesign',
        text: 'Your business has moved forward, but your website hasn’t? I update its structure, design and implementation to match your business today.',
        points: [
          'Review existing content',
          'Make your offer easier to understand',
          'Account for existing URLs during migration'
        ]
      },
      {
        number: '03',
        title: 'Campaign landing page',
        text: 'A focused page for Google Ads, a promotion or a single service. With a relevant message and one clear next step.',
        points: [
          'Aligned with your advertising offer',
          'Easy to navigate on a phone',
          'Inquiry or booking as the main goal'
        ]
      }
    ],
    approachEyebrow: 'Approach',
    approachTitle: 'How projects usually run.',
    approachLead:
      'Small studio, short lines. You talk to the person who designs and builds, from first brief to launch.',
    approach: [
      {
        title: 'Plan before pixels',
        text: 'We define audience, offer and the one action the site should drive. That decision shapes every page.',
      },
      {
        title: 'Design that makes the offer clear',
        text: 'Typography, layout and imagery work as a system, so the brand feels consistent and the next step is obvious.',
      },
      {
        title: 'Built to go live',
        text: 'Clean, fast code that works on real phones and screens, handed over with everything you need to keep going.',
      },
    ],
    workEyebrow: 'Archive',
    workTitle: 'All selected work.',
    workLead: 'Open a live demo without leaving this site.',
    workCta: 'Open demo',
    workIndexTitle: 'Selected work',
    workIndexLead: 'Website examples, personal projects and design concepts. Each entry describes the work, with a demo to explore.',
    workBack: '← Back to examples',
    processEyebrow: 'Your project',
    processTitle: 'A clear path to your new website.',
    process: [
      {
        number: '01',
        title: 'Free discovery call',
        duration: '30 minutes',
        text: 'We clarify goals, audience, content and constraints. You leave with an honest recommendation, even if I am not the right fit.',
      },
      {
        number: '02',
        title: 'Proposal',
        duration: 'within a few days',
        text: 'Scope, timeline and a fixed price before the real work starts. Ongoing costs are listed separately.',
      },
      {
        number: '03',
        title: 'Design & build',
        duration: 'agreed in the proposal',
        text: 'You review your website design and share feedback. We then build the agreed pages.',
      },
      {
        number: '04',
        title: 'Launch',
        duration: 'handover included',
        text: 'Go-live support, basic SEO setup and a walkthrough of the agreed solution. Optional hosting and care afterwards.',
      },
    ],
    aboutEyebrow: 'Your contact',
    aboutTitle: 'Your project. Our shared focus.',
    aboutText:
      'We are Vantura Studios. Our team brings strategy, design and development together, with a dedicated contact from the first conversation to launch.',
    aboutPoints: [
      'Owner-led: no handoff between sales and production',
      'Design and code in one workflow',
      'Hosting and care if you want everything from one place',
    ],
    aboutCta: 'Book a free discovery call',
    faqEyebrow: 'FAQ',
    faqTitle: 'A few questions?',
    faq: [
      {
        q: 'What will my website cost?',
        a: `Websites start at €${WEBSITE_START_PRICE} excluding VAT. Optional care starts at €${WEBSITE_PRICING[0].monthly} per month. Your proposal confirms the scope and fixed price.`
      },
      {
        q: 'What happens on the free discovery call?',
        a: 'We discuss your business, ideas and goals in a free 30-minute video call. No finished brief or commitment required.'
      },
      {
        q: 'How long does a project take?',
        a: 'The proposal sets your timeline. Scope, functionality and the availability of content determine the schedule.'
      },
      {
        q: 'Do I need to supply copy and images?',
        a: 'We can use your existing content. If you need copywriting or imagery, we agree the scope in your proposal.'
      },
      {
        q: 'What happens after launch?',
        a: 'Your website is handed over to you or your provider. Optional care is available; its minimum term is 12 months, then monthly cancellation.'
      }
    ],
    ctaTitle: 'Let’s talk about your website.',
    ctaText:
      'In 30 minutes, we’ll discuss your business, your current website and what you want to achieve. You’ll get an initial recommendation on the right scope and next steps. No preparation or commitment required.',
    ctaButton: 'Book a free discovery call',
    ctaMeta: '30 minutes · Free & no obligation · Google Meet',
    footerTag: 'Company websites · Relaunches · Landing pages · Hamburg',
    legal: 'Legal notice',
    privacy: 'Privacy',
    contactHref: BOOKING_HREF,
    emailHref: CONTACT_HREF,
    bookingMeta: '30 minutes · Free & no obligation · Video call via Google Meet',
    allWork: 'More project examples',
    servicesExtras: 'Need an online shop or additional features? We discuss the scope on our discovery call. For company websites, explore the three packages below. Hosting and care are optional; you can also arrange them yourself.',
    emailAlternative: 'Prefer to email?',
  },
  de: {
    navWork: 'Projekte',
    navServices: 'Leistungen',
    navAbout: 'Über uns',
    navCta: 'Termin buchen',
    heroBrand: 'Webdesign für Unternehmen · Hamburg · Deutschlandweit',
    heroTitle: 'Deine neue Website. Gemacht für mehr Anfragen.',
    heroText:
      'Individuelle Websites für Unternehmen. Von Vantura Studios gestaltet und entwickelt – von der ersten Idee bis zum Livegang.',
    heroCta: 'Kostenloses Erstgespräch buchen',
    heroSecondary: 'Website-Beispiele ansehen',
    heroNote: 'Design & Umsetzung aus einer Hand · Festpreis vor dem Projektstart',
    strip: [
      'Firmenwebsites',
      'Landingpages',
      'Online-Shops',
      'Relaunches',
      'Hosting & Betreuung',
      'Persönliche Betreuung',
    ],
    featuredEyebrow: 'Website-Beispiele',
    featuredTitle: 'So könnte auch dein Auftritt aussehen.',
    featuredLead: 'Produkt, Restaurant und Verein: Entdecke unterschiedliche Website-Beispiele und probiere die Seiten direkt aus.',
    featuredChallenge: 'Die Aufgabe',
    featuredResult: 'Die Umsetzung',
    featuredCta: 'Website ansehen',
    servicesEyebrow: 'Leistungen',
    servicesTitle: 'Von deinem Angebot zur fertigen Website.',
    servicesLead:
      'Für kleine Unternehmen, Dienstleister und lokale Betriebe. Wir klären, was deine Website leisten soll. Wir kümmern uns um Gestaltung und technische Umsetzung.',
    services: [
      {
        number: '01',
        title: 'Neue Firmenwebsite',
        text: 'Dein Unternehmen bekommt einen professionellen Auftritt, der Leistungen verständlich erklärt und Interessenten zur Anfrage führt.',
        points: [
          'Seitenstruktur & individuelles Design',
          'Für Smartphone, Tablet & Desktop',
          'Kontaktwege & grundlegende Suchmaschinenoptimierung'
        ]
      },
      {
        number: '02',
        title: 'Website erneuern',
        text: 'Dein Angebot hat sich weiterentwickelt, deine Website nicht? Wir überarbeiten Struktur, Gestaltung und Technik passend zu deinem heutigen Unternehmen.',
        points: [
          'Bestehende Inhalte prüfen',
          'Angebot klarer präsentieren',
          'Vorhandene URLs beim Umzug berücksichtigen'
        ]
      },
      {
        number: '03',
        title: 'Seite für deine Werbung',
        text: 'Eine fokussierte Landingpage für Google Ads, eine Aktion oder eine einzelne Leistung. Mit passender Botschaft und einem klaren nächsten Schritt.',
        points: [
          'Auf dein Anzeigenangebot abgestimmt',
          'Schnelle Orientierung auf dem Handy',
          'Anfrage oder Terminbuchung im Mittelpunkt'
        ]
      }
    ],
    approachEyebrow: 'Arbeitsweise',
    approachTitle: 'So laufen Projekte.',
    approachLead:
      'Kleines Studio, kurze Wege. Du sprichst mit der Person, die gestaltet und baut, vom Briefing bis zum Launch.',
    approach: [
      {
        title: 'Strategie vor Pixeln',
        text: 'Wir klären Zielgruppe, Angebot und die eine Aktion, die die Seite auslösen soll. Daran richtet sich jede Seite aus.',
      },
      {
        title: 'Design, das das Angebot klar macht',
        text: 'Schrift, Layout und Bilder greifen ineinander. Die Marke wirkt stimmig und der nächste Schritt ist offensichtlich.',
      },
      {
        title: 'Gebaut für den Livegang',
        text: 'Sauberer, schneller Code, der auf echten Geräten funktioniert. Du bekommst alles, was du zum Weitermachen brauchst.',
      },
    ],
    workEyebrow: 'Archiv',
    workTitle: 'Alle ausgewählten Arbeiten.',
    workLead: 'Live-Demo öffnen, ohne die Domain zu verlassen.',
    workCta: 'Demo öffnen',
    workIndexTitle: 'Ausgewählte Arbeiten',
    workIndexLead: 'Website-Beispiele, eigene Projekte und Gestaltungskonzepte. Zu jedem Eintrag findest du die Umsetzung und eine Demo zum Ansehen.',
    workBack: '← Zu den Beispielen',
    processEyebrow: 'Dein Projekt',
    processTitle: 'In klaren Schritten zur neuen Website.',
    process: [
      {
        number: '01',
        title: 'Kostenlos kennenlernen',
        duration: '30 Minuten',
        text: 'Wir besprechen dein Unternehmen, deine Ziele und was deine Website leisten soll. Du bekommst eine erste Empfehlung zu Umfang, Paket und nächsten Schritten.',
      },
      {
        number: '02',
        title: 'Angebot',
        duration: 'innerhalb weniger Tage',
        text: 'Du erhältst ein Angebot mit klaren Leistungen, Zeitplan und Festpreis. Erstellung und monatliche Betreuung sind getrennt ausgewiesen.',
      },
      {
        number: '03',
        title: 'Design & Umsetzung',
        duration: 'nach vereinbartem Zeitplan',
        text: 'Du siehst den Entwurf deiner Website und gibst Feedback. Anschließend setzen wir die abgestimmten Seiten technisch um.',
      },
      {
        number: '04',
        title: 'Veröffentlichung',
        duration: 'Übergabe inklusive',
        text: 'Deine Website geht auf deiner Domain online. Du erhältst eine Einführung und die vereinbarte Übergabe. Hosting und Betreuung übernehmen wir auf Wunsch – du kannst auch deinen eigenen Anbieter nutzen.',
      },
    ],
    aboutEyebrow: 'Dein Ansprechpartner',
    aboutTitle: 'Dein Projekt. Unser gemeinsamer Fokus.',
    aboutText:
      'Wir sind Vantura Studios. Unser Team verbindet Strategie, Gestaltung und Entwicklung. Vom ersten Gespräch bis zur Veröffentlichung hast du einen festen Kontakt für dein Projekt.',
    aboutPoints: [
      'Inhabergeführt: keine Übergabe zwischen Verkauf und Umsetzung',
      'Design und Code aus einer Hand',
      'Ein fester Ansprechpartner auch nach dem Livegang',
    ],
    aboutCta: 'Kostenloses Erstgespräch buchen',
    faqEyebrow: 'FAQ',
    faqTitle: 'Noch Fragen?',
    faq: [
      {
        q: 'Was kostet meine neue Website?',
        a: `Websites starten bei ${WEBSITE_START_PRICE} € netto einmalig. Optionale Betreuung gibt es ab ${WEBSITE_PRICING[0].monthly} € netto pro Monat. Dein Angebot enthält Umfang und verbindlichen Festpreis.`
      },
      {
        q: 'Was passiert im kostenlosen Erstgespräch?',
        a: 'Wir besprechen dein Unternehmen, deine Ideen und Ziele. 30 Minuten per Google Meet, kostenlos und unverbindlich. Ein fertiges Konzept brauchst du nicht.'
      },
      {
        q: 'Wie lange dauert die Umsetzung?',
        a: 'Deinen Zeitplan vereinbaren wir im Angebot. Umfang, Funktionen und die Verfügbarkeit deiner Inhalte bestimmen die Dauer.'
      },
      {
        q: 'Muss ich Texte und Bilder selbst liefern?',
        a: 'Vorhandene Inhalte nutzen wir gerne. Unterstützung bei Texten und Bildern vereinbaren wir im Angebot – du brauchst zum Erstgespräch noch nichts fertigzustellen.'
      },
      {
        q: 'Was passiert nach der Veröffentlichung?',
        a: 'Du erhältst deine Website zur eigenen Nutzung oder für deinen Anbieter. Betreuung ist optional: 12 Monate Mindestlaufzeit, danach monatlich kündbar. Individuelle Absprachen sind möglich.'
      }
    ],
    ctaTitle: 'Lass uns über deine Website sprechen.',
    ctaText:
      'In 30 Minuten besprechen wir dein Unternehmen, deinen aktuellen Auftritt und deine Ziele. Du bekommst eine erste Einschätzung zum passenden Umfang und den nächsten Schritten. Du brauchst nichts vorzubereiten und gehst keine Verpflichtung ein.',
    ctaButton: 'Kostenloses Erstgespräch buchen',
    ctaMeta: '30 Minuten · Kostenlos & unverbindlich · Google Meet',
    footerTag: 'Firmenwebsites · Relaunches · Landingpages · Hamburg',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    contactHref: BOOKING_HREF,
    emailHref: CONTACT_HREF_DE,
    bookingMeta: '30 Minuten · Kostenlos & unverbindlich · Videogespräch per Google Meet',
    allWork: 'Weitere Projektbeispiele',
    servicesExtras: 'Du brauchst einen Online-Shop oder zusätzliche Funktionen? Wir klären den Umfang im Erstgespräch. Für klassische Firmenwebsites findest du unten drei Pakete. Hosting und Betreuung kannst du optional dazubuchen oder selbst organisieren.',
    emailAlternative: 'Lieber per E-Mail?',
  },
} as const

export function t(locale: Locale) {
  return webdesignCopy[locale]
}

export function workHref(locale: Locale, slug?: string) {
  const base = locale === 'de' ? '/de/work' : '/work'
  return slug ? `${base}/${slug}/` : `${base}/`
}

export function homeHref(locale: Locale) {
  return locale === 'de' ? '/' : '/en/'
}

