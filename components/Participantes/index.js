import React from 'react';
import { Usuarios } from './styled';

{/* importo el div que creo en styled*/ }

{/* Este es el compoennte donde vos a poner el codigo delheader*/ }
import { Titulo } from 'components';

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/ }
export default function Participantes({ UserName }) {
    return (
        <Usuarios>
            <img src={`/assets/usuario.png`} />
            <Titulo level={5}>{UserName}</Titulo>
        </Usuarios>
    )
}