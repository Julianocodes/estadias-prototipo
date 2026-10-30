# Estadias — protótipo de acomodações

Protótipo de interface para explorar acomodações, desenvolvido como exercício de estudo de React e Next.js. A página inicial permite filtrar a lista demonstrativa por cidade, estado, país ou nome do anúncio. Cada cartão abre uma página de detalhes com as imagens e informações do respectivo item.

> Projeto educacional, sem vínculo com Airbnb ou outra plataforma de hospedagem. Não possui autenticação, disponibilidade real, reservas ou pagamentos. Anúncios, preços, avaliações e imagens são dados ilustrativos do material de estudo; as imagens são carregadas de `web.codans.com.br` e podem não estar disponíveis. A implementação foi desenvolvida nos estudos baseados no curso de Jamilton Damasceno (Codans); os dados e materiais de referência permanecem creditados aos respectivos autores.

## Funcionalidades

- Busca por texto entre nome do anúncio e localização.
- Estado de busca refletido na URL e mantido no campo do formulário.
- Mensagem para consultas sem resultados.
- Rotas de detalhes ligadas ao anúncio selecionado.
- Galeria simples com até cinco imagens por anúncio.
- Layout responsivo com navegação por teclado e foco visível.
- Avisos na interface de que os dados e preços são apenas exemplos.

## Tecnologias

- Next.js 15 e React 19
- TypeScript
- Tailwind CSS
- `next/image` para imagens remotas

## Executar localmente

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app`: páginas, rotas e estilos globais.
- `src/data/acomodacoes.ts`: conjunto de anúncios demonstrativos.
- `src/components`: componentes de interface reutilizáveis.
- `src/widgets`: busca, cabeçalho, listagem e rodapé.

Desenvolvido por **Juliano Roso** como projeto de estudo. O protótipo não deve ser usado para anunciar imóveis ou aceitar reservas reais.
