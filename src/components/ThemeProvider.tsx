import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
  ThemeContext,
  ThemeName,
  ThemeContextType,
  getPreferredTheme,
  setPreferredTheme,
} from 'lib/theme'

export interface ThemeProviderProps {
  readonly className?: string
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setTheme] = useState<ThemeName>('light')
  useEffect(() => {
    const prefferedTheme = getPreferredTheme()

    if (prefferedTheme !== themeName) {
      setTheme(prefferedTheme)
      return
    }

    const html = document.getElementsByTagName('html')[0]
    html.className = themeName === 'dark' ? 'theme-dark' : 'theme-light'
  }, [themeName])
  const setThemeAndSavePreference = useCallback(
    (value: ThemeName) => {
      setTheme(value)
      setPreferredTheme(value)
    },
    [setTheme],
  )
  const ctx = useMemo<ThemeContextType>(
    () => ({
      name: themeName,
      setTheme: setThemeAndSavePreference,
    }),
    [themeName, setThemeAndSavePreference],
  )

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
}

ThemeProvider.displayName = 'ThemeProvider'

export { ThemeProvider }
export default ThemeProvider
