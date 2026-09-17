import { Sparkle } from './icons'

type Tone = 'lima' | 'dark' | 'light'

const TONES: Record<Tone, { wrap: string; text: string; star: string }> = {
  lima: {
    wrap: 'bg-gradient-to-r from-folha via-lima to-lima-claro shadow-[0_20px_60px_-25px_rgba(124,194,66,.7)]',
    text: 'text-tinta',
    star: 'text-tinta/70',
  },
  dark: {
    wrap: 'bg-carvao border-y border-white/[.08]',
    text: 'text-white/85',
    star: 'text-lima',
  },
  light: {
    wrap: 'bg-white border-y border-black/[.06]',
    text: 'text-tinta',
    star: 'text-folha',
  },
}

export function MarqueeBand({
  items,
  tone = 'lima',
  duration = 40,
  reverse = false,
  className = '',
  size = 'md',
}: {
  items: string[]
  tone?: Tone
  duration?: number
  reverse?: boolean
  className?: string
  size?: 'md' | 'lg'
}) {
  const t = TONES[tone]
  const loop = [...items, ...items, ...items]
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {loop.map((w, i) => (
        <li key={i} className={`flex items-center whitespace-nowrap ${t.text}`}>
          <span className={size === 'lg' ? 'px-7 text-[clamp(2rem,5vw,4.2rem)] font-semibold tracking-[-0.03em]' : 'px-5 text-[clamp(1.05rem,1.8vw,1.35rem)] font-semibold tracking-[-0.01em]'}>
            {w}
          </span>
          <Sparkle className={`${size === 'lg' ? 'h-6 w-6 sm:h-8 sm:w-8' : 'h-3.5 w-3.5'} ${t.star}`} />
        </li>
      ))}
    </ul>
  )
  return (
    <div className={`relative overflow-hidden ${size === 'lg' ? 'py-6' : 'py-3.5'} ${t.wrap} ${className}`}>
      <div className="marquee-track" data-reverse={reverse} style={{ ['--dur' as string]: `${duration}s` }}>
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}

/** Duas faixas cruzadas, como fitas passando entre as seções */
export function CrossBands({ a, b }: { a: string[]; b: string[] }) {
  return (
    <div className="relative z-20 -my-10 overflow-hidden py-16 sm:-my-12" aria-label="Serviços da Alvora Clean">
      <MarqueeBand items={b} tone="dark" duration={55} reverse className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2.2deg] opacity-90" />
      <MarqueeBand items={a} tone="lima" duration={42} className="relative -rotate-[2.2deg] scale-x-[1.1]" />
    </div>
  )
}
