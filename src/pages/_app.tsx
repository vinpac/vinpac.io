import 'lib/i18n'
import '@reach/tooltip/styles.css'
// Blog is currently deactivated
// import 'prismjs/themes/prism-tomorrow.css'
import '../css/tailwind.css'
import '../css/animations.css'
import '../css/notion.css'

import { AppProps } from 'next/app'
import QuickOpenProvider from '@components/QuickOpenProvider'
import { DefaultSeo } from 'next-seo'
import PageTransitionLoadingBar from '@components/PageTransitionLoadingBar'
import { buildSuggestionsList } from '@lib/quickOpen/suggestions'
import { ThemeProvider } from '@lib/theme'
import { DEFAULT_LOCALE, vini } from '@static-constants'
import en from '@generated/lang/en.json'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'

const defaultDescription = `Eu me chamo Vinicius Pacheco e eu
sou um Desenvolvedor FullStack e Designer com experiência em
liderança. Eu combino design com a minha experiência em
programação pra transformar problemas complexos em soluções completas e
elegantes`

const enDescripton = `Hi, I'm Vinicius Pacheco, a Full Stack developer and Designer with leadership experiences. I combine design with my expertise in coding to transform complex problems into complete and elegant solutions`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const locale = router.locale || DEFAULT_LOCALE
  const metaDescription = locale === 'en' ? enDescripton : defaultDescription

  return (
    <>
      <DefaultSeo
        title="Vinicius Pacheco"
        description={metaDescription}
        openGraph={{
          type: 'website',
          description: metaDescription,
          locale: locale === 'en' ? 'en_US' : 'pt_BR',
          url: vini.site,
          images: [
            {
              url: `${vini.site}/assets/me.jpg`,
              width: 682,
              height: 691,
              alt: 'Vinicius Pacheco',
            },
          ],
          site_name: 'Vinicius Pacheco Portfolio',
        }}
        languageAlternates={[
          {
            hrefLang: 'en-US',
            href: `${vini.site}/en`,
          },
        ]}
        twitter={{
          handle: vini.twitterHandle,
          site: vini.site,
          cardType: 'summary_large_image',
        }}
      />

      <ThemeProvider>
        <IntlProvider
          messages={locale === 'en' ? (en as any) : {}}
          locale={locale}
          defaultLocale={DEFAULT_LOCALE}
        >
          <PageTransitionLoadingBar />

          <QuickOpenProvider buildSuggestionsList={buildSuggestionsList}>
            <Component {...pageProps} />
          </QuickOpenProvider>
        </IntlProvider>
      </ThemeProvider>
    </>
  )
}

export default App
