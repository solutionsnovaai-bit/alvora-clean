import { Helmet } from 'react-helmet-async'
import { SITE_URL, PHONE_E164, EMAIL, INSTAGRAM_URL, CITIES } from '../lib/site'

const TITLE = 'Alvora Clean | Limpeza residencial, pós-obra e comercial em Franco da Rocha e região'
const DESCRIPTION =
  'Limpeza residencial, profunda, pós-obra, pós-mudança e comercial em Franco da Rocha, Francisco Morato, Jundiaí e região. Produtos inclusos e orçamento pelo WhatsApp.'

export default function Seo() {
  const url = `${SITE_URL}/`
  const image = `${SITE_URL}/og-alvora.jpg`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Alvora Clean',
    slogan: 'Excelência em cada detalhe',
    description: DESCRIPTION,
    url,
    image,
    logo: `${SITE_URL}/icon-512.png`,
    telephone: `+${PHONE_E164}`,
    email: EMAIL,
    sameAs: [INSTAGRAM_URL],
    areaServed: CITIES.map((c) => ({ '@type': 'City', name: `${c}, SP` })),
    address: { '@type': 'PostalAddress', addressRegion: 'SP', addressCountry: 'BR' },
  }

  return (
    <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Alvora Clean" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Alvora Clean | Excelência em cada detalhe" />
      <meta property="og:description" content="Limpeza residencial, pós-obra, pós-mudança e comercial em Franco da Rocha, Francisco Morato e Jundiaí. Agende pelo WhatsApp." />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
