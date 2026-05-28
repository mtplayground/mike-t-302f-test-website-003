const DEFAULT_CTA_URL = '#final-cta'

function isSupportedCtaTarget(value: string) {
  if (value.startsWith('#')) {
    return value.length > 1
  }

  try {
    const url = new URL(value)
    return ['http:', 'https:', 'mailto:'].includes(url.protocol)
  } catch {
    return false
  }
}

function readCtaUrl(value: string | undefined) {
  const trimmedValue = value?.trim()

  if (trimmedValue && isSupportedCtaTarget(trimmedValue)) {
    return trimmedValue
  }

  return DEFAULT_CTA_URL
}

export const appConfig = {
  ctaUrl: readCtaUrl(import.meta.env.VITE_CTA_URL),
}
