import { expect, test } from '@playwright/test'

test('renders the landing page, key sections, and CTA', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Turn product intent into production-ready software.',
    }),
  ).toBeVisible()

  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()
  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('contentinfo')).toBeVisible()

  const expectedSections = [
    {
      id: 'home',
      heading: 'Turn product intent into production-ready software.',
    },
    {
      id: 'how-it-works',
      heading: 'A continuous SDLC loop for founder-led products.',
    },
    {
      id: 'features',
      heading:
        'Built for shipping real software, not just generating snippets.',
    },
    {
      id: 'why-founders',
      heading:
        'Just talk through the product. myClawTeam turns it into shipped code.',
    },
    {
      id: 'faq',
      heading: 'Common questions before you hand work to an autonomous agent.',
    },
    {
      id: 'final-cta',
      heading:
        'Bring myClawTeam into your repo and start turning founder intent into merged code.',
    },
  ] as const

  for (const section of expectedSections) {
    await expect(page.locator(`#${section.id}`)).toBeVisible()
    await expect(
      page.getByRole('heading', { name: section.heading }),
    ).toBeVisible()
  }

  await expect(
    page.getByRole('link', { name: 'Start a project with myClawTeam' }).first(),
  ).toBeVisible()
  await expect(
    page.getByRole('button', {
      name: 'Does myClawTeam replace engineers?',
    }),
  ).toBeVisible()
})
