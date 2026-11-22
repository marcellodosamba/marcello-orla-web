# MARCELLO ORLA — instruções para agentes

> Regras comuns: [HUB SUPORTE-OPS](../../../../AGENTS.md). Regras locais vencem as do hub.

## Objetivo e documentação
Manter o aplicativo público independente da carreira e do portfólio de Marcello
Orla, com conteúdo confirmado, acessibilidade e autonomia de marca.
Ler README.md, package.json e .github/workflows/validate.yml. Consultar em
docs/brand/ as diretrizes homologadas v1.0, TAP A+, manifesto de tokens e
PREVIA-A-PLUS-MIDIAS-CANVA-20261019.md.
DEC-MO-DS-20261018-01 aprova A+ para implementação, com gates separados de
mídia, qualidade, aceite visual e publicação.

## Limites de execução
- Usar o Supabase exclusivo do artista e marcello_public_tracks no servidor.
- Não integrar Conselho, autenticação ou infraestrutura privada do OSAMBA.
- Não usar service_role nem expor credenciais por NEXT_PUBLIC_*.
- Não substituir catálogo de produção por lista estática de demonstração.
- Preservar tokens A+; CARIOCANDO é álbum com identidade própria não homologada.
- Não inventar agenda, integrantes, contratos, prêmios, créditos ou contatos.
- © OSAMBA SYSTEM é assinatura textual provisória, não prova de titularidade.
- Verificar direitos e licenças de imagens, artes e fontes. Não usar URLs
  temporárias de ativos como solução de produção.
- Preservar orçamento R$ 0; não criar hospedagem paralela.

## Comandos documentados
Na raiz, após conferir requisitos e efeitos:

```bash
npm ci
npm test
npm run typecheck
npm run build
npm run build:vinext
```

Instalar dependências somente quando o escopo permitir. O workflow usa Node 24.
npm test cobre lib/**/*.test.mjs; arquivos em tests/ não estão automaticamente
cobertos por esse script. Registrar a lacuna quando relevante.

## Validação efetivamente registrada
O registro da prévia de 19/10/2026 informa 24 testes Node e typecheck aprovados,
com QA visual no tablet e emulações de 390 e 820 px. O build registrado é
anterior às últimas mídias; não aprova automaticamente o estado atual.
Não há comprovação neste registro da execução integral da lista acima para
o estado final. Nenhum teste foi executado para criar este AGENTS.md.

## Testes necessários e critérios de aceite
Verificar separação do OSAMBA, projeção pública, catálogo, tokens, navegação,
SEO, links, foco, contraste, ativos e responsividade. Conferir navegador real
e larguras 390, 820 e 1366 px, direitos de mídia e aceite visual explícito.
Exigir build e CI correspondentes ao estado final alterado; informar resultados,
limitações e gates pendentes. Separar conceito homologado, prévia aprovada e
produção publicada. Não promover evidência histórica a aprovação atual.
Commit, merge, push e deploy são operações separadas e exigem autorização
específica aplicável. Publicação Cloudflare exige gates e autorização explícita.
Este documento não homologa a prévia nem autoriza publicação.
