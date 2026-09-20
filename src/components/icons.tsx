import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

/** Estrela de quatro pontas, a mesma do "O" do logo */
export function Sparkle(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c.55 6.3 5.7 11.45 12 12-6.3.55-11.45 5.7-12 12-.55-6.3-5.7-11.45-12-12C6.3 11.45 11.45 6.3 12 0Z" />
    </svg>
  )
}

/** Glifo oficial do WhatsApp */
export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export function InstagramIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M17.4 6.6h.01" strokeWidth={2.4} />
    </svg>
  )
}

export function MailIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function ArrowIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PlusIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const ICONS = {
  casa: (
    <g {...line}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9.5h13V10" />
      <path d="M10 19.5v-5h4v5" />
    </g>
  ),
  profunda: (
    <g {...line}>
      <path d="M5 9h14l-1.5 10.3a1.6 1.6 0 0 1-1.6 1.4H8.1a1.6 1.6 0 0 1-1.6-1.4L5 9Z" />
      <path d="M7.5 9a4.5 4.5 0 0 1 9 0" />
      <path d="M12 12.5c.2 1.6 1.4 2.8 3 3-1.6.2-2.8 1.4-3 3-.2-1.6-1.4-2.8-3-3 1.6-.2 2.8-1.4 3-3Z" />
    </g>
  ),
  apartamento: (
    <g {...line}>
      <path d="M6 21V4.6A1.6 1.6 0 0 1 7.6 3h8.8A1.6 1.6 0 0 1 18 4.6V21" />
      <path d="M4 21h16" />
      <path d="M9.5 7h1M13.5 7h1M9.5 10.5h1M13.5 10.5h1M9.5 14h1M13.5 14h1" />
      <path d="M10.5 21v-3h3v3" />
    </g>
  ),
  obra: (
    <g {...line}>
      <rect x="3.5" y="4" width="13" height="5" rx="1.4" />
      <path d="M16.5 6.5h3v5H11v3" />
      <rect x="9.8" y="14.5" width="2.4" height="6.5" rx="0.8" />
    </g>
  ),
  mudanca: (
    <g {...line}>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5" />
      <path d="M12 12v9" />
      <path d="m7.8 5.3 8.4 4.5" />
    </g>
  ),
  comercial: (
    <g {...line}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
      <path d="M3.5 12.5h17" />
      <path d="M11 12.5v1.5h2v-1.5" />
    </g>
  ),
  produtos: (
    <g {...line}>
      <path d="M8.5 10h6v10.4a1.6 1.6 0 0 1-1.6 1.6H10.1a1.6 1.6 0 0 1-1.6-1.6V10Z" />
      <path d="M9.5 10V7h4.5l3 2" />
      <path d="M14 7V4.5h-3.5" />
      <path d="M19.5 4.5h.01M20.8 7h.01M19.5 9.5h.01" strokeWidth={2.2} />
    </g>
  ),
  pessoa: (
    <g {...line}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20.5c1.1-3.6 3.9-5.3 7-5.3s5.9 1.7 7 5.3" />
    </g>
  ),
  relogio: (
    <g {...line}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 2.1" />
    </g>
  ),
  escudo: (
    <g {...line}>
      <path d="M12 3 5 6v5.4c0 4.3 3 7.8 7 9.6 4-1.8 7-5.3 7-9.6V6l-7-3Z" />
      <path d="m9 12 2.1 2.1L15.2 10" />
    </g>
  ),
  calendario: (
    <g {...line}>
      <rect x="4" y="5.5" width="16" height="15" rx="2.2" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
      <path d="m9.4 14.6 1.8 1.8 3.4-3.4" />
    </g>
  ),
  conversa: (
    <g {...line}>
      <path d="M4 5.6A1.6 1.6 0 0 1 5.6 4h12.8A1.6 1.6 0 0 1 20 5.6v8.8a1.6 1.6 0 0 1-1.6 1.6H10l-4.5 4v-4A1.6 1.6 0 0 1 4 14.4V5.6Z" />
      <path d="M8.5 9.2h7M8.5 12h4.5" />
    </g>
  ),
  presente: (
    <g {...line}>
      <rect x="3.5" y="8.5" width="17" height="4" rx="1" />
      <path d="M5 12.5v7.5h14v-7.5M12 8.5V20" />
      <path d="M12 8.5c-1.8 0-4.5-.6-4.5-2.6 0-1.3 1-2 2-2 1.8 0 2.5 2.4 2.5 4.6Zm0 0c1.8 0 4.5-.6 4.5-2.6 0-1.3-1-2-2-2-1.8 0-2.5 2.4-2.5 4.6Z" />
    </g>
  ),
} as const

export type IconName = keyof typeof ICONS

export function Icon({ name, ...props }: P & { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {ICONS[name]}
    </svg>
  )
}
