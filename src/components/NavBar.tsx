import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Container } from './layout/Container'
import { Button } from './ui/Button'
import { landingContent, sectionIds } from '../config/content'
import { appConfig } from '../config/env'

const navLinkClasses =
  'rounded-panel px-3 py-2 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { brandName, cta, navItems } = landingContent

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function handleMobileMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Escape') {
      return
    }

    event.preventDefault()
    closeMenu()
    menuButtonRef.current?.focus()
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <Container
        size="wide"
        className="flex min-h-16 items-center justify-between gap-4"
      >
        <a
          className="flex items-center gap-3 rounded-panel py-2 pr-3 font-bold text-ink"
          href={`#${sectionIds.home}`}
          onClick={closeMenu}
        >
          <span
            className="grid size-9 place-items-center rounded-panel bg-ink text-sm font-black text-paper"
            aria-hidden="true"
          >
            Z
          </span>
          <span>{brandName}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a className={navLinkClasses} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={appConfig.ctaUrl} size="sm" aria-label={cta.ariaLabel}>
            {cta.label}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          className="inline-flex size-11 items-center justify-center rounded-panel border border-ink/15 bg-surface text-ink transition-colors hover:border-accent hover:text-accent-strong md:hidden"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="sr-only">
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span className="flex h-4 w-5 flex-col justify-between" aria-hidden>
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 bg-paper shadow-panel md:hidden"
          onKeyDown={handleMobileMenuKeyDown}
        >
          <Container className="grid gap-2 py-4">
            <nav className="grid gap-1" aria-label="Mobile primary">
              {navItems.map((item) => (
                <a
                  className={navLinkClasses}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              href={appConfig.ctaUrl}
              size="sm"
              aria-label={cta.ariaLabel}
              onClick={closeMenu}
            >
              {cta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
