import React from 'react'
import { useThemeName } from '@lib/theme'
import { FiMoon, FiSun } from 'react-icons/fi'

const QuickOpenSuggestionThemeSwapIcon: React.FC<any> = (props) => {
  const theme = useThemeName()
  const Icon = theme === 'light' ? FiSun : FiMoon

  return <Icon {...props} />
}

QuickOpenSuggestionThemeSwapIcon.displayName =
  'QuickOpenSuggestionThemeSwapIcon'

export default QuickOpenSuggestionThemeSwapIcon
