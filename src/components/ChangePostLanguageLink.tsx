import React from 'react'
import cx from 'classnames'
import { BlogPost } from '@lib/notion'
import { useTranslatedPost } from '@lib/blog/hooks'
import Link from 'next/link'
import Tooltip from '@reach/tooltip'
import { getPostLinkHref } from '@lib/blog/browserHelpers'
import { ValidLocale } from '@lib/i18n'

export interface ChangePostLanguageLinkProps {
  readonly post: BlogPost
  readonly locale: ValidLocale
  readonly className?: string
}

const ChangePostLanguageLink: React.FC<ChangePostLanguageLinkProps> = ({
  className,
  children,
  post,
  locale,
}) => {
  const active = post.language === locale
  const { loading, post: translatedPost } = useTranslatedPost(post.slug, locale)
  const Component = translatedPost ? 'a' : 'span'

  const renderedComponent = (
    <Component
      className={cx(
        'inline-block link rounded-lg  px-2 py-1 text-sm',
        translatedPost
          ? `font-medium underline`
          : 'opacity-25 text-theme-900 border-transparent font-normal',
        active ? `text-theme-500 bg-theme-200` : 'not-active border-theme-300',
        className,
      )}
    >
      {children}
      <style jsx>{`
        .link {
          text-decoration: none !important;
        }
        .link.not-active:hover {
          text-decoration: underline !important;
        }

        .text-inherit {
          color: inherit !important;
        }
      `}</style>
    </Component>
  )

  if (active) {
    return renderedComponent
  }

  if (translatedPost) {
    return (
      <Link {...getPostLinkHref(post.slug, locale)} passHref>
        {renderedComponent}
      </Link>
    )
  }

  return (
    <Tooltip
      label={loading ? 'Carregando...' : `Ainda não traduzido para ${locale}`}
    >
      {renderedComponent}
    </Tooltip>
  )
}

ChangePostLanguageLink.displayName = 'ChangePostLanguageLink'

export { ChangePostLanguageLink }
export default ChangePostLanguageLink
