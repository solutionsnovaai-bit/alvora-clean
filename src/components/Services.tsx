import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { Icon, Sparkle, WhatsAppIcon, type IconName } from './icons'
import { waLink, EASE } from '../lib/site'

type Group = 'casa' | 'obra' | 'empresa'

type Service = {
  id: string
  group: Group
  icon: IconName
  name: string
  short: string
  text: string
  items: string[]
}

const GROUPS: { id: Group; label: string }[] = [
  { id: 'casa', label: 'Para sua casa' },
  { id: 'obra', label: 'Obra e mudança' },
  { id: 'empresa', label: 'Para empresas' },
]

const SERVICES: Service[] = [
  {
    id: 'residencial',
    group: 'casa',
    icon: 'casa',
    name: 'Limpeza residencial',
    short: 'A rotina da casa em dia',
    text: 'Manutenção contínua para o seu lar ficar sempre higienizado, perfumado e acolhedor, sem a sujeira acumular.',
    items: ['Pó dos móveis e superfícies', 'Chão varrido ou aspirado e com pano', 'Cozinha: pia, bancadas e fogão', 'Banheiros: louças, box e espelhos', 'Quartos e sala em ordem', 'Lixo recolhido'],
  },
  {
    id: 'profunda',
    group: 'casa',
    icon: 'profunda',
    name: 'Limpeza profunda',
    short: 'Para a sujeira que acumulou',
    text: 'Higienização minuciosa em azulejos, cantos difíceis, armários e áreas com sujeira pesada acumulada.',
    items: ['Azulejos e rejuntes', 'Cantos, rodapés e atrás dos móveis', 'Armários por dentro e por fora', 'Portas, batentes e interruptores', 'Gordura da cozinha', 'Vidros e janelas ao alcance'],
  },
  {
    id: 'apartamentos',
    group: 'casa',
    icon: 'apartamento',
    name: 'Limpeza de apartamentos',
    short: 'Ágil e adaptada ao condomínio',
    text: 'Serviço ágil e adaptado à rotina de condomínios e apartamentos, aproveitando cada metro com eficiência.',
    items: ['Horário alinhado às regras do prédio', 'Sacada e área de serviço', 'Cozinha e banheiros', 'Pó e chão de todos os cômodos'],
  },
  {
    id: 'pos-obra',
    group: 'obra',
    icon: 'obra',
    name: 'Limpeza pós-obra',
    short: 'Acabou a reforma? A gente assume',
    text: 'Remoção técnica de poeira fina, resíduos de gesso e respingos de tinta. Seu imóvel pronto para morar.',
    items: ['Poeira fina de todas as superfícies', 'Resíduos de gesso e cimento', 'Respingos de tinta', 'Vidros, esquadrias e trilhos', 'Pisos e rodapés', 'Banheiros e cozinha prontos para uso'],
  },
  {
    id: 'pos-mudanca',
    group: 'obra',
    icon: 'mudanca',
    name: 'Limpeza pós-mudança',
    short: 'Para chegar ou para entregar',
    text: 'Desinfecção completa para receber sua família no endereço novo ou entregar o imóvel antigo impecável.',
    items: ['Armários vazios limpos por dentro', 'Banheiros e cozinha higienizados', 'Pisos, rodapés e portas', 'Janelas e vidros'],
  },
  {
    id: 'comercial',
    group: 'empresa',
    icon: 'comercial',
    name: 'Limpeza comercial',
    short: 'Escritórios, lojas e consultórios',
    text: 'O seu espaço limpo e cheiroso antes do primeiro cliente chegar, com a frequência que a sua rotina pede.',
    items: ['Recepção e estações de trabalho', 'Banheiros e copa', 'Pisos e vidros', 'Frequência combinada com a empresa'],
  },
]

export default function Services() {
  const [group, setGroup] = useState<Group>('casa')
  const [activeId, setActiveId] = useState('residencial')
  const list = SERVICES.filter((s) => s.group === group)
  const active = SERVICES.find((s) => s.id === activeId) ?? list[0]

  const changeGroup = (g: Group) => {
    setGroup(g)
    setActiveId(SERVICES.find((s) => s.group === g)!.id)
  }

  return (
    <Sheet id="servicos" tone="light">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Heading
            tone="light"
            title="Do dia a dia à obra entregue."
            lead="Escolha o tipo de limpeza e veja o que costuma entrar. O escopo final é combinado no orçamento, do jeito que o seu espaço precisa."
          />
          <div role="tablist" aria-label="Tipos de serviço" className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:px-0">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={group === g.id}
                onClick={() => changeGroup(g.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors ${
                  group === g.id ? 'text-white' : 'text-tinta/60 hover:text-tinta'
                }`}
              >
                {group === g.id && (
                  <motion.span layoutId="svc-tab" className="absolute inset-0 rounded-full bg-tinta" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                )}
                <span className="relative">{g.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
          <ul className="flex flex-col gap-2">
            {list.map((s) => {
              const on = s.id === active.id
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setActiveId(s.id)}
                    aria-pressed={on}
                    className={`group flex w-full items-center gap-4 rounded-[22px] border p-4 text-left transition-all duration-300 sm:p-5 ${
                      on ? 'border-tinta/10 bg-white shadow-[0_20px_50px_-30px_rgba(11,15,11,.45)]' : 'border-transparent hover:bg-white/60'
                    }`}
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
                        on ? 'bg-tinta text-lima' : 'bg-tinta/[.06] text-tinta/70'
                      }`}
                    >
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[18px] font-semibold tracking-[-0.01em] text-tinta">{s.name}</span>
                      <span className="block text-[15px] text-tinta/55">{s.short}</span>
                    </span>
                    <span className={`h-2 w-2 shrink-0 rounded-full transition-all ${on ? 'scale-100 bg-lima' : 'scale-0 bg-transparent'}`} />
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative overflow-hidden rounded-[32px] bg-tinta p-7 text-white sm:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
                  style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.28), transparent)' }}
                />
                <Icon name={active.icon} className="relative h-10 w-10 text-lima" />
                <h3 className="relative mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em]">{active.name}</h3>
                <p className="relative mt-4 max-w-[40ch] text-[17px] leading-relaxed text-white/65">{active.text}</p>

                <p className="relative mt-8 text-[14px] text-white/45">O que costuma entrar</p>
                <ul className="relative mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {active.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[16px] text-white/85">
                      <Sparkle className="mt-1.5 h-3 w-3 shrink-0 text-lima" />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-9 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[14.5px] text-white/50">Produtos e equipamentos inclusos.</p>
                  <a
                    href={waLink(`Olá, Alvora Clean! Quero um orçamento de ${active.name.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lima inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15.5px] font-semibold"
                  >
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                    Pedir orçamento
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Sheet>
  )
}
