# LIGACAO.md — manifesto de ligação Supabase × MARCELLO ORLA

## Quem liga a quê

| Consumidor | Como liga | Credencial |
|---|---|---|
| Site Next (`app/`) | `@supabase/ssr` via bindings do worker (`cloudflare.config.ts`) | anon = `SUPABASE_PUBLISHABLE_KEY` (secret do GH) |
| Agentes (read-only) | REST `/rest/v1/{tabela}` com anon | `.env.local` desta pasta (quando liberada) |
| Scripts de backup | pg_dump | `SUPABASE_DB_URL` no shell do OPERADOR — nunca arquivo |

## Contrato

- Fonte: Supabase gpbk = fonte de dados EXISTENTE do artista. Nenhum banco paralelo.
- **Isolamento:** este banco pertence ao ARTISTA. Nada do OSAMBA/ESTRIVA cruza (contas separadas por design do hub).
- A publicação usa o binding já configurado em `cloudflare.config.ts` (URL fixa + secret do GitHub).

## Regras de ligação

1. Agente lê com anon; 42501 = pare, registre, peça policy ao Master.
2. Escrita por agente: NUNCA (site autenticado ou Master no dashboard).
3. Uma var ambiente por projeto — nunca cruzar com wfup (osamba).
