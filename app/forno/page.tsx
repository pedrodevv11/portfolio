import Preloader from '@/components/forno/Preloader'
import Nav from '@/components/forno/Nav'
import Hero from '@/components/forno/Hero'
import Marquee from '@/components/forno/Marquee'
import Menu from '@/components/forno/Menu'
import Combos from '@/components/forno/Combos'
import ComoFunciona from '@/components/forno/ComoFunciona'
import Story from '@/components/forno/Story'
import Galeria from '@/components/forno/Galeria'
import Depoimentos from '@/components/forno/Depoimentos'
import FAQ from '@/components/forno/FAQ'
import Footer from '@/components/forno/Footer'
import FicticioBadge from '@/components/forno/FicticioBadge'

// Demo: site de pizzaria artesanal (estilo proprio, separado do portfolio)
export default function FornoPage() {
  return (
    <>
      <Preloader />
      <Nav />
      <Hero />
      <Marquee />
      <Menu />
      <Combos />
      <ComoFunciona />
      <Story />
      <Galeria />
      <Depoimentos />
      <FAQ />
      <Footer />
      <FicticioBadge />
    </>
  )
}
