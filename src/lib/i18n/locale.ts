import { ValidLocale } from '@lib/i18n/types'
import { locales } from '@static-constants'

export const castLocale = (
  rawLocale: string | undefined,
  fallback: ValidLocale,
): ValidLocale => {
  if (rawLocale && locales.includes(rawLocale as ValidLocale)) {
    return rawLocale as ValidLocale
  }

  return fallback
}
