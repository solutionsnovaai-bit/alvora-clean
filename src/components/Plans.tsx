import { Sheet, Container, Heading } from './Section'
import { Icon, Sparkle, WhatsAppIcon } from './icons'
import { waLink } from '../lib/site'

type Plan = {
  name: string
  kicker: string
  headline: string
  items: string[]
  cta: string
  msg: string
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Combo lançamento',
    kicker: 'Promoção de inauguração',
    headline: 'Fechou 1 diária, ganhou a 2ª.',
    items: ['Para as primeiras vagas da região', 'Conheça o nosso padrão de limpeza', 'Produtos e equipamentos inclusos', 'Condições confirmadas no WhatsApp'],
    cta: 'Garantir minha vaga',
    msg: 'Olá, Alvora Clean! Quero garantir minha vaga na promoção de lançamento (fechou 1 diária, ganhou a 2ª).',
    featured: true,
  },
  {
    name: 'Plano quinzenal',
    kicker: '2 atendimentos por mês',
    headline: 'Casa sempre em manutenção.',
    items: ['A mesma profissional de confiança', 'Desconto no valor da diária', 'Prioridade na agenda', 'Produtos e equipamentos inclusos'],
    cta: 'Consultar o quinzenal',
    msg: 'Olá, Alvora Clean! Quero saber mais sobre o plano quinzenal.',
  },
  {
    name: 'Plano semanal',
    kicker: '4 atendimentos por mês',
    headline: 'A casa impecável, toda semana.',
    items: ['Dia fixo na semana garantido', 'Limpeza profunda no cronograma', 'Maior economia por atendimento', 'Atendimento prioritário'],
    cta: 'Consultar o semanal',
    msg: 'Olá, Alvora Clean! Quero saber mais sobre o plano semanal.',
  },
]

export default function Plans() {
  return (
    <Sheet id="planos" tone="dark" glow>
      <Container>
        <Heading
          title="Planos para a casa ficar sempre em dia."
          lead="Os valores dependem do tamanho do imóvel e da frequência, e saem no orçamento. Também temos pacotes mensais e anuais com condições especiais."
        />

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-[32px] p-8 sm:p-9 ${
                p.featured ? 'border-glow shadow-[0_40px_90px_-40px_rgba(124,194,66,.55)] lg:-my-4 lg:py-12' : 'border border-white/[.09] bg-white/[.025]'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-lima px-3.5 py-1.5 text-[13px] font-semibold text-tinta">
                  <Icon name="presente" className="h-4 w-4" />
                  {p.kicker}
                </span>
              )}
              <p className="text-[15px] font-medium text-white/50">{p.featured ? p.name : p.kicker}</p>
              <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                {p.featured ? p.headline : p.name}
              </h3>
              {!p.featured && <p className="mt-2 text-[16px] text-white/60">{p.headline}</p>}

              <ul className="mt-8 flex flex-col gap-3.5 border-t border-white/10 pt-7">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[16px] text-white/80">
                    <Sparkle className="mt-1.5 h-3 w-3 shrink-0 text-lima" />
                    {it}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <a
                  href={waLink(p.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-[16px] font-semibold ${
                    p.featured ? 'btn-lima' : 'btn-ghost'
                  }`}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  {p.cta}
                </a>
                {p.featured && <p className="mt-3 text-center text-[13px] text-white/40">Vagas limitadas. Consulte as condições.</p>}
              </div>
            </article>
          ))}
        </div>

        {/* indicação */}
        <div className="relative mt-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-folha via-lima to-lima-claro p-[1px] lg:mt-14">
          <div className="flex flex-col gap-6 rounded-[31px] bg-noite/90 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lima/15 text-lima">
                <Icon name="pessoa" className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-[24px] font-bold tracking-[-0.02em] text-white">Indicou, ganhou.</h3>
                <p className="mt-1.5 max-w-[52ch] text-[16px] leading-relaxed text-white/60">
                  Indique uma amiga ou familiar. Quando ela contratar, você ganha uma condição especial na sua próxima diária.
                </p>
              </div>
            </div>
            <a
              href={waLink('Olá, Alvora Clean! Quero indicar uma pessoa para o serviço de vocês.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lima inline-flex h-13 shrink-0 items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[16px] font-semibold"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Indicar alguém
            </a>
          </div>
        </div>
      </Container>
    </Sheet>
  )
}
