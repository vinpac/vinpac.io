import '@reach/tooltip/styles.css'
// Blog is currently disabled
// import 'prismjs/themes/prism-tomorrow.css'
// import '../css/notion.css'
import '../css/tailwind.css'
import '../css/animations.css'

import { AppProps } from 'next/app'
import { PageTransitionLoadingBar } from '@components/transition'
import { ThemeProvider } from '@components/theme'
import { SeoProvider, I18nProvider } from '@components/core'
import { CommandPaletteProvider } from '@components/commandPalette'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <SeoProvider>
          <PageTransitionLoadingBar />
          <CommandPaletteProvider>
            <Component {...pageProps} />
          </CommandPaletteProvider>
        </SeoProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}

export default App
