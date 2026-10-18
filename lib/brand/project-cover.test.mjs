import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../../app/(public)/public-content.tsx', import.meta.url), 'utf8')

test('public Cariocando cover is Marcello-only and does not render the inherited OSAMBA artwork', () => {
  assert.doesNotMatch(source, /cariocando-clara\.jpg/)
  assert.doesNotMatch(source, /from ['"]next\/image['"]/)
  assert.match(source, /CARIOCANDO/)
  assert.match(source, /MARCELLO ORLA/)
})
