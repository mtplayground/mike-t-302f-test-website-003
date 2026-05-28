import type { ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
  header?: ReactNode
}

export function PageShell({ children, header }: PageShellProps) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-panel focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        href="#main-content"
      >
        Skip to main content
      </a>
      {header}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
    </div>
  )
}
