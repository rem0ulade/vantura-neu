const services = [
  ['Management-Reportings', 'Übersichten für Umsatz, Forecasts, Budgets, KPIs und operative Steuerung.'],
  ['Dashboards & BI', 'Power-BI-, Tableau- und Excel-Lösungen, die komplexe Daten verständlich machen.'],
  ['Automatisierung', 'Manuelle Prozesse werden in stabile, nachvollziehbare Workflows überführt.'],
  ['Individuelle Software', 'Maßgeschneiderte Anwendungen für echte Geschäftsprozesse.']
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-tight">Vantura</a>
          <a href="#contact" className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white">Erstgespräch</a>
        </div>
      </header>

      <section id="top" className="bg-gradient-to-b from-white to-slate-50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">Reporting · Data · Automation</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">Bessere Entscheidungen beginnen mit besseren Daten.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Vantura entwickelt Reporting-, Dashboard- und Automatisierungslösungen für Unternehmen, die schneller verstehen wollen, was in ihrem Geschäft passiert.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-slate-950 px-6 py-3 text-center font-medium text-white">Kostenloses Erstgespräch anfragen</a>
            <a href="#services" className="rounded-full border bg-white px-6 py-3 text-center font-medium">Lösungen ansehen</a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Was wir lösen</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Aus Daten werden Entscheidungen.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Warum Vantura</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Reporting-Erfahrung aus der Praxis.</h2>
          </div>
          <div className="text-lg leading-8 text-slate-600">
            <p>Hinter Vantura steht Erfahrung aus Media, Investment, Controlling und Softwareentwicklung. Dadurch entstehen Lösungen, die nicht nur technisch funktionieren, sondern im Arbeitsalltag wirklich genutzt werden.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Bereit für bessere Reportings?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">In einem kurzen Erstgespräch klären wir, wo Daten, Reporting oder Automatisierung aktuell Zeit kosten und welche Lösung sinnvoll ist.</p>
          <div className="mt-10"><a href="mailto:jonathan.kokalj@googlemail.com" className="rounded-full bg-white px-7 py-4 font-medium text-slate-950">Erstgespräch anfragen</a></div>
        </div>
      </section>
    </main>
  )
}
