import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { getPublicCatalog } from '@/lib/data/public-catalog'
import Link from 'next/link'
import { PageHeading, ProjectCover } from '../public-content'

export const metadata = publicPageMetadata({
  pathname: '/musica',
  title: 'Música',
  description: 'Explore a música de Marcello Orla e conheça Cariocando, uma obra em destaque.',
})

export default async function MusicaPage() {
  const catalog = await getPublicCatalog()
  const tracks = catalog.tracks

  return (
    <main id="conteudo" className="page-wrap" tabIndex={-1}>
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
      <section className="section-block editorial-listening" aria-labelledby="listen-title">
        <p className="eyebrow">Escute</p>
        <h2 className="section-title" id="listen-title">A música segue por aqui.</h2>
        <p>
          Os canais oficiais do artista reúnem os links para escutar as
          faixas disponíveis e acompanhar novidades confirmadas.
        </p>
        <div className="editorial-actions">
          <a className="action-link" href="https://beacons.ai/marcellorlaoff" rel="noopener noreferrer">
            Ouvir nos canais oficiais <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}
