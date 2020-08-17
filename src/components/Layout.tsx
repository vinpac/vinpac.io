import React from 'react'
import cx from 'classnames'
import Toolbar from 'components/Toolbar'
import { ColorName } from 'lib/theme'

export interface LayoutProps {
  readonly color?: ColorName
  readonly toolbar?: React.ReactNode | null
  readonly toolbarClassName?: string
  readonly className?: string
  readonly hero?: React.ReactNode
  readonly heroClassName?: string
}

const Layout: React.FC<LayoutProps> = ({
  className,
  children,
  toolbar,
  toolbarClassName,
  hero,
  heroClassName,
  color = 'theme' as ColorName,
}) => {
  const Hero = hero ? 'div' : React.Fragment
  return (
    <div className={cx('layout', className)}>
      {toolbar !== null &&
        (hero ? (
          <Hero
            className={heroClassName || `bg-${color}-200 text-${color}-900`}
          >
            <div className={`container py-3 relative z-20`}>
              {toolbar || (
                <Toolbar className={toolbarClassName} color={color} />
              )}
            </div>
            {hero}
          </Hero>
        ) : (
          <div className={`container py-3 relative z-20`}>
            {toolbar || <Toolbar className={toolbarClassName} color={color} />}
          </div>
        ))}
      {children}
    </div>
  )
}

Layout.displayName = 'Layout'

export { Layout }
export default Layout
