import React from 'react';
import { Card_Img, Card_Overlay } from './styled';
import { Titulo } from 'components';



export default function CardActive({ GameName, juego }) {
    return (

        <Card_Img GameImg={juego}>
            <Card_Overlay>
                <Titulo level={3}>{GameName}</Titulo>
            </Card_Overlay>
        </Card_Img>

    )

}



