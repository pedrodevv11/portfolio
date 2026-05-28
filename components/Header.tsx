'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import ThemeToggle from './ui/ThemeToggle'

export default function Header() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    gsap.fromTo(
      nav,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: 0.15 }
    )

    const onScroll = () => {
      if (!nav) return
      if (window.scrollY > 50) {
        nav.style.backgroundColor = 'var(--nav-bg)'
        nav.style.backdropFilter = 'blur(18px)'
        ;(nav.style as CSSStyleDeclaration & { WebkitBackdropFilter: string }).WebkitBackdropFilter = 'blur(18px)'
        nav.style.borderBottomColor = 'var(--border)'
      } else {
        nav.style.backgroundColor = 'transparent'
        nav.style.backdropFilter = 'none'
        ;(nav.style as CSSStyleDeclaration & { WebkitBackdropFilter: string }).WebkitBackdropFilter = 'none'
        nav.style.borderBottomColor = 'transparent'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color] duration-300"
      style={{
        height: '68px',
        borderBottomColor: 'transparent',
        backgroundColor: 'transparent',
      }}
    >
      <div
        className="h-full flex items-center justify-between"
        style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: '1.1rem',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }}
        >
          PL
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {[
            { label: 'Projetos', href: '#projetos' },
            { label: 'Sobre', href: '#sobre' },
            { label: 'Contato', href: '#contato' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--text)')}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
