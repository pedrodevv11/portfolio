'use client'

// selo discreto deixando claro que e um projeto de demonstracao
export default function FicticioBadge() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: '18px',
        left: '18px',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        padding: '0.4rem 0.75rem',
        borderRadius: '999px',
        backgroundColor: 'rgba(27,20,16,0.85)',
        color: 'var(--cream)',
        fontSize: '0.62rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        backdropFilter: 'blur(6px)',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--ember)',
        }}
      />
      Projeto fictício
    </div>
  )
}
