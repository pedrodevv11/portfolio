'use client'

import { motion } from 'motion/react'

export default function Projects() {
  return (
    <section
      id="projetos"
      style={{
        backgroundColor: '#090909',
        paddingTop: '7rem',
        paddingBottom: '6rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
              color: '#f0ece5',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
            }}
          >
            Projetos
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.85rem',
              color: '#5c5855',
              lineHeight: 1.6,
              maxWidth: '46ch',
            }}
          >
            Cada projeto tem identidade propria. Em breve, sites reais com estilos
            distintos para cada tipo de negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '1.2rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.62rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#c8a96a',
            }}
          >
            Em desenvolvimento
          </span>
          <span
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
              color: '#4a4744',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '20ch',
            }}
          >
            Projetos chegando em breve.
          </span>
          <a
            href="#contato"
            style={{
              marginTop: '0.8rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.82rem',
              color: '#f0ece5',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#c8a96a')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#f0ece5')}
          >
            <span>Quer ser o primeiro projeto?</span>
            <span>-&gt;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
