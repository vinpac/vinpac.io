import { useThemeName } from '@hooks'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const SwapThemeIcon: React.FC<any> = (props) => {
  const theme = useThemeName()
  const Icon = theme === 'light' ? FiSun : FiMoon

  return <Icon {...props} />
}

SwapThemeIcon.displayName = 'SwapThemeIcon'
