import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
