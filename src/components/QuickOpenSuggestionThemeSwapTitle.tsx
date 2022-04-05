import React from 'react'
import { useThemeName } from '@lib/theme'
import { defineMessages, useIntl } from 'react-intl'
import { PropsPassedToSuggestion } from '@lib/quickOpen/types'

const messages = defineMessages({
  activeDarkMode: {
    id: 'nYqYhT',
    defaultMessage: 'Ativar Modo Escuro',
  },
  disableDarkMode: {
    id: 'd0RPmP',
    defaultMessage: 'Desativar Modo Escuro',
  },
})

const QuickOpenSuggestionThemeSwapTitle: React.FC<PropsPassedToSuggestion> = ({
  context: { highlightText },
}) => {
  const theme = useThemeName()
  const intl = useIntl()
  return (
    <span>
      {highlightText(
        theme === 'light'
          ? intl.formatMessage(messages.activeDarkMode)
          : intl.formatMessage(messages.disableDarkMode),
      )}
    </span>
  )
}

QuickOpenSuggestionThemeSwapTitle.displayName =
  'QuickOpenSuggestionThemeSwapTitle'

export default QuickOpenSuggestionThemeSwapTitle
