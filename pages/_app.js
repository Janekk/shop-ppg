import React from "react";
import Head from "next/head";

import { StateProvider } from "../context/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Head>
        <title>ShopG</title>
        <meta property="og:site_name" content="ShopG" key="site_name" />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
