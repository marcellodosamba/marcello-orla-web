import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { EmptyState, PageHeading } from '../public-content'

export const metadata = publicPageMetadata({
  pathname: '/contato',
  title: 'Contato e contratação',
  description: 'Informações de contato e contratação artística de Marcello Orla.',
})

export default function ContatoPage() {
  return (
    <main id="conteudo" className="page-wrap" tabIndex={-1}>
      <PageHeading
        eyebrow="Produção"
        title="Contato"
        description="Um espaço para conversas sobre apresentações, eventos e projetos."
      />
      <EmptyState title="Canal oficial em preparação">
        Os dados de contato para contratação serão publicados assim que forem
        confirmados.
      </EmptyState>
      <section className="contact-official section-block" aria-labelledby="contact-official-heading">
        <h2 className="section-title" id="contact-official-heading">Acompanhe o artista</h2>
        <p>Os canais públicos de Marcello Orla estão reunidos em uma página externa.</p>
        <a className="action-link" href="https://beacons.ai/marcellorlaoff" rel="noopener noreferrer">
          Ver canais oficiais <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  )
}
