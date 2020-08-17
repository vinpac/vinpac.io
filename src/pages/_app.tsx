import moment from 'moment'
import '@reach/tooltip/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import '../css/tailwind.css'
import '../css/animations.css'
import '../css/notion.css'
import '../css/themes.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import QuickOpenProvider from 'components/QuickOpenProvider'
import { DefaultSeo } from 'next-seo'
import PageTransitionLoadingBar from 'components/PageTransitionLoadingBar'
import { buildSuggestionsList } from 'lib/quickOpen/suggestions'
import ThemeProvider from 'components/ThemeProvider'

moment.locale('pt-br')

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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

        <meta name="theme-color" content="#023373" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Vinicius"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://vinicius.app/',
          site_name: 'Vinicius',
        }}
        twitter={{
          handle: '@vinpac98',
          site: 'vinicius.app',
          cardType: 'summary_large_image',
        }}
      />

      <ThemeProvider>
        <PageTransitionLoadingBar />

        <QuickOpenProvider buildSuggestionsList={buildSuggestionsList}>
          <Component {...pageProps} />
        </QuickOpenProvider>
      </ThemeProvider>
    </>
  )
}

export default App
