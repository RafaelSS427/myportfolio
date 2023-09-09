import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '@/styles/globals.css'

config.autoAddCss = false

i18n.use(LanguageDetector).init({
  detection: {
    order: ['path']
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default appWithTranslation(App)