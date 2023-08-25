import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'
import React from 'react'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        {/* server side rendering */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        {/* getCssText css é construído mesmo com o js desabilitado 
        Vantagem: lado do servidor é mais rápido para montar a página*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}