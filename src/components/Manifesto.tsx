import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { Container } from './Section'
import { Sparkle } from './icons'

const TEXT =
  'Chegar em casa e sentir o cheiro de limpo. A bancada livre, o box sem marca, o chão brilhando. E o seu fim de semana inteiro de volta. É isso que a Alvora entrega em cada visita.'

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <span className="relative mr-[0.26em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

export default function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = TEXT.split(' ')

  return (
    <section aria-label="Sobre a Alvora Clean" className="grain relative overflow-hidden bg-noite pb-40 pt-28 lg:pb-52 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[520px] w-[520px] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.10), transparent)' }}
      />
      <Container>
        <div className="flex items-center gap-3 text-[15px] text-white/45">
          <Sparkle className="twinkle h-4 w-4 text-lima" />
          <span>O que a gente entrega</span>
        </div>
        <p
          ref={ref}
          className="mt-8 max-w-[22ch] text-[clamp(2rem,5.6vw,4.6rem)] font-semibold leading-[1.08] tracking-[-0.035em] sm:max-w-[24ch]"
        >
          {words.map((w, i) => {
            const start = i / words.length
            const end = start + 1.5 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, Math.min(end, 1)]}>
                {w}
              </Word>
            )
          })}
        </p>
      </Container>
    </section>
  )
}
