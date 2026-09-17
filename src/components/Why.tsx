import { Sheet, Container, Heading } from './Section'
import { Icon, Sparkle, type IconName } from './icons'
import logoLight from '../assets/brand/logo-textured-light.webp'

const SMALL: { icon: IconName; title: string; text: string }[] = [
  { icon: 'pessoa', title: 'A mesma profissional', text: 'Nos planos, quem cuida da sua casa é sempre a mesma pessoa de confiança.' },
  { icon: 'relogio', title: 'Horário cumprido', text: 'Cronograma respeitado para você planejar o dia sem imprevisto.' },
  { icon: 'escudo', title: 'Discrição e respeito', text: 'Equipe checada e orientada para cuidar do seu lar com zelo.' },
  { icon: 'calendario', title: 'Dia fixo na semana', text: 'No plano semanal, o seu dia fica reservado na agenda.' },
  { icon: 'conversa', title: 'Tudo pelo WhatsApp', text: 'Orçamento, agendamento e ajustes direto com a gente.' },
]

export default function Why() {
  return (
    <Sheet tone="light" className="!pt-24 lg:!pt-32">
      <Container>
        <Heading
          tone="light"
          title="O cuidado que você não precisa pedir."
          lead="Detalhes que fazem a diferença entre uma faxina e uma casa bem cuidada."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          {/* destaque principal */}
          <article className="relative overflow-hidden rounded-[36px] bg-tinta p-8 text-white sm:col-span-2 sm:p-10 lg:row-span-2 lg:flex lg:flex-col lg:justify-between">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full"
              style={{ background: 'radial-gradient(closest-side, rgba(124,194,66,.35), transparent)' }}
            />
            <Icon name="produtos" className="relative h-12 w-12 text-lima" />
            <div className="relative mt-10 lg:mt-0">
              <h3 className="text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.02] tracking-[-0.035em]">
                Você não compra nenhum produto.
              </h3>
              <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-white/65">
                A equipe chega com todos os produtos e equipamentos profissionais que o serviço precisa, escolhidos para preservar móveis e pisos.
              </p>
            </div>
          </article>

          {/* logo em versão clara */}
          <figure className="relative overflow-hidden rounded-[36px] border border-black/[.06] bg-[#f3f2f0] sm:col-span-2 lg:col-span-2">
            <img src={logoLight} alt="Logo da Alvora Clean em versão clara" loading="lazy" className="mx-auto aspect-[16/10] w-full object-contain p-3" />
            <figcaption className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-[13px] font-medium text-tinta/70 backdrop-blur">
              <Sparkle className="h-3 w-3 text-folha" />
              Excelência em cada detalhe
            </figcaption>
          </figure>

          {SMALL.slice(0, 2).map((c) => (
            <SmallCard key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {SMALL.slice(2).map((c) => (
            <SmallCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </Sheet>
  )
}

function SmallCard({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return (
    <article className="rounded-[28px] border border-black/[.06] bg-white p-7">
      <Icon name={icon} className="h-8 w-8 text-folha" />
      <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-tinta">{title}</h3>
      <p className="mt-2 text-[15.5px] leading-relaxed text-tinta/60">{text}</p>
    </article>
  )
}
