'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false })

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap.set(['.h-l1', '.h-l2', '.h-l3'], { yPercent: 112 })
      gsap.set(['.h-pill', '.h-sub', '.h-cta', '.h-foot'], { opacity: 0, y: 12 })

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.to('.h-pill', { opacity: 1, y: 0, duration: 0.6 }, 0.35)
      tl.to('.h-l1', { yPercent: 0, duration: 1.15 }, 0.55)
      tl.to('.h-l2', { yPercent: 0, duration: 1.15 }, 0.7)
      tl.to('.h-l3', { yPercent: 0, duration: 1.15 }, 0.85)
      tl.to('.h-sub', { opacity: 1, y: 0, duration: 0.9 }, 1.15)
      tl.to('.h-cta', { opacity: 1, y: 0, duration: 0.8 }, 1.35)
      tl.to('.h-foot', { opacity: 1, y: 0, duration: 0.7 }, 1.75)
    }, sectionRef)

    const qX = gsap.quickTo('.h-inner', 'x', { duration: 1.3, ease: 'power3.out' })
    const qY = gsap.quickTo('.h-inner', 'y', { duration: 1.3, ease: 'power3.out' })

    const onMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      qX(((e.clientX - cx) / cx) * 7)
      qY(((e.clientY - cy) / cy) * 4)
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: '100dvh', backgroundColor: '#090909' }}
    >
      <ThreeBackground />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 15% 55%, rgba(200,169,106,0.05) 0%, transparent 65%)',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 35% at 85% 20%, rgba(180,160,220,0.03) 0%, transparent 60%)',
        }}
      />

      <div
        className="h-inner relative"
        style={{
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2.5rem',
          paddingTop: '140px',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100dvh',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <div
            className="h-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '2.5rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#4ade80',
                display: 'block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.72rem',
                color: '#5c5855',
                letterSpacing: '0.04em',
              }}
            >
              Disponivel para novos projetos
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              color: '#f0ece5',
              marginBottom: '2rem',
            }}
          >
            <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
              <div className="h-l1">Sites que</div>
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
              <div className="h-l2">
                <span style={{ color: '#c8a96a' }}>trabalham</span> para
              </div>
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
              <div className="h-l3">o seu negocio.</div>
            </div>
          </h1>

          <p
            className="h-sub"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              color: '#5c5855',
              lineHeight: 1.75,
              maxWidth: '42ch',
              marginBottom: '2.8rem',
            }}
          >
            Estudante de programacao com pratica suficiente para dar estetica e
            seguranca ao seu negocio.
          </p>

          <div
            className="h-cta"
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            <a
              href="#projetos"
              style={{
                display: 'inline-block',
                padding: '0.85rem 1.9rem',
                backgroundColor: '#f0ece5',
                color: '#090909',
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.82rem',
                letterSpacing: '0.03em',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'background-color 0.25s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = '#c8a96a')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = '#f0ece5')
              }
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.82rem',
                color: '#5c5855',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f0ece5')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#5c5855')}
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>

      <div
        className="h-foot absolute"
        style={{
          bottom: '2rem',
          left: 0,
          right: 0,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.65rem',
              color: '#2e2c2a',
              letterSpacing: '0.04em',
            }}
          >
            Pedro Lucas Santana
          </span>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.65rem',
              color: '#2e2c2a',
              letterSpacing: '0.04em',
            }}
          >
            Sergipe, Brasil
          </span>
        </div>
      </div>
    </section>
  )
}
