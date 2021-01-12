import { ThemeName } from '@lib/theme/types'
import { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '@lib/theme/context'

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error('Missing <ThemeProvider> on _app.tsx')
  }

  return ctx
}

export const useThemeName = (): ThemeName => {
  return useTheme().name
}

export const useToggleTheme = (): (() => void) => {
  const theme = useTheme()
  return () => theme.setTheme(theme.name === 'dark' ? 'light' : 'dark')
}
