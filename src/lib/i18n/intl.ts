import areIntlLocalesSupported from 'intl-locales-supported'
import { app } from '../../static-constants'

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported([app.locale])) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    // eslint-disable-next-line
    const IntlPolyfill = require('intl/lib/core')
    Intl.NumberFormat = IntlPolyfill.NumberFormat
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
    IntlPolyfill.__disableRegExpRestore()
    if (app.localeData) {
      IntlPolyfill.__addLocaleData(app.localeData)
    }
  }
} else {
  // No `Intl`, so use and load the polyfill.
  const IntlPolyfill = require('intl/lib/core')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.IntlPolyfill = IntlPolyfill
  global.Intl = IntlPolyfill
  IntlPolyfill.__applyLocaleSensitivePrototypes()
  IntlPolyfill.__addLocaleData(app.localeData)
}
