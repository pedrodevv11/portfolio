'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

const PIZZAS = [
  {
    nome: 'Margherita',
    desc: 'Molho de tomate San Marzano, mozzarella de búfala, manjericão fresco',
    preco: '49',
    cor: 'var(--tomato)',
  },
  {
    nome: 'Pepperoni',
    desc: 'Mozzarella, pepperoni italiano levemente picante, orégano',
    preco: '56',
    cor: 'var(--ember)',
  },
  {
    nome: 'Funghi Trufada',
    desc: 'Mix de cogumelos, mozzarella, azeite trufado, parmesão',
    preco: '64',
    cor: 'var(--basil)',
  },
  {
    nome: 'Quatro Queijos',
    desc: 'Mozzarella, gorgonzola, parmesão e provolone derretidos',
    preco: '62',
    cor: 'var(--crust)',
  },
  {
    nome: 'Calabresa',
    desc: 'Calabresa artesanal, cebola roxa, azeitona preta',
    preco: '54',
    cor: 'var(--tomato)',
  },
]

export default function Menu() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="cardapio"
      style={{ padding: 'clamp(4rem, 10vh, 8rem) clamp(1.2rem, 4vw, 3rem)' }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <h2 className="fr-display" style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)', margin: 0 }}>
            O Cardápio
          </h2>
          <p style={{ maxWidth: '32ch', color: 'rgba(27,20,16,0.6)', fontSize: '0.92rem', lineHeight: 1.6 }}>
            Cada pizza sai na hora, assada em forno a lenha a 450°C. Passe o mouse e escolha a sua.
          </p>
        </motion.div>

        <div style={{ borderTop: '2px solid rgba(27,20,16,0.15)' }}>
          {PIZZAS.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                position: 'relative',
                borderBottom: '2px solid rgba(27,20,16,0.15)',
                padding: 'clamp(1.2rem, 3vw, 2rem) clamp(0.8rem, 2vw, 1.6rem)',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* fundo que entra no hover */}
              <motion.div
                aria-hidden
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: p.cor,
                  transformOrigin: 'bottom',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  color: active === i ? 'var(--cream)' : 'var(--ink)',
                  transition: 'color 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                  <motion.span
                    animate={{ x: active === i ? 14 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="fr-display"
                    style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
                  >
                    {p.nome}
                  </motion.span>
                  <span
                    style={{
                      maxWidth: '40ch',
                      fontSize: '0.85rem',
                      lineHeight: 1.45,
                      opacity: 0.85,
                    }}
                  >
                    {p.desc}
                  </span>
                </div>
                <span
                  className="fr-display"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', whiteSpace: 'nowrap' }}
                >
                  R${p.preco}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
