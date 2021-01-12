const withReactSvg = require('next-react-svg')
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withReactSvg({
    include: path.resolve(__dirname, 'src/assets/svg'),
    env: {
      APP_CONFIG: JSON.stringify({
        defaultLocale: 'pt-BR',
      }),
    },
    i18n: {
      locales: ['pt-BR', 'en'],
      defaultLocale: 'pt-BR',
    },
    webpack: (config) => {
      const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

      config.plugins.push(
        new MomentLocalesPlugin({
          localesToKeep: ['pt-br'],
        }),
      )

      return config
    },
  }),
)
