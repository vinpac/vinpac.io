/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path')
const glob = require('glob')
const fs = require('fs')

const validateLocale = (locale) => {
  if (locale !== 'en-US' && locale !== 'pt-BR') {
    const error = new Error(`${locale} is not supported yet`)
    error.code = 'INVALID_LOCALE'
    throw error
  }
}

const loadAppMessages = (locale) => {
  validateLocale(locale)
  const dir = path.resolve('src', 'messages', locale)
  const paths = glob.sync(path.join(dir, '**', '*.json'))

  const messages = {}
  paths.forEach((filepath) => {
    const idStart = path.relative(dir, filepath).replace(/\.json$/, '')
    const fileMessages = JSON.parse(fs.readFileSync(filepath, 'utf8')) || {}

    Object.keys(fileMessages).forEach((messageId) => {
      messages[`${idStart}/${messageId}`] = fileMessages[messageId]
    })
  })

  return messages
}

function loadLocaleData(locale) {
  validateLocale
  let extractedLocaleData
  const prevIntlPolyfill = global.IntlPolyfill
  global.IntlPolyfill = {
    __addLocaleData: (value) => {
      extractedLocaleData = value
    },
  }

  const [language, country] = locale.split('-')
  const moduleName = `${language}-${country.toUpperCase()}.js`
  require(`intl/locale-data/jsonp/${moduleName}`)
  global.IntlPolyfill = prevIntlPolyfill
  return extractedLocaleData
}

module.exports = { loadAppMessages, loadLocaleData }
