import React from 'react'
import cx from 'classnames'
import Toolbar from 'components/Toolbar'
import { useTailwindCx, AppColorName } from 'lib/css'

export interface LayoutProps {
  readonly color?: AppColorName
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
  color = 'gray',
}) => {
  const Hero = hero ? 'div' : React.Fragment
  const vx = useTailwindCx(color)
  return (
    <div className={cx('layout', className)}>
      {toolbar !== null &&
        (hero ? (
          <Hero
            className={heroClassName || `${vx('bg', 200)} ${vx('text', 900)}`}
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
