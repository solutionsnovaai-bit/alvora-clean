import { useMemo, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sheet, Container, Heading } from './Section'
import { WhatsAppIcon, PlusIcon, MinusIcon } from './icons'
import { waLink, CITIES, EASE } from '../lib/site'

const SERVICES = ['Residencial', 'Profunda', 'Pós-obra', 'Pós-mudança', 'Apartamento', 'Comercial']
const PLACES = ['Casa', 'Apartamento', 'Espaço comercial']
const FREQ = ['Uma vez', 'Quinzenal', 'Semanal']

function Chips({ options, value, onChange, label }: { options: string[]; value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o === value
        return (
          <button
            key={o}
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o)}
            className={`rounded-full border px-4 py-2 text-[15px] font-medium transition-all duration-200 ${
              on
                ? 'border-lima bg-lima text-tinta shadow-[0_8px_24px_-12px_rgba(124,194,66,.9)]'
                : 'border-white/12 bg-white/[.03] text-white/70 hover:border-white/30 hover:text-white'
            }`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

function Stepper({ label, value, set, min, max }: { label: string; value: number; set: (n: number) => void; min: number; max: number }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-2 pl-4">
      <span className="text-[15.5px] text-white/75">{label}</span>
      <div className="flex items-center gap-1">
        <button
          aria-label={`Diminuir ${label.toLowerCase()}`}
          disabled={value <= min}
          onClick={() => set(Math.max(min, value - 1))}
          className="grid h-10 w-10 place-items-center rounded-xl bg-white/[.05] text-white transition hover:bg-white/10 disabled:opacity-30"
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-9 text-center text-[18px] font-semibold tabular-nums" aria-live="polite">
          {value}
        </span>
        <button
          aria-label={`Aumentar ${label.toLowerCase()}`}
          disabled={value >= max}
          onClick={() => set(Math.min(max, value + 1))}
          className="grid h-10 w-10 place-items-center rounded-xl bg-white/[.05] text-white transition hover:bg-white/10 disabled:opacity-30"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-[14px] font-medium text-white/45">{label}</p>
      {children}
    </div>
  )
}

export default function QuoteBuilder() {
  const [service, setService] = useState('Residencial')
  const [place, setPlace] = useState('Casa')
  const [rooms, setRooms] = useState(3)
  const [baths, setBaths] = useState(1)
  const [freq, setFreq] = useState('Uma vez')
  const [city, setCity] = useState(CITIES[0])
  const [otherCity, setOtherCity] = useState('')
  const [name, setName] = useState('')

  const cityFinal = city === 'Outra' ? otherCity.trim() || 'outra cidade' : city

  const message = useMemo(() => {
    const hello = name.trim() ? `Olá, Alvora Clean! Meu nome é ${name.trim()}.` : 'Olá, Alvora Clean!'
    return [
      hello,
      `Quero um orçamento de limpeza ${service.toLowerCase()}.`,
      '',
      `• Imóvel: ${place.toLowerCase()}`,
      `• Cômodos: ${rooms}  |  Banheiros: ${baths}`,
      `• Frequência: ${freq.toLowerCase()}`,
      `• Cidade: ${cityFinal}`,
      '',
      'Vim pelo site.',
    ].join('\n')
  }, [name, service, place, rooms, baths, freq, cityFinal])

  return (
    <Sheet id="orcamento" tone="graphite">
      <Container>
        <Heading
          title="Monte seu pedido de orçamento."
          lead="Escolha as opções e a mensagem já sai pronta no WhatsApp. Leva menos de um minuto."
        />

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <div className="flex flex-col gap-8 rounded-[32px] border border-white/[.08] bg-noite/60 p-6 sm:p-9">
            <Field label="Tipo de limpeza">
              <Chips label="Tipo de limpeza" options={SERVICES} value={service} onChange={setService} />
            </Field>
            <Field label="Imóvel">
              <Chips label="Imóvel" options={PLACES} value={place} onChange={setPlace} />
            </Field>
            <div className="grid gap-3 sm:grid-cols-2">
              <Stepper label="Cômodos" value={rooms} set={setRooms} min={1} max={15} />
              <Stepper label="Banheiros" value={baths} set={setBaths} min={1} max={8} />
            </div>
            <Field label="Frequência">
              <Chips label="Frequência" options={FREQ} value={freq} onChange={setFreq} />
            </Field>
            <Field label="Cidade">
              <Chips label="Cidade" options={[...CITIES, 'Outra']} value={city} onChange={setCity} />
              <AnimatePresence initial={false}>
                {city === 'Outra' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <input
                      value={otherCity}
                      onChange={(e) => setOtherCity(e.target.value)}
                      placeholder="Qual cidade?"
                      aria-label="Qual cidade?"
                      className="mt-3 h-12 w-full rounded-2xl border border-white/12 bg-white/[.04] px-4 text-[16px] text-white placeholder:text-white/35 focus:border-lima/60 focus:outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Field>
            <Field label="Seu nome (opcional)">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar?"
                aria-label="Seu nome"
                autoComplete="given-name"
                className="h-12 w-full rounded-2xl border border-white/12 bg-white/[.04] px-4 text-[16px] text-white placeholder:text-white/35 focus:border-lima/60 focus:outline-none"
              />
            </Field>
          </div>

          {/* prévia da conversa */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[32px] border border-white/[.08] bg-[#0b141a] shadow-[0_40px_100px_-40px_rgba(0,0,0,.9)]">
              <div className="flex items-center gap-3 border-b border-white/[.06] bg-[#1f2c34] px-5 py-3.5">
                <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-noite ring-1 ring-lima/40">
                  <img src="/apple-touch-icon.png" alt="" className="h-full w-full object-cover" />
                </span>
                <div className="leading-tight">
                  <p className="text-[15.5px] font-semibold text-white">Alvora Clean</p>
                  <p className="text-[12.5px] text-white/50">Prévia da sua mensagem</p>
                </div>
              </div>
              <div
                className="min-h-[300px] px-4 py-6 sm:px-6"
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
              >
                <motion.div
                  layout
                  transition={{ duration: 0.35, ease: EASE }}
                  className="relative ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#005c4b] px-4 pb-6 pt-3 text-[15px] leading-[1.5] text-white shadow-[0_2px_0_rgba(0,0,0,.25)]"
                >
                  <p className="whitespace-pre-line">{message}</p>
                  <span className="absolute bottom-1.5 right-3 text-[11px] text-white/55">agora ✓✓</span>
                </motion.div>
              </div>
              <div className="border-t border-white/[.06] bg-[#111b21] p-4">
                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lima flex h-14 items-center justify-center gap-2.5 rounded-full text-[17px] font-semibold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar pelo WhatsApp
                </a>
              </div>
            </div>
            <p className="mt-4 text-center text-[14px] text-white/40">Você revisa a mensagem antes de enviar.</p>
          </div>
        </div>
      </Container>
    </Sheet>
  )
}
