import React from 'react';
import { InscriptosContainer, Inscriptos } from './styled';

{/* importo el div que creo en styled*/ }

{/* Este es el compoennte donde vos a poner el codigo delheader*/ }
import { Titulo } from 'components';

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/ }
export default function Participantes({ Registrados, TotalTorneo }) {
    return (
        <InscriptosContainer>
            <Inscriptos>
                <img src={`/assets/inscriptos.png`} />
                <Titulo level={4}>Inscriptos:</Titulo>
            </Inscriptos>
            <p>{Registrados} /<span> {TotalTorneo}</span></p>
        </InscriptosContainer>
    )
}