# Marcello Orla — web standalone

Aplicativo público independente para a carreira e o portfólio de Marcello Orla.

## Fonte de dados

Este app usa exclusivamente o projeto Supabase MARCELLO ORLA para conteúdo público:

- project ref: `gpbkbszchibjtdmkliah`
- read-model: `public.marcello_public_tracks`

O app não depende de Conselho, autenticação, providers ou infraestrutura privada do OSAMBA.

## Ambiente

O catálogo é lido somente no servidor. Não use `NEXT_PUBLIC_*` para as credenciais do Supabase:

```bash
SUPABASE_URL=https://gpbkbszchibjtdmkliah.supabase.co
SUPABASE_PUBLISHABLE_KEY=<publishable-key>
```

No Cloudflare Workers, `SUPABASE_URL` é um text binding e `SUPABASE_PUBLISHABLE_KEY` é um secret binding. Nunca use `service_role` neste app.

## Cloudflare Workers

O projeto mantém Next.js e vinext em paralelo:

```bash
npm run build
npm run build:vinext
npm run deploy:vinext
```

Worker: `marcello-orla-web`.

## Validação

```bash
npm ci
npm test
npm run typecheck
npm run build
npm run build:vinext
```

Baseline de separação: `SEP-MO-OSAMBA-2026-10-17`.

## Publicação controlada (orçamento R$ 0)

A publicação do Worker existente `marcello-orla-web` é **manual** pelo workflow
`Deploy Cloudflare` (GitHub Actions). O job só executa para a branch `main` do
repositório `marcellodosamba/marcello-orla-web`, quando iniciado pela conta
`marcellodosamba` e após digitar `DEPLOY`. Uma publicação em andamento não será
cancelada por outra execução.

O workflow requer secrets de repositório `CLOUDFLARE_API_TOKEN` e
`SUPABASE_PUBLISHABLE_KEY`. Cadastre-os apenas diretamente no GitHub, nunca
no código ou no chat. Sem os secrets, o deploy falha de forma segura.

Em 18/10/2026, a API do GitHub informou que branch rulesets para este
repositório **privado** exigem GitHub Pro ou repositório público. O guard do
workflow é proteção adicional, **não substitui** branch protection. Não
mudar visibilidade ou contratar plano sem decisão explícita.

Antes de habilitar Cloudflare Builds conectado ao GitHub, confirmar os
bindings e a origem da versão em produção. Evitar dois mecanismos de deploy
atuando simultaneamente sem orquestração definida.

## UX e metadados públicos

As rotas públicas declaram metadados próprios em `lib/seo/public-metadata.ts`, com
canonical e Open Graph coerentes por endereço. O layout compartilhado mantém
`metadataBase` apontando para o endereço atualmente publicado do Worker.

O cabeçalho oferece o atalho de teclado **Pular para o conteúdo**, e os links
do menu têm área mínima de interação de 44 px. O rodapé e a página Contato
apresentam a página pública de links do artista no Beacons; **não** divulgam
endereços de email privados nem prometem canal de contratação confirmado.

O link Beacons foi aberto e validado no Chrome do Galaxy Tab S9 FE em
18/10/2026: perfil do artista, canais sociais e catálogo público visíveis.
A consulta automatizada via curl recebeu 403; não equivale a erro no navegador.
Agenda, banda e apresentações mantêm estados informativos até confirmação dos
dados e autorização de divulgação.

## Conteúdo editorial e descoberta

A página `Sobre` usa a apresentação pública do artista — “Carioca, samba,
pagode e histórias que viram canção” — com texto editorial breve, sem
inventar contratos, agenda, prêmios ou formação de banda. O menu público dá
acesso direto à biografia. Nas páginas `Música` e `Cariocando`, o convite à
escuta usa `https://beacons.ai/marcellorlaoff`, canal previamente validado no
navegador do tablet. O catálogo continua sendo lido no servidor através do
read-model `marcello_public_tracks`: sem duplicação estática de lançamentos.

Imagens e fotografias somente após autorização de uso e checagem dos direitos
pertinentes; a capa existente não foi substituída neste ciclo.
