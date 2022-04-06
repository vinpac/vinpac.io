import messagesByLocale from '@components/providers/i18n/messagesByLocale'
import { castLocale } from '@lib/i18n'
import { DEFAULT_LOCALE } from '@static-constants'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

export const I18nProvider: React.FC = ({ children }) => {
  const locale = castLocale(useRouter().locale, DEFAULT_LOCALE)
  return (
    <IntlProvider
      locale={locale}
      defaultLocale={DEFAULT_LOCALE}
      messages={messagesByLocale[locale]}
    >
      {children}
    </IntlProvider>
  )
}

export default I18nProvider
