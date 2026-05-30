'use client'

import { motion } from 'motion/react'

const COMBOS = [
  {
    nome: 'Combo Solo',
    itens: '1 pizza individual + refri lata',
    de: '45',
    por: '38',
    cor: 'var(--ember)',
  },
  {
    nome: 'Combo Casal',
    itens: '1 pizza grande + 2 refrigerantes',
    de: '89',
    por: '72',
    cor: 'var(--tomato)',
    destaque: true,
  },
  {
    nome: 'Rodízio em Casa',
    itens: '3 pizzas médias à sua escolha',
    de: '140',
    por: '119',
    cor: 'var(--basil)',
  },
]

export default function Combos() {
  return (
    <section style={{ padding: 'clamp(4rem, 10vh, 7rem) clamp(1.2rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--tomato)',
            }}
          >
            Promoções da semana
          </span>
          <h2 className="fr-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', margin: '0.4rem 0 0' }}>
            Combos que valem a pena
          </h2>
        </motion.div>

        <div
          className="fr-combos"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.4rem',
          }}
        >
          {COMBOS.map((c, i) => (
            <motion.div
              key={c.nome}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                position: 'relative',
                background: c.destaque ? 'var(--ink)' : 'var(--cream)',
                color: c.destaque ? 'var(--cream)' : 'var(--ink)',
                border: `2px solid ${c.destaque ? 'var(--ink)' : 'rgba(27,20,16,0.14)'}`,
                borderRadius: '18px',
                padding: '2rem 1.8rem',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: c.cor,
                }}
              />
              {c.destaque && (
                <span
                  style={{
                    display: 'inline-block',
                    marginBottom: '0.8rem',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '999px',
                    background: 'var(--tomato)',
                    color: 'var(--cream)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Mais pedido
                </span>
              )}
              <h3 className="fr-display" style={{ fontSize: '1.8rem', margin: 0 }}>
                {c.nome}
              </h3>
              <p style={{ fontSize: '0.88rem', opacity: 0.7, margin: '0.6rem 0 1.6rem', lineHeight: 1.5 }}>
                {c.itens}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem' }}>
                <span style={{ textDecoration: 'line-through', opacity: 0.45, fontSize: '1rem' }}>
                  R${c.de}
                </span>
                <span className="fr-display" style={{ fontSize: '2.4rem', color: c.cor }}>
                  R${c.por}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 820px) {
          .fr-combos { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
