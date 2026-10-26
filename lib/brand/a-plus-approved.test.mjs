import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
const read = name => readFileSync(new URL(`../../${name}`, import.meta.url), 'utf8')

test('A+ preview uses approved digital colors rather than rejected base', () => {
  const css = read('app/globals.css')
  assert.match(css, /--color-paper: #FFFFFF/)
  assert.match(css, /--color-ink: #202124/)
  assert.match(css, /--color-primary: #AD382E/)
  assert.match(css, /--color-paper-soft: #F2F3F5/)
  assert.match(css, /\.a-plus-hero/)
})
test('A+ homepage prioritizes artist name, listening, and existing Canva media', () => {
  const home = read('app/(public)/page.tsx')
  assert.match(home, /MARCELLO/)
  assert.match(home, /ORLA/)
  assert.match(home, /getPublicCatalog/)
  assert.match(home, /beacons\.ai\/marcellorlaoff/)
  assert.match(home, /marcello-orla-canva-retrato\.png/)
  assert.ok(existsSync(new URL('../../public/media/marcello-orla-canva-retrato.png', import.meta.url)))
  assert.doesNotMatch(home, /show confirmado|prêmio|agenda confirmada/i)
})
test('A+ header keeps OSAMBA as text credit only, without private integration', () => {
 const head=read('app/(public)/site-chrome.tsx')
 assert.equal((head.match(/© OSAMBA SYSTEM/g)||[]).length,2)
 assert.doesNotMatch(head,/\/login|@supabase|Conselho|autentica/i)
})
test('A+ keeps semantics: Cariocando is an album, font and locale verified', () => {
 const music=read('app/(public)/musica/page.tsx')
 const root=read('app/layout.tsx')
 assert.match(music,/álbum CARIOCANDO/)
 assert.match(root,/lang="pt-BR"/)
 assert.match(root,/Bricolage_Grotesque/)
 assert.match(root,/IBM_Plex_Sans/)
})

test('A+ reuses existing Canva media on white backgrounds', () => {
 const music=read('app/(public)/musica/page.tsx')
 const about=read('app/(public)/sobre/page.tsx')
 const css=read('app/globals.css')
 for (const name of ['marcello-orla-canva-onda-musical.png','marcello-orla-canva-recorte-busto.png']) {
   assert.ok(music.includes(name))
   assert.ok(existsSync(new URL('../../public/media/'+name, import.meta.url)))
 }
 for (const name of ['marcello-orla-canva-grafismo-editorial.png','marcello-orla-canva-recorte-corpo-inteiro.png']) {
   assert.ok(about.includes(name))
   assert.ok(existsSync(new URL('../../public/media/'+name, import.meta.url)))
 }
 assert.match(css, /--color-paper: #FFFFFF/)
 assert.match(css, /\.a-plus-about-canvas/)
 assert.doesNotMatch(music+about, /#272836|#F0EEE9/)
})
