'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}=+*^?#'

// embaralha as letras e vai "acertando" quando o titulo entra na tela
export default function Scramble({ text }: { text: string }) {
  const [display, setDisplay] = useState(text)
  const ref = useRef<HTMLSpanElement>(null)
  const ran = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(text)
      return
    }

    const el = ref.current
    if (!el) return

    let raf = 0
    let frame = 0
    const total = 16

    const tick = () => {
      frame++
      const out = text
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' '
          const reveal = (i / text.length) * total
          if (frame > reveal + 6) return ch
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')
      setDisplay(out)
      if (frame < total + text.length) {
        raf = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !ran.current) {
            ran.current = true
            raf = requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [text])

  return <span ref={ref}>{display}</span>
}
