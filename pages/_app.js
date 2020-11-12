import React from 'react';
import Head from 'next/head';
import { Layout } from 'containers';
import { GlobalStyles } from 'lib/GlobalStyle';
import { AuthProvider } from 'contexts/AuthContext';
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'
import { config } from "lib/firebase";


const fuego = new Fuego(config);


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Virtual Tournaments</title>
      </Head>
      <FuegoProvider fuego={fuego}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </FuegoProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
