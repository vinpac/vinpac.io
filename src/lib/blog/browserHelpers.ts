import { ValidLocale } from '@lib/i18n'

export const getPostLinkHref = (
  slug: string,
  language: ValidLocale,
): { href: string; as: string } => {
  const isDefaultLanguage = language === 'pt-BR'
  return {
    href: isDefaultLanguage ? '/blog/[slug]' : '/blog/[slug]/[locale]',
    as: isDefaultLanguage ? `/blog/${slug}` : `/blog/${slug}/${language}`,
  }
}
