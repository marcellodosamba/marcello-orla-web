import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { getPublicCatalog } from '@/lib/data/public-catalog'

// O catálogo público depende de Supabase em runtime, nunca de prerender sem credenciais.
export const dynamic = 'force-dynamic'

export const metadata = publicPageMetadata({
  pathname: '/musica',
  title: 'Música',
  description: 'Ouça as músicas publicadas por Marcello Orla, incluindo Amor Líquido, Podia Ser e Espetacular.',
})
const previewTracks = [
  { id: 'preview-amor-liquido', title: 'Amor Líquido' },
  { id: 'preview-podia-ser', title: 'Podia Ser' },
  { id: 'preview-espetacular', title: 'Espetacular' },
]
export default async function MusicaPage() {
  const catalog = await getPublicCatalog()
  const tracks = catalog.tracks.length > 0 ? catalog.tracks : process.env.NODE_ENV !== 'production' ? previewTracks : []
  return (
    <main id="conteudo" className="a-plus-main a-plus-inner" tabIndex={-1}>
      <section className="a-plus-music-intro" aria-labelledby="musica-title">
        <div className="a-plus-music-copy">
          <h1 id="musica-title" className="a-plus-inner-title">Música</h1>
          <p className="a-plus-caption">Faixas publicadas do álbum CARIOCANDO.</p>
        </div>
        <figure className="a-plus-music-art">
          {/* Mídia Canva reorganizada sobre fundo do A+, sem alterar o rosto ou inventar capa. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="a-plus-music-wave" src="/media/marcello-orla-canva-onda-musical.png" width={952} height={315} alt="" aria-hidden="true" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="a-plus-music-cutout" src="/media/marcello-orla-canva-recorte-busto.png" width={896} height={922} alt="Retrato recortado do acervo artístico Canva de Marcello Orla" loading="lazy" />
        </figure>
      </section>
      {catalog.error && process.env.NODE_ENV === 'production' && <p role="status" className="a-plus-status">{catalog.error}</p>}
      <ol className="a-plus-track-list">
        {tracks.map((track, index) => (
          <li key={track.id} className="a-plus-track">
            <span className="a-plus-track-number" aria-hidden="true">{String(index+1).padStart(2,'0')}</span>
            <span className="a-plus-track-title">{track.title}</span>
            <a className="a-plus-listen" href="https://beacons.ai/marcellorlaoff" target="_blank" rel="noopener noreferrer" aria-label={`Ouvir ${track.title} nos canais oficiais`}>Ouvir ↗</a>
          </li>
        ))}
      </ol>
      {tracks.length === 0 && <p className="a-plus-status">Catálogo temporariamente indisponível.</p>}
    </main>
  )
}
