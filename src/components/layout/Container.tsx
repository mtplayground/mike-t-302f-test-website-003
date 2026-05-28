import type { ComponentPropsWithoutRef } from 'react'

const sizeClasses = {
  narrow: 'max-w-[760px]',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
}

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  size?: keyof typeof sizeClasses
}

export function Container({
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  const classes = ['mx-auto w-full px-page', sizeClasses[size], className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes} {...props} />
}
