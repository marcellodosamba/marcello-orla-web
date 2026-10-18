import type { Metadata } from 'next'
import { EmptyState, PageHeading } from '../public-content'

export const metadata: Metadata = {
  title: 'Agenda',
  description:
    'Acompanhe as apresentações públicas de Marcello Orla nesta agenda.',
}

export default function AgendaPage() {
  return (
    <main className="page-wrap">
      <PageHeading
        eyebrow="Encontros"
        title="Agenda"
        description="As próximas apresentações públicas de Marcello Orla."
      />
      <EmptyState title="Nenhuma data publicada">
        Quando houver apresentações confirmadas para divulgação, as
        informações estarão disponíveis aqui.
      </EmptyState>
    </main>
  )
}
