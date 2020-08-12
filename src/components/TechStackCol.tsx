import React from 'react'
import cx from 'classnames'

export interface TechStackColProps {
  readonly title: string
  readonly description: string
  readonly subtitle?: string
  readonly className?: string
  readonly experience?: string
  readonly children?: React.ReactNode
}

const TechStackCol: React.FC<TechStackColProps> = ({
  className,
  title,
  children,
  description,
  subtitle,
  experience,
}) => {
  return (
    <div className={cx('text-center', className)}>
      <h4 className="text-md font-bold text-secondary-300 mb-4">
        {title.toUpperCase()}
        {subtitle && (
          <span className="text-xs font-normal text-gray-600 block">
            {subtitle}
          </span>
        )}
      </h4>
      <div className="h-32 mb-2 flex items-center justify-center">
        {children}
      </div>
      <p className="text-gray-300">{description}</p>
      <p className="text-xs text-gray-600">{experience}</p>
    </div>
  )
}

TechStackCol.displayName = 'TechStackCol'

export { TechStackCol }
export default React.memo(TechStackCol)
