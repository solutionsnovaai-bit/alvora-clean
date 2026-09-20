import { useRef, type PointerEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import logoTextured from '../assets/brand/logo-textured.webp'
import { Container } from './Section'
import { Sparkle } from './icons'

const SPARKS = [
  { l: '8%', t: '14%', s: 14, d: '0s' },
  { l: '88%', t: '10%', s: 10, d: '1.1s' },
  { l: '94%', t: '62%', s: 16, d: '.5s' },
  { l: '4%', t: '78%', s: 11, d: '1.7s' },
  { l: '52%', t: '96%', s: 9, d: '2.2s' },
]

export default function BrandMoment() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [0, 1], [-11, 11]), { stiffness: 150, damping: 18 })
  const glareX = useTransform(mx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(my, [0, 1], ['0%', '100%'])
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,.35), transparent 45%)`

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <section aria-label="Excelência em cada detalhe" className="grain relative overflow-hidden bg-noite pb-40 pt-28 lg:pb-48 lg:pt-36">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="text-[clamp(2.8rem,7vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white">
            Excelência
            <br />
            <span className="font-light text-white/75">em cada</span>
            <br />
            detalhe.
          </p>
          <p className="mt-8 max-w-[40ch] text-[18px] leading-relaxed text-white/55">
            Não é só a nossa assinatura. É o padrão que a equipe leva para cada cômodo, em cada visita, do rejunte ao último vidro.
          </p>
        </div>

        <div className="order-1 flex justify-center lg:order-2" style={{ perspective: 1200 }}>
          <motion.div
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={reset}
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            className="relative aspect-square w-[min(84vw,500px)]"
          >
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full"
              style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.3), transparent)', transform: 'translateZ(-60px)' }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[40px] border border-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,1)]">
              <img src={logoTextured} alt="Logo da Alvora Clean em metal perolado e vidro verde" loading="lazy" className="h-full w-full object-cover" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                style={{ background: glare }}
              />
            </div>
            {SPARKS.map((s, i) => (
              <Sparkle
                key={i}
                className="twinkle absolute text-lima-claro drop-shadow-[0_0_8px_rgba(166,227,107,.9)]"
                style={{ left: s.l, top: s.t, width: s.s, height: s.s, ['--d' as string]: s.d }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
