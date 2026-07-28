# Brutal Labs

Landing page + catálogo (fictícios) para uma marca premium de suplementos
esportivos, com pegada mais pesada/direta pro público de academia. Peça de
portfólio produzida pela ExitoCoach, bilíngue em Português e Espanhol.

## Destaques

- Hero de alto impacto com badge de estoque limitado e selos de confiança
- Diferenciais (testado em laboratório, absorção rápida, transparência,
  comunidade de atletas)
- Catálogo de 6 produtos fictícios com preço, badge (Mais Vendido, Novo,
  Últimas Unidades) e botão direto pro WhatsApp com mensagem pré-preenchida
- Resultados em grid com métrica + depoimento
- FAQ em acordeão
- Seção final de urgência (estoque acabando) com CTA de WhatsApp
- Rodapé com assinatura ExitoCoach

## Tecnologias

Next.js 16 (App Router) · TypeScript · Tailwind CSS · next-intl (PT/ES) ·
Framer Motion · Swiper · AOS · GSAP · Lenis · Lucide Icons

## Checkout via WhatsApp

Não há carrinho/checkout real — cada botão de compra abre o WhatsApp
(`src/lib/whatsapp.ts`) com uma mensagem pré-preenchida citando o produto
escolhido. Para usar em produção, troque o número em `WHATSAPP_NUMBER`.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000/pt` ou `http://localhost:3000/es`.

## Deploy

Projeto pronto para deploy direto na Vercel (detecta Next.js
automaticamente, sem configuração adicional).

---

Feito por [ExitoCoach](https://exitocoach.com)
