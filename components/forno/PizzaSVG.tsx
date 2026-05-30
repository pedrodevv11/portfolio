'use client'

// Pizza ilustrada em SVG (alta qualidade, sem imagem externa).
// Borda com pontos queimados, queijo irregular, pepperoni com brilho e manjericao.

const CHAR_SPOTS = Array.from({ length: 16 }).map((_, i) => {
  const a = (i / 16) * Math.PI * 2 + (i % 2) * 0.18
  const r = 224 + (i % 3) * 6
  return {
    cx: 260 + Math.cos(a) * r,
    cy: 260 + Math.sin(a) * r,
    rx: 9 + (i % 4) * 3,
    ry: 7 + (i % 3) * 2,
  }
})

const CHEESE_SPOTS = [
  { cx: 200, cy: 190, r: 16 },
  { cx: 320, cy: 210, r: 13 },
  { cx: 175, cy: 300, r: 12 },
  { cx: 345, cy: 320, r: 15 },
  { cx: 255, cy: 360, r: 11 },
  { cx: 290, cy: 175, r: 9 },
  { cx: 230, cy: 290, r: 10 },
]

const PEPPERONI = [
  { x: 182, y: 178 },
  { x: 332, y: 170 },
  { x: 158, y: 278 },
  { x: 270, y: 252 },
  { x: 356, y: 288 },
  { x: 214, y: 358 },
  { x: 312, y: 356 },
]

const BASIL = [
  { x: 244, y: 206, rot: -20 },
  { x: 202, y: 318, rot: 35 },
  { x: 320, y: 232, rot: 120 },
  { x: 286, y: 322, rot: -70 },
]

const OREGANO = [
  { x: 230, y: 230 },
  { x: 300, y: 250 },
  { x: 250, y: 300 },
  { x: 190, y: 240 },
  { x: 330, y: 320 },
  { x: 270, y: 200 },
  { x: 210, y: 340 },
  { x: 340, y: 270 },
]

function Pepperoni({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="31" fill="#7c1608" opacity="0.55" transform="translate(1.5 2.5)" />
      <circle r="30" fill="url(#gPep)" />
      <circle r="30" fill="none" stroke="#5c1206" strokeWidth="1.4" opacity="0.5" />
      {/* covinhas escuras */}
      <circle cx="-9" cy="-6" r="3.2" fill="#641409" opacity="0.7" />
      <circle cx="8" cy="4" r="2.6" fill="#641409" opacity="0.7" />
      <circle cx="2" cy="-11" r="2.2" fill="#641409" opacity="0.6" />
      {/* brilho de gordura */}
      <ellipse cx="-8" cy="-10" rx="9" ry="6" fill="#fff" opacity="0.22" />
    </g>
  )
}

function Basil({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d="M0 -22 C12 -12 12 12 0 22 C-12 12 -12 -12 0 -22 Z"
        fill="#7c1608"
        opacity="0.35"
        transform="translate(1.5 2.5)"
      />
      <path d="M0 -22 C12 -12 12 12 0 22 C-12 12 -12 -12 0 -22 Z" fill="url(#gBasil)" />
      <path d="M0 -19 L0 19" stroke="#1d4a29" strokeWidth="1.3" opacity="0.7" />
      <path d="M0 -8 L7 -3 M0 2 L7 7 M0 -8 L-7 -3 M0 2 L-7 7" stroke="#1d4a29" strokeWidth="0.9" opacity="0.5" fill="none" />
      <ellipse cx="-4" cy="-6" rx="3.5" ry="7" fill="#5aa86a" opacity="0.4" />
    </g>
  )
}

export default function PizzaSVG() {
  return (
    <svg
      className="fr-pizza-svg"
      viewBox="0 0 520 540"
      width="100%"
      height="100%"
      role="img"
      aria-label="Pizza artesanal de forno a lenha"
    >
      <defs>
        <radialGradient id="gCrust" cx="50%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#f0c074" />
          <stop offset="55%" stopColor="#d3963f" />
          <stop offset="100%" stopColor="#9c5f26" />
        </radialGradient>
        <radialGradient id="gCheese" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#f7e7a4" />
          <stop offset="60%" stopColor="#ebcd75" />
          <stop offset="100%" stopColor="#d6ab53" />
        </radialGradient>
        <radialGradient id="gSauce" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ca3c22" />
          <stop offset="100%" stopColor="#9a2414" />
        </radialGradient>
        <radialGradient id="gPep" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#e8745a" />
          <stop offset="28%" stopColor="#d8442b" />
          <stop offset="78%" stopColor="#a8240f" />
          <stop offset="100%" stopColor="#7c1608" />
        </radialGradient>
        <linearGradient id="gBasil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3f8f4f" />
          <stop offset="100%" stopColor="#256135" />
        </linearGradient>
        <radialGradient id="gGloss" cx="38%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* deixa as bordas do queijo/molho organicas */}
        <filter id="fMelt" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="20" />
        </filter>
        <filter id="fSoft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="fShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* sombra no chao (nao gira) */}
      <ellipse cx="260" cy="500" rx="190" ry="26" fill="#7a3d12" opacity="0.28" filter="url(#fShadow)" />

      {/* grupo que gira */}
      <g className="fr-pizza-rotor">
        {/* massa / borda */}
        <circle cx="260" cy="260" r="246" fill="url(#gCrust)" />
        <circle cx="260" cy="260" r="246" fill="none" stroke="#8a5021" strokeWidth="3" opacity="0.4" />
        {/* pontos queimados na borda */}
        {CHAR_SPOTS.map((s, i) => (
          <ellipse key={i} cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} fill="#5a3216" opacity="0.5" filter="url(#fSoft)" />
        ))}

        {/* molho aparecendo */}
        <circle cx="260" cy="260" r="214" fill="url(#gSauce)" filter="url(#fMelt)" />

        {/* queijo derretido (borda irregular) */}
        <circle cx="260" cy="260" r="206" fill="url(#gCheese)" filter="url(#fMelt)" />
        {/* manchas douradas do queijo assado */}
        {CHEESE_SPOTS.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#cf953f" opacity="0.45" filter="url(#fSoft)" />
        ))}

        {/* oregano */}
        {OREGANO.map((o, i) => (
          <circle key={i} cx={o.x} cy={o.y} r="2.2" fill="#3d5226" opacity="0.7" />
        ))}

        {/* coberturas */}
        {PEPPERONI.map((p, i) => (
          <Pepperoni key={i} x={p.x} y={p.y} />
        ))}
        {BASIL.map((b, i) => (
          <Basil key={i} x={b.x} y={b.y} rot={b.rot} />
        ))}

        {/* brilho geral por cima */}
        <circle cx="260" cy="260" r="206" fill="url(#gGloss)" />
      </g>
    </svg>
  )
}
