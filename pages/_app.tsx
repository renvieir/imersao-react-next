import React from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import db from '../db.json'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
