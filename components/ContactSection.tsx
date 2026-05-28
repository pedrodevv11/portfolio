'use client'

import { motion } from 'motion/react'
import { EnvelopeSimple, WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react'

const LINKS = [
  {
    icon: WhatsappLogo,
    label: 'WhatsApp',
    value: '+55 79 98131-1614',
    href: 'https://wa.me/5579981311614',
  },
  {
    icon: EnvelopeSimple,
    label: 'E-mail',
    value: 'pedrolucassantanadealbuquerque@gmail.com',
    href: 'mailto:pedrolucassantanadealbuquerque@gmail.com',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contato"
      style={{
        backgroundColor: '#090909',
        paddingTop: '6rem',
        paddingBottom: '8rem',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
              color: '#f0ece5',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              marginBottom: '1.2rem',
            }}
          >
            Vamos<br />conversar.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.9rem',
              color: '#5c5855',
              lineHeight: 1.7,
              maxWidth: '38ch',
            }}
          >
            Aberto para novos projetos. Entre em contato e conte sobre o seu negocio.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {LINKS.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.6rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
                color: '#f0ece5',
                transition: 'border-color 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(200,169,106,0.3)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.07)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <Icon
                  size={18}
                  weight="light"
                  style={{ color: '#5c5855', flexShrink: 0 }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.65rem',
                      color: '#5c5855',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '3px',
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 600,
                      fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)',
                      color: '#f0ece5',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {value}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                weight="light"
                style={{ color: '#3a3835', flexShrink: 0 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.7rem',
              color: '#2e2c2a',
              letterSpacing: '0.04em',
            }}
          >
            Pedro Lucas Santana de Albuquerque
          </span>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.7rem',
              color: '#2e2c2a',
              letterSpacing: '0.04em',
            }}
          >
            2025
          </span>
        </motion.div>
      </div>
    </section>
  )
}
