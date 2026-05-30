'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

// tela de carregamento que aparece na entrada e sobe revelando o site
export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => setDone(true), reduce ? 200 : 1700)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.6rem',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fr-display"
            style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', color: 'var(--tomato)', letterSpacing: '0.04em' }}
          >
            Forno
          </motion.span>

          <div
            style={{
              width: 'min(220px, 60vw)',
              height: '3px',
              borderRadius: '999px',
              background: 'rgba(251,242,227,0.18)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              style={{ height: '100%', background: 'var(--ember)' }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(251,242,227,0.5)',
            }}
          >
            Acendendo o forno
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
