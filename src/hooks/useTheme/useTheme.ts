import { ThemeContext, ThemeContextType } from '@components/theme'
import { useContext } from 'react'

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error('Missing <ThemeProvider> on _app.tsx')
  }

  return ctx
}
