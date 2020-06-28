import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';


import {
    DataContainer,
    FormRow,
} from './styled';

import { ContenedorMain, Titulo, DataBox, Button } from 'components';

export default function RegistroContainer() {
    return (
        <>
            <ContenedorMain>

                <DataContainer>
                    <Titulo level={2}>REGISTRO</Titulo>
                    <FormRow>
                        <DataBox
                            name="nombre"
                            boxname="NOMBRE"
                            type="text"

                        />
                        <DataBox
                            name="usuario"
                            boxname="USUARIO"
                            type="text"

                        />
                    </FormRow>

                    <FormRow>
                        <DataBox
                            name="email"
                            boxname="E-MAIL"
                            type="text"
                        />
                    </FormRow>

                    <FormRow>
                        <DataBox
                            name="password"
                            boxname="CONTRASEÑA"
                            type="password"
                        />
                    </FormRow>

                    <FormRow>
                        <DataBox
                            name="steam"
                            boxname="CUENTA DE STEAM"
                            type="text"
                        />
                    </FormRow>

                    <Link href="/index" passHref >
                        <Button ancho="100%" mensaje="CREAR CUENTA" />
                    </Link>

                    <Link href="/login" passHref >
                        <p><a>¿Ya tenés cuenta? <span>Inicia sesion</span></a></p>
                    </Link>


                </DataContainer>
            </ContenedorMain>
        </>
    );
}
