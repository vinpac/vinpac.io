import { ValidLocale } from 'lib/i18n'

export const DEFAULT_LOCALE = 'pt-BR'

export const vinicius = {
  image: '/assets/avatar.jpg',
  twitter: {
    url: 'https://twitter.com/vinpac98/',
    handle: 'vinpac98',
  },
} as const

const configEnv = process.env.APP_CONFIG
interface App {
  locale: ValidLocale
  defaultLocale: ValidLocale
  localeData?: Record<any, string>
  messages: Record<any, string>
}
const {
  locale,
  localeData,
  messages = {},
  defaultLocale = DEFAULT_LOCALE,
}: Partial<App> = configEnv ? JSON.parse(configEnv) : {}

export const app: App = {
  locale: locale || DEFAULT_LOCALE,
  defaultLocale,
  messages,
  localeData,
}
