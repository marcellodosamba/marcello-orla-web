---
description: Gera o relatório de sessão e prepara o upload para o Dropbox (passo 8 do orquestrador)
agent: build
---

Faça o relatório de sessão do projeto **MARCELLO-ORLA** e finalize o ciclo:

1. Revisar o que aconteceu nesta sessão: git status/diff dos repos tocados, arquivos alterados, verificações executadas (typecheck/test/lint quando aplicável), decisões tomadas e pendências.
2. Criar o relatório em Markdown com as seções: `Data/hora`, `Projeto`, `Agente/CLI`, `Contexto da sessão`, `O que foi feito`, `Arquivos alterados`, `Verificações executadas`, `Decisões e pendências`, `Próximos passos`, `Evidências` (paths de logs/screenshots gerados).
3. Salvar em `docs/sessoes/RELATORIO-SESSAO-<YYYY-MM-DD>-<HHMM>-<slug>.md` (crie o diretório se não existir; se o projeto mantiver padrão próprio de nomenclatura em `docs/sessoes/`, siga-o).
4. Atualizar `docs/decisoes.md` (quando existir) com decisões novas, sem inventar homologação, data de lançamento, preço ou fornecedor.
5. Perguntar ao Marcello antes do upload: usar o caminho autorizado do Dropbox para o projeto e enviar o arquivo (ou preparar o arquivo empacotado e devolver o comando exato de upload para ele rodar). Nunca enviar sem a palavra do Marcello.
6. Fechar apontando: relatório criado, destino local, e estado do upload (enviado / aguardando autorização).
