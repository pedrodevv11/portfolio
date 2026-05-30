'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const PERGUNTAS = [
  {
    q: 'Qual região vocês entregam?',
    a: 'Atendemos o Centro e bairros vizinhos num raio de até 6 km. Na dúvida, é só mandar seu endereço no WhatsApp que confirmamos na hora.',
  },
  {
    q: 'Quanto tempo demora a entrega?',
    a: 'Em média de 25 a 40 minutos, dependendo do movimento. A pizza sai do forno e vai direto pra embalagem térmica.',
  },
  {
    q: 'Tem opção de massa sem glúten?',
    a: 'Sim, temos massa sem glúten sob encomenda. Faça o pedido com pelo menos 1 hora de antecedência.',
  },
  {
    q: 'Posso montar minha própria pizza?',
    a: 'Pode sim! Escolha até 4 ingredientes da nossa lista e a gente monta do seu jeito, sem custo extra de criatividade.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Aceitamos Pix, cartão de crédito e débito na entrega, e dinheiro. É só avisar a forma escolhida ao pedir.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      style={{
        padding: 'clamp(4rem, 10vh, 7rem) clamp(1.2rem, 4vw, 3rem)',
        borderTop: '2px solid rgba(27,20,16,0.1)',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="fr-display"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', margin: '0 0 2.5rem' }}
        >
          Perguntas frequentes
        </motion.h2>

        <div>
          {PERGUNTAS.map((item, i) => {
            const aberto = open === i
            return (
              <div key={i} style={{ borderBottom: '2px solid rgba(27,20,16,0.12)' }}>
                <button
                  onClick={() => setOpen(aberto ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.4rem 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-dm), sans-serif',
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                    fontWeight: 700,
                  }}
                >
                  {item.q}
                  <motion.span
                    animate={{ rotate: aberto ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: '1.6rem', lineHeight: 1, color: 'var(--tomato)', flexShrink: 0 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {aberto && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ padding: '0 0 1.4rem', margin: 0, color: 'rgba(27,20,16,0.68)', lineHeight: 1.6, maxWidth: '60ch' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
