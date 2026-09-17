export const BRAND = 'Alvora Clean'
export const PHONE_DISPLAY = '(11) 96760-9457'
export const PHONE_E164 = '5511967609457'
export const EMAIL = 'alvoraclean@gmail.com'
export const INSTAGRAM_HANDLE = '@alvora.clean'
export const INSTAGRAM_URL = 'https://instagram.com/alvora.clean'
export const JOBS_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfm0frQm8JTytdBrZQiU_DAPNnspWYPtyIw5Ckxn26qw0BUuA/viewform'
export const CITIES = ['Franco da Rocha', 'Francisco Morato', 'Jundiaí']
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/$/, '')

export const DEFAULT_MESSAGE = 'Olá, Alvora Clean! Vim pelo site e quero agendar uma limpeza.'

export function waLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
}

export const NAV_ITEMS = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'orcamento', label: 'Orçamento' },
  { id: 'planos', label: 'Planos' },
  { id: 'duvidas', label: 'Dúvidas' },
] as const

export const EASE = [0.22, 1, 0.36, 1] as const
