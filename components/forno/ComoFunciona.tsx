'use client'

import { motion } from 'motion/react'

const PASSOS = [
  { n: '01', t: 'Você pede', d: 'Pelo site ou WhatsApp, em menos de um minuto. Sem complicação.' },
  { n: '02', t: 'A gente assa', d: 'Massa fresca montada na hora e assada no forno a lenha a 450°C.' },
  { n: '03', t: 'Chega quentinha', d: 'Entrega em até 25 minutos, direto na sua porta, no ponto certo.' },
]

export default function ComoFunciona() {
  return (
    <section
      style={{
        padding: 'clamp(4rem, 10vh, 7rem) clamp(1.2rem, 4vw, 3rem)',
        borderTop: '2px solid rgba(27,20,16,0.1)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="fr-display"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', margin: '0 0 3rem' }}
        >
          Do forno pra você,<br />
          <span style={{ color: 'var(--tomato)' }}>em 3 passos.</span>
        </motion.h2>

        <div
          className="fr-passos"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
        >
          {PASSOS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{ borderTop: '3px solid var(--tomato)', paddingTop: '1.2rem' }}
            >
              <div
                className="fr-display"
                style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: 'rgba(27,20,16,0.16)', lineHeight: 1 }}
              >
                {p.n}
              </div>
              <h3 className="fr-display" style={{ fontSize: '1.6rem', margin: '0.6rem 0 0.6rem' }}>
                {p.t}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(27,20,16,0.65)', lineHeight: 1.6, maxWidth: '34ch' }}>
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 820px) {
          .fr-passos { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
