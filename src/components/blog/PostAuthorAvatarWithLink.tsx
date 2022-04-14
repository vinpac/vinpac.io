import React from 'react'
import cx from 'classnames'
import { vini } from '@static-constants'

export interface PostAuthorAvatarWithLinkProps {
  className?: string
}

export const PostAuthorAvatarWithLink: React.FC<
  PostAuthorAvatarWithLinkProps
> = ({ className }) => {
  return (
    <div className={cx('flex', className)}>
      <img
        src={vini.image}
        className="w-10 h-10 mr-3 rounded-lg bg-theme-200"
      />
      <div className="leading-5">
        <h4 className="font-medium text-theme-900">Vinicius Pacheco</h4>
        <a href={vini.twitterURL} className="text-sm text-blue-500">
          @{vini.twitterHandle}
        </a>
      </div>
    </div>
  )
}

PostAuthorAvatarWithLink.displayName = 'PostAuthorAvatarWithLink'
