import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8')

test('palette is self-contained and preserves the 15-color Marcello Orla curation', () => {
  const palette = JSON.parse(read('./palette.json'))
  const css = read('../../app/globals.css')

  assert.equal(palette.version, 'MO-CORES-2026-10-12-v1')
  assert.equal(palette.colors.length, 15)

  const expected = new Map([
    ['COR-01', ['Cloud Dancer', '#F0EEE9']],
    ['COR-09', ['Baritone Blue', '#272836']],
    ['COR-11', ['Grayed Jade', '#9ABFAB']],
    ['COR-14', ['Burgundy', '#64313E']],
    ['COR-15', ['Azul 533 C', '#1B2A41']],
  ])

  for (const color of palette.colors) {
    assert.match(color.id, /^COR-\d{2}$/)
    assert.match(color.hex, /^#[0-9A-F]{6}$/)
    assert.match(css, new RegExp(`--brand-${color.id.toLowerCase()}:\\s*${color.hex};`, 'i'))
  }

  for (const [id, [name, hex]] of expected) {
    const color = palette.colors.find((entry) => entry.id === id)
    assert.ok(color, `${id} must exist`)
    assert.equal(color.name, name)
    assert.equal(color.hex, hex)
  }
})

test('muted text on paper meets WCAG AA contrast for small text', () => {
  const palette = JSON.parse(read('./palette.json'))
  const css = read('../../app/globals.css')
  const match = css.match(/--color-muted:\s*color-mix\(in srgb, var\(--color-ink\) (\d+(?:\.\d+)?)%, transparent\);/)
  assert.ok(match, 'muted must retain its explicit ink alpha blend')

  const alpha = Number(match[1]) / 100
  const rgb = (id) => palette.colors.find((color) => color.id === id).hex.match(/[\da-f]{2}/gi).map((channel) => parseInt(channel, 16))
  const paper = rgb('COR-01')
  const muted = rgb('COR-13').map((channel, index) => channel * alpha + paper[index] * (1 - alpha))
  const luminance = (channels) => channels.map((channel) => {
    const value = channel / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0)

  const ratio = (luminance(paper) + 0.05) / (luminance(muted) + 0.05)
  assert.ok(ratio >= 4.5, `muted contrast ${ratio.toFixed(3)}:1 is below 4.5:1`)
})
