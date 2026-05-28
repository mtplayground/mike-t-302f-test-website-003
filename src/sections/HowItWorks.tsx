import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { HoverListItem, Reveal } from '../components/motion/Reveal'
import { landingContent, sectionIds } from '../config/content'

export function HowItWorks() {
  const { howItWorks, sdlcSteps } = landingContent

  return (
    <Section
      id={sectionIds.howItWorks}
      tone="surface"
      className="border-b border-ink/10"
      aria-labelledby="how-it-works-title"
    >
      <Container size="wide">
        <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-eyebrow uppercase text-accent">
              {howItWorks.eyebrow}
            </p>
            <h2
              id="how-it-works-title"
              className="text-3xl font-black sm:text-4xl"
            >
              {howItWorks.heading}
            </h2>
          </div>
          <p className="max-w-3xl text-lede text-muted">
            {howItWorks.description}
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {sdlcSteps.map((step, index) => (
            <HoverListItem
              className="relative rounded-panel border border-ink/10 bg-paper p-5 shadow-panel sm:p-6"
              key={step.label}
              revealDelay={index * 0.05}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black text-accent">
                  0{index + 1}
                </span>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase text-accent-strong">
                  {step.label}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink sm:mt-8">
                {step.label}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {step.description}
              </p>
              {index < sdlcSteps.length - 1 ? (
                <span
                  className="absolute -right-7 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-signal text-lg font-black text-ink lg:grid"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              ) : null}
            </HoverListItem>
          ))}
        </ol>

        <Reveal
          className="mt-6 rounded-panel border border-dashed border-accent/40 bg-accent-soft px-5 py-4 text-sm font-semibold leading-6 text-accent-strong"
          revealDelay={0.16}
        >
          {howItWorks.loopNote}
        </Reveal>
      </Container>
    </Section>
  )
}
