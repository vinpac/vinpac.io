import React from 'react'
import { ThemeName } from 'lib/theme/types'

export interface ThemeContextType {
  name: ThemeName
  setTheme: (theme: ThemeName) => void
}
export const ThemeContext = React.createContext<ThemeContextType | null>(null)
