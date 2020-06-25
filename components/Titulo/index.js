import React from 'react';
import { H1, H2, H3, H4, H5 } from './styled';

export default function Titulo({ level, children }) {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;

    case 2:
      return <H2>{children}</H2>;

    case 3:
      return <H3>{children}</H3>;

    case 4:
      return <H4>{children}</H4>;

    case 5:
      return <H5>{children}</H5>;

    default:
      return <H3>{children}</H3>;
  }
}
