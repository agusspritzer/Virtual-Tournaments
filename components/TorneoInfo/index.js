import React from 'react';
import Link from 'next/link';

import { Titulo, Ext_Link, } from 'components';

import {
    ContenedorMayor,
    InfoTorneoContainer,
    InfoTorneo,
    Prizes,
} from './styled';


export default function TorneoInfo({ idTorneo, nameTorneo, gameTorneo, disponible, dataTorneo }) {
    return (
        <ContenedorMayor>

            <InfoTorneoContainer>
                <InfoTorneo>
                    <ul>
                        <li>
                            <Titulo level={3}>FORMATO</Titulo>
                            <p>{dataTorneo[0].modality}</p>
                        </li>
                        <li>
                            <Titulo level={3}>COSTO DE INSCRIPCION</Titulo>
                            <p>{dataTorneo[0].cost}</p>
                        </li>

                        <li>
                            <Titulo level={3}>PLAZO DE INSCRIPCION</Titulo>
                            <p>{dataTorneo[0].inscriptionDay}</p>
                        </li>

                    </ul>
                </InfoTorneo>
                <Prizes>
                    <div>
                        <img src="/assets/oro.png" />
                        <Titulo level={2}>1ER PUESTO</Titulo>
                    </div>
                    <p>Todavia nada :O</p>

                    <div>
                        <img src="/assets/plata.png" />
                        <Titulo level={3}>2DO PUESTO</Titulo>
                    </div>
                    <p>Todavia nada :O</p>
                </Prizes>
            </InfoTorneoContainer>

            <Link href="/pago" passHref >
                <Ext_Link Mensaje="INSCRIBIRME"></Ext_Link>
            </Link>

        </ContenedorMayor>

    )

}



