import 'lib/i18n'
import '@reach/tooltip/styles.css'
// Blog is currently deactivated
// import 'prismjs/themes/prism-tomorrow.css'
import '../css/tailwind.css'
import '../css/animations.css'
import '../css/notion.css'

import Head from 'next/head'
import { AppProps } from 'next/app'
import QuickOpenProvider from '@components/QuickOpenProvider'
import { DefaultSeo } from 'next-seo'
import PageTransitionLoadingBar from '@components/PageTransitionLoadingBar'
import { buildSuggestionsList } from '@lib/quickOpen/suggestions'
import { ThemeProvider } from '@lib/theme'
import { DEFAULT_LOCALE, vinicius } from '@static-constants'
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
      <Head>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        />

        <link rel="icon" type="image/svg" href="/assets/Favicon.svg" />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />

        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="vinpac, vinicius pacheco, vinicius, pacheco, dev, developer, js, react"
        />
        <meta name="author" content="Vinicius Pacheco" />
      </Head>
      <DefaultSeo
        title="Vinicius Pacheco"
        description={metaDescription}
        openGraph={{
          type: 'website',
          description: metaDescription,
          locale: locale === 'en' ? 'en_US' : 'pt_BR',
          url: `https://${vinicius.site}`,
          images: [
            {
              url: 'https://pacheco.vercel.app/assets/Me.jpg',
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
            href: `https://${vinicius.site}/en`,
          },
        ]}
        twitter={{
          handle: vinicius.twitterHandle,
          site: vinicius.site,
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
