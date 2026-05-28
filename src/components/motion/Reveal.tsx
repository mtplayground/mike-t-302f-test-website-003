import { motion, useReducedMotion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'

const revealTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
} as const

type RevealProps = HTMLMotionProps<'div'> & {
  revealDelay?: number
  revealDistance?: number
}

type HoverCardProps = HTMLMotionProps<'article'> & {
  revealDelay?: number
  revealDistance?: number
}

type HoverListItemProps = HTMLMotionProps<'li'> & {
  revealDelay?: number
  revealDistance?: number
}

function getRevealProps(
  shouldReduceMotion: boolean | null,
  revealDistance: number,
) {
  if (shouldReduceMotion) {
    return {
      initial: false,
    }
  }

  return {
    initial: { opacity: 0, y: revealDistance },
    viewport: { once: true, amount: 0.22 },
    whileInView: { opacity: 1, y: 0 },
  }
}

export function Reveal({
  revealDelay = 0,
  revealDistance = 18,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      {...getRevealProps(shouldReduceMotion, revealDistance)}
      transition={{ ...revealTransition, delay: revealDelay }}
      {...props}
    />
  )
}

export function HoverCard({
  revealDelay = 0,
  revealDistance = 18,
  ...props
}: HoverCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      {...getRevealProps(shouldReduceMotion, revealDistance)}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ ...revealTransition, delay: revealDelay }}
      {...props}
    />
  )
}

export function HoverListItem({
  revealDelay = 0,
  revealDistance = 18,
  ...props
}: HoverListItemProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.li
      {...getRevealProps(shouldReduceMotion, revealDistance)}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ ...revealTransition, delay: revealDelay }}
      {...props}
    />
  )
}
