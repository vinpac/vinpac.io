const RE_ESCAPE = /[-/\\^$*+?.()|[\]{}]/g
export function escapeRegex(string: string): string {
  return string.replace(RE_ESCAPE, '\\$&')
}
