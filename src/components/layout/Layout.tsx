import React from 'react'
import cx from 'classnames'
import { Toolbar } from './toolbar'

export interface LayoutProps {
  toolbar?: React.ReactNode | null
  toolbarClassName?: string
  className?: string
  hero?: React.ReactNode
  heroClassName?: string
}

export const Layout: React.FC<LayoutProps> = ({
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
