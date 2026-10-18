import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = path => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8')
const url = 'https://beacons.ai/marcellorlaoff'

test('navigation exposes artist biography and an official listening channel', () => {
  const chrome = read('app/(public)/site-chrome.tsx')
  assert.match(chrome, /href: '\/sobre', label: 'Sobre'/)
  assert.match(chrome, /href: '\/musica', label: 'Música'/)
})

test('biography reflects approved public artist tagline, without unverifiable claims', () => {
  const about = read('app/(public)/sobre/page.tsx')
  assert.match(about, /Carioca, samba, pagode e histórias que viram canção/)
  assert.match(about, /href="\/musica"/)
  assert.match(about, /href="https:\/\/beacons\.ai\/marcellorlaoff"/)
  assert.doesNotMatch(about, /mail(to)?:|telefone|prêmio|grammy|show confirmado|agenda confirmada/i)
})

test('music and Cariocando offer listening CTA to artist-approved link hub', () => {
  for (const route of ['musica','cariocando']) {
    const page = read(`app/(public)/${route}/page.tsx`)
    assert.ok(page.includes(url), `missing listening CTA on ${route}`)
    assert.match(page, /Ouvir nos canais oficiais/)
    assert.doesNotMatch(page, /mailto:|SUPABASE_PUBLISHABLE_KEY/)
  }
})

test('editorial CTA maintains accessible focus and mobile wrapping', () => {
  const css = read('app/globals.css')
  assert.match(css, /\.editorial-actions\s*\{[^}]*flex-wrap:\s*wrap/s)
  assert.match(css, /\.editorial-listening\s*\{[^}]*border-top:/s)
})
