import GlobalStyle from '../styles/globalStyles'
import { Analytics } from '@vercel/analytics/react'
import './_app.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
