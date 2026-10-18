import type { Metadata } from 'next'
import { EmptyState, PageHeading } from '../public-content'

export const metadata: Metadata = {
  title: 'Banda',
  description:
    'Conheça a formação musical que acompanha Marcello Orla quando as informações estiverem confirmadas.',
}

export default function BandaPage() {
  return (
    <main className="page-wrap">
      <PageHeading
        eyebrow="Formação"
        title="Banda"
        description="A música de Marcello Orla também ganha corpo em formação para o palco."
      />
      <EmptyState title="Em preparação">
        Os nomes e instrumentos da formação serão apresentados quando estiverem
        confirmados para divulgação.
      </EmptyState>
    </main>
  )
}
