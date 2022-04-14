import { useTheme } from '@hooks/useTheme'

export const useToggleTheme = (): (() => void) => {
  const theme = useTheme()
  return () => theme.setTheme(theme.name === 'dark' ? 'light' : 'dark')
}
