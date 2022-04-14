import { ThemeName } from '@lib/theme'
import { useTheme } from './useTheme'

export const useThemeName = (): ThemeName => {
  return useTheme().name
}
