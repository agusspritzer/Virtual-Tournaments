import React from 'react';
import Link from 'next/link';

import { Titulo, Ext_Link, } from 'components';

import {
    ContenedorMayor,
    InfoTorneoContainer,
    InfoTorneo,
    Prizes,
} from './styled';


export default function TorneoInfo({ idTorneo, nameTorneo, gameTorneo, disponible }) {
    return (
        <ContenedorMayor>

            <InfoTorneoContainer>
                <InfoTorneo>
                    <ul>
                        <li>
                            <Titulo level={3}>INFORMACION</Titulo>
                            <p>Modalidad <span> PROPS </span></p>
                            <p>Formato de torneo <span> PROPS </span></p>
                        </li>
                        <li>
                            <Titulo level={3}>COSTO DE INSCRIPCION</Titulo>
                            <p>PROPS $ 300</p>
                        </li>

                        <li>
                            <Titulo level={3}>PLAZO DE INSCRIPCION</Titulo>
                            <p>PROPS Del 1-06 al 9-06</p>
                        </li>

                    </ul>
                </InfoTorneo>
                <Prizes>
                    <div>
                        <img src="/assets/oro.png" />
                        <Titulo level={2}>1ER PUESTO</Titulo>
                    </div>
                    <p>Del 1-06 al 9-06</p>

                    <div>
                        <img src="/assets/plata.png" />
                        <Titulo level={3}>2DO PUESTO</Titulo>
                    </div>
                    <p>Del 1-06 al 9-06</p>
                </Prizes>
            </InfoTorneoContainer>

            <Link href="/registro" passHref >
                <Ext_Link Mensaje="INSCRIBIRME"></Ext_Link>
            </Link>

        </ContenedorMayor>

    )

}



