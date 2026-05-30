import Nav from '@/components/forno/Nav'
import Hero from '@/components/forno/Hero'
import Marquee from '@/components/forno/Marquee'
import Menu from '@/components/forno/Menu'
import Story from '@/components/forno/Story'
import Footer from '@/components/forno/Footer'
import FicticioBadge from '@/components/forno/FicticioBadge'

// Demo: site de pizzaria artesanal (estilo proprio, separado do portfolio)
export default function FornoPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Menu />
      <Story />
      <Footer />
      <FicticioBadge />
    </>
  )
}
