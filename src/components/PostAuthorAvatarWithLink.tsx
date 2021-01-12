import React from 'react'
import cx from 'classnames'
import { vinicius } from '@static-constants'

export interface PostAuthorAvatarWithLinkProps {
  readonly className?: string
}

const PostAuthorAvatarWithLink: React.FC<PostAuthorAvatarWithLinkProps> = ({
  className,
}) => {
  return (
    <div className={cx('flex', className)}>
      <img
        src={vinicius.image}
        className="w-10 h-10 bg-theme-200 rounded-lg mr-3"
      />
      <div className="leading-5">
        <h4 className="font-medium text-theme-900">Vinicius Pacheco</h4>
        <a href={vinicius.twitterURL} className="text-blue-500 text-sm">
          @{vinicius.twitterHandle}
        </a>
      </div>
    </div>
  )
}

PostAuthorAvatarWithLink.displayName = 'PostAuthorAvatarWithLink'

export { PostAuthorAvatarWithLink }
export default PostAuthorAvatarWithLink
