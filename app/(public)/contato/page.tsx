import type { Metadata } from 'next'
import { EmptyState, PageHeading } from '../public-content'

export const metadata: Metadata = {
  title: 'Contato e contratação',
  description:
    'Informações de contato e contratação artística de Marcello Orla.',
}

export default function ContatoPage() {
  return (
    <main className="page-wrap">
      <PageHeading
        eyebrow="Produção"
        title="Contato"
        description="Um espaço para conversas sobre apresentações, eventos e projetos."
      />
      <EmptyState title="Canal oficial em preparação">
        Os dados de contato para contratação serão publicados assim que forem
        confirmados.
      </EmptyState>
    </main>
  )
}
