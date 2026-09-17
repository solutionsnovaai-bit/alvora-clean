import { Container } from './Section'
import { WhatsAppIcon, Sparkle } from './icons'
import { waLink, PHONE_DISPLAY } from '../lib/site'

export default function FinalCTA() {
  return (
    <section aria-label="Agende sua limpeza" className="grain relative -mt-12 overflow-hidden rounded-t-[40px] bg-noite pb-32 pt-28 sm:rounded-t-[56px] lg:rounded-t-[72px] lg:pb-40 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[80vmin] w-[140vmin] -translate-x-1/2 rounded-[50%]"
        style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.32), rgba(63,154,44,.12) 45%, transparent)' }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <Sparkle className="twinkle absolute left-[12%] top-[22%] h-5 w-5 text-lima-claro" style={{ ['--d' as string]: '.4s' }} />
      <Sparkle className="twinkle absolute right-[14%] top-[34%] h-3.5 w-3.5 text-lima" style={{ ['--d' as string]: '1.3s' }} />
      <Sparkle className="twinkle absolute bottom-[26%] left-[20%] h-3 w-3 text-lima" style={{ ['--d' as string]: '2s' }} />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-[14ch] text-[clamp(2.8rem,8vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white">
          Chegou o fim de semana.
        </h2>
        <p className="mt-5 text-[clamp(1.5rem,3.6vw,2.6rem)] font-light tracking-[-0.02em] text-white/70">Descansar ou limpar a casa?</p>
        <p className="mx-auto mt-6 max-w-[44ch] text-[17px] leading-relaxed text-white/55">
          Deixe a faxina com a Alvora Clean e aproveite o seu tempo com quem você ama.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={waLink('Olá, Alvora Clean! Quero descansar no fim de semana. Vamos agendar minha limpeza?')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lima inline-flex h-16 items-center gap-3 rounded-full px-9 text-[18px] font-semibold"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Agendar minha limpeza
          </a>
          <span className="text-[15px] text-white/45">WhatsApp {PHONE_DISPLAY}</span>
        </div>
      </Container>
    </section>
  )
}
