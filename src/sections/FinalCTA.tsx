import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { landingContent, sectionIds } from '../config/content'
import { appConfig } from '../config/env'

export function FinalCTA() {
  const { cta, finalCta } = landingContent

  return (
    <Section
      id={sectionIds.finalCta}
      tone="ink"
      aria-labelledby="final-cta-title"
    >
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 text-eyebrow uppercase text-signal">
              {finalCta.eyebrow}
            </p>
            <h2
              id="final-cta-title"
              className="text-4xl font-black sm:text-5xl"
            >
              {finalCta.heading}
            </h2>
            <p className="mt-6 max-w-3xl text-lede text-paper/80">
              {finalCta.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:max-w-xs lg:max-w-none">
            <Button
              href={appConfig.ctaUrl}
              variant="signal"
              size="lg"
              className="w-full sm:w-auto"
              aria-label={cta.ariaLabel}
            >
              {cta.label}
            </Button>
            <p className="max-w-xs text-sm font-semibold leading-6 text-paper/75">
              Planning, code changes, validation, and deployment stay attached
              to your GitHub history.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
