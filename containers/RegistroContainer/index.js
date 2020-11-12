import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

import axios from "axios";



import {
    DataContainer,
    FormRow,
    CrearCuenta
} from './styled';

import { ContenedorMain, Titulo, DataBox, Button } from 'components';

export default function RegistroContainer() {

    const router = useRouter();


    const [formValue, setFormValue] = useState({
        nombre: "",
        username: "",
        steam: "",
        email: "",
        password: "",
    });


    /* Le asigna a los estados lo que hay en cada input */
    const handleChange = (key, value) => {
        setFormValue({
            ...formValue,
            [key]: value,
        });
    };


    /* Registra los datos en la base segun lo que hay en los estados*/
    const register = async ({ nombre,
        username,
        steam,
        email,
        password }) => {
        await axios
            .post("/api/auth/register", {
                nombre,
                username,
                steam,
                email,
                password,
            })
            .then(() => {
                // router.push cambia el Location del browser a lo que le indiquemos
                router.push("/login");
            })
            .catch((e) => {
                // Si no funciona el registro tiramos un cartelito. Hay que hacerlo mas prolijo.
                console.log(e);
                alert("HEY ACA PASO ALGO");
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        /* Inicia la funcion register pasandole los datos de los inputs */
        register({
            nombre: formValue.nombre,
            username: formValue.username,
            steam: formValue.steam,
            email: formValue.email,
            password: formValue.password,
        });
        return false;
    };



    return (
        <>
            <ContenedorMain>

                <DataContainer onSubmit={(e) => handleSubmit(e)}>
                    <Titulo level={2}>REGISTRO</Titulo>
                    <FormRow>
                        <DataBox
                            name="nombre"
                            boxname="NOMBRE"
                            type="text"
                            onChange={(e) => handleChange("nombre", e.target.value)}
                            value={formValue.nombre}

                        />
                        <DataBox
                            name="username"
                            boxname="USUARIO"
                            type="text"
                            onChange={(e) => handleChange("username", e.target.value)}
                            value={formValue.username}

                        />
                    </FormRow>

                    <FormRow>
                        <DataBox
                            name="email"
                            boxname="E-MAIL"
                            type="text"
                            onChange={(e) => handleChange("email", e.target.value)}
                            value={formValue.email}
                        />
                    </FormRow>

                    <FormRow>
                        <DataBox
                            name="password"
                            boxname="CONTRASEÑA"
                            type="password"
                            onChange={(e) => handleChange("password", e.target.value)}
                            value={formValue.password}
                        />
                    </FormRow>

                    <FormRow>
                        <DataBox
                            name="steam"
                            boxname="CUENTA DE STEAM"
                            type="text"
                            onChange={(e) => handleChange("steam", e.target.value)}
                            value={formValue.steam}
                        />
                    </FormRow>

                    <CrearCuenta>
                        <Button type="submit" ancho="100%" mensaje="CREAR CUENTA" />

                        <Link href="/login" passHref >
                            <p><a>¿Ya tenés cuenta? <span>Inicia sesion</span></a></p>
                        </Link>
                    </CrearCuenta>

                </DataContainer>
            </ContenedorMain>
        </>
    );
}
