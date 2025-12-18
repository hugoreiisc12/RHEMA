# PRD — RHEMA (Produto/Projeto)

## Visão Geral
- Nome: RHEMA
- Stack: Vite + React 18 + TypeScript + TailwindCSS + Radix UI + Lucide Icons
- Objetivo: Apresentar portfólio audiovisual (filmmaking, fotografia, edição) com navegação clara por serviços e filtros.
- Público: Marcas, artistas e empresas buscando produção audiovisual profissional.

## Layout Visual
- Paleta (HSL definida em `src/index.css:10-52`):
  - `--background`: 0 0% 0% (preto)
  - `--foreground`: 0 0% 98% (quase branco)
  - `--primary`: 0 100% 50% (vermelho principal) e `--primary-foreground`: 0 0% 0%
  - `--secondary`: 0 0% 10% (cinza escuro) e `--secondary-foreground`: 0 0% 98%
  - `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`
  - `--radius`: 0rem (cantos retos)
- Gradientes e sombras (`src/index.css:41-51`):
  - `--gradient-red`, `--gradient-dark`, `--gradient-overlay`
  - `--shadow-glow`, `--shadow-elevated`
- Tipografia (`tailwind.config.ts:16-19`):
  - Display: `Bebas Neue`, fallback `Impact`, `sans-serif`
  - Texto: `Inter`, `sans-serif`
- Animações (`tailwind.config.ts:69-92`):
  - `fade-in`, `scale-in`, `accordion-*`
- Componentes base (Radix + utilitários): botões, inputs, tooltip, toast, menubar, etc.

## Arquitetura de Navegação
- Rotas (`src/App.tsx:22-26`):
  - `/` Home
  - `/portfolio` Portfólio geral
  - `/portfolio/filmmaking` Portfólio filtrado (Filmmaking)
  - `/portfolio/fotografia` Portfólio filtrado (Fotografia)
  - `/portfolio/edicao` Portfólio filtrado (Edição)
  - Páginas de serviço dedicadas (mantidas): `/servicos/*`
- Breadcrumbs clicáveis
  - Home e Portfólio possuem breadcrumbs com links estilo botão.
  - Páginas de serviço e portfólio filtrado usam `BreadcrumbLink asChild` + `Link`.

## Estrutura de Páginas
- Home (`src/pagina/Index.tsx:7-17`):
  - Hero (headline RHEMA, chips de áreas, CTA)
  - Sobre Nós (copy editorial, métricas)
  - Serviços (cards clicáveis)
  - Portfólio (grade com botões de navegação/filtros)
  - Footer (CTA + redes sociais: Instagram, WhatsApp)
- Portfólio Geral (`src/pagina/Portfolio.tsx:1-29`):
  - Breadcrumb: Home › Portfólio
  - Grade `MediaGallery` sem filtro
- Portfólio Filtrado
  - Filmmaking (`src/pagina/portfolio/Filmmaking.tsx:1-59`)
  - Fotografia (`src/pagina/portfolio/Fotografia.tsx:1-8`)
  - Edição (`src/pagina/portfolio/Edicao.tsx:1-8`)
- Serviços (cards) (`src/Componentes/Serviços.tsx/Services.tsx:1-22, 34-55`)
  - Cada card tem rota (mantidas) e copy específica.
- NotFound (`src/pagina/NotFound.tsx:4-21`)

## Portfólio e Filtros
- Componente: `src/Componentes/MediaGallry.tsx/MediaGallery.tsx`
- Dados de mídia incluem categorias: FILMMAKING, FOTOGRAFIA, EDIÇÃO.
- Filtro por `category` via prop opcional.
- Barra de navegação do portfólio:
  - Links: HOME, PORTFÓLIO, FILMMAKING, FOTOGRAFIA, EDIÇÃO.
- Interações visuais: overlay em hover, ícone `Play` para vídeos.

## Componentes e Utilitários
- UI (pasta): `src/Componentes/Interface do Usuario/*`
- Toast + Sonner: feedbacks de UI
- TooltipProvider: tooltips globais
- QueryClient: base para chamadas assíncronas (sem endpoints definidos ainda)
- Aliases (Vite/TS): `@/components`, `@/pages`, `@/assets`, `@/hooks`, `@/lib`

## Funcionalidade Atual
- Navegação client-side com `react-router-dom`.
- Breadcrumbs clicáveis com estilo de botão.
- Filtro de portfólio via rotas dedicadas.
- Ícones sociais: Instagram e WhatsApp (`MessageCircle`) no footer.

## Objetivo e Uso
- Apresentar trabalhos audiovisuais com foco em impacto visual e narrativa.
- Direcionar visitantes para categorias específicas e estimular contato (CTA).

## Acessibilidade
- Contraste alto por tema escuro e foreground claro.
- Foco e estados hover em controles (Tailwind + Radix).
- Breadcrumbs com roles e semântica.

## Performance
- Build otimizado pelo Vite.
- Import seletivo de ícones (Lucide).
- Animações leves com `forwards` e CSS.

## Segurança
- Sem armazenamento de segredos no cliente.
- Sem endpoints backend integrados no momento.

## Ambiente e Deploy
- Instalação: `npm install`
- Desenvolvimento: `npm run dev`
- Build: `npm run build`
- Preview produtivo: `npm run preview`

## Roadmap Sugerido
- Página editorial para Fotografia e Edição (layout similar ao Filmmaking).
- Página `/servicos` consolidada com breadcrumb.
- Formulário de contato/brief com validação.
- CMS ou API para conteúdo dinâmico.
- Destaques (carrossel) por categoria.

