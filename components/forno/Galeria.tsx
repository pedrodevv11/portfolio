'use client'

import { motion } from 'motion/react'

const FOTOS = [
  { src: '/g3.jpg', cap: 'Saindo do forno', big: true },
  { src: '/g1.jpg', cap: 'Frango com catupiry' },
  { src: '/g5.jpg', cap: 'Vegetariana' },
  { src: '/pizza.jpg', cap: 'Margherita' },
  { src: '/g6.jpg', cap: 'Na pedra' },
  { src: '/g2.jpg', cap: 'Manjericão fresco', big: true },
  { src: '/g4.jpg', cap: 'Pepperoni' },
]

export default function Galeria() {
  return (
    <section
      style={{
        backgroundColor: 'var(--ink)',
        padding: 'clamp(4rem, 10vh, 7rem) clamp(1.2rem, 4vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ember)' }}>
            Galeria
          </span>
          <h2 className="fr-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', margin: '0.4rem 0 0', color: 'var(--cream)' }}>
            De dar água na boca
          </h2>
        </motion.div>

        <div
          className="fr-galeria"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: '160px',
            gap: '0.8rem',
          }}
        >
          {FOTOS.map((f, i) => (
            <motion.figure
              key={f.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={f.big ? 'fr-gbig' : ''}
              style={{
                position: 'relative',
                margin: 0,
                overflow: 'hidden',
                borderRadius: '12px',
                gridRow: f.big ? 'span 2' : 'span 1',
                cursor: 'pointer',
              }}
            >
              <motion.img
                src={f.src}
                alt={f.cap}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <figcaption
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '1.4rem 1rem 0.8rem',
                  background: 'linear-gradient(to top, rgba(27,20,16,0.8), transparent)',
                  color: 'var(--cream)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                }}
              >
                {f.cap}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .fr-galeria { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
