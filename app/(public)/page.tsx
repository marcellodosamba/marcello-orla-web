import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { getPublicCatalog } from '@/lib/data/public-catalog'

// O catálogo público depende de Supabase em runtime, nunca de prerender sem credenciais.
export const dynamic = 'force-dynamic'

export const metadata = publicPageMetadata({
  pathname: '/',
  title: 'Marcello Orla — Músicas',
  description: 'Marcello Orla. Ouça Amor Líquido, Podia Ser e Espetacular nos canais oficiais.',
})

// Fallback EXCLUSIVO da prévia local: somente três faixas já identificadas como publicadas.
// Produção continua usando o catálogo Supabase MARCELLO ORLA (read-model público).
const previewTracks = [
  { id: 'preview-amor-liquido', title: 'Amor Líquido' },
  { id: 'preview-podia-ser', title: 'Podia Ser' },
  { id: 'preview-espetacular', title: 'Espetacular' },
]
const listeningLink = 'https://beacons.ai/marcellorlaoff'

export default async function HomePage() {
  const catalog = await getPublicCatalog()
  const tracks = catalog.tracks.length > 0
    ? catalog.tracks
    : process.env.NODE_ENV !== 'production' ? previewTracks : []

  return (
    <main id="conteudo" className="a-plus-main" tabIndex={-1}>
      <section className="a-plus-hero" aria-labelledby="home-title">
        <div className="a-plus-hero-text">
          <h1 className="a-plus-title" id="home-title">
            <span>MARCELLO</span><span>ORLA</span>
          </h1>
        </div>
        <figure className="a-plus-portrait">
          {/* Prévia: mídia do Canva do titular. Direitos e arquivo de alta resolução pendentes de homologação. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/marcello-orla-canva-retrato.png" alt="Retrato editorial presente no acervo Canva de Marcello Orla" width={600} height={600} loading="eager" />
        </figure>
      </section>
      <section aria-labelledby="musicas-home" className="a-plus-tracks">
        <h2 className="a-plus-label" id="musicas-home">Músicas</h2>
        {catalog.error && process.env.NODE_ENV === 'production' && <p role="status" className="a-plus-status">{catalog.error}</p>}
        {tracks.length === 0 ? <p className="a-plus-status">Catálogo temporariamente indisponível.</p> : (
          <ol className="a-plus-track-list">
            {tracks.map((track, i) => (
              <li className="a-plus-track" key={track.id}>
                <span className="a-plus-track-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="a-plus-track-title">{track.title}</span>
                <a className="a-plus-listen" href={listeningLink} target="_blank" rel="noopener noreferrer" aria-label={`Ouvir ${track.title} nos canais oficiais`}>Ouvir <span aria-hidden="true">↗</span></a>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  )
}
