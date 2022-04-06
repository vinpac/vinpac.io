import '@reach/tooltip/styles.css'
// Blog is currently disabled
// import 'prismjs/themes/prism-tomorrow.css'
import '../css/tailwind.css'
import '../css/animations.css'
import '../css/notion.css'

import { AppProps } from 'next/app'
import PageTransitionLoadingBar from '@components/PageTransitionLoadingBar'
import { ThemeProvider } from '@lib/theme'
import SeoProvider from '@components/providers/seo'
import I18nProvider from '@components/providers/i18n'
import QuickOpenProvider from '@components/QuickOpenProvider'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <SeoProvider>
          <PageTransitionLoadingBar />
          <QuickOpenProvider>
            <Component {...pageProps} />
          </QuickOpenProvider>
        </SeoProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}

export default App
