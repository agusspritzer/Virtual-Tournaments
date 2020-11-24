import React from 'react';
import Link from 'next/link';
import { Titulo } from 'components';
import { ContenedorMain } from 'components';
import { FullWidthSection } from 'components';

import {
    Reel,
    Align,
    Disclaimer,
    Texto
} from './styled';


export default function DisclaimerContainer() {
    return <>
        <FullWidthSection>
            <Reel>
                <Align>
                    <figure>
                        <img src="/assets/alternative.png" />
                    </figure>
                    <Titulo level={1}>¡ATENCIÓN GAMER!</Titulo>
                    <Disclaimer>
                        <img src="/assets/disclaimer2.png" />
                        <p>POR FAVOR, LEER ANTES DE INGRESAR AL SITIO</p>
                    </Disclaimer>

                    <Texto>
                        El siguiente sitio en el que estás a punto de ingresar ha sido desarrollado y diseñado con el motivo de crear un proyecto universitario. Todo el contenido dentro del mismo es artificial, por lo que recomendamos que no des información personal ni colocar la tarjeta de crédito en algunas de las funcionalidades del sitio.
                </Texto>

                    <Link href="/home">
                        <a>
                            ENTIENDO, CONTINUAR
                    </a>
                    </Link>
                </Align>
            </Reel>
        </FullWidthSection>
    </>;
}
