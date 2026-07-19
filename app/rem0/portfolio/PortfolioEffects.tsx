'use client'

import { useEffect } from 'react'

export default function PortfolioEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      )

      revealItems.forEach((item) => observer.observe(item))

      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !finePointer) return

    const cursor = document.querySelector<HTMLElement>('[data-custom-cursor]')
    const glow = document.querySelector<HTMLElement>('[data-cursor-glow]')
    if (!cursor || !glow) return

    let frame = 0
    let mouseX = -100
    let mouseY = -100
    let glowX = -100
    let glowY = -100

    const render = () => {
      glowX += (mouseX - glowX) * 0.14
      glowY += (mouseY - glowY) * 0.14
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`
      frame = requestAnimationFrame(render)
    }

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      document.documentElement.classList.add('portfolio-pointer-active')
    }

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor-target]')
      cursor.classList.toggle('is-hovering', Boolean(interactive))
      glow.classList.toggle('is-hovering', Boolean(interactive))
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'))
    const cleanups = cards.map((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        card.style.setProperty('--tilt-x', `${x * 7}deg`)
        card.style.setProperty('--tilt-y', `${y * -7}deg`)
        card.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`)
        card.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`)
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

    window.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerover', onPointerOver)
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerover', onPointerOver)
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <>
      <div data-custom-cursor aria-hidden="true" className="portfolio-cursor" />
      <div data-cursor-glow aria-hidden="true" className="portfolio-cursor-glow" />
      <style jsx global>{`
        [data-reveal] {
          opacity: 0;
          transform: translate3d(0, 42px, 0);
          transition:
            opacity 760ms cubic-bezier(.2,.75,.2,1),
            transform 760ms cubic-bezier(.2,.75,.2,1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        [data-reveal].is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: portfolio-marquee 30s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes portfolio-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .project-tilt {
          --tilt-x: 0deg;
          --tilt-y: 0deg;
          --glow-x: 50%;
          --glow-y: 50%;
          transform: perspective(1100px) rotateX(var(--tilt-y)) rotateY(var(--tilt-x));
          transform-style: preserve-3d;
          transition: transform 180ms ease, border-color 250ms ease, box-shadow 250ms ease;
        }

        .project-tilt::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          opacity: 0;
          background: radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(255,255,255,.16), transparent 36%);
          transition: opacity 220ms ease;
        }

        .project-tilt:hover {
          border-color: rgba(190, 242, 100, .32);
          box-shadow: 0 28px 80px rgba(0,0,0,.38);
        }

        .project-tilt:hover::before {
          opacity: 1;
        }

        .portfolio-cursor,
        .portfolio-cursor-glow {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
          pointer-events: none;
          opacity: 0;
          border-radius: 999px;
          transform: translate3d(-100px, -100px, 0);
        }

        .portfolio-cursor {
          width: 9px;
          height: 9px;
          margin: -4.5px 0 0 -4.5px;
          background: rgb(190 242 100);
          transition: width 180ms ease, height 180ms ease, margin 180ms ease, opacity 180ms ease;
          mix-blend-mode: difference;
        }

        .portfolio-cursor-glow {
          width: 180px;
          height: 180px;
          margin: -90px 0 0 -90px;
          background: radial-gradient(circle, rgba(190,242,100,.1), transparent 68%);
          transition: width 220ms ease, height 220ms ease, margin 220ms ease, opacity 180ms ease;
        }

        .portfolio-pointer-active .portfolio-cursor,
        .portfolio-pointer-active .portfolio-cursor-glow {
          opacity: 1;
        }

        .portfolio-cursor.is-hovering {
          width: 34px;
          height: 34px;
          margin: -17px 0 0 -17px;
          background: white;
        }

        .portfolio-cursor-glow.is-hovering {
          width: 240px;
          height: 240px;
          margin: -120px 0 0 -120px;
        }

        @media (pointer: fine) {
          .portfolio-page,
          .portfolio-page a,
          .portfolio-page button {
            cursor: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .marquee-track {
            animation: none;
          }
          .project-tilt {
            transform: none !important;
          }
          .portfolio-cursor,
          .portfolio-cursor-glow {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
