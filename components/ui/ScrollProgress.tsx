'use client'

import { motion, useScroll, useSpring } from 'motion/react'

// barrinha no topo que enche conforme rola a pagina
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: '#c8a96a',
        transformOrigin: '0%',
        scaleX,
        zIndex: 70,
      }}
    />
  )
}
