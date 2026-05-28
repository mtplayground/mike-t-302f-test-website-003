import { Container } from './components/layout/Container'
import { PageShell } from './components/layout/PageShell'
import { Section } from './components/layout/Section'
import { Button } from './components/ui/Button'

function App() {
  return (
    <PageShell>
      <Section
        id="home"
        className="grid min-h-screen place-items-center"
        aria-labelledby="app-title"
      >
        <Container size="narrow">
          <div className="rounded-panel border border-ink/12 bg-surface/85 p-panel shadow-panel">
            <p className="mb-4 text-eyebrow uppercase text-accent">
              Vite + React + TypeScript
            </p>
            <h1 id="app-title" className="text-display">
              mike-t-302f-test-website-003
            </h1>
            <p className="mt-6 max-w-[60ch] text-lede text-muted">
              A production-ready frontend scaffold with typed React, Vite build
              tooling, linting, and formatting configured.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#foundation">View layout foundation</Button>
              <Button href="#home" variant="secondary">
                Back to top
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
              Shared foundation
            </p>
            <h2 id="foundation-title" className="text-4xl font-bold">
              Reusable layout and UI primitives are ready for the landing page.
            </h2>
            <p className="mt-5 text-lede text-muted">
              Future sections can now compose a consistent shell, constrained
              containers, anchored sections, and CTA buttons without repeating
              layout mechanics.
            </p>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}

export default App
