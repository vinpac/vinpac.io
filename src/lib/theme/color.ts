import { ColorShade, ColorName } from 'lib/theme/types'
import { useCallback } from 'react'
import { useThemeName } from 'lib/theme/hooks'

export const screensWidth = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

export const isBreakpoint = (
  breakpoint: keyof typeof screensWidth,
): boolean => {
  return window.innerWidth >= screensWidth[breakpoint]
}

export type ColorClassNameFn = (
  className: string,
  shade: ColorShade,
  inverseShade?: ColorShade,
) => string

export const useTailwindCx = (color?: ColorName): ColorClassNameFn => {
  const theme = useThemeName()
  return useCallback(
    (
      className: string,
      shade: ColorShade,
      inverseShade?: ColorShade,
    ): string => {
      if (!color) {
        throw new Error('Color is undefined')
      }

      const hasDarkInName = color.endsWith('dark')
      const isDark = theme === 'dark' ? !hasDarkInName : hasDarkInName
      const colorName: string = hasDarkInName
        ? color.substr(0, color.indexOf('.'))
        : color
      let resultShade = shade

      const shouldInvertShade =
        colorName === 'white' || colorName === 'alpha-white' ? !isDark : isDark

      if (shouldInvertShade) {
        resultShade =
          inverseShade || ((1000 - Math.max(100, shade)) as ColorShade)
      }

      if (colorName === 'white') {
        if (resultShade === 900) {
          return `${className}-white`
        }

        return `${className}-alpha-white-${resultShade}`
      }

      return `${className}-${colorName}-${resultShade}`
    },
    [color, theme],
  )
}
