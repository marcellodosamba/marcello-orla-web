import type { Metadata } from 'next'
import { getPublicCatalog } from '@/lib/data/public-catalog'
import Link from 'next/link'
import { PageHeading, ProjectCover } from '../public-content'

export const metadata: Metadata = {
  title: 'Música',
  description:
    'Explore a música de Marcello Orla e conheça Cariocando, uma obra em destaque.',
}

export default async function MusicaPage() {
  const catalog = await getPublicCatalog()
  const tracks = catalog.tracks

  return (
    <main className="page-wrap">
      <PageHeading
        eyebrow="Escuta"
        title="Música"
        description="Um espaço para descobrir as obras de Marcello Orla."
      />
      <section className="album-layout" aria-labelledby="cariocando-title">
        <Link href="/cariocando" aria-label="Conheça Cariocando">
          <ProjectCover />
        </Link>
        <div className="album-copy">
          <p className="eyebrow">Em destaque</p>
          <h2 className="section-title" id="cariocando-title">
            Cariocando
          </h2>
          <p>
            Uma obra de samba carioca contemporâneo no centro do universo
            musical de Marcello Orla.
          </p>
          <Link className="text-link" href="/cariocando">
            Conhecer Cariocando <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section aria-labelledby="catalog-title" className="section-block">
        <h2 id="catalog-title" className="section-title">Faixas no catálogo</h2>
        {catalog.error ? <p className="catalog-state" role="alert">{catalog.error}</p> : tracks.length === 0 ? <p className="catalog-state">Nenhuma faixa disponível neste catálogo.</p> : (
          <ul className="catalog-tracks">{tracks.map(track => <li key={track.id}><span className="catalog-track-title">{track.number != null ? `${track.number}. ` : ''}{track.title}</span>{track.album && <span className="catalog-track-album">{track.album}</span>}</li>)}</ul>
        )}
      </section>
    </main>
  )
}
