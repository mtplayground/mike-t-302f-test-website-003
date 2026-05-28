import { useId, useState } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { landingContent, sectionIds } from '../config/content'

export function FAQ() {
  const accordionId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { faq, faqSection } = landingContent

  return (
    <Section
      id={sectionIds.faq}
      className="border-b border-ink/10"
      aria-labelledby="faq-title"
    >
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 text-eyebrow uppercase text-accent">
              {faqSection.eyebrow}
            </p>
            <h2 id="faq-title" className="text-3xl font-black sm:text-4xl">
              {faqSection.heading}
            </h2>
            <p className="mt-5 text-lede text-muted">
              {faqSection.description}
            </p>
          </div>

          <div className="grid gap-3">
            {faq.map((item, index) => {
              const isOpen = openIndex === index
              const buttonId = `${accordionId}-button-${index}`
              const panelId = `${accordionId}-panel-${index}`

              return (
                <article
                  className="rounded-panel border border-ink/10 bg-surface shadow-panel"
                  key={item.question}
                >
                  <h3>
                    <button
                      className="flex w-full items-center justify-between gap-4 rounded-panel px-4 py-5 text-left text-base font-black text-ink transition-colors hover:bg-ink/5 sm:px-5 sm:text-lg"
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((currentIndex) =>
                          currentIndex === index ? null : index,
                        )
                      }
                    >
                      <span>{item.question}</span>
                      <span
                        className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-xl text-accent-strong"
                        aria-hidden="true"
                      >
                        {isOpen ? '-' : '+'}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-4 pb-5 sm:px-5"
                  >
                    <p className="max-w-2xl text-base leading-7 text-muted">
                      {item.answer}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
