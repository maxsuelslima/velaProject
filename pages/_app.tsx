import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import Header from '../src/components/Header'
import VelaContext from '../src/Context/vela2context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VelaContext.Provider
    value={{
      tab:1,
      bike:{
          quadro:1,
          cor:4,
          tam:2
      },
      extras:[],
      velaMais:false
  }}
    >
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
    </VelaContext.Provider>
  )
}

export default MyApp
