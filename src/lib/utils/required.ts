export const required = <T>(name: string, value: T | null | undefined): T => {
  if (!value) {
    throw new Error(`${name} is required but found ${value}`)
  }

  return value
}
