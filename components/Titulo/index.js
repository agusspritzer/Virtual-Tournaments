import React from 'react';
import {H1, H2, H3, H4, H5} from './styled';

export default function Titulo ({level}) {
 
              switch(level) {
            case 0:
              return(
                <H1>Esto es H1</H1>
                 ) 

            case 1:
              return(
                <H2>Esto es H2</H2>
              )

            
            case 3:
              return(
                <H3>Esto es H3</H3>
                 )


            case 4:
              return(
                <H4>Esto es H4</H4>
                 ) 


            case 5:
              return(
                <H5>Esto es H5</H5>
              )
            
            default:
              return(
              <H3>Titulo Default</H3>
               )

          }
        }

        
