import Link from 'next/link'

const navigation = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/musica', label: 'Música' },
]

export function PublicHeader() {
  return (
    <header className="a-plus-header">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="a-plus-head-row">
        <Link className="a-plus-wordmark" href="/" aria-label="Marcello Orla, início">MARCELLO ORLA</Link>
        <span className="a-plus-osamba">© OSAMBA SYSTEM</span>
      </div>
      <nav aria-label="Navegação principal" className="a-plus-nav">
        {navigation.map((item) => (
          <Link href={item.href} className="a-plus-nav-link" key={item.href}>{item.label}</Link>
        ))}
      </nav>
    </header>
  )
}

export function PublicFooter() {
  return (
    <footer className="a-plus-footer">
      <span>© OSAMBA SYSTEM</span>
    </footer>
  )
}
