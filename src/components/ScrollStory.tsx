import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { Sparkle } from './icons'
import { EASE } from '../lib/site'

import cozinha from '../assets/fotos/cozinha-bancada.webp'
import cozinhaSm from '../assets/fotos/cozinha-bancada@760.webp'
import banheiro from '../assets/fotos/banheiro-box.webp'
import banheiroSm from '../assets/fotos/banheiro-box@760.webp'
import sala from '../assets/fotos/sala-estar.webp'
import salaSm from '../assets/fotos/sala-estar@760.webp'
import obra from '../assets/fotos/pos-obra-apartamento.webp'
import obraSm from '../assets/fotos/pos-obra-apartamento@760.webp'

const STEPS = [
  {
    id: 'cozinha',
    label: 'Cozinha',
    title: 'Bancada livre, pia brilhando.',
    text: 'Onde a casa mais suja é onde a gente mais capricha: bancadas, pia, fogão por fora, azulejo atrás do preparo e a gordura que o pano comum não tira.',
    img: cozinha,
    small: cozinhaSm,
    alt: 'Bancada de cozinha em quartzo branco recém-limpa com pano de microfibra verde',
  },
  {
    id: 'banheiro',
    label: 'Banheiros',
    title: 'Box sem marca d’água.',
    text: 'Vidro transparente de verdade, rejunte tratado, louças higienizadas e espelho sem aquele véu. O detalhe que qualquer visita repara na hora.',
    img: banheiro,
    small: banheiroSm,
    alt: 'Box de vidro de banheiro impecável com rodo apoiado na parede',
  },
  {
    id: 'sala',
    label: 'Sala e quartos',
    title: 'Pó, tapete e chão no lugar.',
    text: 'Pó dos móveis e dos cantos altos, tapete aspirado fibra a fibra, piso passado e os ambientes organizados pra você só sentar e aproveitar.',
    img: sala,
    small: salaSm,
    alt: 'Sala de estar arrumada com tapete aspirado e piso de madeira refletindo a luz do fim de tarde',
  },
  {
    id: 'obra',
    label: 'Pós-obra',
    title: 'Poeira fina não é sujeira comum.',
    text: 'Gesso, cimento e respingo de tinta pedem técnica e repetição. A gente entrega o imóvel com o piso espelhando e as esquadrias limpas, pronto pra morar.',
    img: obra,
    small: obraSm,
    alt: 'Apartamento novo e vazio com porcelanato claro espelhando a luz após a limpeza pós-obra',
  },
]

export default function ScrollStory() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const current = STEPS[active]

  return (
    <Sheet tone="dark">
      <Container>
        <Heading
          title="Cada ambiente pede um cuidado."
          lead="O mesmo padrão em toda a casa, com a atenção que cada cômodo exige."
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          {/* texto que rola */}
          <div className="flex flex-col gap-8 lg:gap-0">
            {STEPS.map((s, i) => (
              <div
                key={s.id}
                data-i={i}
                ref={(el) => {
                  refs.current[i] = el
                }}
                className="lg:flex lg:min-h-[78vh] lg:flex-col lg:justify-center"
              >
                {/* no celular a foto acompanha o bloco */}
                <img
                  src={s.small}
                  srcSet={`${s.small} 760w, ${s.img} 1400w`}
                  sizes="(min-width: 1024px) 0px, 92vw"
                  alt={s.alt}
                  loading="lazy"
                  className="mb-6 aspect-[4/3] w-full rounded-[28px] object-cover lg:hidden"
                />
                <motion.div
                  initial={{ opacity: 0.35 }}
                  animate={{ opacity: active === i ? 1 : 0.35 }}
                  transition={{ duration: 0.4 }}
                  className="lg:transition-opacity"
                >
                  <span className="inline-flex items-center gap-2 text-[14.5px] font-medium text-lima">
                    <Sparkle className="h-3.5 w-3.5" />
                    {s.label}
                  </span>
                  <h3 className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-white/60">{s.text}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* foto fixa que troca (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 h-[74vh] overflow-hidden rounded-[36px] border border-white/10 bg-carvao shadow-[0_50px_120px_-50px_rgba(0,0,0,1)]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current.id}
                  src={current.img}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="text-[19px] font-semibold tracking-[-0.02em] text-white"
                  >
                    {current.label}
                  </motion.p>
                </AnimatePresence>
                <div className="flex gap-1.5">
                  {STEPS.map((s, i) => (
                    <span
                      key={s.id}
                      className={`h-1 rounded-full transition-all duration-500 ${active === i ? 'w-8 bg-lima' : 'w-4 bg-white/25'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Sheet>
  )
}
