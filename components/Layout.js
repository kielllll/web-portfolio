import Footer from './Footer'
import NavBar from './NavBar'
import Head from 'next/head'
import Container from '@material-ui/core/Container'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
        ></link>
        <meta name="description" content="Zeke Portfolio" />
      </Head>
      <Container maxWidth="md">
        <NavBar />
        {children}
        <Footer />
      </Container>
    </div>
  )
}

export default Layout
