import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaDribbble, FaAngleDown } from 'react-icons/fa'
import { isBreakpoint } from 'lib/css'
import { AppColorName } from 'lib/css'
import { MdSearch, MdEdit } from 'react-icons/md'
import ToolbarButton from 'components/ToolbarButton'
import { useQuickOpen } from 'lib/quickOpen/hooks'

export interface ToolbarProps {
  readonly className?: string
  readonly color?: AppColorName
}

const Toolbar: React.FC<ToolbarProps> = ({ className, color }) => {
  const quickOpen = useQuickOpen()
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!isBreakpoint('md')) {
      e.preventDefault()
      quickOpen.open({ text: '' })
      return
    }
  }

  return (
    <div className={cx('flex flex-row relative', className)}>
      <Link href="/">
        <a className="flex items-center mr-auto" onClick={handleLogoClick}>
          <span className="text-3xl font-mono font-bold">
            vinicius<span className="text-secondary-600">.app</span>
          </span>
          <FaAngleDown className="inline-block ml-2 text-xl md:hidden" />
        </a>
      </Link>
      <div className="hidden md:flex space-x-6 items-center px-6 text-lg">
        <ToolbarButton
          as="button"
          href="/"
          icon={MdSearch}
          label="Navegar"
          color={color}
          onClick={() => quickOpen.open({ text: '' })}
        />
        <Link href="/blog" passHref>
          <ToolbarButton icon={MdEdit} label="Blog" color={color} />
        </Link>
        <ToolbarButton
          href="https://github.com/vinpac/"
          icon={FaGithub}
          label="GitHub"
          color={color}
        />
        <div className="space-x-2">
          <ToolbarButton
            href="/"
            icon={FaTwitter}
            label="Twitter"
            color={color}
            hideText
          />
          <ToolbarButton
            href="/"
            icon={FaDribbble}
            label="Dribbble"
            color={color}
            hideText
          />
        </div>
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default React.memo(Toolbar)
