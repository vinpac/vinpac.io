import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import {
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaAngleDown,
  FaSun,
  FaMoon,
} from 'react-icons/fa'
import { isBreakpoint } from 'lib/theme'
import { ColorName } from 'lib/theme'
import { MdSearch, MdEdit } from 'react-icons/md'
import ToolbarButton from 'components/ToolbarButton'
import { useQuickOpen } from 'lib/quickOpen/hooks'
import { useTheme } from 'lib/theme'
import Logo from 'assets/svg/logo.svg'
import Tooltip from '@reach/tooltip'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  navigate: {
    id: 'Toolbar/navigate',
    defaultMessage: 'Navegar',
  },
  blog: {
    id: 'Toolbar/blog',
    defaultMessage: 'Blog',
  },
  activeDarkMode: {
    id: 'Toolbar/activeDarkMode',
    defaultMessage: 'Ativar Modo Escuro',
  },
  disableDarkMode: {
    id: 'Toolbar/disableDarkMode',
    defaultMessage: 'Desativar Modo Escuro',
  },
})

export interface ToolbarProps {
  readonly className?: string
  readonly color?: ColorName
}

const Toolbar: React.FC<ToolbarProps> = ({ className, color }) => {
  const intl = useIntl()
  const theme = useTheme()
  const quickOpen = useQuickOpen()
  const handleThemeChange = (): void => {
    theme.setTheme(theme.name === 'dark' ? 'light' : 'dark')
  }
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
          <Logo
            alt="Vinicius.app"
            width="146px"
            height="32px"
            className={`text-${color}-700 hover:text-${color}-800`}
          />
          <Tooltip label="Status: Surfando">
            <span className="text-2xl ml-3">🏄🏻‍♂️</span>
          </Tooltip>
          <FaAngleDown className="inline-block ml-2 text-xl md:hidden" />
        </a>
      </Link>
      <div className="hidden md:flex space-x-6 items-center px-6 text-lg">
        <ToolbarButton
          as="button"
          href="/"
          icon={MdSearch}
          label={intl.formatMessage(messages.navigate)}
          color={color}
          onClick={() => quickOpen.open({ text: '' })}
        />
        <Link href="/blog" passHref>
          <ToolbarButton
            icon={MdEdit}
            label={intl.formatMessage(messages.blog)}
            color={color}
          />
        </Link>
        <ToolbarButton
          href="https://github.com/vinpac/"
          icon={FaGithub}
          label="GitHub"
          color={color}
        />
        <div className="space-x-2 flex">
          <ToolbarButton
            href="/"
            icon={FaTwitter}
            label="Twitter"
            color={color}
            hideText
          />
          <ToolbarButton
            href="https://dribbble.com/oivini"
            icon={FaDribbble}
            label="Dribbble"
            color={color}
            hideText
          />
          <Tooltip
            label={intl.formatMessage(
              theme.name === 'light'
                ? messages.activeDarkMode
                : messages.disableDarkMode,
            )}
          >
            <ToolbarButton
              as="button"
              icon={theme.name === 'dark' ? FaMoon : FaSun}
              label="Dribbble"
              color={color}
              onClick={handleThemeChange}
              hideText
            />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default React.memo(Toolbar)
