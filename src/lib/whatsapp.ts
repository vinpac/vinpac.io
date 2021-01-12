import { vinicius } from '@static-constants'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  hello: {
    id: 'whatsapp/hello',
    defaultMessage: 'Oi - Vim através do seu portfólio',
  },
})

export const useMyWhatsAppLink = (): string => {
  const intl = useIntl()
  const text = escape(intl.formatMessage(messages.hello))
  const phone = vinicius.phone.replace(' ', '')

  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
}
