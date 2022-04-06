import { vini } from '@static-constants'
import { DefaultSeo } from 'next-seo'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  siteName: {
    defaultMessage: 'Vinicius Pacheco Portfolio',
    id: '0j0ptK',
  },
  description: {
    defaultMessage: `Olá, sou Vinicius Pacheco e sou desenvolvedor
    Full-stack com mais de 7 anos de experiência, especializado em React, Node.js e TypeScript.
    Com uma combinação única de experiência em design e desenvolvimento, crio interfaces
    profissionais e pixel-perfect em um curto espaço de tempo. Sou excelente em construir
    soluções inteligentes que permitem experiências ideais.`,
    id: '7/lzrt',
  },
})

const SeoProvider: React.FC = ({ children }) => {
  const { formatMessage, locale } = useIntl()

  return (
    <>
      <DefaultSeo
        title="Vinicius Pacheco"
        description={formatMessage(messages.description)}
        openGraph={{
          type: 'website',
          description: formatMessage(messages.description),
          locale,
          url: vini.site,
          images: [
            {
              url: `${vini.site}/assets/me.jpg`,
              width: 682,
              height: 691,
              alt: 'Vinicius Pacheco',
            },
          ],
          site_name: formatMessage(messages.siteName),
        }}
        languageAlternates={[
          locale === 'pt-BR'
            ? {
                hrefLang: 'pt-BR',
                href: vini.site,
              }
            : {
                hrefLang: 'en',
                href: `${vini.site}/en`,
              },
        ]}
        twitter={{
          handle: vini.twitterHandle,
          site: vini.site,
          cardType: 'summary_large_image',
        }}
      />
      {children}
    </>
  )
}

export default SeoProvider
