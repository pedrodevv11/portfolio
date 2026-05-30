'use client'

import { useEffect, useRef, useState } from 'react'

// conta de 0 ate o numero quando entra na tela
export default function CountUp({
  to,
  suffix = '',
  duration = 1400,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVal(to)
      return
    }
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setVal(Math.round(eased * to))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}
