import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';


import {
    Pe,
    DataCont,
    TorneoContainer,
    PrecioContainer,
} from './styled';

import { ContenedorMain, Titulo, MetodoPago } from 'components';

export default function LoginContainer() {
    return (
        <>
            <ContenedorMain>
                <DataCont>
                    <Link href="/torneos">
                        <Pe><p>Volver</p></Pe>
                    </Link>

                    <Titulo level={1}>A UN PASO DE SER UN ESPORT GAMER</Titulo>

                    <TorneoContainer>
                        <p>Torneo</p>
                        <Titulo level={2}>TORNEO CSGO149</Titulo>
                        <Titulo level={4}>Counter Strike: GO</Titulo>
                    </TorneoContainer>


                    <PrecioContainer>
                        <p>Costo de inscripcion</p>
                        <Titulo level={2}>$300</Titulo>
                    </PrecioContainer>

                    <MetodoPago></MetodoPago>
                </DataCont>
            </ContenedorMain>
        </>
    );
}
