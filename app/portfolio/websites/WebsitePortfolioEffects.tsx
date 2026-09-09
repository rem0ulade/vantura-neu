'use client'

import { useEffect, useRef } from 'react'

export default function WebsitePortfolioEffects() {
  const progressRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-wp-reveal]'))

    if (reduceMotion) {
      reveals.forEach((item) => item.classList.add('wp-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('wp-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -7% 0px' },
    )

    reveals.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !finePointer) return

    const hero = document.querySelector<HTMLElement>('[data-wp-hero]')
    const moveHeroGlow = (event: PointerEvent) => {
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      hero.style.setProperty('--wp-pointer-x', `${event.clientX - rect.left}px`)
      hero.style.setProperty('--wp-pointer-y', `${event.clientY - rect.top}px`)
    }
    hero?.addEventListener('pointermove', moveHeroGlow)

    const tilts = Array.from(document.querySelectorAll<HTMLElement>('[data-wp-tilt]'))
    const cleanups = tilts.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        item.style.setProperty('--wp-rotate-x', `${y * -2.8}deg`)
        item.style.setProperty('--wp-rotate-y', `${x * 3.5}deg`)
        item.style.setProperty('--wp-shine-x', `${(x + 0.5) * 100}%`)
        item.style.setProperty('--wp-shine-y', `${(y + 0.5) * 100}%`)
      }
      const leave = () => {
        item.style.setProperty('--wp-rotate-x', '0deg')
        item.style.setProperty('--wp-rotate-y', '0deg')
      }
      item.addEventListener('pointermove', move)
      item.addEventListener('pointerleave', leave)
      return () => {
        item.removeEventListener('pointermove', move)
        item.removeEventListener('pointerleave', leave)
      }
    })

    return () => {
      hero?.removeEventListener('pointermove', moveHeroGlow)
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <>
      <div className="wp-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <style jsx global>{`
        .wp-progress {
          position: fixed;
          inset: 71px 0 auto;
          z-index: 60;
          height: 2px;
          overflow: hidden;
          pointer-events: none;
        }
        .wp-progress span {
          display: block;
          width: 100%;
          height: 100%;
          transform: scaleX(0);
          transform-origin: left;
          background: linear-gradient(90deg, #2459c4, #6fa4ff 72%, #b8ff45);
          will-change: transform;
        }

        [data-wp-reveal] {
          opacity: 0;
          transform: translate3d(0, 34px, 0);
          transition:
            opacity 820ms cubic-bezier(.2,.72,.2,1),
            transform 820ms cubic-bezier(.2,.72,.2,1);
          transition-delay: var(--wp-delay, 0ms);
        }
        [data-wp-reveal].wp-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        [data-wp-hero]::after {
          content: '';
          position: absolute;
          width: 440px;
          height: 440px;
          left: calc(var(--wp-pointer-x, 78%) - 220px);
          top: calc(var(--wp-pointer-y, 22%) - 220px);
          border-radius: 999px;
          pointer-events: none;
          background: radial-gradient(circle, rgba(87, 137, 255, .14), transparent 68%);
          transition: left 180ms ease-out, top 180ms ease-out;
          mix-blend-mode: multiply;
        }

        .wp-hero-accent {
          color: transparent;
          background: linear-gradient(105deg, #cbd2de 18%, #2459c4 43%, #83aef7 51%, #cbd2de 76%);
          background-size: 230% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          animation: wp-title-shimmer 7s ease-in-out infinite;
        }
        @keyframes wp-title-shimmer {
          0%, 20% { background-position: 100% 50%; }
          58%, 100% { background-position: 0 50%; }
        }

        .wp-live-dot {
          box-shadow: 0 0 0 0 rgba(36, 89, 196, .32);
          animation: wp-dot-pulse 2.4s ease-out infinite;
        }
        @keyframes wp-dot-pulse {
          0% { box-shadow: 0 0 0 0 rgba(36, 89, 196, .34); }
          70%, 100% { box-shadow: 0 0 0 9px rgba(36, 89, 196, 0); }
        }

        .wp-marquee-track {
          display: flex;
          width: max-content;
          animation: wp-marquee 34s linear infinite;
        }
        @keyframes wp-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        [data-wp-tilt] {
          --wp-rotate-x: 0deg;
          --wp-rotate-y: 0deg;
          --wp-shine-x: 50%;
          --wp-shine-y: 50%;
          transform: perspective(1200px) rotateX(var(--wp-rotate-x)) rotateY(var(--wp-rotate-y));
          transform-style: preserve-3d;
          transition: transform 220ms ease-out, box-shadow 420ms ease;
          will-change: transform;
        }
        [data-wp-tilt]::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(circle at var(--wp-shine-x) var(--wp-shine-y), rgba(255,255,255,.28), transparent 30%);
          transition: opacity 240ms ease;
        }
        [data-wp-tilt]:hover {
          box-shadow: 0 38px 95px rgba(0,0,0,.28);
        }
        [data-wp-tilt]:hover::after { opacity: 1; }
        [data-wp-project]:hover .wp-project-image {
          transform: scale(1.025) translateY(-1.5%);
        }
        .wp-project-image {
          transition: transform 1.2s cubic-bezier(.2,.7,.2,1);
        }

        .wp-principle-icon {
          transition: transform 350ms cubic-bezier(.2,.75,.2,1), color 250ms ease;
        }
        .wp-principle:hover .wp-principle-icon {
          transform: translateY(-4px) rotate(-5deg);
          color: #101522;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-wp-reveal] { opacity: 1; transform: none; transition: none; }
          [data-wp-tilt] { transform: none !important; transition: none; }
          .wp-hero-accent { color: #cbd2de; background: none; animation: none; }
          .wp-live-dot, .wp-marquee-track { animation: none; }
          .wp-progress { display: none; }
          .wp-project-image, .wp-principle-icon { transition: none; }
          [data-wp-project]:hover .wp-project-image, .wp-principle:hover .wp-principle-icon { transform: none; }
        }
      `}</style>
    </>
  )
}
