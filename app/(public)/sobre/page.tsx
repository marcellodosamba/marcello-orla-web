import type { Metadata } from 'next'
import { PageHeading } from '../public-content'

export const metadata: Metadata = {
  title: 'O artista',
  description:
    'Conheça Marcello Orla e sua identidade artística no samba carioca contemporâneo.',
}

export default function SobrePage() {
  return (
    <main className="page-wrap">
      <PageHeading
        eyebrow="O intérprete"
        title="Marcello Orla"
        description="Uma identidade artística dedicada ao samba carioca contemporâneo."
      />
      <section className="editorial-band">
        <p className="eyebrow">Presença</p>
        <p>
          Este é o espaço para conhecer o artista, sua música e os caminhos que
          conectam cada obra ao palco.
        </p>
      </section>
    </main>
  )
}
