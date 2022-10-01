import GlobalStyle from "../styles/globalStyles"
import './_app.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
