import { motion } from 'framer-motion'
import { Sheet, Container } from './Section'
import { AREAS, waLink, EASE } from '../lib/site'
import { WhatsAppIcon, Sparkle } from './icons'

export default function Region() {
  return (
    <Sheet tone="light" id="regiao">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[clamp(2.3rem,5.4vw,4.1rem)] font-bold leading-[1.02] tracking-[-0.035em] text-tinta">
            Atendemos todo o estado de São Paulo.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-tinta/60">
            Da capital ao interior, com equipe organizada por região e data combinada com você. Diga onde fica o
            imóvel que a gente confirma a disponibilidade na hora.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {AREAS.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-2xl border border-tinta/[.07] bg-white px-5 py-4 text-[17px] font-semibold tracking-[-0.01em] text-tinta"
              >
                <Sparkle className="h-3.5 w-3.5 shrink-0 text-folha" />
                {a}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_70px_-40px_rgba(11,15,11,.35)] sm:p-10">
          <p className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-tinta">Onde fica o seu imóvel?</p>
          <p className="mt-3 text-[16.5px] leading-relaxed text-tinta/60">
            Manda a cidade e o bairro no WhatsApp. A gente confirma a equipe disponível e as datas mais próximas.
          </p>
          <a
            href={waLink('Olá, Alvora Clean! Meu imóvel fica em: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lima mt-8 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-[16px] font-semibold"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Confirmar minha região
          </a>
        </div>
      </Container>
    </Sheet>
  )
}
