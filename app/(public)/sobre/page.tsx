import Link from 'next/link'
import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { PageHeading } from '../public-content'

export const metadata = publicPageMetadata({
  pathname: '/sobre',
  title: 'O artista',
  description: 'Conheça Marcello Orla e sua identidade artística no samba carioca contemporâneo.',
})

export default function SobrePage() {
  return (
    <main id="conteudo" className="page-wrap" tabIndex={-1}>
      <PageHeading
        eyebrow="O intérprete"
        title="Marcello Orla"
        description="Carioca, samba, pagode e histórias que viram canção."
      />
      <section className="editorial-band" aria-labelledby="artist-statement-title">
        <p className="eyebrow" id="artist-statement-title">De onde vem</p>
        <p>
          O Rio de Janeiro é ponto de partida. Samba, pagode e histórias
          cotidianas se encontram na identidade musical de Marcello Orla.
        </p>
      </section>
      <section className="section-block editorial-listening" aria-labelledby="artist-listen-title">
        <p className="eyebrow">Música e encontro</p>
        <h2 className="section-title" id="artist-listen-title">Canções para ouvir de perto.</h2>
        <p>
          Conheça as faixas disponíveis no catálogo público e acompanhe os
          próximos capítulos pelos canais oficiais do artista.
        </p>
        <div className="editorial-actions">
          <Link className="action-link" href="/musica">
            Conhecer as músicas <span aria-hidden="true">↗</span>
          </Link>
          <a className="action-link secondary" href="https://beacons.ai/marcellorlaoff" rel="noopener noreferrer">
            Ver canais oficiais <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}
