import React from 'react'
import cx from 'classnames'
import Toolbar from '@components/Toolbar'

export interface LayoutProps {
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
}) => {
  const Hero = hero ? 'div' : React.Fragment
  return (
    <div className={cx('layout', className)}>
      {toolbar !== null &&
        (hero ? (
          <Hero id="hero" className={heroClassName}>
            {toolbar || (
              <Toolbar
                className={cx(
                  toolbarClassName,
                  'container py-10 relative z-20',
                )}
              />
            )}
            {hero}
          </Hero>
        ) : (
          <div className={`container py-3 relative z-20`}>
            {toolbar || <Toolbar className={toolbarClassName} />}
          </div>
        ))}
      {children}
    </div>
  )
}

Layout.displayName = 'Layout'

export { Layout }
export default Layout
