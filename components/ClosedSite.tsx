export function ClosedSite() {
  return (
    <div className="flex min-h-svh flex-col bg-[#111111] px-6 text-[#f5f5f5] sm:px-12">
      <header className="py-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
        Vantura Studios
      </header>
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-16">
        <p className="mb-6 text-sm text-white/50">Das war’s.</p>
        <h1 className="max-w-3xl text-[clamp(3rem,9vw,7rem)] font-semibold leading-[1.05] tracking-[-0.06em]">
          Hier gibt’s nichts zu sehen.
        </h1>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
          Vantura Studios bietet kein Webdesign mehr an.
          <br />
          Danke fürs Vorbeischauen.
        </p>
      </main>
      <footer className="flex flex-wrap gap-x-6 gap-y-2 py-8 text-xs text-white/50">
        <a className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-white" href="/impressum/">Impressum</a>
        <a className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-white" href="/datenschutz/">Datenschutz</a>
      </footer>
    </div>
  )
}
