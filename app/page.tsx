import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Cursor from '@/components/ui/Cursor'
import ScrollProgress from '@/components/ui/ScrollProgress'

// Página inicial — junta todas as seções do portfólio
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      {/* textura de grão por cima de tudo, bem sutil */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 60,
          opacity: 0.022,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }}
      />
      <main>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
