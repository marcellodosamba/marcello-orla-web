import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../app/(public)/site-chrome.tsx', import.meta.url), 'utf8')

test('public Marcello Orla chrome has no OSAMBA login coupling', () => {
  assert.equal((source.match(/© OSAMBA SYSTEM/g) || []).length, 2, 'visual-only OSAMBA credit belongs in header and footer')
  assert.doesNotMatch(source, /osamba-ai|osamba\.supabase|Conselho|service_role|auth\/login|login\(/i)
  assert.doesNotMatch(source, /href=["']\/login["']/)
})
