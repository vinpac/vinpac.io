import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { isBreakpoint, useToggleTheme } from '@lib/theme'
import { FiMenu } from 'react-icons/fi'
import ToolbarButton from '@components/ToolbarButton'
import { useQuickOpen } from '@lib/quickOpen/hooks'
import { useTheme } from '@lib/theme'
import Logo from '@assets/svg/logo.svg'
import Tooltip from '@reach/tooltip'
import { defineMessages, useIntl } from 'react-intl'
import { vinicius } from '@static-constants'
import SwapThemeIcon from '@components/SwapThemeIcon'
import CurrentTimeAndCity from './CurrentTimeAndCity'
import { useIsMac } from '@lib/browser'

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

const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
  const intl = useIntl()
  const theme = useTheme()
  const quickOpen = useQuickOpen()
  const handleThemeChange = useToggleTheme()
  const themeToggleLabel = intl.formatMessage(
    theme.name === 'light' ? messages.activeDarkMode : messages.disableDarkMode,
  )
  const isMac = useIsMac()
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!isBreakpoint('lg')) {
      e.preventDefault()
      quickOpen.open({ text: '' })
      return
    }
  }

  return (
    <div className={cx('flex flex-row relative', className)}>
      <Link href="/">
        <a
          className="flex items-center mr-auto w-full lg:w-auto"
          onClick={handleLogoClick}
        >
          <Logo alt="Logo" className="text-gray-900 dark:text-white mt-3" />
          <FiMenu size={36} className="block text-xl lg:hidden ml-auto" />
        </a>
      </Link>
      <div className="hidden lg:flex space-x-6 items-center px-6 text-lg">
        <ToolbarButton
          as="button"
          label={intl.formatMessage(messages.navigate, {
            shortcut: isMac ? '⌘+K' : 'ctrl+K',
          })}
          onClick={() => quickOpen.open({ text: '' })}
        />
        <ToolbarButton label="GitHub" href={vinicius.gitHubURL} />
        <ToolbarButton label="Dribbble" href={vinicius.dribbbleURL} />
        <ToolbarButton label="LinkedIn" href={vinicius.linkedInURL} />

        <Tooltip label={themeToggleLabel}>
          <ToolbarButton
            as="button"
            onClick={handleThemeChange}
            label={themeToggleLabel}
          >
            <SwapThemeIcon size={40} />
          </ToolbarButton>
        </Tooltip>
        <CurrentTimeAndCity />
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default React.memo(Toolbar)
