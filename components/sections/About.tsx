'use client'

import { motion } from 'motion/react'

const SKILLS = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        backgroundColor: '#090909',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        <style>{`
          @media (min-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
              color: '#f0ece5',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              marginBottom: '2rem',
            }}
          >
            Pedro<br />Lucas
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.9rem',
              color: '#5c5855',
              lineHeight: 1.8,
              maxWidth: '40ch',
              marginBottom: '1.5rem',
            }}
          >
            Estudante de programacao com pratica suficiente na area para entregar
            sites com estetica cuidada e seguranca para o seu negocio.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.9rem',
              color: '#5c5855',
              lineHeight: 1.8,
              maxWidth: '40ch',
            }}
          >
            Trabalho com Next.js e React, sempre com atencao ao detalhe, foco em
            velocidade e uma identidade visual pensada para cada cliente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#3a3835',
              fontFamily: 'var(--font-space-grotesk)',
              marginBottom: '1.5rem',
            }}
          >
            Tecnologias
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                    color: '#f0ece5',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {skill}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.65rem',
                    color: '#3a3835',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
