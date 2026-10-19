# DIRETRIZES DE HOMOLOGAÇÃO DE MARCA — MARCELLO ORLA

**Versão:** 1.0 — DIRETRIZ HOMOLOGADA PELO MASTER  
**Data:** 18/10/2026  
**Escopo:** marca artística Marcello Orla, álbum Cariocando, banda (quando formalmente definida), site, material promocional e press kit.  
**Situação:** critérios de governança homologados em 18/10/2026. A identidade DIGITAL A+ do artista, seus tokens HEX sRGB e sua tipografia são aprovados como base de desenvolvimento por `DEC-MO-DS-20261018-01` e TAP `TAP-MO-ART-001`. **Não** homologa capa, fotografias, símbolos gráficos, correspondentes Pantone, propriedade intelectual de terceiros ou autorização de deploy.

## 1. Princípio de autonomia de marca

Cada projeto é responsável por definir sua própria estética, paleta, linguagem visual, tipografia, fotografia e apresentação pública. Nenhuma cor, layout ou elemento visual de OSAMBA, DUMONT ou de outro produto deve ser imposto a MARCELLO ORLA. Mesmo dentro da carreira, **MARCELLO ORLA** (identidade do artista) e **CARIOCANDO** (álbum) são camadas diferentes: o álbum pode ter uma direção de arte e paleta próprias, contanto que a autoria seja reconhecível e a arquitetura de marca seja coerente. Decisões já aprovadas mantêm seu estado histórico até substituição explícita. Uma proposta nova nunca é promovida automaticamente a marca oficial.

## 2. Identidades e papéis

| Camada | Papel | Critério de apresentação |
|---|---|---|
| MARCELLO ORLA | Marca-mãe do artista; nome, assinatura, biografia, presença profissional | Ser identificável independentemente de lançamentos e ter um sistema flexível para repertório, shows e imprensa |
| CARIOCANDO | **Álbum** do artista; narrativa, capa, repertório e campanha | Ter identidade criativa de álbum; distinguir faixas já publicadas de músicas planejadas; não anunciar datas ou créditos não confirmados |
| Banda Marcello Orla | Formação de palco, somente quando confirmada | Não inventar integrantes, instrumentos, imagens ou agenda |
| Site e EPK | Apresentação institucional, descoberta musical e material para imprensa/contratantes | Destacar o artista e o álbum; dados e contatos apenas confirmados; links oficiais; responsividade e acessibilidade |

## 3. Briefing criativo obrigatório antes de cada proposta

1. **Objetivo e público:** qual resultado desejado? Fãs, público de shows, imprensa, contratantes, curadores ou plataformas de streaming.
2. **Narrativa:** qual história será contada, qual a personalidade musical e quais associações visuais devem ser evitadas. Para MARCELLO ORLA: Rio contemporâneo, humano, calor musical, elegância sem estereótipos turísticos.
3. **Arquitetura visual:** o que pertence à marca-mãe e o que pertence à campanha/álbum. Registrar como assinatura do artista aparece na capa e em interfaces.
4. **Referências e originalidade:** pesquisar concorrência e direção editorial, evitando cópia de signos identificáveis. Toda referência deve ter origem identificada.
5. **Limites:** orçamento inicial R$ 0, materiais autorizados, privacidade, direitos autorais e tecnologia existente (GitHub/Next.js, Supabase, Cloudflare).

## 4. Critérios para homologar paleta e tipografia

**Autonomia cromática:** cada projeto propõe livremente sua paleta. O documento deve registrar nome interno da cor, função (fundo, texto, destaque, botão), valores HEX/sRGB efetivamente utilizados, provas em modo claro/escuro e compatibilidade de contraste. **Não** declarar equivalência Pantone ↔ HEX como exata sem fonte, sistema de cor e método de conversão explicitamente verificados; amostra Pantone digital não substitui prova física de impressão. Cores já existentes no repositório não são, por sua presença técnica, autorização automática para toda nova campanha.

**Acessibilidade:** verificar, no mínimo, contraste WCAG AA 4,5:1 para texto convencional e 3:1 para texto grande; componentes e estados de foco devem ser distinguíveis sem depender apenas da cor. Testar telas de celular, tablet e desktop, impressão quando pertinente e variação de luminosidade.

**Tipografia:** registrar famílias, funções, hierarquia, pesos, espaçamentos, disponibilidade técnica e licença de incorporação. A identidade digital A+ agora adota **Bricolage Grotesque** para display e **IBM Plex Sans** para UI/texto funcional. Cormorant Garamond e DM Sans ficam apenas como histórico da versão anterior; verificar licença e renderização das novas fontes.

## 5. Regras para fotografia, capa, ícones e IA

- Fotografias reais: autoria, autorização de uso, retrato e possíveis terceiros identificáveis, créditos e escopo de licença registrados por ativo.
- Capas e ilustrações: esclarecer quem detém direitos da obra, fontes, licenças e permissões para distribuição, mídia paga, imprensa e merchandising.
- Materiais gerados por IA: identificar como conceitos até homologação; não apresentá-los como fotografia documental real ou como capa oficial sem aprovação; verificar direitos e requisitos de plataformas.
- Elementos de bancos gráficos, inclusive Canva: checar licença e exclusividade antes de usar como sinal distintivo ou pedido de registro marcário. Licença não exclusiva não garante exclusividade de logotipo.
- Não usar imagens de artista conhecido como substituto do retrato de Marcello Orla; não adicionar nomes de banda, shows ou datas sem evidência.

## 6. Entregáveis de cada proposta de identidade

| Entregável | Evidência mínima |
|---|---|
| Conceito e manifesto visual | Uma página com narrativa, público, tom e referências documentadas |
| Alternativas visuais | Duas ou três rotas autorais, com vantagens, riscos e diferenças reais |
| Sistema cromático | Tokens, aplicações, contrastes, fontes dos códigos e testes de leitura |
| Marca/assinatura | Versões principal, compacta, monocromática, tamanhos mínimos e áreas de proteção |
| Direção fotográfica | Moodboard e relação de imagens com licenças/autorização |
| Aplicações reais | Home desktop/mobile, página do álbum, capa e peça social/EPK onde couber |
| Testes técnicos | Contraste, legibilidade, performance, responsividade, foco, SEO e conferência de links |
| Inventário jurídico | Direitos de imagens, logotipos, fontes, créditos, LGPD e checagem de marcas antes de eventual registro |
| Registro de decisão | Número de versão, data, responsável, evidências, status e decisão expressa do Master |

## 7. Fluxo de homologação

**G0 — Briefing validado:** nome correto, natureza do produto, público, direitos e restrições.  
**G1 — Propostas:** no mínimo duas abordagens avaliáveis, sem marcações “oficial” ou “congelado”.  
**G2 — Qualidade editorial:** legibilidade, originalidade, reputação de artista, narrativa coerente; rejeitar estética genérica ou clichês excessivos.  
**G3 — Qualidade técnica:** tipografia, contraste, acessibilidade, responsividade, performance, arquivos editáveis/exportáveis e licenças.  
**G4 — Homologação:** **PASS** apenas mediante aprovação expressa do Master, com ID e versão; caso contrário, **PENDENTE**, **FAIL** ou **UNKNOWN** conforme evidências.  
**G5 — Implantação:** desenvolvimento em branch, PR, testes no Ubuntu e GitHub Actions, aprovação visual em prévia isolada; publicação Cloudflare somente com autorização de DEPLOY específica.  
**G6 — Registro:** atualizar BRAND BOOK, changelog, README, inventário de ativos e relatório no Dropbox `/MARCELLO ORLA`.

## 8. Orquestração das ferramentas

- **Canva:** curadoria de materiais existentes, conceitos, moodboards, peças sociais e press kit. A busca encontrou cinco designs do universo Marcello Orla, incluindo `DAHYOvKXs0Q` (“Homepage oficial Marcello Orla”), ainda sem estado de homologação confirmado. Nenhum Brand Kit foi localizado na conta consultada.
- **Figma:** sistema visual editável (tokens, componentes, versões desktop/tablet/mobile), revisões e critérios de aprovação. Não constitui fonte oficial até validação.
- **Lovable:** laboratório opcional de ideias e protótipos, sem acesso aos segredos de produção nem migração da stack. Conector já ativado; protótipo A+ privado `fce95c94-94d6-42d5-bb20-aea358bb88b1`. Créditos Free esgotados; não contratar serviço.
- **Vercel:** ferramentas de diagnóstico e eventual comparação técnica, mas **não publicar este portfólio comercial no plano Hobby**, cuja política restringe uso comercial; nenhum projeto Marcello Orla foi encontrado na conta consultada.
- **GitHub + Ubuntu/Termux:** implementação de código, histórico, revisão por PR, testes e auditoria.
- **Cloudflare:** produção existente; não criar hospedeiro paralelo ou executar deploy sem autorização.
- **Dropbox:** registro de materiais homologados, arquivos-fonte, versões e relatórios de sessão.

## 9. Sequência de implementação autorizada

**Rodada A — CONCLUÍDA para conceito:** o Master escolheu a Direção A e aprovou o **A+** (branco puro, simplicidade do A e tipografia expressiva do B). **Rodada B — PENDENTE:** CARIOCANDO é álbum, com identidade e capa próprias a serem homologadas separadamente; três faixas publicadas não equivalem ao álbum completo. **Rodada C — AUTORIZADA, PENDENTE DE EXECUÇÃO:** portar o A+ para Next.js em branch/PR, integrar somente imagens com licença e autorização, testar e solicitar autorização de DEPLOY separada.

## 10. Governança e histórico

**Esta diretriz e a base digital A+ do artista estão homologadas pela decisão expressa do Master.** Ausência de provas de licença, direito, renderização, correspondência Pantone ou autorização de deploy permanece **UNKNOWN/PENDENTE**. Código e produção não foram alterados por esta decisão.

## 11. Registro de decisão homologada — DEC-MO-DS-20261018-01

**Decisão:** aprovar A+ como sistema de identidade DIGITAL v1.0 para MARCELLO ORLA, sujeito aos gates de implementação e publicação; aprovado o documento de diretrizes de homologação como política vinculante deste projeto.

| Objeto | Decisão / estado |
|---|---|
| Artista MARCELLO ORLA | Marca-mãe; direção A+ HOMOLOGADA PARA IMPLEMENTAÇÃO |
| Conceito | Branco puro opaco, grid mínimo, legibilidade e impacto; tipografia expressiva |
| Tokens sRGB digitais | `#FFFFFF` branco, `#202124` carbono, `#AD382E` coral, `#F2F3F5` cinza frio, `#D9DDE1` linhas, `#5A5E66` texto secundário |
| Paletas anteriores | Baritone Blue `#272836` e Cloud Dancer `#F0EEE9` SUBSTITUÍDOS na nova linha-base da marca do artista |
| Tipografia | Bricolage Grotesque display + IBM Plex Sans funcional; verificação de licença e fontes ainda exigida |
| Home | Nome MARCELLO ORLA e músicas publicadas, com acesso discreto a Sobre/Música |
| Crédito solicitado | `© OSAMBA SYSTEM` no topo direito e rodapé; **texto provisório**, sem reconhecimento de titularidade jurídica nem uso de logo gráfico desconhecido |
| Catálogo | Amor Líquido, Podia Ser, Espetacular; fonte efetiva do site: read-model público no Supabase exclusivo do artista |
| Álbum CARIOCANDO | **ÁLBUM**, com identidade própria ainda NÃO HOMOLOGADA |
| Arquivos Canva e fotos | uso público pendente de validação de ativo, autoria, licença e direitos de imagem |
| Pantone/CMYK | não homologados; equivalência não presumida |
| Protótipo Lovable | homologado como referência conceitual, NÃO como build de produção |
| Deploy Cloudflare | NÃO AUTORIZADO por esta decisão |

**Gates pendentes de produção:** mídia devidamente licenciada; teste real de viewport 390, 820 e 1366 px; idioma `pt-BR`; SEO e páginas endereçáveis; contraste dos elementos funcionais; faixas alimentadas pelo Supabase, CI completo, revisão visual e aprovação de publicação. A auditoria Spider anterior foi inspeção de código e cálculo, não teste HTTP ao vivo.

**Artefatos de controle:** `TAP-MARCELLO-ORLA-A-PLUS-v1.0-HOMOLOGADA.md`, `IDENTIDADE-MARCELLO-ORLA-A-PLUS-v1.0.json`, minuta histórica v0.1 e `AUDITORIA-SPIDER-MARCELLO-ORLA-2026-10-18.md`.

