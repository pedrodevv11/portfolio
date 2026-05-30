'use client'

import { motion } from 'motion/react'

const STATS = [
  { num: '450°', label: 'graus no forno' },
  { num: '48h', label: 'de fermentação' },
  { num: '100%', label: 'forno a lenha' },
  { num: '25min', label: 'no seu endereço' },
]

export default function Story() {
  return (
    <section
      id="forno"
      style={{
        backgroundColor: 'var(--ink)',
        color: 'var(--cream)',
        padding: 'clamp(4rem, 11vh, 8rem) clamp(1.2rem, 4vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div
          className="fr-story-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="fr-display"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)', margin: 0 }}
          >
            Fogo, tempo<br />
            <span style={{ color: 'var(--ember)' }}>e paciência.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              maxWidth: '46ch',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(251,242,227,0.75)',
            }}
          >
            Tudo começa na madeira que acende o forno antes do sol nascer. A massa
            descansa por dois dias até ficar leve e cheia de sabor. Quando encontra
            o calor da lenha, vira aquela borda alta e crocante que ninguém resiste.
            É assim desde 1998, e não vamos mudar.
          </motion.p>
        </div>

        <div
          className="fr-stats"
          style={{
            marginTop: 'clamp(3rem, 7vh, 5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            borderTop: '2px solid rgba(251,242,227,0.18)',
            paddingTop: '2.5rem',
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="fr-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', color: 'var(--ember)' }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(251,242,227,0.65)', marginTop: '0.3rem' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .fr-story-grid { grid-template-columns: 1fr 1fr !important; }
          .fr-stats { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
