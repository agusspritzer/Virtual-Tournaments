import React from 'react';
import Head from 'next/head';
import { Layout } from 'containers';
import { GlobalStyles } from 'lib/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Virtual Tournaments</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
