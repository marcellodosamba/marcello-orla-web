#!/bin/sh
# github.sh — status do repo orla (somente leitura)
GH="marcellodosamba/marcello-orla-web"
[ "$GH" = "n/a" ] && { echo "sem remote definido"; exit 0; }
gh repo view "$GH" --json name,pushedAt,defaultBranchRef 2>/dev/null || gh repo view "$GH"
gh run list -R "$GH" -L 3 2>/dev/null || true
