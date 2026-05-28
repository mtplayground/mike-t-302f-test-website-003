export const sectionIds = {
  home: 'home',
  howItWorks: 'how-it-works',
  features: 'features',
  whyFounders: 'why-founders',
  faq: 'faq',
  finalCta: 'final-cta',
} as const

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds]
export type AnchorHref = `#${SectionId}`

export type NavItem = {
  href: AnchorHref
  label: string
}

export type CtaConfig = {
  ariaLabel: string
  label: string
}

export type HeroContent = {
  eyebrow: string
  heading: string
  positioning: string
  subheading: string
}

export type StepItem = {
  description: string
  label: string
}

export type FeatureItem = {
  description: string
  title: string
}

export type BenefitItem = {
  description: string
  label: string
  value: string
}

export type FaqItem = {
  answer: string
  question: string
}

export type ExternalLink = {
  ariaLabel: string
  href: string
  label: string
}

export type FooterContent = {
  anchorLinks: readonly NavItem[]
  description: string
  legalText: string
  socialLinks: readonly ExternalLink[]
}

type LandingContent = {
  brandName: string
  cta: CtaConfig
  finalCta: {
    description: string
    eyebrow: string
    heading: string
  }
  faq: readonly FaqItem[]
  faqSection: {
    description: string
    eyebrow: string
    heading: string
  }
  footer: FooterContent
  featureSection: {
    description: string
    eyebrow: string
    heading: string
  }
  features: readonly FeatureItem[]
  hero: HeroContent
  howItWorks: {
    description: string
    eyebrow: string
    heading: string
    loopNote: string
  }
  navItems: readonly NavItem[]
  sdlcSteps: readonly StepItem[]
  whyFounders: {
    benefits: readonly BenefitItem[]
    body: string
    eyebrow: string
    heading: string
    pitch: string
  }
}

export const landingContent = {
  brandName: 'ZeroClaw',
  cta: {
    ariaLabel: 'Start a project with ZeroClaw',
    label: 'Start with ZeroClaw',
  },
  finalCta: {
    eyebrow: 'Ready to ship',
    heading:
      'Bring ZeroClaw into your repo and start turning founder intent into merged code.',
    description:
      'Use the CTA target for your booking flow, intake form, or direct contact path. The code stays yours, and the work lands as reviewable pull requests.',
  },
  hero: {
    eyebrow: 'AI software delivery for founders',
    heading: 'Turn product intent into production-ready software.',
    subheading:
      'An autonomous delivery agent that works inside your GitHub flow.',
    positioning:
      'Describe the product direction, keep ownership of the repository, and let ZeroClaw plan, implement, validate, and ship focused changes through pull requests.',
  },
  howItWorks: {
    eyebrow: 'How it works',
    heading: 'A continuous SDLC loop for founder-led products.',
    description:
      'ZeroClaw keeps strategy, code, release, and production feedback connected so each change has a clear path from intent to operation.',
    loopNote:
      'Operate feeds production signals and priorities back into Plan for the next focused change.',
  },
  featureSection: {
    eyebrow: 'Features',
    heading: 'Built for shipping real software, not just generating snippets.',
    description:
      'ZeroClaw keeps the important parts of product delivery explicit: where the work lives, how it moves, how it is validated, and who owns the result.',
  },
  navItems: [
    { href: `#${sectionIds.howItWorks}`, label: 'How it works' },
    { href: `#${sectionIds.features}`, label: 'Features' },
    { href: `#${sectionIds.whyFounders}`, label: 'Why founders' },
    { href: `#${sectionIds.faq}`, label: 'FAQ' },
  ],
  sdlcSteps: [
    {
      label: 'Plan',
      description:
        'Translate goals into scoped issues, architecture notes, and implementation order.',
    },
    {
      label: 'Build',
      description:
        'Implement focused changes in GitHub branches with tests and reviewable pull requests.',
    },
    {
      label: 'Deploy',
      description:
        'Keep the release path explicit, repeatable, and tied to the code that changed.',
    },
    {
      label: 'Operate',
      description:
        'Use production feedback to prioritize fixes, harden workflows, and keep momentum.',
    },
  ],
  features: [
    {
      title: 'GitHub-native',
      description:
        'Issues, branches, pull requests, and merge history remain the source of truth.',
    },
    {
      title: 'Full SDLC automation',
      description:
        'Planning, code changes, validation, and delivery happen as one continuous workflow.',
    },
    {
      title: 'Production-ready and secure',
      description:
        'Changes are scoped, reviewed, tested, and kept away from hard-coded secrets.',
    },
    {
      title: 'Complete code ownership',
      description:
        'The repository, history, and deployment path stay in the founder-owned project.',
    },
  ],
  whyFounders: {
    eyebrow: 'Why founders',
    heading:
      'Just talk through the product. ZeroClaw turns it into shipped code.',
    pitch:
      'Skip the translation layer between product intent, tickets, implementation details, and release chores.',
    body: 'ZeroClaw removes the translation gap between product direction and implementation details so small teams can spend less time coordinating and more time shipping.',
    benefits: [
      {
        value: 'Less handoff',
        label: 'Time',
        description:
          'Product context moves directly into scoped issues, branches, and pull requests.',
      },
      {
        value: 'Lower overhead',
        label: 'Cost',
        description:
          'Reduce repeated planning, status, and implementation coordination loops.',
      },
      {
        value: 'Faster feedback',
        label: 'Momentum',
        description:
          'Smaller validated changes make it easier to learn from users and keep moving.',
      },
    ],
  },
  faq: [
    {
      question: 'Does ZeroClaw replace engineers?',
      answer:
        'No. It handles focused implementation workflows while keeping decisions, review, and ownership inside the repository.',
    },
    {
      question: 'Where does the code live?',
      answer:
        'Code, issues, pull requests, and history stay in the project GitHub repository.',
    },
    {
      question: 'Can the CTA target change by environment?',
      answer:
        'Yes. Set VITE_CTA_URL at build time to point each environment at the right destination.',
    },
  ],
  faqSection: {
    eyebrow: 'FAQ',
    heading: 'Common questions before you hand work to an autonomous agent.',
    description:
      'A short set of answers about ownership, collaboration, and how ZeroClaw fits into an existing GitHub workflow.',
  },
  footer: {
    description:
      'Autonomous software delivery for founder-led products, built around GitHub-native planning, implementation, validation, and release flow.',
    anchorLinks: [
      { href: `#${sectionIds.home}`, label: 'Home' },
      { href: `#${sectionIds.howItWorks}`, label: 'How it works' },
      { href: `#${sectionIds.features}`, label: 'Features' },
      { href: `#${sectionIds.whyFounders}`, label: 'Why founders' },
      { href: `#${sectionIds.faq}`, label: 'FAQ' },
      { href: `#${sectionIds.finalCta}`, label: 'Start' },
    ],
    socialLinks: [
      {
        href: 'https://github.com/mtplayground/mike-t-302f-test-website-003',
        label: 'GitHub',
        ariaLabel: 'View the ZeroClaw website repository on GitHub',
      },
      {
        href: 'mailto:hello@zeroclaw.dev',
        label: 'Email',
        ariaLabel: 'Email ZeroClaw',
      },
    ],
    legalText: 'All rights reserved.',
  },
} satisfies LandingContent
