import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Titulo } from 'components';

import {
    Pe,
    ImgTorneo,
    Codigo,
    ExtraInfo,
    Game,
    Available,
    ImgContainer,
    Gradiente,

} from './styled';



export default function TorneoImg({ idTorneo, nameTorneo, gameTorneo, disponible, fondoImg }) {


    return (


        <ImgContainer className="fondo" style={{ backgroundImage: `url(${fondoImg})`, backgroundPosition:'center' }}>

            <ImgTorneo>
                <Gradiente />
                <Codigo>{idTorneo}</Codigo>
                <Titulo level={1}>{nameTorneo}</Titulo>
                <ExtraInfo>
                    <Game>{gameTorneo}</Game>
                    <Available>{disponible}</Available>
                </ExtraInfo>
            </ImgTorneo>
        </ImgContainer >
    )

}



