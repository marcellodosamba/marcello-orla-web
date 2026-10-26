#!/bin/sh
# backup-db.sh — dump do banco Supabase gpbk (leitura; nunca altera dados)
# requer: SUPABASE_DB_URL no ambiente (connection string com senha)
set -e
S="gpbk"
: "${SUPABASE_DB_URL:?export SUPABASE_DB_URL=postgres://...}"
SAIDA="$(dirname "$0")/../../../backups/supabase-$S-$(date +%Y%m%d).sql"
mkdir -p "$(dirname "$SAIDA")"
pg_dump "$SUPABASE_DB_URL" -F c -f "$SAIDA"
echo "dump: $SAIDA"
md5sum "$SAIDA" >> "$(dirname "$SAIDA")/HASHES.log"
