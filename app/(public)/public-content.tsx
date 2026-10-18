import Link from 'next/link'

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-lede">{description}</p>
    </header>
  )
}

export function ProjectCover({ className = '' }: { className?: string }) {
  return (
    <div
      className={`cover-frame project-cover-card ${className}`}
      role="img"
      aria-label="Capa tipográfica de Cariocando, de Marcello Orla"
    >
      <span className="project-cover-kicker">MARCELLO ORLA</span>
      <strong className="project-cover-title">CARIOCANDO</strong>
      <span className="project-cover-note">SAMBA CARIOCA CONTEMPORÂNEO</span>
    </div>
  )
}

export function ProjectLink({
  href,
  title,
  detail,
}: {
  href: string
  title: string
  detail: string
}) {
  return (
    <Link className="feature-link" href={href}>
      <strong>{title}</strong>
      <span>
        {detail} <span aria-hidden="true">↗</span>
      </span>
    </Link>
  )
}

export function EmptyState({
  title,
  children,
}: {
  title: string
  children: string
}) {
  return (
    <section className="empty-state" aria-live="polite">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}
