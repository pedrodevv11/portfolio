import type { Metadata } from 'next'
import { Anton, DM_Sans } from 'next/font/google'
import './forno.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FORNO — Pizzaria Artesanal',
  description: 'Pizza de forno a lenha, massa de fermentação natural. (Projeto fictício de demonstração.)',
}

export default function FornoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`fr-root ${anton.variable} ${dmSans.variable}`}>{children}</div>
  )
}
