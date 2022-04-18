/**
 * Adds displayName on the components
 * @example const s = styled({ Star: w.div('...') })
 * s.Start.displayName // Star
 */
export const group = <ComponentsRecord extends Record<string, any>>(
  components: ComponentsRecord,
): ComponentsRecord => {
  Object.keys(components).forEach((displayName) => {
    const component = components[displayName]
    component.displayName = displayName
  })

  return components
}
