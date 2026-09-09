'use client'

import { useEffect } from 'react'

export default function PortfolioShowcaseEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reduceMotion) {
      reveals.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    reveals.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !finePointer) return

    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'))
    const cleanups = cards.map((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        card.style.setProperty('--tilt-x', `${x * 5}deg`)
        card.style.setProperty('--tilt-y', `${y * -5}deg`)
        card.style.setProperty('--spot-x', `${(x + 0.5) * 100}%`)
        card.style.setProperty('--spot-y', `${(y + 0.5) * 100}%`)
      }
      const leave = () => {
        card.style.setProperty('--tilt-x', '0deg')
        card.style.setProperty('--tilt-y', '0deg')
      }
      card.addEventListener('pointermove', move)
      card.addEventListener('pointerleave', leave)
      return () => {
        card.removeEventListener('pointermove', move)
        card.removeEventListener('pointerleave', leave)
      }
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  return (
    <style jsx global>{`
      [data-reveal] {
        opacity: 0;
        transform: translate3d(0, 36px, 0);
        transition: opacity 760ms cubic-bezier(.2,.75,.2,1), transform 760ms cubic-bezier(.2,.75,.2,1);
        transition-delay: var(--reveal-delay, 0ms);
      }
      [data-reveal].is-visible { opacity: 1; transform: translate3d(0,0,0); }

      .portfolio-grid {
        background-image:
          linear-gradient(rgba(148,163,184,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148,163,184,.08) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: linear-gradient(to bottom, black 10%, transparent 90%);
      }

      .showcase-tilt {
        --tilt-x: 0deg;
        --tilt-y: 0deg;
        --spot-x: 50%;
        --spot-y: 50%;
        transform: perspective(1200px) rotateX(var(--tilt-y)) rotateY(var(--tilt-x));
        transform-style: preserve-3d;
        transition: transform 180ms ease, box-shadow 260ms ease, border-color 260ms ease;
      }
      .showcase-tilt::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
        opacity: 0;
        background: radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(255,255,255,.22), transparent 34%);
        transition: opacity 220ms ease;
      }
      .showcase-tilt:hover { box-shadow: 0 30px 90px rgba(15,23,42,.18); }
      .showcase-tilt:hover::after { opacity: 1; }

      .portfolio-marquee {
        display: flex;
        width: max-content;
        animation: portfolio-lab-marquee 32s linear infinite;
      }
      @keyframes portfolio-lab-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .flow-node { animation: flow-pulse 3.4s ease-in-out infinite; }
      .flow-node:nth-child(2) { animation-delay: .55s; }
      .flow-node:nth-child(3) { animation-delay: 1.1s; }
      .flow-node:nth-child(4) { animation-delay: 1.65s; }
      @keyframes flow-pulse {
        0%, 100% { transform: translateY(0); opacity: .72; }
        50% { transform: translateY(-7px); opacity: 1; }
      }

      .scan-line {
        background: linear-gradient(90deg, transparent, rgba(96,165,250,.65), transparent);
        animation: scan 4s ease-in-out infinite;
      }
      @keyframes scan {
        0%, 100% { transform: translateX(-70%); opacity: 0; }
        40%, 60% { opacity: 1; }
        50% { transform: translateX(70%); }
      }

      @media (prefers-reduced-motion: reduce) {
        [data-reveal] { opacity: 1; transform: none; transition: none; }
        .portfolio-marquee, .flow-node, .scan-line { animation: none; }
        .showcase-tilt { transform: none !important; }
      }
    `}</style>
  )
}
