import {
  BarChart3,
  CalendarClock,
  FileSpreadsheet,
  GitMerge,
  LayoutDashboard,
  LineChart,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Lösungen', href: '#loesungen' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Warum wir', href: '#warum-wir' },
  { label: 'FAQ', href: '#faq' },
] as const

/* ---------------------------------------------------------------- Problem */

export type PainPoint = {
  icon: LucideIcon
  title: string
  text: string
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: FileSpreadsheet,
    title: 'Excel-Chaos',
    text: 'Dieselbe Kennzahl existiert in drei Dateien — mit drei verschiedenen Werten. Welche stimmt, weiß niemand mehr sicher.',
  },
  {
    icon: CalendarClock,
    title: 'Zahlen kommen zu spät',
    text: 'Der Monatsbericht ist fertig, wenn der Monat vorbei ist. Gegensteuern können Sie dann nicht mehr — nur noch erklären.',
  },
  {
    icon: RefreshCw,
    title: 'Manuelle Fleißarbeit',
    text: 'Exportieren, kopieren, formatieren, verschicken. Jede Woche. Gut bezahlte Leute verbringen Stunden mit Copy & Paste.',
  },
  {
    icon: GitMerge,
    title: 'Verstreute Systeme',
    text: 'CRM, Buchhaltung, Einkauf, Kampagnen-Tools — jedes System kennt einen Teil der Wahrheit. Keines das ganze Bild.',
  },
]

/* ------------------------------------------------- Warum Daten Geld kosten */

export const COST_ITEMS = [
  {
    title: 'Zeit',
    text: 'Zwei Mitarbeitende, die je sechs Stunden pro Woche Berichte zusammenkopieren, kosten über 550 Arbeitsstunden im Jahr. Für Zahlen, die bei Fertigstellung schon veraltet sind.',
    stat: '550+',
    statLabel: 'Stunden pro Jahr für manuelles Reporting — eine typische Beispielrechnung',
  },
  {
    title: 'Fehler',
    text: 'Manuell gepflegte Dateien sind fehleranfällig: eine verrutschte Zeile, eine alte Version, eine vergessene Filiale. Der Fehler fällt auf, wenn die Entscheidung schon getroffen ist.',
    stat: '1 Zelle',
    statLabel: 'reicht, damit ein Forecast, ein Budget oder ein Angebot falsch ist',
  },
  {
    title: 'Entscheidungen',
    text: 'Die teuersten Kosten sieht man in keiner Tabelle: das Budget, das zu spät umgeschichtet wurde. Der Kunde, dessen Abwanderung niemand kommen sah. Die Chance, die im Datenrauschen unterging.',
    stat: '4–6 Wochen',
    statLabel: 'Verzögerung zwischen Ereignis und Reaktion sind in vielen Unternehmen normal',
  },
] as const

/* ---------------------------------------------------------------- Lösungen */

export type Solution = {
  icon: LucideIcon
  problem: string
  title: string
  text: string
  points: string[]
}

export const SOLUTIONS: Solution[] = [
  {
    icon: LayoutDashboard,
    problem: '„Wir sehen erst am Monatsende, wie der Monat lief.“',
    title: 'Management-Dashboards',
    text: 'Umsatz, Kosten, Pipeline und Budget — eine Oberfläche, täglich aktuell, für alle dieselben Zahlen. Sie öffnen ein Dashboard statt fünf Dateien.',
    points: ['Eine verlässliche Quelle für alle KPIs', 'Täglich oder stündlich aktuell', 'Vom Gesamtbild bis ins Detail'],
  },
  {
    icon: Workflow,
    problem: '„Der Bericht kostet uns jede Woche einen Tag.“',
    title: 'Reporting-Automatisierung',
    text: 'Wiederkehrende Berichte erstellen sich selbst: Daten werden automatisch zusammengeführt, geprüft und verteilt — ohne Copy & Paste, ohne Versionswirrwarr.',
    points: ['Berichte laufen ohne manuelle Arbeit', 'Automatische Plausibilitätsprüfungen', 'Verteilung per Mail, Teams oder Portal'],
  },
  {
    icon: LineChart,
    problem: '„Unsere Planung ist eher Bauchgefühl als Prognose.“',
    title: 'Forecasting & Planung',
    text: 'Nachvollziehbare Forecasts für Umsatz, Budget und Auslastung — aufgebaut auf Ihren echten Daten statt auf Hoffnung. Abweichungen sehen Sie, bevor sie teuer werden.',
    points: ['Forecast vs. Ist auf einen Blick', 'Frühwarnung bei Abweichungen', 'Szenarien statt Einzelschätzung'],
  },
  {
    icon: BarChart3,
    problem: '„Unsere Tools können nicht, was wir brauchen.“',
    title: 'Individuelle Datenlösungen',
    text: 'Wenn Standardsoftware an ihre Grenzen kommt: maßgeschneiderte Auswertungen, Schnittstellen und interne Tools — exakt entlang Ihrer Prozesse gebaut.',
    points: ['Anbindung Ihrer bestehenden Systeme', 'Keine Systemumstellung nötig', 'Wächst mit Ihren Anforderungen'],
  },
]

/* ------------------------------------------------------------------ Ablauf */

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Erstgespräch',
    duration: '30 Minuten, kostenlos',
    text: 'Wir sprechen über Ihre Zahlen, Ihre Systeme und darüber, wo aktuell Zeit und Nerven verloren gehen. Sie bekommen eine ehrliche Einschätzung — kein Verkaufsgespräch.',
  },
  {
    number: '02',
    title: 'Analyse & Konzept',
    duration: '1–2 Wochen',
    text: 'Wir sichten Datenquellen, Berichte und Prozesse und definieren, welche Entscheidungen das System unterstützen soll. Sie erhalten ein klares Konzept mit Festpreis.',
  },
  {
    number: '03',
    title: 'Umsetzung',
    duration: 'erste Ergebnisse in 2–4 Wochen',
    text: 'Wir bauen in kurzen Etappen und zeigen früh erste Versionen. Sie arbeiten mit echten Zwischenständen statt auf ein Big-Bang-Ergebnis zu warten.',
  },
  {
    number: '04',
    title: 'Übergabe & Betrieb',
    duration: 'fortlaufend',
    text: 'Dokumentation, Einweisung Ihres Teams und auf Wunsch laufende Betreuung. Das System gehört Ihnen — inklusive allem Wissen darüber.',
  },
] as const

/* --------------------------------------------------------------- Warum wir */

export const EXPERIENCE_ANCHORS = [
  {
    icon: BarChart3,
    title: 'Mediakonzern-Erfahrung',
    text: 'Reporting und Forecasting bei Publicis Media — Budgets und Kampagnendaten großer Werbungtreibender.',
  },
  {
    icon: LineChart,
    title: 'Investment & Forecasting',
    text: 'Zahlenverständnis aus dem Investment-Umfeld: Prognosen, Abweichungsanalysen, Entscheidungsvorlagen.',
  },
  {
    icon: SearchCheck,
    title: 'Business Intelligence',
    text: 'Von der Datenquelle bis zum Vorstandsbericht — BI-Lösungen, die im Alltag wirklich genutzt werden.',
  },
  {
    icon: ShieldCheck,
    title: 'Softwareentwicklung',
    text: 'Wenn Standardtools nicht reichen: solide entwickelte, wartbare Lösungen statt fragiler Bastelei.',
  },
] as const

/* -------------------------------------------------------------- Referenzen */

/**
 * Referenzen werden hier gepflegt und erscheinen automatisch auf der Seite.
 * Solange die Liste leer ist, wird die Sektion nicht gerendert.
 */
export type Reference = {
  company: string
  industry: string
  quote?: string
  person?: string
  role?: string
}

export const REFERENCES: Reference[] = []

/* --------------------------------------------------------------------- FAQ */

export const FAQ_ITEMS = [
  {
    question: 'Für wen ist das gedacht?',
    answer:
      'Für Unternehmen, die Entscheidungen auf Basis von Zahlen treffen wollen, aber im Alltag mit Excel-Dateien, verstreuten Systemen und manuellen Berichten kämpfen — typischerweise Geschäftsführung, Controlling, Finance, Operations, Einkauf, Agenturen und Vermarkter. Eine eigene IT- oder Datenabteilung ist ausdrücklich nicht nötig.',
  },
  {
    question: 'Müssen wir unsere Systeme wechseln?',
    answer:
      'Nein. Wir docken an das an, was Sie bereits nutzen — ERP, CRM, Buchhaltung, Excel, Kampagnen-Tools. Die Lösung führt Ihre bestehenden Daten zusammen, statt Ihre Arbeitsweise umzukrempeln.',
  },
  {
    question: 'Mit welchen Werkzeugen arbeitet ihr?',
    answer:
      'Mit dem, was zu Ihrer Landschaft passt: Power BI, Excel und etablierte BI-Werkzeuge für Dashboards, dazu individuelle Schnittstellen und Anwendungen, wenn Standardtools nicht reichen. Die Werkzeugwahl folgt dem Problem — nicht umgekehrt.',
  },
  {
    question: 'Was kostet ein Projekt?',
    answer:
      'Das hängt vom Umfang ab — von der schlanken Reporting-Automatisierung bis zur kompletten Dashboard-Landschaft. Nach dem Erstgespräch und der Analyse erhalten Sie ein Konzept mit Festpreis. Keine offenen Tagessatz-Rechnungen, keine Überraschungen.',
  },
  {
    question: 'Wie schnell sehen wir Ergebnisse?',
    answer:
      'Erste nutzbare Ergebnisse gibt es typischerweise nach zwei bis vier Wochen. Wir arbeiten in kurzen Etappen, damit Sie früh echten Nutzen sehen — nicht erst am Projektende.',
  },
  {
    question: 'Was passiert im kostenlosen Erstgespräch?',
    answer:
      '30 Minuten, in denen wir über Ihre aktuelle Situation sprechen: Welche Zahlen brauchen Sie, welche Systeme sind im Einsatz, wo geht Zeit verloren? Sie bekommen eine ehrliche Einschätzung, ob und wie wir helfen können. Wenn nicht, sagen wir Ihnen auch das.',
  },
] as const
