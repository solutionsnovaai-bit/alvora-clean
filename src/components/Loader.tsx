import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ringImg from '../assets/brand/loader-ring.webp'
import iconImg from '../assets/brand/loader-icon.webp'
import wordImg from '../assets/brand/loader-word.webp'
import cleanImg from '../assets/brand/loader-clean.webp'
import taglineImg from '../assets/brand/loader-tagline.webp'
import heroDesktop from '../assets/brand/hero-desktop.webp'
import heroMobile from '../assets/brand/hero-mobile.webp'
import { Sparkle } from './icons'

/*
  O logo é o arquivo original da marca, separado em 5 camadas do mesmo tamanho
  (anel, ícone, ALVORA, CLEAN, frase). Empilhadas, formam o logo exato.
  Coordenadas abaixo em % do quadro, medidas no arquivo original.
*/
const RING = { cx: 495.6, cy: 488.8, r: 443.5 } // viewBox 1000
const STAR = { x: '54.7%', y: '54.35%' }
const SEQUENCE_MS = 3100
const DRAW = { duration: 1.3, ease: [0.65, 0, 0.35, 1] as const }

function preload(src: string) {
  const img = new Image()
  img.src = src
  return img.decode().catch(() => undefined)
}

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const reduce = useReducedMotion()
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let alive = true
    const minTime = reduce ? 600 : SEQUENCE_MS
    const start = performance.now()
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches

    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', () => resolve(), { once: true })
    })
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts?.ready ?? Promise.resolve()
    const assets = Promise.all([pageLoaded, fonts, preload(isDesktop ? heroDesktop : heroMobile)])
    const cap = new Promise((r) => setTimeout(r, 7000))

    let raf = 0
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / minTime)
      const eased = 1 - Math.pow(1 - t, 3)
      setPct((p) => Math.max(p, Math.round(eased * 94)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    Promise.all([Promise.race([assets, cap]), new Promise((r) => setTimeout(r, minTime))]).then(() => {
      if (!alive) return
      setPct(100)
      setTimeout(() => alive && onFinish(), reduce ? 150 : 520)
    })

    return () => {
      alive = false
      cancelAnimationFrame(raf)
    }
  }, [onFinish, reduce])

  const t = (delay: number, duration = 0.9) =>
    reduce ? { duration: 0.3 } : { delay, duration, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <motion.div
      role="status"
      aria-label="Carregando o site da Alvora Clean"
      className="grain fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-noite"
      initial={{ clipPath: 'circle(150% at 50% 46%)' }}
      exit={
        reduce
          ? { opacity: 0, transition: { duration: 0.3 } }
          : { clipPath: 'circle(0% at 50% 46%)', transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }
      }
    >
      {/* brilho verde que respira atrás do logo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[46%] h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,194,66,.20) 0%, rgba(124,194,66,.06) 32%, transparent 62%)' }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: [0, 1, 0.7, 1], scale: [0.7, 1, 0.96, 1] }}
        transition={reduce ? { duration: 0.3 } : { duration: 3.2, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative -mt-[6vh] aspect-square w-[min(82vw,460px)]"
        exit={reduce ? undefined : { scale: 0.82, opacity: 0, filter: 'blur(6px)', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
      >
        {/* 1. o anel é desenhado com uma faísca na ponta */}
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a6e36b" />
              <stop offset="55%" stopColor="#7cc242" />
              <stop offset="100%" stopColor="#3f9a2c" />
            </linearGradient>
            <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <motion.circle
            cx={RING.cx}
            cy={RING.cy}
            r={RING.r}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={10}
            strokeLinecap="round"
            filter="url(#ringGlow)"
            transform={`rotate(-90 ${RING.cx} ${RING.cy})`}
            initial={{ pathLength: reduce ? 1 : 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0] }}
            transition={reduce ? { duration: 0 } : { pathLength: { delay: 0.1, ...DRAW }, opacity: { delay: 1.35, duration: 0.7, times: [0, 0.2, 1] } }}
          />
        </svg>

        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{ transformOrigin: `${RING.cx / 10}% ${RING.cy / 10}%` }}
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: [0, 1, 1, 0] }}
            transition={{ rotate: { delay: 0.1, ...DRAW }, opacity: { delay: 0.1, duration: 1.45, times: [0, 0.08, 0.85, 1] } }}
          >
            <span
              className="absolute block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
              style={{
                left: `${RING.cx / 10}%`,
                top: `${(RING.cy - RING.r) / 10}%`,
                boxShadow: '0 0 12px 4px rgba(166,227,107,.95), 0 0 36px 10px rgba(124,194,66,.6)',
              }}
            />
          </motion.div>
        )}

        {/* anel exato do arquivo substitui o desenhado */}
        <motion.img
          src={ringImg}
          alt=""
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={t(1.2, 0.6)}
        />

        {/* 2. ícone sobe de baixo pra cima */}
        <motion.img
          src={iconImg}
          alt=""
          className="absolute inset-0 h-full w-full"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(58% 0% 0% 0%)', opacity: 0, y: 26, filter: 'blur(10px)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={t(0.45, 1)}
        />

        {/* 3. ALVORA é revelado da esquerda pra direita */}
        <div className="absolute inset-0">
          <motion.img
            src={wordImg}
            alt="Alvora Clean"
            className="absolute inset-0 h-full w-full"
            initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0% 100% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={t(0.95, 1)}
          />
          {!reduce && (
            <motion.div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(100deg, transparent 38%, rgba(255,255,255,.95) 50%, transparent 62%)',
                backgroundSize: '300% 100%',
                WebkitMaskImage: `url(${wordImg})`,
                maskImage: `url(${wordImg})`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                mixBlendMode: 'screen',
              }}
              initial={{ backgroundPosition: '120% 0', opacity: 0 }}
              animate={{ backgroundPosition: '-20% 0', opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.95, duration: 1.1, ease: 'easeInOut' }}
            />
          )}
        </div>

        {/* brilho da estrela do "O" */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: STAR.x, top: STAR.y }}
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: [0, 1.35, 0.9], opacity: [0, 1, 0], rotate: [-45, 0, 20] }}
            transition={{ delay: 1.55, duration: 1.1, ease: 'easeOut' }}
          >
            <div
              className="h-[min(22vw,120px)] w-[min(22vw,120px)] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(166,227,107,.75) 0%, rgba(124,194,66,.25) 35%, transparent 70%)' }}
            />
            <Sparkle className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_10px_rgba(166,227,107,1)]" />
          </motion.div>
        )}

        {/* 4. CLEAN abre do centro pras bordas */}
        <motion.img
          src={cleanImg}
          alt=""
          className="absolute inset-0 h-full w-full"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0% 50% 0% 50%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          transition={t(1.6, 0.85)}
        />

        {/* 5. a frase aparece por último */}
        <motion.img
          src={taglineImg}
          alt=""
          className="absolute inset-0 h-full w-full"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={t(2.05, 0.8)}
        />
      </motion.div>

      {/* progresso */}
      <motion.div
        className="absolute inset-x-0 bottom-[max(6vh,28px)] mx-auto flex w-[min(78vw,280px)] flex-col items-center gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={t(0.3, 0.6)}
      >
        <div className="flex w-full items-baseline justify-between text-[13px] text-white/55">
          <span>Preparando cada detalhe</span>
          <span className="tabular-nums text-white/85">{pct}%</span>
        </div>
        <div className="h-px w-full overflow-hidden bg-white/10">
          <div
            className="h-full origin-left bg-gradient-to-r from-folha via-lima to-lima-claro transition-transform duration-200 ease-out"
            style={{ transform: `scaleX(${pct / 100})` }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
