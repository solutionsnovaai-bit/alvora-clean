import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Seo from './components/Seo'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { CrossBands, MarqueeBand } from './components/Marquee'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import ScrollStory from './components/ScrollStory'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import QuoteBuilder from './components/QuoteBuilder'
import Why from './components/Why'
import Plans from './components/Plans'
import BrandMoment from './components/BrandMoment'
import Region from './components/Region'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

const BAND_A = ['Limpeza residencial', 'Pós-obra', 'Pós-mudança', 'Apartamentos', 'Limpeza profunda', 'Escritórios', 'Produtos inclusos']
const BAND_B = ['Casa cheirosa', 'Box sem marca', 'Bancada livre', 'Chão brilhando', 'Tempo livre', 'Excelência em cada detalhe']
const BAND_C = ['Franco da Rocha', 'Francisco Morato', 'Jundiaí', 'e região', 'Orçamento sem compromisso', 'Agende pelo WhatsApp']

export default function App() {
  const [loading, setLoading] = useState(true)
  const finish = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', loading)
    if (loading) window.scrollTo(0, 0)
  }, [loading])

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Seo />
      <AnimatePresence>{loading && <Loader key="loader" onFinish={finish} />}</AnimatePresence>
      <Navbar show={!loading} />

      <main>
        <Hero ready={!loading} />
        <CrossBands a={BAND_A} b={BAND_B} />
        <Manifesto />
        <Services />
        <ScrollStory />
        <HowItWorks />
        <QuoteBuilder />
        <Why />
        <Plans />
        <div className="relative z-10 -mt-12">
          <MarqueeBand items={BAND_C} tone="lima" duration={45} reverse />
        </div>
        <Gallery />
        <BrandMoment />
        <Region />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppFab show={!loading} />
    </>
  )
}
