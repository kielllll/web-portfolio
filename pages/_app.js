import '../styles/globals.css'
import Layout from '../components/Layout'
import GlobalAppStateWrapper from '../components/GlobalAppStateWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalAppStateWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalAppStateWrapper>
  )
}

export default MyApp
