import React from 'react';
import {Button} from './styled';



export default function ButtonFilled({Mensaje,ButtonMode,ButtonSize}) {
  return(
    <Button modo={ButtonMode} size={ButtonSize} href="#">{Mensaje}</Button>
)
        
    }



