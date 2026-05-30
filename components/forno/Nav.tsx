'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'O Forno', href: '#forno' },
  { label: 'Visite', href: '#visite' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.2rem, 4vw, 3rem)',
        backgroundColor: scrolled ? 'rgba(251,242,227,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(27,20,16,0.1)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <span
        className="fr-display"
        style={{ fontSize: '1.6rem', color: 'var(--tomato)', letterSpacing: '0.04em' }}
      >
        Forno
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 2.4rem)' }}>
        <div className="fr-navlinks" style={{ display: 'flex', gap: '2rem' }}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--ink)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#visite"
          style={{
            display: 'inline-block',
            padding: '0.6rem 1.3rem',
            borderRadius: '999px',
            backgroundColor: 'var(--ink)',
            color: 'var(--cream)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Reservar
        </a>

        <Link
          href="/"
          style={{
            fontSize: '0.7rem',
            color: 'rgba(27,20,16,0.45)',
            textDecoration: 'none',
            borderLeft: '1px solid rgba(27,20,16,0.15)',
            paddingLeft: '1rem',
          }}
        >
          ← Portfólio
        </Link>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .fr-navlinks { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
