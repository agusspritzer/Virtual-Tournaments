import React from 'react';
import {PreguntaContainer} from './styled';
import {Titulo} from 'components';


export default function Faq({Pregunta,Respuesta}) {
  return(
        <PreguntaContainer>
            <Titulo level={3}>{Pregunta}</Titulo>
            <p>{Respuesta}</p>
        </PreguntaContainer>
)
        
    }



