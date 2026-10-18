import type { ReactNode } from 'react'
import { PublicFooter, PublicHeader } from './site-chrome'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="public-shell">
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  )
}
