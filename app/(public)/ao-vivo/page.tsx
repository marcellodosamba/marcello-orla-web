import type { Metadata } from 'next'
import { EmptyState, PageHeading } from '../public-content'

export const metadata: Metadata = {
  title: 'Ao vivo',
  description:
    'Acompanhe a experiência de Marcello Orla ao vivo e os registros confirmados para divulgação.',
}

export default function AoVivoPage() {
  return (
    <main className="page-wrap">
      <PageHeading
        eyebrow="No palco"
        title="Ao vivo"
        description="A experiência de palco de Marcello Orla, em um espaço para registros e novidades."
      />
      <EmptyState title="Novidades em breve">
        Vídeos e registros serão publicados aqui quando estiverem confirmados
        para divulgação.
      </EmptyState>
    </main>
  )
}
