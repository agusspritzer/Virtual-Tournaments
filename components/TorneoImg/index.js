import React from 'react';

import { Titulo } from 'components';

import {
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



