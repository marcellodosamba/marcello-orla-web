# Integrações — orla (matriz geral, 2026-10-21)

Cada serviço tem pasta canônica própria (padrão osamba). Esta pasta é o mapa — o poder mora lá.

| Serviço | Estado | Prova | Como o agent usa |
|---|---|---|---|
| GitHub | ✅ VIVO | ls-remote + CI verde provado 21/10 | `github.sh` desta pasta (gh global: marcellodosamba) |
| Supabase | ✅ chave sb_publishable VÁLIDA (probe provado; schema public vazio/tabelas custom | `env.sh` ambient + `supabase/` |
| Cloudflare | ⏳ sessão global wrangler = conta OSAMBA-system (⚠️ orla pode precisar de conta própria) | — | token/conta do artista quando definir |
| Dropbox | ⏳ remote `dbx` global vive (MO/Marcello Orla pasta na raiz) | lsd provou | `rclone copy <x> dbx:MARCELLO ORLA/...` |
| Google Drive | ⏳ remote `gdrive` global vive (pasta MARCELLO ORLA na raiz) | lsd provou | `rclone lsd gdrive:MARCELLO ORLA/` |

Regras: nada de segredo nesta pasta; chaves no env do operador (0600 fora do repo). Isolamento o artista: credenciais da ORLA jamais cruzam com OSAMBA/ESTRIVA.
