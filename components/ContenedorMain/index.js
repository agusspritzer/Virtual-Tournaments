import React from 'react';
import { Main } from './styled';



export default function ContenedorMain({ children, sintop }) {
  return (
    <Main modo={sintop}>{children}</Main>
  )
}



