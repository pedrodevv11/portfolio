import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

// Página inicial — junta todas as seções do portfólio
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
