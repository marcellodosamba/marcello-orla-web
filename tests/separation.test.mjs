import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../app/(public)/site-chrome.tsx', import.meta.url), 'utf8')

test('public Marcello Orla chrome has no OSAMBA login coupling', () => {
  assert.doesNotMatch(source, /OSAMBA/i)
  assert.doesNotMatch(source, /href=["']\/login["']/)
})
