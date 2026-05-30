'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect } from 'react'
import PizzaSVG from './PizzaSVG'

const TAGS = [
  { label: 'Forno a lenha', top: '12%', left: '4%', color: 'var(--basil)' },
  { label: 'Massa 48h', top: '70%', left: '0%', color: 'var(--tomato)' },
  { label: 'Mozzarella fresca', top: '82%', left: '58%', color: 'var(--ember)' },
]

export default function Hero() {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 60, damping: 18 })
  const sy = useSpring(py, { stiffness: 60, damping: 18 })

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      px.set(((e.clientX - cx) / cx) * 24)
      py.set(((e.clientY - cy) / cy) * 24)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [px, py])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(6rem, 12vh, 9rem) clamp(1.2rem, 4vw, 3rem) 3rem',
        overflow: 'hidden',
      }}
    >
      {/* manchas de cor ao fundo */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(40% 50% at 80% 30%, rgba(240,145,58,0.25), transparent 70%), radial-gradient(35% 45% at 10% 80%, rgba(47,122,71,0.16), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="fr-hero-grid"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {/* texto */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block',
              padding: '0.4rem 0.9rem',
              borderRadius: '999px',
              border: '1px solid rgba(27,20,16,0.2)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.6rem',
            }}
          >
            Desde 1998 · Pizzaria artesanal
          </motion.span>

          <h1
            className="fr-display"
            style={{ fontSize: 'clamp(3.2rem, 11vw, 9rem)', margin: 0 }}
          >
            {['Pizza de', 'verdade', 'sai do'].map((line, i) => (
              <span key={line} style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'block' }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.51, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block', color: 'var(--tomato)' }}
              >
                forno.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              marginTop: '1.8rem',
              maxWidth: '34ch',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'rgba(27,20,16,0.7)',
            }}
          >
            Massa de fermentação natural, queijo derretendo e a borda no ponto.
            Assada na lenha, do nosso forno pro seu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#cardapio"
              style={{
                padding: '0.95rem 1.8rem',
                borderRadius: '999px',
                backgroundColor: 'var(--tomato)',
                color: 'var(--cream)',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              Ver o cardápio
            </a>
            <a
              href="#visite"
              style={{
                padding: '0.95rem 1.8rem',
                borderRadius: '999px',
                border: '1px solid var(--ink)',
                color: 'var(--ink)',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              Pedir agora
            </a>
          </motion.div>
        </div>

        {/* pizza */}
        <motion.div
          className="fr-hero-pizza"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            justifySelf: 'center',
            x: sx,
            y: sy,
          }}
        >
          <div
            style={{ width: 'clamp(260px, 40vw, 480px)', aspectRatio: '0.96' }}
          >
            <PizzaSVG />
          </div>

          {TAGS.map((t) => (
            <motion.span
              key={t.label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: t.top,
                left: t.left,
                padding: '0.5rem 0.9rem',
                borderRadius: '999px',
                background: 'var(--cream)',
                border: `2px solid ${t.color}`,
                color: t.color,
                fontWeight: 700,
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 12px 30px -12px rgba(120,60,20,0.35)',
                zIndex: 4,
              }}
            >
              {t.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .fr-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  )
}
