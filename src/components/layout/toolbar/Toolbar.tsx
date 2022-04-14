import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { useToggleTheme, useTheme, useCommandPalette } from '@hooks'
import { FiMenu } from 'react-icons/fi'
import { ToolbarButton } from './button'
import { SwapThemeIcon } from '@components/theme'
import Logo from '@assets/svg/logo.svg'
import Tooltip from '@reach/tooltip'
import { defineMessages, useIntl } from 'react-intl'
import { vini } from '@static-constants'

import { CurrentTimeAndCity } from './currentTimeAndCity'
import { useIsMac } from '@lib/browser'
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa'
import { isBreakpoint } from '@lib/theme'

const messages = defineMessages({
  navigate: {
    id: 'PBh2Pr',
    defaultMessage: 'Navegar ({shortcut})',
  },
  blog: {
    id: 'tv5FG3',
    defaultMessage: 'Blog',
  },
  activeDarkMode: {
    id: 'nYqYhT',
    defaultMessage: 'Ativar Modo Escuro',
  },
  disableDarkMode: {
    id: 'd0RPmP',
    defaultMessage: 'Desativar Modo Escuro',
  },
})

export interface ToolbarProps {
  className?: string
}

export const Toolbar: React.FC<ToolbarProps> = React.memo(({ className }) => {
  const intl = useIntl()
  const theme = useTheme()
  const commandPalette = useCommandPalette()
  const handleThemeChange = useToggleTheme()
  const themeToggleLabel = intl.formatMessage(
    theme.name === 'light' ? messages.activeDarkMode : messages.disableDarkMode,
  )
  const isMac = useIsMac()
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!isBreakpoint('lg')) {
      e.preventDefault()
      commandPalette.open({ text: '' })
      return
    }
  }

  return (
    <div className={cx('flex flex-row relative', className)}>
      <Link href="/">
        <a
          className="flex items-center w-full mr-auto lg:w-auto"
          onClick={handleLogoClick}
        >
          <Logo alt="Logo" className="mt-3 text-gray-900 dark:text-white" />
          <FiMenu size={36} className="block ml-auto text-xl lg:hidden" />
        </a>
      </Link>
      <div className="items-center hidden px-4 space-x-6 text-lg lg:flex">
        <ToolbarButton
          as="button"
          label={intl.formatMessage(messages.navigate, {
            shortcut: isMac ? '⌘+K' : 'ctrl+K',
          })}
          onClick={() => commandPalette.open({ text: '' })}
        />
        <div className="flex pl-4 space-x-4 text-2xl border-l border-gray-300 dark:border-gray-700">
          <ToolbarButton label="GitHub" href={vini.gitHubURL} isExternal>
            <FaGithub />
          </ToolbarButton>
          <ToolbarButton label="Dribbble" href={vini.dribbbleURL} isExternal>
            <FaDribbble />
          </ToolbarButton>
          <ToolbarButton label="LinkedIn" href={vini.linkedInURL} isExternal>
            <FaLinkedin />
          </ToolbarButton>
          <Tooltip label={themeToggleLabel}>
            <ToolbarButton
              as="button"
              onClick={handleThemeChange}
              label={themeToggleLabel}
              textClassName="text-primary-500"
            >
              <SwapThemeIcon className="fill-primary-200 dark:fill-primary-800" />
            </ToolbarButton>
          </Tooltip>
        </div>

        <CurrentTimeAndCity />
      </div>
    </div>
  )
})

Toolbar.displayName = 'Toolbar'
