import React from 'react';

import {
    QuoteContainer,
    Phrase,


} from './styled';

export default function Quote({ Frase, User_Img }) {
    return (
        <QuoteContainer>
            <img src={`/assets/beneficios/${User_Img}.png`} />
            <Phrase>
                {Frase}
            </Phrase>
        </QuoteContainer>
    )
}



