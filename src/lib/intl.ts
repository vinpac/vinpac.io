const stringifyAttrs = (attrs: Record<string, string>): string => {
  return Object.keys(attrs)
    .reduce((prev, attrName) => {
      prev.push(`${attrName}="${attrs[attrName]}"`)
      return prev
    }, [] as string[])
    .join(' ')
}
export const intlRenderer = (
  map: Record<string, Record<string, any>>,
): Record<string, any> => {
  const values: Record<string, any> = {}
  Object.keys(map).forEach((tagName) => {
    values[tagName] = (...chunks: any) =>
      `<${tagName} ${stringifyAttrs(map[tagName])}>${chunks.join(
        '',
      )}</${tagName}>`
  })

  return values
}

export const localizePathname = (
  pathname: string,
  locale: string | undefined,
): string => {
  if (locale && locale !== 'pt-BR') {
    return `/${locale}${pathname}`
  }

  return pathname
}
