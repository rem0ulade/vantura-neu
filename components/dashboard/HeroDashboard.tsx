'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingDown, TrendingUp } from 'lucide-react'

const KPIS = [
  { label: 'Umsatz (MTD)', value: '1,84 Mio. €', delta: '+12,4 %', up: true },
  { label: 'Forecast-Treffsicherheit', value: '96,2 %', delta: '+1,8 %', up: true },
  { label: 'Offene Posten', value: '214 T€', delta: '−8,1 %', up: false },
]

const BUDGETS = [
  { label: 'Vertrieb', pct: 72 },
  { label: 'Marketing', pct: 58 },
  { label: 'Einkauf', pct: 86 },
]

/**
 * Hero-Visual: ein komplett in SVG/CSS gebautes Management-Dashboard.
 * Bewusst kein Screenshot und kein Stockbild — das Produktgefühl entsteht
 * aus echter, gestalteter Oberfläche.
 */
export function HeroDashboard() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative">
      {/* Hauptkarte */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="rounded-2xl border border-line bg-white p-5 shadow-soft sm:p-6"
      >
        {/* Kopfzeile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="text-sm font-semibold tracking-tight">Management-Cockpit</p>
          </div>
          <p className="text-xs text-muted">Aktualisiert vor 2 Min.</p>
        </div>

        {/* KPI-Zeile */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-line bg-paper/70 p-3">
              <p className="truncate text-[11px] font-medium text-muted">{kpi.label}</p>
              <p className="tnum mt-1 text-sm font-semibold tracking-tight sm:text-base">
                {kpi.value}
              </p>
              <p
                className={`tnum mt-0.5 flex items-center gap-1 text-[11px] font-medium ${
                  kpi.up ? 'text-emerald-600' : 'text-muted'
                }`}
              >
                {kpi.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {kpi.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Umsatzchart */}
        <div className="mt-4 rounded-xl border border-line p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold">Umsatzentwicklung</p>
            <div className="flex items-center gap-4 text-[11px] text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-4 rounded-full bg-accent" /> 2026
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-4 rounded-full bg-slate-300" /> Vorjahr
              </span>
            </div>
          </div>
          <svg viewBox="0 0 480 150" className="mt-3 w-full" aria-hidden="true">
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b5bdb" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#3b5bdb" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 70, 110].map((y) => (
              <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="#eef0f5" strokeWidth="1" />
            ))}
            {/* Vorjahr */}
            <path
              d="M0,122 C48,116 72,104 120,106 C168,108 192,92 240,94 C288,96 312,84 360,80 C408,76 444,70 480,64"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            {/* Aktuelles Jahr */}
            <motion.path
              d="M0,112 C48,104 72,82 120,84 C168,86 192,60 240,58 C288,56 312,68 360,52 C408,36 444,30 480,20"
              fill="none"
              stroke="#3b5bdb"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.7, ease: 'easeOut' }}
            />
            <path
              d="M0,112 C48,104 72,82 120,84 C168,86 192,60 240,58 C288,56 312,68 360,52 C408,36 444,30 480,20 L480,150 L0,150 Z"
              fill="url(#heroArea)"
            />
            <circle cx="480" cy="20" r="4" fill="#3b5bdb" />
            <circle cx="480" cy="20" r="8" fill="#3b5bdb" opacity="0.15" />
          </svg>
        </div>

        {/* Budgetverbrauch */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {BUDGETS.map((b, i) => (
            <div key={b.label} className="rounded-xl border border-line p-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium text-muted">{b.label}</span>
                <span className="tnum font-semibold">{b.pct} %</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className={`h-full rounded-full ${b.pct > 80 ? 'bg-amber-400' : 'bg-navy'}`}
                  initial={reduceMotion ? false : { width: 0 }}
                  animate={{ width: `${b.pct}%` }}
                  transition={{ duration: 1, delay: 0.9 + i * 0.15, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Schwebende Hinweiskarte */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-white p-4 shadow-soft sm:block lg:-left-10"
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
            <TrendingDown size={16} />
          </span>
          <div>
            <p className="text-xs font-semibold">Abweichung erkannt</p>
            <p className="tnum mt-0.5 text-[11px] leading-relaxed text-muted">
              Segment Nord: −6,3 % unter Forecast.
              <br />
              Benachrichtigung gesendet — heute, 07:00 Uhr.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
