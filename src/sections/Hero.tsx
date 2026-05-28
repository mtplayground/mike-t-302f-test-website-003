import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { landingContent, sectionIds } from '../config/content'
import { appConfig } from '../config/env'

export function Hero() {
  const { cta, hero } = landingContent

  return (
    <Section
      id={sectionIds.home}
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-ink/10"
      aria-labelledby="hero-title"
    >
      <Container
        size="wide"
        className="grid min-h-[calc(100vh-12rem)] items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]"
      >
        <div className="max-w-4xl">
          <p className="mb-5 text-eyebrow uppercase text-accent">
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="max-w-5xl text-display">
            {hero.heading}
          </h1>
          <p className="mt-7 max-w-3xl text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            {hero.subheading}
          </p>
          <p className="mt-6 max-w-2xl text-lede text-muted">
            {hero.positioning}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              href={appConfig.ctaUrl}
              size="lg"
              aria-label={cta.ariaLabel}
            >
              {cta.label}
            </Button>
            <span className="max-w-xs text-sm font-semibold leading-6 text-muted">
              GitHub-native planning, pull requests, validation, and deployment
              from one focused agent.
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:relative lg:min-h-[560px]" aria-hidden>
          <div className="absolute inset-0 hidden rounded-panel border border-ink/10 bg-surface shadow-panel lg:block" />
          <div className="relative rounded-panel border border-ink/10 bg-paper p-4 shadow-panel lg:absolute lg:left-8 lg:right-16 lg:top-8">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase text-accent">
                  GitHub issue
                </p>
                <p className="mt-1 text-lg font-bold text-ink">
                  Build founder onboarding
                </p>
              </div>
              <span className="rounded-full bg-signal px-3 py-1 text-xs font-bold text-ink">
                planned
              </span>
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              {['Scope feature', 'Create branch', 'Open pull request'].map(
                (item) => (
                  <div
                    className="flex items-center gap-3 rounded-panel border border-ink/10 bg-surface px-3 py-2"
                    key={item}
                  >
                    <span className="size-2 rounded-full bg-accent" />
                    <span className="font-semibold text-ink">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative rounded-panel bg-ink p-5 text-paper shadow-panel lg:absolute lg:bottom-14 lg:left-6 lg:right-24">
            <div className="flex items-center justify-between gap-4 border-b border-paper/15 pb-4">
              <p className="text-sm font-bold">pull request #47</p>
              <span className="rounded-full bg-paper/10 px-3 py-1 text-xs font-bold">
                checks passing
              </span>
            </div>
            <div className="mt-5 grid gap-3 font-mono text-sm">
              <p>
                <span className="text-signal">+</span> validate onboarding copy
              </p>
              <p>
                <span className="text-signal">+</span> connect CTA environment
              </p>
              <p>
                <span className="text-accent-soft">✓</span> npm run build
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-56 justify-self-end rounded-panel border border-ink/10 bg-accent-soft p-4 shadow-panel lg:absolute lg:bottom-5 lg:right-0">
            <p className="text-xs font-bold uppercase text-accent-strong">
              deploy
            </p>
            <p className="mt-2 text-2xl font-black text-ink">Ready</p>
            <p className="mt-2 text-sm font-semibold leading-5 text-muted">
              Merged changes stay in the founder-owned repo.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
