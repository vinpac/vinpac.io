import { ValidLocale } from 'lib/i18n'
import { app } from 'static-constants'

export const getPostLinkHref = (
  slug: string,
  language: ValidLocale,
): { href: string; as: string } => {
  const isDefaultLanguage = language === app.locale
  return {
    href: isDefaultLanguage ? '/blog/[slug]' : '/blog/[slug]/[locale]',
    as: isDefaultLanguage ? `/blog/${slug}` : `/blog/${slug}/${language}`,
  }
}
