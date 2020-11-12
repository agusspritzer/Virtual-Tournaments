import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuthState, useAuthDispatch, setUser } from "contexts/AuthContext";
import { Titulo, ContenedorMain, ProxPartida, CardTorneos, PerfilDatos, Loading } from 'components';
import { useRouter } from 'next/router';
import { storage, db } from 'lib/firebase';

import {
    Navegador,
    PerfilSeccion,
    Jugador,
    Redes,
    Config,
    IconosRedes,
} from './styled';



export default function AyudaContainer() {


    const [foto, setfoto] = useState();
    const [fotoCargada, setFotoCargada] = useState();
    const [fotoMiniatura, setMiniatura] = useState();

    const Router = useRouter();

    const HandleLogout = async () => {
        await logout();
        Router.push("/");
    };

    const HandleInputChange = (file) => {
        const fileInstance = new File([file], file.name);
        setMiniatura(URL.createObjectURL(fileInstance));
        setfoto(fileInstance);
    };

    const HandleSubmitFile = async () => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(foto.name)
        const fotoURL = await fileRef.put(foto)
            .then(async (snapshot) => {
                //console.log("Foto Cargada", snapshot);
                return await snapshot.ref.getDownloadURL().then((url) => {
                    console.log("Foto Cargada", url);
                    setFotoCargada(url);
                    return url;
                })
            })
            .catch((error) => {
                console.log(error);
            });

        const dataUpdate = { fotoperfil: url };
        db.collection("usuarios").doc(userAuth.id).update(dataUpdate);
    };




    const { userAuth, userData, logout } = useAuthState();
    useEffect(() => {
        if (userData && userData.fotoperfil) {
            setMiniatura(userData.fotoperfil);
        }
    }, [userData]);



    return (
        <ContenedorMain>
            {!userData && userAuth ? (
                <Loading />
            ) : (
                    <div>
                        <PerfilSeccion>
                            <Jugador>
                                <figure>
                                    <img src={fotoCargada ? fotoCargada : fotoMiniatura} /> {/*assets/players/prueba.jpg*/}
                                </figure>
                                <PerfilDatos
                                    Nombre={userData && userData.nombre}
                                    NombreApellido="Roy Stevenson"
                                    Ganados="21"
                                    Perdidos="7"
                                    Fecha="04-01-2020"
                                    Victoria="G">
                                </PerfilDatos>
                            </Jugador>

                            <Redes>
                                <p>Redes sociales</p>
                                <IconosRedes>
                                    <img src={`/assets/iconosRedes/steam.png`} />
                                    <Link href="/api/logout" passHref >
                                        <img src={`/assets/iconosRedes/twitch.png`} />
                                    </Link>
                                    <img src={`/assets/iconosRedes/twitter.png`} />
                                    <img src={`/assets/iconosRedes/youtube.png`} />
                                </IconosRedes>
                            </Redes>
                        </PerfilSeccion>


                        <Navegador>
                            <nav>
                                <ul>
                                    <li>
                                        <a>MIS TORNEOS</a>
                                        <a>PARTIDAS</a>
                                        <Config>
                                            <a onClick={() => HandleLogout()} ><span>CERRAR SESION</span></a>
                                        </Config>
                                        <input type="file" onChange={e => HandleInputChange(e.target.files[0])}></input>
                                    </li>
                                </ul>
                            </nav>
                        </Navegador>
                        <button onClick={() => HandleSubmitFile()}>Guardar Foto</button>

                        <Titulo level={0}>PROXIMA PARTIDA</Titulo>
                        <ProxPartida
                            Fase="4tos de final"
                            IdTorneo="#PP210"
                            TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                            Jugador1="Tú"
                            Jugador2="Tanorior08"
                            Resultado1="1"
                            Resultado2="2"
                            Game="Pummel Party"
                            ProxFecha="13/07"
                            Horario="16:00hs"
                        >
                        </ProxPartida>

                        <CardTorneos
                            IdTorneo="#PP210"
                            TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                            GameName="Pummel Party"
                            Posicion="3er Puesto"
                            Jugador1="Tú"
                            Jugador2="k00ldan16"
                            Resultado1="3"
                            Resultado2="0"
                            Fase="16avos de final"

                        >
                        </CardTorneos>
                    </div>
                )
            }
        </ContenedorMain >
    );
}
