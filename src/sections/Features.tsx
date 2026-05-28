import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { landingContent, sectionIds } from '../config/content'

const cardStyles = [
  {
    label: 'Repo',
    card: 'bg-ink text-paper',
    marker: 'bg-signal text-ink',
    title: 'text-paper',
    body: 'text-paper/75',
  },
  {
    label: 'SDLC',
    card: 'bg-surface text-ink',
    marker: 'bg-accent-soft text-accent-strong',
    title: 'text-ink',
    body: 'text-muted',
  },
  {
    label: 'Secure',
    card: 'bg-accent-soft text-ink',
    marker: 'bg-ink text-paper',
    title: 'text-ink',
    body: 'text-muted',
  },
  {
    label: 'Own',
    card: 'bg-surface text-ink',
    marker: 'bg-signal text-ink',
    title: 'text-ink',
    body: 'text-muted',
  },
]

export function Features() {
  const { featureSection, features } = landingContent

  return (
    <Section
      id={sectionIds.features}
      className="border-b border-ink/10"
      aria-labelledby="features-title"
    >
      <Container size="wide">
        <div className="max-w-4xl">
          <p className="mb-4 text-eyebrow uppercase text-accent">
            {featureSection.eyebrow}
          </p>
          <h2 id="features-title" className="text-3xl font-black sm:text-4xl">
            {featureSection.heading}
          </h2>
          <p className="mt-5 max-w-3xl text-lede text-muted">
            {featureSection.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => {
            const style = cardStyles[index % cardStyles.length]

            return (
              <article
                className={`rounded-panel border border-ink/10 p-5 shadow-panel sm:p-6 md:min-h-[280px] ${style.card}`}
                key={feature.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black uppercase ${style.marker}`}
                  >
                    {style.label}
                  </span>
                  <span className="text-sm font-black opacity-60">
                    0{index + 1}
                  </span>
                </div>
                <h3
                  className={`mt-8 text-2xl font-black sm:mt-12 sm:text-3xl ${style.title}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-5 max-w-xl text-base leading-7 ${style.body}`}
                >
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
