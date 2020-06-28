import React from 'react';
import {Box} from './styled';

{/* importo el div que creo en styled*/}

{/* Este es el compoennte donde vos a poner el codigo delheader*/}

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/}
export default function DataBox ({boxname,...props}){
        return (
            <Box>
            <label for={props.name}> {boxname} </label>
            <input autoComplete="off" {...props}/>
            </Box>

        )
    }
