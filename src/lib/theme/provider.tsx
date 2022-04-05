import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
  ThemeContext,
  ThemeName,
  ThemeContextType,
  getPreferredTheme,
  setPreferredTheme,
} from '@lib/theme'
import Head from 'next/head'

interface ThemeProviderProps {
  className?: string
}

const themeColor: Record<ThemeName, string> = {
  dark: '#292524',
  light: '#ffffff',
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setTheme] = useState<ThemeName>('light')
  useEffect(() => {
    const prefferedTheme = getPreferredTheme()

    if (prefferedTheme !== themeName) {
      setTheme(prefferedTheme)
      return
    }

    const html = document.getElementsByTagName('html')[0]
    html.className =
      themeName === 'dark' ? 'dark bg-gray-800 text-white' : 'light'
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

  const favicon = (pathname: string): string =>
    `/favicon/${themeName}${pathname}`

  return (
    <ThemeContext.Provider value={ctx}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={favicon('/apple-icon-57x57.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={favicon('/apple-icon-60x60.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={favicon('/apple-icon-72x72.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={favicon('/apple-icon-76x76.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={favicon('/apple-icon-114x114.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={favicon('/apple-icon-120x120.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={favicon('/apple-icon-144x144.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={favicon('/apple-icon-152x152.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicon('/apple-icon-180x180.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={favicon('/android-icon-192x192.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon('/favicon-32x32.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={favicon('/favicon-96x96.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon('/favicon-16x16.png')}
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content={themeColor[themeName]} />
        <meta name="theme-color" content={themeColor[themeName]} />
      </Head>
      {children}
    </ThemeContext.Provider>
  )
}
