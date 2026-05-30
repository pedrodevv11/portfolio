'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'
import Scramble from '../ui/Scramble'

export default function Projects() {
  return (
    <section
      id="projetos"
      style={{
        backgroundColor: 'var(--bg)',
        paddingTop: '7rem',
        paddingBottom: '6rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
              color: 'var(--text)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
            }}
          >
            <Scramble text="Projetos" />
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '50ch',
            }}
          >
            Sites fictícios que criei pra demonstrar identidades visuais distintas
            para cada tipo de negócio. Cada um com estilo, ritmo e animações próprias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectCard
            index="01"
            name="Forno"
            type="Pizzaria artesanal"
            description="Site quente e vibrante, com pizza animada em CSS, cardápio interativo e tipografia de impacto."
            href="/forno"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
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
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            Mais demos a caminho — loja de roupa e academia.
          </span>
          <a
            href="#contato"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.82rem',
              color: 'var(--text)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
          >
            <span>Quer um site assim?</span>
            <span>-&gt;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  index,
  name,
  type,
  description,
  href,
}: {
  index: string
  name: string
  type: string
  description: string
  href: string
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="proj-card"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* preview com a cara do site (paleta quente) */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16 / 7',
            backgroundColor: '#fbf2e3',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
            }}
          >
            <img
              src="/pizza.jpg"
              alt="Pizza do projeto Forno"
              style={{
                width: 'clamp(64px, 11vw, 104px)',
                height: 'clamp(64px, 11vw, 104px)',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid #fff',
                boxShadow: '0 10px 26px -10px rgba(120,60,20,0.5)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                color: '#e0392b',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Forno
            </span>
          </motion.div>

          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '14px',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(27,20,16,0.5)',
            }}
          >
            Fictício
          </span>
        </div>

        {/* infos */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            padding: '1.6rem 1.8rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.9rem',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.65rem',
                  color: 'var(--text-faint)',
                  letterSpacing: '0.1em',
                }}
              >
                {index}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 2.6vw, 1.9rem)',
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}
              >
                {name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.72rem',
                  color: 'var(--accent)',
                }}
              >
                {type}
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.55,
                maxWidth: '54ch',
              }}
            >
              {description}
            </p>
          </div>

          <motion.span
            variants={{ rest: { x: 0, y: 0 }, hover: { x: 4, y: -4 } }}
            transition={{ duration: 0.3 }}
            style={{ color: 'var(--text)', flexShrink: 0 }}
          >
            <ArrowUpRight size={24} weight="light" />
          </motion.span>
        </div>
      </motion.div>
    </Link>
  )
}
