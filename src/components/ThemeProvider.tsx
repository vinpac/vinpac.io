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
    html.className = `theme-${themeName}`
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

  return (
    <>
      <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
      <style jsx global>{`
        :root {
          --color-theme-100: #f7fafc;
          --color-theme-200: #edf2f7;
          --color-theme-300: #e2e8f0;
          --color-theme-400: #cbd5e0;
          --color-theme-500: #a0aec0;
          --color-theme-600: #718096;
          --color-theme-700: #4a5568;
          --color-theme-800: #2d3748;
          --color-theme-900: #1a202c;

          --color-theme-standout-100: #f7fafc;
          --color-theme-standout-200: #edf2f7;
          --color-theme-standout-300: #e2e8f0;
          --color-theme-standout-400: #cbd5e0;
          --color-theme-standout-500: #a0aec0;
          --color-theme-standout-600: #718096;
          --color-theme-standout-700: #4a5568;
          --color-theme-standout-800: #2d3748;
          --color-theme-standout-900: #1a202c;

          --notion-color-red: #f56565;
          --notion-color-pink: #ed64a6;
          --notion-color-blue: #4299e1;
          --notion-color-purple: #9f7aea;
          --notion-color-teal: #38b2ac;
          --notion-color-yellow: #ecc94b;
          --notion-color-orange: #ed8936;
          --notion-color-brown: #685044;
          --notion-color-gray: #a0aec0;

          --notion-background-red: #f56565;
          --notion-background-pink: #fed7e2;
          --notion-background-blue: #4299e1;
          --notion-background-purple: #e9d8fd;
          --notion-background-teal: #b2f5ea;
          --notion-background-yellow: #fefcbf;
          --notion-background-orange: #feebc8;
          --notion-background-brown: #d9d3d0;
          --notion-background-gray: #edf2f7;
        }

        .theme-dark {
          --color-theme-900: #f7fafc;
          --color-theme-800: #edf2f7;
          --color-theme-700: #e2e8f0;
          --color-theme-600: #cbd5e0;
          --color-theme-500: #a0aec0;
          --color-theme-400: #718096;
          --color-theme-300: #4a5568;
          --color-theme-200: #2d3748;
          --color-theme-100: #1a202c;

          --color-theme-standout-900: #ffffff;
          --color-theme-standout-800: #f7fafc;
          --color-theme-standout-700: #edf2f7;
          --color-theme-standout-600: #e2e8f0;
          --color-theme-standout-500: #cbd5e0;
          --color-theme-standout-400: #a0aec0;
          --color-theme-standout-300: #718096;
          --color-theme-standout-200: #4a5568;
          --color-theme-standout-100: #2d3748;

          --notion-background-red: rgba(155, 44, 44, 0.45);
          --notion-background-pink: rgba(151, 38, 109, 0.45);
          --notion-background-blue: rgba(44, 82, 130, 0.45);
          --notion-background-purple: rgba(85, 60, 154, 0.45);
          --notion-background-teal: rgba(40, 94, 97, 0.45);
          --notion-background-yellow: rgba(236, 201, 75, 0.35);
          --notion-background-orange: rgba(156, 66, 33, 0.45);
          --notion-background-brown: rgba(47, 36, 31, 0.45);
          --notion-background-gray: rgba(45, 55, 72, 0.45);

          background-color: #1a202c;
          color: #fff;
        }

        .theme-light .bg-theme,
        .theme-light .bg-theme-standout {
          background-color: #fff;
        }

        .theme-dark .bg-theme {
          background-color: #1a202c;
        }

        .theme-dark .bg-theme-standout {
          background-color: #2d3748;
        }
      `}</style>
    </>
  )
}

ThemeProvider.displayName = 'ThemeProvider'

export { ThemeProvider }
export default ThemeProvider
