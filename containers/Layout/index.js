import React from 'react';
import { Header, Footer } from 'components';

import { ContenedorMain } from './styled';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ContenedorMain>{children}</ContenedorMain>
      <Footer />
    </>
  );
}
