import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          property="og:url"
          content={process.env.REACT_APP_PRODUCTION_URL + "/"}
        />
        <meta
          property="twitter:url"
          content={process.env.REACT_APP_PRODUCTION_URL + "/"}
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Women Help Squad" />
        <meta name="og:description" content="Powered by Orcalo Limited" />
        <meta
          property="og:image"
          content={"https://womenhelpsquad.co.uk/logo.png"}
        />
        <meta property="twitter:title" content="Women Help Squad" />
        <meta name="twitter:description" content="Powered by Orcalo Limited" />
        <meta
          property="twitter:image"
          content={"https://womenhelpsquad.co.uk/logo.png"}
        />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
