import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import heroDesktop from '../assets/brand/hero-desktop.webp'
import heroMobile from '../assets/brand/hero-mobile.webp'
import { waLink, EASE } from '../lib/site'
import { WhatsAppIcon, Sparkle, ArrowIcon } from './icons'

const WORDS = ['residencial', 'pós-obra', 'pós-mudança', 'profunda', 'comercial']

/** Onda que imita o swoosh do logo, redesenhada a cada palavra */
function Swoosh() {
  return (
    <svg viewBox="0 0 320 30" preserveAspectRatio="none" className="absolute -bottom-[0.16em] left-0 h-[0.2em] w-full overflow-visible" aria-hidden>
      <defs>
        <linearGradient id="swooshGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#3f9a2c" />
          <stop offset="50%" stopColor="#7cc242" />
          <stop offset="100%" stopColor="#a6e36b" />
        </linearGradient>
      </defs>
      <motion.path
        d="M4 22 C 58 4, 118 2, 168 14 S 266 30, 316 8"
        fill="none"
        stroke="url(#swooshGrad)"
        strokeWidth={7}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      />
    </svg>
  )
}

function WordRotator({ running }: { running: boolean }) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600)
    return () => clearInterval(id)
  }, [running])

  return (
    <span className="relative inline-grid align-baseline" aria-live="polite">
      {/* reserva a largura da maior palavra, sem pulo de layout */}
      {WORDS.map((w) => (
        <span key={w} className="invisible col-start-1 row-start-1" aria-hidden>
          {w}
        </span>
      ))}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={WORDS[i]}
          className="relative col-start-1 row-start-1 text-white"
          initial={reduce ? { opacity: 0 } : { y: '0.45em', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={reduce ? { opacity: 0 } : { y: '-0.35em', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {WORDS[i]}
          <Swoosh />
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero({ ready }: { ready: boolean }) {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
    animate: ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {},
    transition: { duration: 1, ease: EASE, delay: 0.35 + delay },
  })

  return (
    <section id="inicio" className="hero grain relative isolate min-h-[100svh] overflow-hidden bg-noite pb-20 lg:flex lg:items-center lg:pb-0">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Logo da Alvora Clean em metal e vidro verde, com anel iluminado"
            className="hero-img"
            {...({ fetchpriority: 'high' } as Record<string, string>)}
            decoding="async"
          />
        </picture>
      </motion.div>

      {/* costura inferior: o hero derrete no preto da página */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-noite" />

      <div className="hero-copy relative z-10 px-6 text-center sm:px-10 lg:px-0 lg:text-left">
        <motion.a
          href="#planos"
          {...item(0)}
          className="group mx-auto inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-lima/30 bg-lima/[.08] py-1.5 pl-2 pr-3.5 text-[13px] text-white/85 backdrop-blur-sm transition-colors hover:border-lima/60 sm:gap-2.5 sm:pr-4 sm:text-[14px] lg:mx-0"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-lima text-tinta">
            <Sparkle className="h-3 w-3" />
          </span>
          <span className="hidden sm:inline">Lançamento: </span>fechou 1 diária, ganhou a 2ª
          <ArrowIcon className="h-3.5 w-3.5 text-lima transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          {...item(0.08)}
          className="hero-title mt-5 font-bold leading-[0.98] tracking-[-0.035em] text-white"
        >
          <span className="block font-light text-white/80">Limpeza</span>
          <span className="block">
            <WordRotator running={ready} />
          </span>
          <span className="mt-[0.3em] block text-[0.52em] font-medium leading-[1.1] tracking-[-0.02em] text-white/70">
            com cuidado que se vê.
          </span>
        </motion.h1>

        <motion.p {...item(0.18)} className="mx-auto mt-6 max-w-[34rem] text-[17px] leading-relaxed text-white/60 lg:mx-0 lg:text-[18px]">
          Produtos e equipamentos por nossa conta, horário combinado e a casa pronta quando você chegar. Atendemos todo o estado de São Paulo.
        </motion.p>

        <motion.div {...item(0.28)} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
          <a
            href={waLink('Olá, Alvora Clean! Vim pelo site e quero agendar uma limpeza.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lima inline-flex h-14 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-6 text-[16.5px] font-semibold sm:px-7 sm:text-[17px]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a href="#orcamento" className="btn-ghost inline-flex h-14 items-center justify-center whitespace-nowrap rounded-full px-6 text-[16.5px] font-medium sm:px-7 sm:text-[17px]">
            Montar meu orçamento
          </a>
        </motion.div>

        <motion.ul {...item(0.38)} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14.5px] text-white/55 lg:justify-start">
          {['Produtos inclusos', 'Orçamento sem compromisso', 'Equipe selecionada'].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Sparkle className="h-3 w-3 text-lima" />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
