#!/bin/sh
# env.sh — acesso ambient Supabase ORLA (projeto gpbk) para qualquer agent/an agent do repo.
# Uso: set -a; . '<caminho>'/env.sh; set +a
DIR=/root/mcp.serve/servidor-v2/ambientes/03-marcello-orla/repo/repo/supabase
set -a; . "$DIR/.env.local"; set +a
SUPA_PROJECT=gpbkbszchibjtdmkliah
if [ -f "$DIR/.env.local" ] && grep -q 'COLE_AQUI' "$DIR/.env.local"; then
  echo "PENDENTE: cole a anon key em supabase/.env.local (Dashboard gpbk → Settings → API)"
  return 0 2>/dev/null || exit 0
fi
echo "supabase ok: projeto=$SUPA_PROJECT anon=SIM"
