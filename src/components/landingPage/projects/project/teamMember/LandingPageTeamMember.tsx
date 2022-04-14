import React from 'react'
import cx from 'classnames'

export interface TeamMember {
  name: string
  profileURL: string
}

interface Props extends TeamMember {
  className?: string
}

export const LandingPageProjectTeamMember: React.FC<Props> = ({
  className,
  name,
  profileURL,
}) => {
  return (
    <a
      href={profileURL}
      target="__blank"
      rel="nofollow"
      className={cx('underline hover:text-primary-500 font-medium', className)}
    >
      {name}
    </a>
  )
}

export type LandingPageProjectTeamMemberProps = Props
