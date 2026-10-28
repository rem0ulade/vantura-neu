'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'

export function HeroBackdrop({ locale }: { locale: Locale }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef({ phase: 0, x: 0.65, y: 0.5 })
  const reduce = useReducedMotion()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement?.parentElement
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !host || !context) return

    let width = 1
    let height = 1
    let frame = 0
    let last = 0
    let { phase, x, y } = sceneRef.current
    let visible = true
    let targetX = x
    let targetY = y
    const moving = !reduce && !paused

    const paint = () => {
      context.clearRect(0, 0, width, height)
      const scale = Math.max(width, height)
      context.lineCap = 'round'
      context.lineJoin = 'round'
      for (let band = -3; band < 9; band += 1) {
        context.beginPath()
        for (let step = 0; step <= 64; step += 1) {
          const v = step / 64
          const py = v * (height + 240) - 120
          const wave = Math.sin(v * 4.8 + phase + band * 0.47) * scale * 0.095
            + Math.sin(v * 8.2 - phase * 0.6 + band * 0.31) * scale * 0.035
          const distance = v - y
          const pull = Math.exp(-distance * distance * 12) * (x - 0.5) * scale * 0.22
          const px = width * 0.52 + band * scale * 0.15 + wave + pull
          if (step === 0) context.moveTo(px, py)
          else context.lineTo(px, py)
        }
        context.lineWidth = scale * (band % 3 === 0 ? 0.087 : 0.065)
        context.strokeStyle = band % 3 === 0 ? '#111111' : '#ff4d1a'
        context.globalAlpha = band % 3 === 0 ? 0.18 : 0.8
        context.stroke()
      }
      context.globalAlpha = 1
      sceneRef.current = { phase, x, y }
    }

    const tick = (now: number) => {
      frame = 0
      if (!moving || !visible || document.hidden) return
      if (now - last >= 33) {
        const delta = Math.min((now - last) / 1000, 0.05)
        last = now
        phase += delta * 0.23
        x += (targetX - x) * 0.055
        y += (targetY - y) * 0.055
        paint()
      }
      frame = requestAnimationFrame(tick)
    }

    const resume = () => {
      if (moving && visible && !document.hidden && !frame) {
        last = performance.now()
        frame = requestAnimationFrame(tick)
      } else if (!visible || document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      paint()
    }
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const rect = host.getBoundingClientRect()
      targetX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
      targetY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
    }
    const leave = () => { targetX = 0.65; targetY = 0.5 }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      resume()
    })
    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)
    observer.observe(host)
    if (moving) {
      host.addEventListener('pointermove', pointer, { passive: true })
      host.addEventListener('pointerleave', leave)
      document.addEventListener('visibilitychange', resume)
    }
    resize()
    resume()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      sizeObserver.disconnect()
      host.removeEventListener('pointermove', pointer)
      host.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', resume)
    }
  }, [reduce, paused])

  return (
    <>
      <div aria-hidden="true" className="hero-atmosphere pointer-events-none absolute inset-0 z-0">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="hero-atmosphere-veil absolute inset-0" />
      </div>
      {!reduce && (
        <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} className="absolute bottom-4 right-5 z-20 border border-ink/20 bg-paper/90 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink transition hover:border-ink lg:right-8">
          {locale === 'de' ? (paused ? 'Hintergrund fortsetzen' : 'Hintergrund pausieren') : (paused ? 'Resume background' : 'Pause background')}
        </button>
      )}
    </>
  )
}
