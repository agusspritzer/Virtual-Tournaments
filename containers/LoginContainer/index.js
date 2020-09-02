import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';


import {
    DataCont,
    FormLogin,
    IniciarSesion
} from './styled';

import { ContenedorMain, Titulo, DataBox, Button } from 'components';

export default function LoginContainer() {
    return (
        <>
            <ContenedorMain>

                <DataCont>
                    <Titulo level={2}>INICIO DE SESION</Titulo>
                    <FormLogin>
                        <DataBox
                            name="usuario"
                            boxname="USUARIO"
                            type="text"

                        />
                    </FormLogin>

                    <FormLogin>
                        <DataBox
                            name="password"
                            boxname="CONTRASEÑA"
                            type="password"
                        />
                    </FormLogin>

                    <IniciarSesion>
                        <Link href="/perfil" passHref >
                            <Button ancho="100%" mensaje="INICIAR SESION" />
                        </Link>

                        <Link href="/registro" passHref >
                            <p><a>Crea tu cuenta en Virtual Tournaments <span>GRATIS</span></a></p>
                        </Link>
                    </IniciarSesion>

                </DataCont>
            </ContenedorMain>
        </>
    );
}
