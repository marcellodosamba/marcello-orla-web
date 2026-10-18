import type { Metadata } from 'next'
import Link from 'next/link'
import { ProjectCover, ProjectLink } from './public-content'

export const metadata: Metadata = {
  title: 'Marcello Orla — Samba carioca contemporâneo',
  description:
    'Conheça Marcello Orla, sua música e o universo do samba carioca contemporâneo.',
}

export default function HomePage() {
  return (
    <main className="page-wrap">
      <section className="hero-grid" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Uma voz, um lugar, muitas histórias</p>
          <h1 className="display-title" id="home-title">
            Marcello Orla
          </h1>
          <p className="hero-subtitle">Samba carioca contemporâneo.</p>
          <div className="action-row">
            <Link className="action-link" href="/musica">
              Explorar música <span aria-hidden="true">↗</span>
            </Link>
            <Link className="action-link secondary" href="/sobre">
              Conhecer o artista <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <figure className="cover-frame-hero">
          <ProjectCover />
          <figcaption className="cover-caption">
            <span>Uma obra em destaque</span>
            <span>Cariocando</span>
          </figcaption>
        </figure>
      </section>

      <section className="editorial-band section-block">
        <p className="eyebrow">O universo</p>
        <p>
          Música para escutar de perto. Um espaço para conhecer o artista e
          acompanhar o que vem ao vivo.
        </p>
      </section>

      <section className="section-block" aria-labelledby="explore-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore</p>
            <h2 className="section-title" id="explore-title">
              O universo Orla
            </h2>
          </div>
        </div>
        <div className="feature-grid">
          <ProjectLink
            href="/cariocando"
            title="Cariocando"
            detail="Conheça a obra"
          />
          <ProjectLink
            href="/banda"
            title="Banda"
            detail="A formação musical"
          />
          <ProjectLink
            href="/ao-vivo"
            title="Ao vivo"
            detail="Presença de palco"
          />
          <ProjectLink
            href="/agenda"
            title="Agenda"
            detail="Acompanhe as novidades"
          />
        </div>
      </section>
    </main>
  )
}
