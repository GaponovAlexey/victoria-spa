import '../styles/globals.css'
import '../styles/reset.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../components/Redux/store'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
