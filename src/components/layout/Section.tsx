import type { ComponentPropsWithoutRef } from 'react'

const toneClasses = {
  default: 'bg-paper',
  surface: 'bg-surface',
  accent: 'bg-accent-soft',
  ink: 'bg-ink text-paper',
}

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  tone?: keyof typeof toneClasses
}

export function Section({
  tone = 'default',
  className,
  ...props
}: SectionProps) {
  const classes = ['scroll-mt-24 py-section', toneClasses[tone], className]
    .filter(Boolean)
    .join(' ')

  return <section className={classes} {...props} />
}
