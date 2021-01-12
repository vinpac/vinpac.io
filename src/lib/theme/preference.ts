import { ThemeName } from '@lib/theme/types'

const LOCAL_PREFERRED_THEME = '@theme/theme'

export const getPreferredTheme = (): ThemeName => {
  const preferredTheme = localStorage.getItem(LOCAL_PREFERRED_THEME)

  if (
    !preferredTheme &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  if (preferredTheme === 'light' || preferredTheme === 'dark') {
    return preferredTheme
  }

  return 'light'
}

export const setPreferredTheme = (theme: ThemeName): void => {
  localStorage.setItem(LOCAL_PREFERRED_THEME, theme)
}
