import Link from 'next/link'

const navigation = [
  { href: '/musica', label: 'Música' },
  { href: '/cariocando', label: 'Cariocando' },
  { href: '/banda', label: 'Banda' },
  { href: '/ao-vivo', label: 'Ao vivo' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/contato', label: 'Contato' },
]

export function PublicHeader() {
  return (
    <header className="public-header">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Link className="brand-lockup" href="/" aria-label="Marcello Orla, início">
        <span className="brand-name">Marcello Orla</span>
        <span className="brand-descriptor">Samba carioca contemporâneo</span>
      </Link>

      <nav className="primary-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link className="nav-link" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="footer-brand">
        <span className="brand-name">Marcello Orla</span>
        <span className="footer-note">Samba carioca contemporâneo</span>
      </div>
      <a className="footer-official" href="https://beacons.ai/marcellorlaoff" rel="noopener noreferrer">
        Canais oficiais <span aria-hidden="true">↗</span>
      </a>
    </footer>
  )
}
