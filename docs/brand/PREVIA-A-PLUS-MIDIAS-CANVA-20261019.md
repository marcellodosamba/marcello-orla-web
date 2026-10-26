# MARCELLO ORLA — Prévia A+ com mídias Canva (19/10/2026)

**Situação:** prévia de homologação visual, SEM APROVAÇÃO FINAL e SEM DEPLOY.
**Linha-base:** TAP-MO-ART-001 / decisão DEC-MO-DS-20261018-01.
**Branch local:** preview/marcello-a-plus-homologacao (não enviada ao GitHub).

## Mídias aplicadas na prévia
- Home: retrato quadrado do Canva; arquivo de prévia com 600 × 600 pixels.
- Música: recorte busto Canva (aprox. 194 × 200 px no material recuperado) e grafismo de ondas transparente; superfície #F2F3F5. Não atribuir a arte como capa de single.
- Sobre: recorte de corpo inteiro Canva (aprox. 74 × 200 px recuperados) mais grafismo geométrico; fundo #FFFFFF. O arquivo atual é de baixa resolução.
- Não inserir os layouts legados com fundo escuro e slogans não homologados como se fossem artes finais.
- Os componentes visuais provêm dos designs Canva consultados do titular, mas não há comprovação documental neste ciclo dos direitos nem dos arquivos masters de alta resolução.
- Não utilizar links temporários e assinados do Canva em produção; ativos da prévia são arquivos locais.

## Plataforma e arquitetura
- Home somente marca do artista, foto e músicas publicadas.
- Música lista do read-model público Supabase MARCELLO ORLA; a prévia local isolada usa as três faixas confirmadas como demonstração.
- Sobre com frase pública aprovada.
- © OSAMBA SYSTEM textual no topo direito/rodapé, sem integração privada ou autoria fonográfica atribuída.
- Novo CSS .public-shell isolado das áreas de gestão e das demais interfaces ainda não redesenhadas.
- Fontes Bricolage Grotesque (display), IBM Plex Sans (funcional); fontes anteriores mantidas para compatibilidade das outras rotas.

## Validações executadas
- Chrome Android real no tablet: páginas Home, Música, Sobre capturadas.
- Emulação Chrome DevTools nas larguras 390 e 820 px: largura renderizada = scrollWidth; nenhum overflow horizontal.
- Fundo computado nas seis verificações: rgb(255, 255, 255).
- Cinco arquivos visuais (retrato + busto + corpo inteiro + grafismo + ondas) carregados sem erros.
- 24/24 testes Node executados dentro do Ubuntu PRoot com dependências instaladas: APROVADOS.
- Next.js typecheck no Ubuntu PRoot: APROVADO.
- O build de produção foi validado na rodada anterior (23 testes), ANTES da inclusão dos últimos arquivos; não afirmar novo build aprovado até CI da futura PR.

## Próxima sequência
1. Master avalia a prévia com as três páginas e decide aprovar/refinar.
2. Obter imagens originais em alta resolução + documentação dos direitos de imagem/arte.
3. Após aceite visual: commit e push na branch, abrir PR, rodar CI, fazer merge controlado.
4. Deploy Cloudflare SOMENTE com nova autorização explícita, após conferência de segredos, fluxos e plano de rollback.

## Referência local
- Página principal: http://127.0.0.1:3211/ no tablet
- Outro aparelho na mesma rede: http://192.168.1.6:3211/
- /#musica e /#sobre na prévia estática isolada.
- Prévia indisponível se Termux parar.
