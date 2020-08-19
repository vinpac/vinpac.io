const withReactSvg = require('next-react-svg')
const path = require('path')
const { loadAppMessages, loadLocaleData } = require('./scripts/i18nScripts')

const LOCALE = process.env.LOCALE || 'pt-BR'

// eslint-disable-next-line no-console
console.log(`Locale: ${LOCALE}`)

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withReactSvg({
    include: path.resolve(__dirname, 'src/assets/svg'),
    env: {
      APP_CONFIG: JSON.stringify({
        locale: LOCALE,
        messages: loadAppMessages(LOCALE),
        localeData: loadLocaleData(LOCALE),
        defaultLocale: 'pt-BR',
      }),
    },
    webpack: (config) => {
      const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
      config.plugins.push(
        new MomentLocalesPlugin({
          localesToKeep: LOCALE === 'pt-BR' ? ['pt-br'] : [],
        }),
      )
      return config
    },
  }),
)
