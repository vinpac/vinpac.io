import React from 'react'
import { useThemeName } from 'lib/theme'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  activeDarkMode: {
    id: 'QuickOpenSuggestionThemeSwapTitle/activeDarkMode',
    defaultMessage: 'Ativar Modo Escuro',
  },
  disableDarkMode: {
    id: 'QuickOpenSuggestionThemeSwapTitle/disableDarkMode',
    defaultMessage: 'Desativar Modo Escuro',
  },
})

const QuickOpenSuggestionThemeSwapTitle: React.FC = () => {
  const theme = useThemeName()
  const intl = useIntl()
  return (
    <span>
      {theme === 'light'
        ? intl.formatMessage(messages.activeDarkMode)
        : intl.formatMessage(messages.disableDarkMode)}
    </span>
  )
}

QuickOpenSuggestionThemeSwapTitle.displayName =
  'QuickOpenSuggestionThemeSwapTitle'

export default QuickOpenSuggestionThemeSwapTitle
