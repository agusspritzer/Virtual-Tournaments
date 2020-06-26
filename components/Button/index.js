import React from 'react';
import {ButtonType} from './styled';



export default function Button({Mensaje,ButtonMode}) {
  return(
    <ButtonType modo={ButtonMode}  href="#">{Mensaje}</ButtonType>
)
        
    }



