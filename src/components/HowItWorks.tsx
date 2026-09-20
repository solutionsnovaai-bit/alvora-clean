import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { waLink } from '../lib/site'
import { WhatsAppIcon } from './icons'

const STEPS = [
  { title: 'Chame no WhatsApp', text: 'Conte o tipo de imóvel, o serviço que precisa e a sua cidade.' },
  { title: 'Receba o orçamento', text: 'Valores claros e sem compromisso, antes de qualquer agendamento.' },
  { title: 'Escolha o dia', text: 'Marcamos a data e o horário que funcionam na sua rotina.' },
  { title: 'Aproveite a casa pronta', text: 'A equipe chega com todos os produtos e equipamentos. Você só aproveita.' },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.55'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Sheet id="como-funciona" tone="dark" glow>
      <Container>
        <Heading title="Do primeiro oi à casa pronta." lead="Quatro passos, todos resolvidos pelo WhatsApp." />

        <div ref={ref} className="relative mt-16 lg:mt-24">
          {/* trilho horizontal (desktop) */}
          <div aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px bg-white/10 lg:block" />
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-[27px] hidden h-px origin-left bg-gradient-to-r from-folha via-lima to-lima-claro shadow-[0_0_14px_rgba(124,194,66,.8)] lg:block"
            style={{ scaleX: progress }}
          />
          {/* trilho vertical (mobile) */}
          <div aria-hidden className="absolute bottom-6 left-[27px] top-2 w-px bg-white/10 lg:hidden" />
          <motion.div
            aria-hidden
            className="absolute bottom-6 left-[27px] top-2 w-px origin-top bg-gradient-to-b from-folha via-lima to-lima-claro shadow-[0_0_14px_rgba(124,194,66,.8)] lg:hidden"
            style={{ scaleY: progress }}
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative flex gap-6 lg:block">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-lima/35 bg-noite text-[18px] font-semibold tabular-nums text-lima shadow-[0_0_0_6px_#030403]">
                  {i + 1}
                </span>
                <div className="pt-2 lg:pt-8">
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white">{s.title}</h3>
                  <p className="mt-2 max-w-[28ch] text-[16px] leading-relaxed text-white/55">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex justify-start lg:mt-20">
          <a
            href={waLink('Olá, Alvora Clean! Quero começar meu orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lima inline-flex h-14 items-center gap-2.5 rounded-full px-7 text-[17px] font-semibold"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Dar o primeiro oi
          </a>
        </div>
      </Container>
    </Sheet>
  )
}
