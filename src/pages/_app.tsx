import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"
// _app é como o container da aplicação

import logoImg from "../assets/logo.svg"

import { Container, Header } from "../styles/pages/app"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App