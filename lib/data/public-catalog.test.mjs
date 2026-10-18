import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'
import * as projection from './public-projection.ts'

const source = readFileSync(new URL('./public-catalog.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText

function catalog(pages) {
  const ranges = []
  let selected = false
  const query = {
    select(fields) {
      assert.equal(fields, 'id,titulo:title,album:release_title,numero:track_number')
      selected = true
      return this
    },
    order(field) {
      assert.equal(field, 'track_number')
      return this
    },
    async range(start, end) {
      assert.ok(selected)
      selected = false
      ranges.push([start, end])
      return pages.shift()
    },
  }
  const modules = {
    'server-only': {},
    '@supabase/supabase-js': { createClient: (_url, _key, options) => {
      assert.deepEqual(options.auth, { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false })
      return { from(table) { assert.equal(table, 'marcello_public_tracks'); return query } }
    } },
    './public-projection': projection,
  }
  const exports = {}
  new Function('require', 'exports', compiled)(name => {
    assert.ok(Object.hasOwn(modules, name), `Unexpected import: ${name}`)
    return modules[name]
  }, exports)
  return { getPublicCatalog: exports.getPublicCatalog, ranges }
}

test('public catalog reads only the Marcello Orla public read-model and projects four public fields across pages', async () => {
  const row = { id: 'track', titulo: 'Samba', album: null, numero: 1 }
  const { getPublicCatalog, ranges } = catalog([{ data: Array(500).fill(row), error: null }, { data: [row], error: null }])
  const result = await getPublicCatalog()
  assert.equal(result.error, null)
  assert.equal(result.tracks.length, 501)
  assert.deepEqual(result.tracks[500], { id: 'track', title: 'Samba', album: null, number: 1 })
  assert.deepEqual(ranges, [[0, 499], [500, 999]])
})

test('database denial, missing data and invalid projection fail closed without a fallback', async () => {
  for (const page of [{ data: null, error: { message: 'private error' } }, { data: null, error: null }, { data: [{ id: 'track', titulo: null }], error: null }]) {
    const { getPublicCatalog } = catalog([page])
    const result = await getPublicCatalog()
    assert.deepEqual(result.tracks, [])
    assert.match(result.error, /indisponível/)
    assert.ok(!result.error.includes('private error'))
  }
})
