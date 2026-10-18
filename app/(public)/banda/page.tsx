import { publicPageMetadata } from '@/lib/seo/public-metadata'
import { EmptyState, PageHeading } from '../public-content'

export const metadata = publicPageMetadata({
  pathname: '/banda',
  title: 'Banda',
  description: 'Conheça a formação musical que acompanha Marcello Orla quando as informações estiverem confirmadas.',
})

export default function BandaPage() {
  return (
    <main id="conteudo" className="page-wrap" tabIndex={-1}>
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
