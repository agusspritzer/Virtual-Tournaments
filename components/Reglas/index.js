import React from 'react';
import { Reglamento } from './styled';

{/* importo el div que creo en styled*/ }

{/* Este es el compoennte donde vos a poner el codigo delheader*/ }
import { Titulo } from 'components';

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/ }
export default function Reglas({ Numero, Texto }) {
    return (
        <Reglamento>
            <Titulo level={2}>{Numero}</Titulo>
            <p>{Texto}</p>
        </Reglamento>

    )
}