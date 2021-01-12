export const DEFAULT_LOCALE = 'pt-br'

export const vinicius = {
  image: '/assets/avatar.jpg',
  site: 'vinpac.com',
  email: 'oi@vinpac.com',
  phone: '+55 11 976574407',
  instagramURL: 'https://instagram.com/vin.pacheco',
  twitterURL: 'https://linkedin/in/sambacode',
  twitterHandle: 'sambacode',
  linkedInURL: 'https://linkedin/in/vinpac',
  dribbbleURL: 'https://dribbble.com/vinpac',
  gitHubURL: 'https://github.com/vinpac',
} as const

const configEnv = process.env.APP_CONFIG

interface App {
  messages: Record<any, string>
}
const { messages = {} }: Partial<App> = configEnv ? JSON.parse(configEnv) : {}

export const app: App = {
  messages,
}
