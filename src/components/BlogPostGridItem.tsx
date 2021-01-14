import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { BlogPost } from '@lib/notion'
import ShadowColor from '@components/ShadowColor'
import { FiClock, FiFolder } from 'react-icons/fi'
import { getPostLinkHref } from '@lib/blog/browserHelpers'
import LocaleLabel from '@components/LocaleLabel'
import { format, formatDistanceToNow } from 'date-fns'
import { useDateFNSLocale } from '@lib/date'

export interface BlogPostGridItemProps {
  readonly post: BlogPost
  readonly compact?: boolean
  readonly className?: string
  readonly shadowClassName?: string
}

const BlogPostGridItem: React.FC<BlogPostGridItemProps> = ({
  className,
  shadowClassName,
  post,
}) => {
  const { color } = post
  const { as, href } = getPostLinkHref(post.slug, post.language)
  const fnsLocale = useDateFNSLocale()

  return (
    <ShadowColor color={post.color} distance="2" className={shadowClassName}>
      <Link href={href} as={as}>
        <a
          className={cx(
            'rounded-xl border-2 p-6 bg-theme shadow relative z-10 transform hover:-translate-y-1 duration-75',
            `border-${color}-400`,
            className,
          )}
        >
          <h1 className="font-bold text-3xl text-theme-900 leading-tight mb-3">
            {post.name}
          </h1>
          <p className={`text-${color}-700 text-lg mb-2 flex-grow`}>
            {post.description}
          </p>

          <div
            className={`space-x-2 text-sm text-theme-700 truncate whitespace-no-wrap`}
          >
            {post.folder && (
              <span className="mr-2">
                <FiFolder size={16} className="inline-block mr-2" />
                {post.folder}
              </span>
            )}
            {post.date && (
              <abbr
                title={format(new Date(post.date), 'LL')}
                className="border-0 no-underline"
              >
                <FiClock size={16} className="inline-block mr-2" />
                {formatDistanceToNow(new Date(post.date), {
                  locale: fnsLocale,
                })}
              </abbr>
            )}
            <span>
              {post.language && <LocaleLabel locale={post.language} />}
            </span>
          </div>
        </a>
      </Link>
    </ShadowColor>
  )
}

BlogPostGridItem.displayName = 'BlogPostCompact'

export { BlogPostGridItem as BlogPostCompact }
export default BlogPostGridItem
