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
