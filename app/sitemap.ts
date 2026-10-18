import type { MetadataRoute } from 'next'

const SITE_URL = 'https://marcello-orla-web.marcellodosamba021.workers.dev'

const routes = [
  '/',
  '/musica',
  '/cariocando',
  '/banda',
  '/ao-vivo',
  '/agenda',
  '/contato',
  '/sobre',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
