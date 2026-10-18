# Marcello Orla — web standalone

Aplicativo público independente para a carreira e o portfólio de Marcello Orla.

## Fonte de dados

Este app usa exclusivamente o projeto Supabase MARCELLO ORLA para conteúdo público:

- project ref: `gpbkbszchibjtdmkliah`
- read-model: `public.marcello_public_tracks`

O app não depende de Conselho, autenticação, providers ou infraestrutura privada do OSAMBA.

## Ambiente

```bash
NEXT_PUBLIC_SUPABASE_URL=https://gpbkbszchibjtdmkliah.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<publishable-key>
```

Nunca reutilize chaves do projeto OSAMBA.

## Validação

```bash
npm install
npm test
npm run typecheck
npm run build
```

Baseline de separação: `SEP-MO-OSAMBA-2026-10-17`.
