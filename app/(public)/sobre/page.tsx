import { publicPageMetadata } from '@/lib/seo/public-metadata'
import Link from 'next/link'

export const metadata = publicPageMetadata({
  pathname: '/sobre',
  title: 'Sobre',
  description: 'Marcello Orla: carioca, samba, pagode e histórias que viram canção.',
})

export default function SobrePage() {
  return (
    <main id="conteudo" className="a-plus-main a-plus-inner" tabIndex={-1}>
      <div className="a-plus-about-grid">
        <div>
          <h1 className="a-plus-inner-title">Sobre</h1>
          <p className="a-plus-about-copy">Carioca, samba, pagode e histórias que viram canção.</p>
          <Link className="a-plus-about-link" href="/musica">Ouvir músicas ↗</Link>
        </div>
        <figure className="a-plus-about-photo a-plus-about-canvas">
          {/* Mídia Canva: recorte do mesmo acervo sobre fundo neutro da marca A+.
              Apenas prévia: licenciamento e alta resolução pendentes de homologação. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="a-plus-about-pattern" src="/media/marcello-orla-canva-grafismo-editorial.png" width={401} height={495} alt="" aria-hidden="true" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="a-plus-about-fullbody" src="/media/marcello-orla-canva-recorte-corpo-inteiro.png" width={235} height={630} alt="Fotografia de corpo inteiro do acervo Canva de Marcello Orla" loading="lazy" />
        </figure>
      </div>
    </main>
  )
}
