import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { BlogPost } from 'lib/notion'
import moment from 'moment'
import ShadowColor from 'components/ShadowColor'
import { FaClock, FaFolder } from 'react-icons/fa'

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
  return (
    <ShadowColor color={post.color} distance="2" className={shadowClassName}>
      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <a
          className={cx(
            'rounded-xl border-2 p-6 bg-theme shadow relative z-10 transform hover:-translate-y-1 duration-75',
            `border-${color}-400`,
            className,
          )}
        >
          <h1 className="font-bold text-3xl text-theme-900">{post.name}</h1>
          <p className={`text-${color}-700 text-lg mb-2 flex-grow`}>
            {post.description}
          </p>

          <div
            className={`space-y-2 md:space-y-0 md:space-x-2 text-sm text-theme-700 md:truncate md:whitespace-no-wrap`}
          >
            {post.folder && (
              <span className="mr-2">
                <FaFolder size={16} className="inline-block mr-2" />
                {post.folder}
              </span>
            )}
            {post.date && (
              <abbr title={moment(post.date).format('LL')}>
                <FaClock size={16} className="inline-block mr-2" />
                {moment(post.date).fromNow()}
              </abbr>
            )}

            <ul className="space-x-2 overflow-hidden truncate block md:inline-block align-middle">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-theme-500 hover:underline text-sm"
                >
                  #{tag}
                </span>
              ))}
            </ul>
          </div>
        </a>
      </Link>
    </ShadowColor>
  )
}

BlogPostGridItem.displayName = 'BlogPostCompact'

export { BlogPostGridItem as BlogPostCompact }
export default BlogPostGridItem
