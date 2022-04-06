// eslint-disable-next-line
// @ts-ignore
import en from '@generated/lang/en.json'
import { ValidLocale } from '@lib/i18n'
import { IntlShape } from 'react-intl'

const messagesByLocale: Record<ValidLocale, IntlShape['messages']> = {
  'pt-BR': {},
  en,
}

export default messagesByLocale
