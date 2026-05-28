import { Container } from './components/layout/Container'
import { PageShell } from './components/layout/PageShell'
import { Section } from './components/layout/Section'
import { NavBar } from './components/NavBar'
import { landingContent } from './config/content'
import { FAQ } from './sections/FAQ'
import { Features } from './sections/Features'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { WhyFounders } from './sections/WhyFounders'

function App() {
  const { scaffold } = landingContent

  return (
    <PageShell header={<NavBar />}>
      <Hero />
      <HowItWorks />
      <Features />
      <WhyFounders />
      <FAQ />

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
