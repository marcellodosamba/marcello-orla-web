import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const layout = readFileSync(new URL('../../app/layout.tsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../../app/globals.css', import.meta.url), 'utf8')
const robots = readFileSync(new URL('../../app/robots.ts', import.meta.url), 'utf8')
const sitemapUrl = new URL('../../app/sitemap.ts', import.meta.url)

test('site foundation uses the Marcello Orla typography instead of template fonts', () => {
  assert.match(layout, /Cormorant_Garamond/)
  assert.match(layout, /DM_Sans/)
  assert.doesNotMatch(layout, /Geist/)
  assert.doesNotMatch(css, /Arial|Helvetica|Georgia|Times New Roman/)
  assert.match(css, /--font-dm-sans/)
  assert.match(css, /--font-cormorant/)
})

test('metadata has an explicit canonical base for the current public URL', () => {
  assert.match(layout, /const SITE_URL = ["']https:\/\/marcello-orla-web\.marcellodosamba021\.workers\.dev["']/)
  assert.match(layout, /metadataBase:\s*new URL\(SITE_URL\)/)
  assert.match(layout, /alternates:\s*\{\s*canonical:\s*["']\/["']/s)
  assert.match(layout, /url:\s*["']\/["']/)
})

test('robots advertises a sitemap and sitemap route exists', () => {
  assert.match(robots, /sitemap:/)
  assert.ok(existsSync(sitemapUrl), 'app/sitemap.ts must exist')
})
