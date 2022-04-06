import { ValidLocale } from '@lib/i18n'

export const DEFAULT_LOCALE: ValidLocale = 'pt-BR'

export const vini = {
  image: '/assets/avatar.jpg',
  site: 'https://vinpac.io',
  email: 'oi@vinpac.io',
  phone: '+55 11 976574407',
  instagramURL: 'https://instagram.com/vin.pacheco',
  twitterURL: 'https://twitter.com/vinpac_io',
  twitterHandle: 'vinpac_io',
  linkedInURL: 'https://www.linkedin.com/in/vinpac/',
  dribbbleURL: 'https://dribbble.com/vinpac',
  gitHubURL: 'https://github.com/vinpac',
} as const

export const locales: ValidLocale[] = ['en', 'pt-BR']
