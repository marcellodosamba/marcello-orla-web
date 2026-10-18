import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { getPublicCatalog } from '@/lib/data/public-catalog'
import { PageHeading, ProjectCover } from '../public-content'

export const metadata = publicPageMetadata({
  pathname: '/cariocando',
  title: 'Cariocando',
  description: 'Conheça Cariocando, uma obra de samba carioca contemporâneo de Marcello Orla.',
})

export default async function CariocandoPage() {
  const catalog = await getPublicCatalog()
  const tracks = catalog.tracks.filter(track => track.album?.trim().toLowerCase() === 'cariocando')

  return (
    <main id="conteudo" className="page-wrap" tabIndex={-1}>
      <PageHeading
        eyebrow="Obra em destaque"
        title="Cariocando"
        description="Samba carioca contemporâneo. Uma obra de Marcello Orla."
      />
      <section className="album-layout">
        <ProjectCover />
        <div className="album-copy">
          <p className="eyebrow">Marcello Orla</p>
          <h2 className="section-title">Uma cidade em forma de canção.</h2>
          <p>
            Cariocando ocupa um lugar central nesta experiência pública.
            Acompanhe por aqui as informações e novidades confirmadas sobre a
            obra.
          </p>
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
