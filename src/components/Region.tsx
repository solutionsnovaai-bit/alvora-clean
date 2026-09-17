import { Sheet, Container } from './Section'
import { CITIES, waLink } from '../lib/site'
import { WhatsAppIcon } from './icons'

export default function Region() {
  return (
    <Sheet tone="light" id="regiao">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
        <div>
          <h2 className="text-[clamp(2.3rem,5.4vw,4.1rem)] font-bold leading-[1.02] tracking-[-0.035em] text-tinta">Onde a Alvora atende.</h2>
          <ul className="mt-10 border-t border-tinta/10">
            {CITIES.map((c) => (
              <li key={c} className="group flex items-baseline justify-between gap-6 border-b border-tinta/10 py-5 sm:py-6">
                <span className="text-[clamp(2rem,5.2vw,3.9rem)] font-semibold leading-none tracking-[-0.04em] text-tinta transition-colors duration-300 group-hover:text-folha">
                  {c}
                </span>
                <span className="text-[14px] tabular-nums text-tinta/35">SP</span>
              </li>
            ))}
            <li className="py-5 text-[clamp(1.4rem,2.6vw,2rem)] font-light tracking-[-0.02em] text-tinta/55 sm:py-6">e cidades vizinhas</li>
          </ul>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_70px_-40px_rgba(11,15,11,.35)] sm:p-10">
          <p className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-tinta">Não achou a sua cidade?</p>
          <p className="mt-3 text-[16.5px] leading-relaxed text-tinta/60">
            A agenda tem flexibilidade de datas e a região cresce a cada semana. Pergunte no WhatsApp se a gente chega até você.
          </p>
          <a
            href={waLink('Olá, Alvora Clean! Vocês atendem a minha cidade? Moro em: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lima mt-8 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-[16px] font-semibold"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Perguntar pela minha cidade
          </a>
        </div>
      </Container>
    </Sheet>
  )
}
