import { useRouter } from 'next/router'
import pt from 'date-fns/locale/pt'
import { Locale } from 'date-fns'

export const useDateFNSLocale = (): Locale | undefined => {
  return useRouter().locale === 'pt-BR' ? pt : undefined
}
