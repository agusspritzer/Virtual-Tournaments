import React from 'react';
import Link from 'next/link';

import { Titulo } from 'components';

import {
    Pe,
    ImgTorneoContainer,
    ImgTorneo,
    Codigo,
    ExtraInfo,
    Game,
    Available

} from './styled';


export default function TorneoImg({ idTorneo, nameTorneo, gameTorneo, disponible }) {
    return (
        <ImgTorneoContainer>
            <ImgTorneo>
                <Link href="/torneos">
                    <Pe>Volver</Pe>
                </Link>

                <Codigo>{idTorneo}</Codigo>
                <Titulo level={1}>{nameTorneo}</Titulo>
                <ExtraInfo>
                    <Game>{gameTorneo}</Game>
                    <Available>{disponible}</Available>
                </ExtraInfo>
            </ImgTorneo>
        </ImgTorneoContainer>
    )

}



