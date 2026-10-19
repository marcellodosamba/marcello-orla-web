# TAP — TERMO DE ABERTURA E HOMOLOGAÇÃO DE PROJETO

**ID:** `TAP-MO-ART-001`  
**Nome:** MARCELLO ORLA — Identidade A+ e Portfólio Digital  
**Versão:** 1.0 · **Data:** 18/10/2026 (Brasil)  
**Aprovação:** Master — expressa na conversa: “De acordo next homologar diretriz e projeto”.  
**Estado:** **HOMOLOGADO PARA IMPLEMENTAÇÃO / DEPLOY NÃO AUTORIZADO**  
**Decisão vinculada:** `DEC-MO-DS-20261018-01`

## 1. Motivo e objetivo

Substituir a linha visual anterior de MARCELLO ORLA, reprovada em qualidade cromática pelo Master, por um sistema digital minimalista consistente: **A+**, estrutura do A (Galeria em Branco) + tipografia com energia do B. Aparência profissional sem pretensão de grandeza, limpa e objetiva.

## 2. Entregável e limites homologados

**Marca do artista:** MARCELLO ORLA é identidade principal, independente do álbum. **CARIOCANDO é um ÁLBUM** com identidade visual e direitos de capa que exigem decisão separada.

**Design A+:** base de cor opaca `#FFFFFF`; Carbono `#202124`; Coral `#AD382E`; Cinza frio `#F2F3F5`; Borda `#D9DDE1`; texto secundário `#5A5E66`. HEX sRGB **aprovados como tokens do sistema digital v1.0**, sem declarar Pantone, CMYK ou provas de tela/impressão homologadas. Abandonar Baritone Blue `#272836` e Cloud Dancer `#F0EEE9` no novo design, preservar o código antigo até nova versão pronta.

**Tipografia:** Bricolage Grotesque para nome/títulos e IBM Plex Sans funcional. Licença e carregamento correto deverão ser verificados.

**Home:** essencialmente nome do artista e três músicas publicadas, links de escuta oficiais. Navegação secundária curta: Sobre/Música. Conteúdo público confirmado: `Amor Líquido`, `Podia Ser`, `Espetacular`. Não anunciar lançamento completo do álbum nem adicionar faixas não publicadas.

**Assinatura:** `© OSAMBA SYSTEM` em texto, no superior direito e no rodapé, segundo determinação do Master. Esta homologação aprova somente **posição e expressão gráfica provisória**. Não comprova titularidade legal de copyright nem autoriza inventar logotipo ou conectar serviços privados do OSAMBA.

**Mídias:** Canva pode fornecer mídias para testes se houver arquivo original e autorização; fotografias, capas, logos e direitos ainda **PENDENTES** de prova e aprovação individual.

## 3. Tecnologia e recursos

- Repositório privado: `marcellodosamba/marcello-orla-web` (Next.js, TypeScript).
- Catálogo exclusivamente de leitura no Supabase do artista: `public.marcello_public_tracks`.
- Produção existente Cloudflare Workers; sem nova hospedagem ou domínio.
- Lovable protótipo `fce95c94-94d6-42d5-bb20-aea358bb88b1`, **referência artística**, não build de produção; Free sem créditos adicionais.
- Canva/Dropbox para ativos e documentação; Figma opcional; infra adicional R$ 0.
- Nenhum banco, login, permissão de OSAMBA ou outro produto integra o site por causa da assinatura visual.

## 4. Aceite e governança

| Marco | Estado nesta TAP |
|---|---|
| Escolha A+ e troca da paleta antiga | PASS / HOMOLOGADO |
| Valores sRGB como base digital | PASS / HOMOLOGADO PARA IMPLEMENTAÇÃO |
| Diretriz de marca v1.0 | PASS / HOMOLOGADA |
| CARIOCANDO identidade do álbum | PENDENTE / escopo separado |
| Retrato, capas, logos e licenças Canva | UNKNOWN/PENDENTE |
| Direitos legais da assinatura © | PENDENTE |
| Teste de cor em telas reais | PENDENTE |
| Migração A+ do Lovable para Next.js | PENDENTE |
| Responsividade 390, 820, 1366px | PENDENTE |
| Idioma pt-BR e SEO por rota | PENDENTE PARA NOVO LAYOUT |
| Catálogo dinâmico do Supabase no A+ | PENDENTE |
| CI Next/Vinext, segurança e rollback | PENDENTE PARA NOVO LAYOUT |
| Deploy Cloudflare | **NÃO AUTORIZADO** |

**Critérios para release:** evitar cortes em título/tracklist; foco acessível; texto WCAG AA (4,5:1), controles não-textuais quando cabível (3:1); superfícies opacas sem filtros que distorçam a cor; metas de carregamento móvel; links verificados; fontes licenciadas; direitos de mídias comprovados; meta `lang=pt-BR`; títulos/canonicals/OG corretos; build/tests, revisão visual e autorização explícita para deploy.

## 5. Plano de execução

**M1 Inventário:** classificar ativos Canva e comprovar direitos, original/resolução e autorizações.  
**M2 Implementação:** transferir A+ ao Next.js mantendo o Supabase isolado, via branch e PR.  
**M3 Testes:** navegador real, responsividade, acessibilidade, SEO, links, CI e inspeção de pixels.  
**M4 Aceite:** documentar capturas, checklist e aprovação de release.  
**M5 Publicação:** somente após solicitação separada e autorização explícita do workflow manual Cloudflare `DEPLOY`, com plano de reversão.

## 6. Controle da decisão

- Autorização específica desta sessão = **homologar diretrizes, conceito A+ e projeto para execução**, e registrar o resultado no GitHub/Dropbox.
- **Não inclui autorização para publicar, alterar segredos, banco de dados ou ativos públicos**.
- Referência: `DIRETRIZES-MARCA-MARCELLO-ORLA-v1.0-HOMOLOGADAS.md` e `IDENTIDADE-MARCELLO-ORLA-A-PLUS-v1.0.json`.
- Auditoria de origem `AUDITORIA-SPIDER-MARCELLO-ORLA-2026-10-18.md` é uma inspeção estática; não afirmar que o spider HTTP foi executado.

**Assinatura de decisão:** aprovado pelo Master na conversa de 18/10/2026. Este registro documenta a autorização conversacional, não substitui assinatura digital certificada ou instrumento jurídico formal.

