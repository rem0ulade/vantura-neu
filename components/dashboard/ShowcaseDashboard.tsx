'use client'

import { motion, useReducedMotion } from 'framer-motion'

const TOP_ROWS = [
  { name: 'Kunde Alpha GmbH', value: '486 T€', pct: 92, status: 'Im Plan' },
  { name: 'Beta Handels AG', value: '341 T€', pct: 68, status: 'Im Plan' },
  { name: 'Gamma Logistik', value: '298 T€', pct: 57, status: 'Beobachten' },
  { name: 'Delta Services', value: '176 T€', pct: 34, status: 'Im Plan' },
]

const DONUT = [
  { label: 'Personal', pct: 46, color: '#16233f' },
  { label: 'Einkauf', pct: 28, color: '#3b5bdb' },
  { label: 'Marketing', pct: 16, color: '#94a3b8' },
  { label: 'Sonstiges', pct: 10, color: '#e2e8f0' },
]

function donutSegments() {
  const r = 40
  const c = 2 * Math.PI * r
  let offset = 0
  return DONUT.map((d) => {
    const seg = { ...d, dash: (d.pct / 100) * c - 2, gap: c, offset }
    offset -= (d.pct / 100) * c
    return seg
  })
}

/**
 * Showcase: eine breitere Dashboard-Ansicht im Browser-Rahmen.
 * Komplett in SVG/CSS gebaut — kein Bildmaterial.
 */
export function ShowcaseDashboard() {
  const reduceMotion = useReducedMotion()
  const segments = donutSegments()

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
      {/* Browser-Chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <div className="mx-auto flex h-6 w-56 items-center justify-center rounded-md bg-white text-[10px] text-muted sm:w-72">
          cockpit.ihr-unternehmen.de
        </div>
        <span className="w-12" />
      </div>

      <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Umsatz vs. Forecast */}
        <div className="rounded-xl border border-line p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm font-semibold">Umsatz vs. Forecast</p>
              <p className="tnum mt-1 text-2xl font-semibold tracking-tight">
                12,6 Mio. €{' '}
                <span className="text-sm font-medium text-emerald-600">+4,2 % über Plan</span>
              </p>
            </div>
            <div className="flex gap-1 rounded-lg border border-line p-1 text-[11px] font-medium">
              <span className="rounded-md bg-ink px-2.5 py-1 text-white">Jahr</span>
              <span className="px-2.5 py-1 text-muted">Quartal</span>
              <span className="px-2.5 py-1 text-muted">Monat</span>
            </div>
          </div>

          <svg viewBox="0 0 560 200" className="mt-4 w-full" aria-hidden="true">
            {[40, 90, 140].map((y) => (
              <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#eef0f5" strokeWidth="1" />
            ))}
            {/* Forecast-Band */}
            <path
              d="M0,150 C70,142 110,120 180,118 C250,116 290,96 360,88 C430,80 500,62 560,50 L560,86 C500,96 430,112 360,120 C290,128 250,146 180,148 C110,150 70,168 0,176 Z"
              fill="#3b5bdb"
              opacity="0.07"
            />
            {/* Forecast-Linie */}
            <path
              d="M0,163 C70,155 110,133 180,133 C250,133 290,111 360,104 C430,97 500,79 560,68"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            {/* Ist-Linie */}
            <motion.path
              d="M0,158 C70,150 110,124 180,122 C250,120 290,98 360,86 C430,74 500,52 560,40"
              fill="none"
              stroke="#3b5bdb"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
            />
            <circle cx="560" cy="40" r="4" fill="#3b5bdb" />
            {['Jan', 'Mär', 'Mai', 'Jul', 'Sep', 'Nov'].map((m, i) => (
              <text key={m} x={10 + i * 104} y="196" fontSize="10" fill="#94a3b8">
                {m}
              </text>
            ))}
          </svg>
        </div>

        {/* Kostenstruktur */}
        <div className="rounded-xl border border-line p-4 sm:p-5">
          <p className="text-sm font-semibold">Kostenstruktur</p>
          <div className="mt-4 flex items-center gap-5">
            <svg viewBox="0 0 100 100" className="h-28 w-28 shrink-0 -rotate-90" aria-hidden="true">
              {segments.map((s) => (
                <circle
                  key={s.label}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={s.color}
                  strokeWidth="14"
                  strokeDasharray={`${s.dash} ${s.gap}`}
                  strokeDashoffset={s.offset}
                />
              ))}
            </svg>
            <ul className="space-y-2.5 text-xs">
              {DONUT.map((d) => (
                <li key={d.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: d.color }} />
                  <span className="text-muted">{d.label}</span>
                  <span className="tnum ml-auto pl-4 font-semibold">{d.pct} %</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 rounded-lg bg-paper p-3 text-[11px] leading-relaxed text-muted">
            <span className="font-semibold text-ink">Hinweis:</span> Einkaufskosten +9 %
            gegenüber Vormonat — Treiber: Lieferant B.
          </div>
        </div>

        {/* Top-Kunden */}
        <div className="rounded-xl border border-line p-4 sm:p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Top-Kunden nach Umsatz</p>
            <p className="text-[11px] text-muted">Laufendes Quartal</p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {TOP_ROWS.map((row, i) => (
              <div key={row.name} className="flex items-center gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="truncate text-xs font-medium">{row.name}</p>
                    <p className="tnum text-xs font-semibold">{row.value}</p>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full bg-navy"
                      initial={reduceMotion ? false : { width: 0 }}
                      whileInView={{ width: `${row.pct}%` }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    row.status === 'Im Plan'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
