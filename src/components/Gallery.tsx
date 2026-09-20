import { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from './Section'
import { ArrowIcon, WhatsAppIcon } from './icons'
import { waLink } from '../lib/site'

import cozinha from '../assets/fotos/cozinha-bancada.webp'
import cozinhaSm from '../assets/fotos/cozinha-bancada@760.webp'
import banheiro from '../assets/fotos/banheiro-box.webp'
import banheiroSm from '../assets/fotos/banheiro-box@760.webp'
import sala from '../assets/fotos/sala-estar.webp'
import salaSm from '../assets/fotos/sala-estar@760.webp'
import obra from '../assets/fotos/pos-obra-apartamento.webp'
import obraSm from '../assets/fotos/pos-obra-apartamento@760.webp'
import kit from '../assets/fotos/kit-produtos.webp'
import kitSm from '../assets/fotos/kit-produtos@760.webp'

const SLIDES = [
  { id: 'cozinha', img: cozinha, small: cozinhaSm, title: 'Cozinha', text: 'Bancada sem marca e pia brilhando.', alt: 'Bancada de cozinha em quartzo branco recém-limpa com pano de microfibra verde' },
  { id: 'banheiro', img: banheiro, small: banheiroSm, title: 'Banheiro', text: 'Box de vidro transparente de verdade.', alt: 'Box de vidro de banheiro impecável com rodo apoiado na parede' },
  { id: 'sala', img: sala, small: salaSm, title: 'Sala', text: 'Tapete aspirado, piso passado, casa pronta.', alt: 'Sala de estar arrumada com tapete aspirado e piso refletindo a luz' },
  { id: 'obra', img: obra, small: obraSm, title: 'Pós-obra', text: 'Poeira fina removida, imóvel pronto pra morar.', alt: 'Apartamento novo e vazio com porcelanato espelhando a luz após a limpeza pós-obra' },
  { id: 'kit', img: kit, small: kitSm, title: 'Produtos inclusos', text: 'A equipe chega com tudo o que o serviço precisa.', alt: 'Panos de microfibra verdes, borrifador, escova e luvas sobre superfície preta' },
]

export default function Gallery() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
        })
      },
      { root: track, threshold: 0.6 },
    )
    Array.from(track.children).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = useCallback((dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement
    const step = card.getBoundingClientRect().width + 20
    track.scrollBy({ left: step * dir, behavior: 'smooth' })
  }, [])

  return (
    <section aria-label="Resultados da Alvora Clean" className="grain relative overflow-hidden bg-noite pb-28 pt-24 lg:pb-36 lg:pt-32">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[40rem]">
          <h2 className="text-[clamp(2.3rem,5.4vw,4.1rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
            O padrão que a gente deixa.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/55 sm:text-[18.5px]">
            Do rejunte ao último vidro, é assim que o ambiente fica quando a equipe termina.
          </p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => go(-1)}
            aria-label="Imagem anterior"
            className="btn-ghost grid h-12 w-12 place-items-center rounded-full"
          >
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próxima imagem"
            className="btn-ghost grid h-12 w-12 place-items-center rounded-full"
          >
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <ul
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2 sm:px-10 lg:mt-16"
      >
        {SLIDES.map((s, i) => (
          <li
            key={s.id}
            data-i={i}
            className="w-[82vw] max-w-[620px] shrink-0 snap-center sm:w-[62vw] lg:w-[46vw]"
          >
            <figure className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-carvao">
              <img
                src={s.small}
                srcSet={`${s.small} 760w, ${s.img} 1400w`}
                sizes="(min-width: 1024px) 46vw, 82vw"
                alt={s.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-6 bottom-6">
                <p className="text-[20px] font-semibold tracking-[-0.02em] text-white">{s.title}</p>
                <p className="mt-1 text-[15.5px] text-white/65">{s.text}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <Container className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex gap-1.5" aria-hidden>
          {SLIDES.map((s, i) => (
            <span key={s.id} className={`h-1 rounded-full transition-all duration-500 ${active === i ? 'w-9 bg-lima' : 'w-4 bg-white/20'}`} />
          ))}
        </div>
        <a
          href={waLink('Olá, Alvora Clean! Vi as fotos no site e quero um orçamento.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex h-13 items-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] font-medium"
        >
          <WhatsAppIcon className="h-[18px] w-[18px] text-lima" />
          Quero esse padrão na minha casa
        </a>
      </Container>
    </section>
  )
}
