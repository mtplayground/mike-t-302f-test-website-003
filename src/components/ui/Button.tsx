import type { ComponentPropsWithoutRef, ReactNode } from 'react'

const variantClasses = {
  primary: 'bg-ink text-paper hover:bg-accent-strong',
  secondary:
    'border border-ink/15 bg-surface text-ink hover:border-accent hover:text-accent-strong',
  ghost: 'text-ink hover:bg-ink/5',
}

const sizeClasses = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-12 px-5 text-sm',
  lg: 'min-h-14 px-6 text-base',
}

type ButtonBaseProps = {
  children: ReactNode
  className?: string
  size?: keyof typeof sizeClasses
  variant?: keyof typeof variantClasses
}

type ButtonAnchorProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof ButtonBaseProps> & {
    href: string
  }

type ButtonElementProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps> & {
    href?: never
  }

type ButtonProps = ButtonAnchorProps | ButtonElementProps

function getButtonClasses({
  className,
  size = 'md',
  variant = 'primary',
}: Pick<ButtonBaseProps, 'className' | 'size' | 'variant'>) {
  return [
    'inline-flex items-center justify-center rounded-panel font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const {
      children,
      className,
      size = 'md',
      variant = 'primary',
      href,
      ...anchorProps
    } = props

    return (
      <a
        className={getButtonClasses({ className, size, variant })}
        href={href}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const {
    children,
    className,
    size = 'md',
    variant = 'primary',
    ...buttonProps
  } = props

  return (
    <button
      className={getButtonClasses({ className, size, variant })}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  )
}
