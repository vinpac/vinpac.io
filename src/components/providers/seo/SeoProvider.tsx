import { vini } from '@static-constants'
import { DefaultSeo } from 'next-seo'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  siteName: {
    defaultMessage: 'Vinicius Pacheco Portfolio',
    id: '0j0ptK',
  },
  description: {
    defaultMessage: `Eu me chamo Vinicius Pacheco e eu
    sou um Desenvolvedor FullStack e Designer com experiência em
    liderança. Eu combino design com a minha experiência em
    programação pra transformar problemas complexos em soluções completas e
    elegantes`,
    id: '4DE0UJ',
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
