import React from 'react';

import {
  QuoteContainer,
  Phrase,
  Author,
  Description,

} from './styled';

export default function Quote({Frase,Autor,Descripcion}) {
  return(
    <QuoteContainer>
          <Phrase>{Frase}</Phrase>
          <Author>{Autor}</Author>
          <Description>{Descripcion}</Description>
    </QuoteContainer>
)
        
    }



