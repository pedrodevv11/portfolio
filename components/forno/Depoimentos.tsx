'use client'

import { motion } from 'motion/react'

const DEPOIMENTOS = [
  { texto: 'Melhor pizza que já comi em Aracaju. A borda fica perfeita, crocante por fora e leve por dentro.', nome: 'Marina S.' },
  { texto: 'Chega quente e rápido. Virou tradição de sexta aqui em casa, a família toda ama.', nome: 'Rafael L.' },
  { texto: 'Massa leve, sabor de verdade e ingredientes frescos. Não troco por nenhuma outra.', nome: 'Camila T.' },
  { texto: 'Atendimento ótimo e a Funghi Trufada é surreal. Recomendo de olhos fechados.', nome: 'João P.' },
]

export default function Depoimentos() {
  return (
    <section style={{ padding: 'clamp(4rem, 10vh, 7rem) clamp(1.2rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2.5rem', textAlign: 'center' }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tomato)' }}>
            Quem prova, volta
          </span>
          <h2 className="fr-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', margin: '0.4rem 0 0' }}>
            O que dizem por aí
          </h2>
        </motion.div>

        <div
          className="fr-depo"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}
        >
          {DEPOIMENTOS.map((d, i) => (
            <motion.blockquote
              key={d.nome}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              style={{
                margin: 0,
                background: 'var(--cream)',
                border: '2px solid rgba(27,20,16,0.12)',
                borderRadius: '16px',
                padding: '1.8rem',
              }}
            >
              <div style={{ color: 'var(--ember)', letterSpacing: '2px', fontSize: '1rem', marginBottom: '0.9rem' }}>
                ★★★★★
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1.2rem' }}>
                {d.texto}
              </p>
              <footer style={{ fontWeight: 700, fontSize: '0.85rem' }}>— {d.nome}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .fr-depo { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
