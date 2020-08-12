import React from 'react'
import cx from 'classnames'

export interface FooterProps {
  readonly className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cx('container pb-8', className)}>
      <div className="bg-primary-700 rounded-xl p-4 h-64"></div>
    </div>
  )
}

Footer.displayName = 'Footer'

export { Footer }
export default Footer
