import React from 'react'

import { defineMessages, useIntl } from 'react-intl'
import { PropsPassedToSuggestion } from '@components/commandPalette'
import { useThemeName } from '@hooks'

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

export const CommandPaletteSuggestionThemeSwapTitle: React.FC<
  PropsPassedToSuggestion
> = ({ context: { highlightText } }) => {
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

CommandPaletteSuggestionThemeSwapTitle.displayName =
  'CommandPaletteSuggestionThemeSwapTitle'
