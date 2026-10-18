import type { Metadata } from 'next'

/** Metadata de cada rota pública. URLs relativas são resolvidas por metadataBase no layout. */
export function publicPageMetadata({
  title,
  description,
  pathname,
}: {
  title: string
  description: string
  pathname: string
}): Metadata {
  const absoluteTitle = pathname === '/' ? title : `${title} — Marcello Orla`
  return {
    title: pathname === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Marcello Orla',
      url: pathname,
      title: absoluteTitle,
      description,
    },
    twitter: {
      card: 'summary',
      title: absoluteTitle,
      description,
    },
  }
}
