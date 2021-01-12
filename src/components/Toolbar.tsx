import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { isBreakpoint, useToggleTheme } from '@lib/theme'
import { MdMenu } from 'react-icons/md'
import ToolbarButton from '@components/ToolbarButton'
import { useQuickOpen } from '@lib/quickOpen/hooks'
import { useTheme } from '@lib/theme'
import Logo from '@assets/svg/logo.svg'
import Tooltip from '@reach/tooltip'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import { vinicius } from '@static-constants'
import SwapThemeIcon from '@components/SwapThemeIcon'

const messages = defineMessages({
  navigate: {
    id: 'Toolbar/navigate',
    defaultMessage: 'Navegar ({key}+K)',
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
}

const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
  const intl = useIntl()
  const theme = useTheme()
  const quickOpen = useQuickOpen()
  const handleThemeChange = useToggleTheme()

  // Adjust time for GMT-3
  const now = new Date()
  now.setHours(now.getUTCHours() - 3)

  const themeToggleLabel = intl.formatMessage(
    theme.name === 'light' ? messages.activeDarkMode : messages.disableDarkMode,
  )
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
          <Logo
            alt="Vinicius.app"
            width="146px"
            height="32px"
            className="text-green-700 dark:text-green-200"
          />
          <MdMenu size={36} className="block text-xl lg:hidden ml-auto" />
        </a>
      </Link>
      <div className="hidden lg:flex space-x-6 items-center px-6 text-lg">
        <ToolbarButton
          as="button"
          label={intl.formatMessage(messages.navigate, { key: '⌘' })}
          onClick={() => quickOpen.open({ text: '' })}
        />
        <Link href="/blog" passHref>
          <ToolbarButton label="Dribbble" href={vinicius.dribbbleURL} />
        </Link>
        <ToolbarButton label="GitHub" href={vinicius.gitHubURL} />
        <ToolbarButton label="Dribbble" href={vinicius.dribbbleURL} />
        <ToolbarButton label="Twitter" href={vinicius.twitterURL} />
        <Tooltip label={themeToggleLabel}>
          <ToolbarButton
            as="button"
            onClick={handleThemeChange}
            label={themeToggleLabel}
          >
            <SwapThemeIcon size={40} />
          </ToolbarButton>
        </Tooltip>
        <div>
          <h5 className="text-gray-400 uppercase text-sm font-medium">
            <FormattedMessage
              id="Toolbar/currentCity"
              defaultMessage="Cidade atual"
            />
          </h5>
          <p>
            <FormattedMessage
              id="Toolbar/currentCity"
              defaultMessage="São Paulo, SP {time} BR"
              values={{ time: intl.formatTime(now) }}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default React.memo(Toolbar)
