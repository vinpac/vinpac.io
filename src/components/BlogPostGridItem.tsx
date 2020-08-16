import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { BlogPost } from 'lib/notion'
import moment from 'moment'
import { useTailwindCx } from 'lib/theme'
import ShadowColor from 'components/ShadowColor'
import { FaClock } from 'react-icons/fa'

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
  const tcx = useTailwindCx('gray')
  const vx = useTailwindCx(post.color)
  return (
    <ShadowColor color={post.color} distance="2" className={shadowClassName}>
      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <a
          className={cx(
            `rounded-xl block ${tcx(
              'border',
              500,
              700,
            )} border-2 p-6 bg-theme shadow relative z-10 transform hover:-translate-y-1 duration-75`,
            className,
          )}
        >
          <h1 className={`font-bold text-3xl ${tcx('text', 900)}`}>
            {post.name}
          </h1>
          <p className={`${vx('text', 900, 300)} text-lg mb-2 flex-grow`}>
            {post.description}
          </p>

          <div className={`space-x-2 text-sm  mb-2 text-gray-600`}>
            {post.date && (
              <>
                <FaClock size={16} className="inline-block mr-2" />
                {moment(post.date).fromNow()}
                <span className={vx('text', 700)}>{' . '}</span>
              </>
            )}
            <span>Leiam em 5 min</span>
          </div>
          <ul className="h-6 whitespace-no-wrap space-x-2 overflow-hidden truncate">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`${vx('text', 500)} hover:underline text-sm`}
              >
                #{tag}
              </span>
            ))}
          </ul>
        </a>
      </Link>
    </ShadowColor>
  )
}

BlogPostGridItem.displayName = 'BlogPostCompact'

export { BlogPostGridItem as BlogPostCompact }
export default BlogPostGridItem
