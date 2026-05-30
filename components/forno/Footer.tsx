'use client'

import { motion } from 'motion/react'

export default function Footer() {
  return (
    <section
      id="visite"
      style={{ padding: 'clamp(4rem, 10vh, 8rem) clamp(1.2rem, 4vw, 3rem) 3rem' }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="fr-display"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', margin: 0, lineHeight: 0.85 }}
        >
          Bateu a<br />
          <span style={{ color: 'var(--tomato)' }}>fome?</span>
        </motion.h2>

        <div
          className="fr-foot-grid"
          style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            borderTop: '2px solid rgba(27,20,16,0.15)',
            paddingTop: '2.5rem',
          }}
        >
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.6rem' }}>Onde estamos</div>
            <p style={{ color: 'rgba(27,20,16,0.65)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              Rua das Oliveiras, 240<br />
              Bairro Centro · Aracaju, SE
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.6rem' }}>Horário</div>
            <p style={{ color: 'rgba(27,20,16,0.65)', lineHeight: 1.6, fontSize: '0.9rem' }}>
              Terça a domingo<br />
              18h às 23h30
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '0.6rem' }}>Peça já</div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                display: 'inline-block',
                marginTop: '0.3rem',
                padding: '0.9rem 1.8rem',
                borderRadius: '999px',
                backgroundColor: 'var(--tomato)',
                color: 'var(--cream)',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'rgba(27,20,16,0.45)',
          }}
        >
          <span className="fr-display" style={{ fontSize: '1.4rem', color: 'var(--tomato)' }}>
            Forno
          </span>
          <span>Projeto fictício de demonstração · feito por Pedro Lucas</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .fr-foot-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
