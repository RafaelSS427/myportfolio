// import { useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'

// import { darkTheme, lightTheme } from '@/themes'
// import { Theme, useBookStore } from '@/store'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  // const { theme, updateTheme } = useBookStore(store => store)

  // useEffect(() => {
  //   const selectedTheme = localStorage.getItem('theme')

  //   if(!!selectedTheme){ // if a selected theme exists
  //     updateTheme(selectedTheme as Theme)
  //   } else {
  //     const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     updateTheme(isDark ? 'dark' : 'light')
  //   }

  // }, [updateTheme])

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default appWithTranslation(App)