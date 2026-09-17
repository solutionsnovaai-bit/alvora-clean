# Alvora Clean

Landing page da Alvora Clean — limpeza residencial, profunda, pós-obra, pós-mudança e comercial
em Franco da Rocha, Francisco Morato, Jundiaí e região.

Feito por NOVA AI SOLUTIONS.

## Stack

Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + React Helmet Async.

## Rodar local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve o build local
```

## Deploy na Vercel

1. Suba o projeto no GitHub.
2. Importe na Vercel (ela detecta Vite sozinha: build `npm run build`, saída `dist`).
3. Em Settings → Environment Variables, crie `VITE_SITE_URL` com o domínio final,
   sem barra no fim (ex.: `https://alvoraclean.com.br`).
4. Faça um novo deploy e teste o link no Facebook Sharing Debugger e no WhatsApp.

> O `VITE_SITE_URL` é o que monta as URLs absolutas das tags Open Graph.
> Sem ele correto, a prévia do link não mostra a imagem.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Telefone, e-mail, Instagram, cidades, links do menu | `src/lib/site.ts` |
| Tags de SEO e dados estruturados | `src/components/Seo.tsx` e `index.html` |
| Cores e fonte da marca | `src/index.css` (bloco `@theme`) |
| Serviços e o que entra em cada um | `src/components/Services.tsx` |
| Planos e promoção | `src/components/Plans.tsx` |
| Perguntas frequentes | `src/components/FAQ.tsx` |
| Textos das faixas animadas | `src/App.tsx` |
| Seção com foto fixa que troca no scroll | `src/components/ScrollStory.tsx` |
| Carrossel de fotos | `src/components/Gallery.tsx` |

## Imagens da marca (`src/assets/brand/`)

| Arquivo | Uso |
| --- | --- |
| `hero-desktop.webp` / `hero-mobile.webp` | Hero. Já têm respiro no topo para a navbar não cobrir o anel. |
| `loader-*.webp` | Camadas do logo original usadas na animação de abertura. |
| `logo-horizontal.webp` | Navbar. |
| `logo-stacked.webp` | Rodapé. |
| `logo-textured.webp` / `logo-textured-light.webp` | Seções de marca. |
| `public/og-alvora.jpg` | Imagem do card de compartilhamento (1200x630). |

## Fotos (`src/assets/fotos/`)

Cada foto tem duas versões: a de 1400px para telas grandes e a `@760` para celular,
entregues via `srcset`. Para trocar uma foto, substitua os dois arquivos mantendo o nome.

| Arquivo | Onde aparece |
| --- | --- |
| `cozinha-bancada` | Bloco "Cozinha" e carrossel |
| `banheiro-box` | Bloco "Banheiros" e carrossel |
| `sala-estar` | Bloco "Sala e quartos" e carrossel |
| `pos-obra-apartamento` | Bloco "Pós-obra" e carrossel |
| `kit-produtos` | Carrossel |
