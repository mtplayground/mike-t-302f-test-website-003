import { Container } from './layout/Container'
import { landingContent, sectionIds } from '../config/content'

function isHttpUrl(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function Footer() {
  const { brandName, footer } = landingContent
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper" aria-label="Footer">
      <Container size="wide" className="py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
          <div className="max-w-xl">
            <a
              className="inline-flex items-center gap-3 rounded-panel font-bold text-ink transition-colors hover:text-accent-strong"
              href={`#${sectionIds.home}`}
            >
              <span
                className="grid size-10 place-items-center rounded-panel bg-ink text-sm font-black text-paper"
                aria-hidden="true"
              >
                Z
              </span>
              <span>{brandName}</span>
            </a>
            <p className="mt-5 text-sm font-semibold leading-6 text-muted">
              {footer.description}
            </p>
          </div>

          <nav aria-label="Footer sections">
            <h2 className="text-sm font-black uppercase text-ink">Sections</h2>
            <ul className="mt-4 grid gap-3 text-sm font-semibold text-muted sm:grid-cols-2 lg:grid-cols-1">
              {footer.anchorLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="rounded-panel transition-colors hover:text-accent-strong"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h2 className="text-sm font-black uppercase text-ink">Connect</h2>
            <ul className="mt-4 flex flex-wrap gap-3 lg:max-w-44">
              {footer.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="inline-flex min-h-10 items-center rounded-panel border border-ink/15 bg-surface px-4 text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent-strong"
                    href={link.href}
                    aria-label={link.ariaLabel}
                    target={isHttpUrl(link.href) ? '_blank' : undefined}
                    rel={isHttpUrl(link.href) ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm font-semibold text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {brandName}. {footer.legalText}
          </p>
          <p>Built for founder-owned repositories.</p>
        </div>
      </Container>
    </footer>
  )
}
