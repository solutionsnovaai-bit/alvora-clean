import logoStacked from '../assets/brand/logo-stacked.webp'
import { Container } from './Section'
import { MarqueeBand } from './Marquee'
import { WhatsAppIcon, InstagramIcon, MailIcon } from './icons'
import { NAV_ITEMS, PHONE_DISPLAY, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, JOBS_FORM_URL, CITIES, waLink } from '../lib/site'

export default function Footer() {
  return (
    <footer className="relative bg-noite text-white">
      <MarqueeBand
        size="lg"
        tone="dark"
        duration={60}
        items={['Excelência em cada detalhe', 'Limpeza que transforma', 'Cuidado que se vê']}
        className="!border-x-0"
      />
      <Container className="pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <img src={logoStacked} alt="Alvora Clean" loading="lazy" className="h-auto w-[180px]" />
            <p className="mt-6 max-w-[30ch] text-[15.5px] leading-relaxed text-white/50">
              Limpeza residencial, pós-obra, pós-mudança e comercial em {CITIES.join(', ').replace(/, ([^,]*)$/, ' e $1')}.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-[14px] font-medium text-white/40">Navegue</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-[16px] text-white/75 transition-colors hover:text-lima">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[14px] font-medium text-white/40">Fale com a gente</p>
            <ul className="mt-4 flex flex-col gap-3 text-[16px]">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-white/75 hover:text-lima">
                  <WhatsAppIcon className="h-[18px] w-[18px] text-lima" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-white/75 hover:text-lima">
                  <InstagramIcon className="h-[18px] w-[18px] text-lima" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 break-all text-white/75 hover:text-lima">
                  <MailIcon className="h-[18px] w-[18px] shrink-0 text-lima" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-medium text-white/40">Trabalhe com a gente</p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-white/55">Vagas abertas para diaristas na região.</p>
            <a
              href={JOBS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-4 inline-flex h-11 items-center rounded-full px-5 text-[15px] font-medium"
            >
              Enviar meu cadastro
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[.08] pt-8 text-[14px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alvora Clean. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <span className="font-semibold tracking-[0.02em] text-white/75">NOVA AI SOLUTIONS</span>
          </p>
        </div>
      </Container>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </footer>
  )
}
