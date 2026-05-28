import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { landingContent, sectionIds } from '../config/content'

export function WhyFounders() {
  const { whyFounders } = landingContent

  return (
    <Section
      id={sectionIds.whyFounders}
      tone="accent"
      className="border-b border-ink/10"
      aria-labelledby="why-founders-title"
    >
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-eyebrow uppercase text-accent-strong">
              {whyFounders.eyebrow}
            </p>
            <h2
              id="why-founders-title"
              className="max-w-3xl text-5xl font-black"
            >
              {whyFounders.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-ink">
              {whyFounders.pitch}
            </p>
          </div>

          <div>
            <div className="rounded-panel border border-ink/10 bg-paper p-6 shadow-panel">
              <p className="text-lede text-muted">{whyFounders.body}</p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {whyFounders.benefits.map((benefit) => (
                <article
                  className="rounded-panel border border-ink/10 bg-surface p-5 shadow-panel"
                  key={benefit.label}
                >
                  <p className="text-xs font-black uppercase text-accent">
                    {benefit.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-black text-ink">
                    {benefit.value}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
