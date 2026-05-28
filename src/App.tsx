import { Container } from './components/layout/Container'
import { PageShell } from './components/layout/PageShell'
import { Section } from './components/layout/Section'
import { NavBar } from './components/NavBar'
import { Button } from './components/ui/Button'
import { landingContent, sectionIds } from './config/content'
import { appConfig } from './config/env'

function App() {
  const { cta, hero, scaffold } = landingContent

  return (
    <PageShell header={<NavBar />}>
      <Section
        id={sectionIds.home}
        className="grid min-h-screen place-items-center"
        aria-labelledby="app-title"
      >
        <Container size="narrow">
          <div className="rounded-panel border border-ink/12 bg-surface/85 p-panel shadow-panel">
            <p className="mb-4 text-eyebrow uppercase text-accent">
              {hero.eyebrow}
            </p>
            <h1 id="app-title" className="text-display">
              {hero.heading}
            </h1>
            <p className="mt-6 max-w-[60ch] text-lede text-muted">
              {hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={appConfig.ctaUrl} aria-label={cta.ariaLabel}>
                {cta.label}
              </Button>
              <Button href="#foundation" variant="secondary">
                {scaffold.secondaryAction}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="foundation"
        tone="surface"
        aria-labelledby="foundation-title"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-eyebrow uppercase text-accent">
              {scaffold.foundationEyebrow}
            </p>
            <h2 id="foundation-title" className="text-4xl font-bold">
              {scaffold.foundationHeading}
            </h2>
            <p className="mt-5 text-lede text-muted">
              {scaffold.foundationDescription}
            </p>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}

export default App
