import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WhatsAppIcon } from './icons'
import { waLink, EASE } from '../lib/site'

export default function WhatsAppFab({ show }: { show: boolean }) {
  const [hint, setHint] = useState(false)

  useEffect(() => {
    if (!show) return
    const a = setTimeout(() => setHint(true), 5000)
    const b = setTimeout(() => setHint(false), 11000)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-[max(18px,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
        >
          <AnimatePresence>
            {hint && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden rounded-full border border-white/10 bg-[rgba(9,11,9,.8)] px-4 py-2 text-[14px] font-medium text-white/85 shadow-lg backdrop-blur-xl sm:block"
              >
                Agende pelo WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Alvora Clean no WhatsApp"
            onMouseEnter={() => setHint(true)}
            onMouseLeave={() => setHint(false)}
            className="group relative grid h-[58px] w-[58px] place-items-center rounded-full"
          >
            <span aria-hidden className="ring-pulse absolute inset-0 rounded-full border-2 border-lima/70" />
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,#b8ee80,#7cc242_45%,#3f9a2c)] shadow-[0_14px_34px_-10px_rgba(124,194,66,.85),inset_0_1px_0_rgba(255,255,255,.5)] ring-1 ring-black/20 transition-transform duration-300 group-hover:scale-105"
            />
            <WhatsAppIcon className="relative h-[28px] w-[28px] text-tinta" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
