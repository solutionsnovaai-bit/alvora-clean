import type { ReactNode } from 'react'

/**
 * Folha com topo arredondado que sobe por cima da seção anterior.
 * É o que funde preto e branco sem faixa de corte seca.
 */
export function Sheet({
  id,
  tone = 'dark',
  children,
  className = '',
  glow = false,
}: {
  id?: string
  tone?: 'dark' | 'light' | 'graphite'
  children: ReactNode
  className?: string
  glow?: boolean
}) {
  const toneClass =
    tone === 'light'
      ? 'bg-nevoa text-tinta shadow-[0_-30px_80px_-40px_rgba(124,194,66,.35)]'
      : tone === 'graphite'
        ? 'bg-grafite text-white shadow-[0_-30px_80px_-30px_rgba(0,0,0,.9)]'
        : 'bg-noite text-white shadow-[0_-30px_80px_-30px_rgba(0,0,0,.9)]'
  return (
    <section
      id={id}
      className={`relative -mt-12 overflow-x-clip rounded-t-[40px] pb-[calc(6rem+3rem)] pt-24 sm:rounded-t-[56px] lg:rounded-t-[72px] lg:pb-[calc(8rem+3rem)] lg:pt-32 ${toneClass} ${className}`}
    >
      {/* decoração fica num recorte próprio para não quebrar o sticky das colunas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[40px] sm:rounded-t-[56px] lg:rounded-t-[72px]"
      >
        {glow && (
          <div
            className="absolute left-1/2 top-0 h-[420px] w-[min(1100px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.22), transparent)' }}
          />
        )}
        {tone !== 'light' && (
          <div className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        )}
      </div>
      <div className="relative">{children}</div>
    </section>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-6 sm:px-10 ${className}`}>{children}</div>
}

export function Heading({
  title,
  lead,
  align = 'left',
  tone = 'dark',
  className = '',
}: {
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-[46rem] ${className}`}>
      <h2
        className={`text-[clamp(2.3rem,5.4vw,4.1rem)] font-bold leading-[1.02] tracking-[-0.035em] ${
          tone === 'light' ? 'text-tinta' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-[17px] leading-relaxed sm:text-[18.5px] ${tone === 'light' ? 'text-tinta/60' : 'text-white/55'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}
