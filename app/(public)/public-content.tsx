import Image from 'next/image'
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
    <div className={`cover-frame ${className}`}>
      <Image
        src="/covers/cariocando-clara.jpg"
        alt="Capa de Cariocando com Marcello Orla"
        width={1500}
        height={1500}
        priority
        unoptimized
      />
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
