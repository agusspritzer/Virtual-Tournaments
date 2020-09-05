import React from 'react';

import { Titulo } from 'components';
import { DatosContainer, Datos, Estadistica } from './styled';

export default function PerfilDatos({ Nombre, NombreApellido, Ganados, Perdidos, Fecha, Victoria }) {
    return (
        <DatosContainer>
            <Titulo level={2}>{Nombre}</Titulo>
            <Datos>
                <Estadistica>
                    <p>Nombre</p>
                    <Titulo level={4}>{NombreApellido}</Titulo>
                </Estadistica>

                <Estadistica>
                    <p>Record</p>
                    <Titulo level={4}><span>{Ganados}</span> - <strong>{Perdidos}</strong></Titulo>
                </Estadistica>

                <Estadistica>
                    <p>Miembro desde</p>
                    <Titulo level={4}>{Fecha}</Titulo>
                </Estadistica>

                <Estadistica>
                    <p>Racha</p>
                    <Titulo level={4}><span>{Victoria}</span></Titulo>
                </Estadistica>
            </Datos>
        </DatosContainer>
    )

}



