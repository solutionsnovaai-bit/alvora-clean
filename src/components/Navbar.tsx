import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/brand/logo-horizontal.webp'
import { NAV_ITEMS, PHONE_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, waLink, EASE } from '../lib/site'
import { WhatsAppIcon, InstagramIcon } from './icons'

export default function Navbar({ show }: { show: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    const onTop = () => window.scrollY < 200 && setActive('')
    window.addEventListener('scroll', onTop, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onTop)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {/* véu no topo para a navbar se fundir com qualquer fundo */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-28 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(180deg, rgba(3,4,3,.72) 0%, rgba(3,4,3,.35) 45%, rgba(3,4,3,0) 100%)' }}
      />

      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-2.5 pt-[max(10px,env(safe-area-inset-top))] sm:px-5 sm:pt-4"
        initial={{ y: -90, opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: show ? 0.55 : 0 }}
      >
        <nav
          aria-label="Principal"
          className={`mx-auto flex h-[58px] max-w-[1240px] items-center justify-between gap-2 overflow-hidden rounded-full pl-3 pr-1.5 sm:gap-3 sm:pr-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:h-[64px] sm:pl-6 ${
            scrolled
              ? 'border border-white/[.09] bg-[rgba(9,11,9,.62)] shadow-[0_18px_50px_-24px_rgba(0,0,0,.9),inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl backdrop-saturate-150'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <a href="#inicio" className="shrink-0" aria-label="Alvora Clean, voltar ao início">
            <img src={logo} alt="Alvora Clean" className="h-[26px] w-auto sm:h-[34px]" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`relative z-10 block rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${
                    active === item.id ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-lima/25 bg-lima/[.09]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={waLink('Olá, Alvora Clean! Quero agendar uma limpeza.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lima inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 text-[15px] font-semibold sm:h-12 sm:px-5"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              <span className="hidden min-[480px]:inline">Agendar</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.04] lg:hidden"
            >
              <span className={`absolute h-[1.6px] w-[18px] rounded bg-white transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[4px]'}`} />
              <span className={`absolute h-[1.6px] w-[18px] rounded bg-white transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[4px]'}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-[45] bg-[rgba(3,4,3,.86)] backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(124,194,66,.28), transparent 65%)' }}
            />
            <div className="flex h-full flex-col px-7 pb-[max(28px,env(safe-area-inset-bottom))] pt-28">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: EASE }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-[2.1rem] font-semibold leading-tight tracking-tight text-white/90 active:text-lima"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lima flex h-14 items-center justify-center gap-2.5 rounded-full text-[17px] font-semibold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
                <div className="flex items-center justify-between text-[15px] text-white/55">
                  <span>{PHONE_DISPLAY}</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
