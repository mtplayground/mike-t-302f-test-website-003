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
  lead: string
}

export type StepItem = {
  description: string
  label: string
}

export type FeatureItem = {
  description: string
  title: string
}

export type FaqItem = {
  answer: string
  question: string
}

type LandingContent = {
  brandName: string
  cta: CtaConfig
  faq: readonly FaqItem[]
  features: readonly FeatureItem[]
  hero: HeroContent
  navItems: readonly NavItem[]
  scaffold: {
    foundationDescription: string
    foundationEyebrow: string
    foundationHeading: string
    secondaryAction: string
  }
  sdlcSteps: readonly StepItem[]
  whyFounders: {
    body: string
    heading: string
  }
}

export const landingContent = {
  brandName: 'ZeroClaw',
  cta: {
    ariaLabel: 'Start a project with ZeroClaw',
    label: 'Start with ZeroClaw',
  },
  hero: {
    eyebrow: 'AI software delivery for founders',
    heading: 'Turn product intent into production-ready software.',
    lead: 'ZeroClaw helps founders move from idea to shipped code with GitHub-native planning, implementation, deployment, and operational support.',
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
    heading:
      'Founders should be able to talk through the product and see code move.',
    body: 'ZeroClaw removes the translation gap between product direction and implementation details so small teams can spend less time coordinating and more time shipping.',
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
  scaffold: {
    foundationEyebrow: 'Shared foundation',
    foundationHeading:
      'Reusable layout and UI primitives are ready for the landing page.',
    foundationDescription:
      'Future sections can now compose a consistent shell, constrained containers, anchored sections, and CTA buttons without repeating layout mechanics.',
    secondaryAction: 'View layout foundation',
  },
} satisfies LandingContent
