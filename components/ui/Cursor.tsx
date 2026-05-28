'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// circulo que segue o mouse e cresce em cima de links/botoes
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // só liga em quem tem mouse de verdade e nao pediu menos animacao
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest('a, button')))
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        border: '1px solid var(--accent)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.5 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  )
}
