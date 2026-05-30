'use client'

const WORDS = [
  'Margherita',
  'Pepperoni',
  'Quatro Queijos',
  'Calabresa',
  'Portuguesa',
  'Funghi',
  'Marguerita Trufada',
  'Búfala',
]

export default function Marquee() {
  // duplicado pra dar a volta sem emendar
  const items = [...WORDS, ...WORDS]

  return (
    <div
      style={{
        backgroundColor: 'var(--ink)',
        color: 'var(--cream)',
        padding: '1.1rem 0',
        overflow: 'hidden',
        borderTop: '3px solid var(--tomato)',
        borderBottom: '3px solid var(--tomato)',
      }}
    >
      <div className="fr-marquee">
        {items.map((w, i) => (
          <span
            key={i}
            className="fr-display"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              padding: '0 1.4rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.4rem',
              whiteSpace: 'nowrap',
            }}
          >
            {w}
            <span style={{ color: 'var(--ember)' }}>✶</span>
          </span>
        ))}
      </div>
    </div>
  )
}
