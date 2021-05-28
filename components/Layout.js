import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
