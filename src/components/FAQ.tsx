import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { PlusIcon, WhatsAppIcon } from './icons'
import { JOBS_FORM_URL, waLink, EASE } from '../lib/site'

const QA: { q: string; a: ReactNode }[] = [
  {
    q: 'Vocês levam os produtos e equipamentos?',
    a: 'Sim, estão 100% inclusos. A equipe leva todos os produtos e materiais profissionais que o serviço precisa. Você não precisa comprar nem separar nada.',
  },
  {
    q: 'Como funciona o orçamento?',
    a: 'Você conta o tipo de imóvel e o serviço pelo WhatsApp e recebe os valores com transparência e sem compromisso. Se preferir, use o montador de orçamento aqui do site: a mensagem já sai pronta.',
  },
  {
    q: 'Quais cidades vocês atendem?',
    a: 'Franco da Rocha, Francisco Morato, Jundiaí e cidades vizinhas, com flexibilidade de datas.',
  },
  {
    q: 'Como funciona a promoção de lançamento?',
    a: 'Na inauguração, quem fecha uma diária ganha a segunda. As vagas são limitadas e as condições são confirmadas pelo WhatsApp antes do agendamento.',
  },
  {
    q: 'Qual a diferença entre o plano quinzenal e o semanal?',
    a: 'O quinzenal tem 2 atendimentos por mês, com a mesma profissional e desconto na diária. O semanal tem 4 atendimentos, dia fixo na semana, limpeza profunda no cronograma e a maior economia por atendimento.',
  },
  {
    q: 'Vocês fazem limpeza pós-obra?',
    a: 'Fazemos. Removemos a poeira fina, os resíduos de gesso e os respingos de tinta, e o imóvel fica pronto para morar.',
  },
  {
    q: 'Quero trabalhar na Alvora. Como faço?',
    a: (
      <>
        Preencha o{' '}
        <a href={JOBS_FORM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-lima underline decoration-lima/40 underline-offset-4 hover:decoration-lima">
          formulário de vagas para diaristas
        </a>
        . A gente entra em contato.
      </>
    ),
  },
]

function Item({ q, a, open, onToggle, id }: { q: string; a: ReactNode; open: boolean; onToggle: () => void; id: string }) {
  return (
    <div className={`rounded-[24px] border transition-colors duration-300 ${open ? 'border-lima/30 bg-white/[.04]' : 'border-white/[.08] bg-transparent'}`}>
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
        >
          <span className="text-[17.5px] font-semibold tracking-[-0.01em] text-white sm:text-[19px]">{q}</span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
              open ? 'rotate-45 bg-lima text-tinta' : 'bg-white/[.06] text-white'
            }`}
          >
            <PlusIcon className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[16.5px] leading-relaxed text-white/60 sm:px-7 sm:pb-7">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <Sheet id="duvidas" tone="dark">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading title="Dúvidas frequentes." lead="Não achou o que procurava? Pergunte direto pra gente." />
          <a
            href={waLink('Olá, Alvora Clean! Tenho uma dúvida: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8 inline-flex h-13 items-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] font-medium"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-lima" />
            Tirar uma dúvida
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {QA.map((item, i) => (
            <Item key={item.q} id={`faq-${i}`} q={item.q} a={item.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Container>
    </Sheet>
  )
}
