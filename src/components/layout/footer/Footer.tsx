import React from 'react'
import cx from 'classnames'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cx('container pb-8', className)}>
      <div className="h-64 p-4 bg-primary-700 rounded-xl"></div>
    </div>
  )
}

Footer.displayName = 'Footer'
