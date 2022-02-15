import type { AppProps } from 'next/app'
import '../src/assets/css/styles.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
