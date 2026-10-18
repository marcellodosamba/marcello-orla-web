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
