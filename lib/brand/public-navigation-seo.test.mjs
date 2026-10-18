import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = path => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8')
const routes = ['/', '/musica', '/cariocando', '/banda', '/ao-vivo', '/agenda', '/contato', '/sobre']
const pageFor = route => `app/(public)/${route === '/' ? '' : route.slice(1) + '/'}page.tsx`

test('every public route defines its own canonical and Open Graph URL via shared metadata', () => {
  const helper = read('lib/seo/public-metadata.ts')
  assert.match(helper, /alternates:\s*\{\s*canonical:/)
  assert.match(helper, /openGraph:/)
  assert.match(helper, /url:\s*pathname/)
  assert.match(helper, /title:\s*pathname\s*===\s*['"]\/['"]\s*\?/)
  for (const route of routes) {
    const code = read(pageFor(route))
    assert.match(code, /publicPageMetadata\(/, `${route} should use shared metadata`)
    assert.ok(code.includes(`pathname: '${route}'`), `${route} should declare its own pathname`)
  }
})

test('public header offers keyboard skip link and every page provides its focus target', () => {
  const chrome = read('app/(public)/site-chrome.tsx')
  const css = read('app/globals.css')
  assert.match(chrome, /href="#conteudo"/)
  assert.match(chrome, /className="skip-link"/)
  assert.match(css, /\.skip-link:focus-visible/)
  assert.match(css, /\.nav-link\s*\{[^}]*min-height:\s*44px/s)
  for (const route of routes) {
    const code = read(pageFor(route))
    assert.match(code, /<main[^>]*id="conteudo"[^>]*tabIndex=\{-1\}/, `${route} should focus main`)
  }
})

test('public official links are available without exposing personal email', () => {
  const chrome = read('app/(public)/site-chrome.tsx')
  const contact = read('app/(public)/contato/page.tsx')
  assert.match(chrome, /https:\/\/beacons\.ai\/marcellorlaoff/)
  assert.match(contact, /https:\/\/beacons\.ai\/marcellorlaoff/)
  assert.doesNotMatch(chrome + contact, /mailto:|marcellodosamba021@gmail\.com|marcellorlaoff@gmail\.com/)
})
