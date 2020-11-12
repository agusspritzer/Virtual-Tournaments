import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { auth } from "lib/firebase";
import { setUserCookie, removeUserCookie } from 'lib/userCookies';
import { mapUserData } from "lib/mapUserData";


import {
    DataCont,
    FormLogin,
    IniciarSesion
} from './styled';

import { ContenedorMain, Titulo, DataBox, Button } from 'components';
import { getUserFromCookie } from '../../lib/userCookies';
import { useRouter } from 'next/router';


export default function LoginContainer() {

    const router = useRouter();
    //use ste es uan funcion que devuelve un array, que tiene 2 posiciones, el primer es el valor del estado y la segunda es una ufncon que setea este estado
    //aca ya se inicializa con valores nulas
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });


    //en registro haria la funcion que paso gonza por slack despues del npm
    //esta funcion await axios.post('/api/auth/register', {email: 'bla bla' , password: 'bla bla'});
    //dentro de las llaves le paso todas las propeidades de registro


    const handleChange = (key, value) => {
        setFormValue({
            ...formValue, [key]: value,
        })
    }


    //en registro, login se va a llamar signup, y pegamos la funcion de axios
    const login = ({ email, password }) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                router.push("/perfil");
            })
            .catch(error => console.log(error));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hola')
        login({ email: formValue.email, password: formValue.password });
    };


    //en la parte de register esta funcion no va
    const onAuthStateChange = () => {
        return auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userData = mapUserData(user);
                setUserCookie(userData);
                //console.log(getUserFromCookie());
            } else {
                removeUserCookie();
            }
        });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChange();
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <ContenedorMain>

                <DataCont onSubmit={handleSubmit}>
                    <Titulo level={2}>INICIO DE SESION</Titulo>
                    <FormLogin>
                        <DataBox
                            name="email"
                            boxname="EMAIL"
                            type="text"
                            onChange={(e) => handleChange("email", e.target.value)}
                            value={formValue.email}
                        />
                    </FormLogin>

                    <FormLogin>
                        <DataBox
                            name="password"
                            boxname="CONTRASEÑA"
                            type="password"
                            onChange={(e) => handleChange("password", e.target.value)}
                            value={formValue.password}
                        />
                    </FormLogin>

                    <IniciarSesion>

                        <Button ancho="100%" mensaje="INICIAR SESION" />


                        <Link href="/registro" passHref >
                            <p><a>Crea tu cuenta en Virtual Tournaments <span>GRATIS</span></a></p>
                        </Link>
                    </IniciarSesion>

                </DataCont>
            </ContenedorMain>
        </>
    );
}
