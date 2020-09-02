import React from 'react';

import {
    GanadoresContainer,
    Usuario_Img,
    Usuario,
    Dinero,
    Torneo,
} from './styled';

export default function Ganadores({ User_Img, User, Money, Tournament }) {
    return (
        <GanadoresContainer>
            <Usuario_Img>
                <figure>
                    <img src={`/assets/usuarios/${User_Img}.jpg`} />
                </figure>
            </Usuario_Img>
            <Usuario><span>@</span>{User}</Usuario>
            <Dinero><span>$ </span>{Money}</Dinero>
            <Torneo>{Tournament}</Torneo>
        </GanadoresContainer>
    )

}



