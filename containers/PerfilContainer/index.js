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
    ContenedorPartidas,
    TituloPartidas,
} from './styled';



export default function AyudaContainer() {


    const [foto, setFoto] = useState();
    const [fotoCargada, setFotoCargada] = useState();
    const [fotoMiniatura, setMiniatura] = useState(
        "/assets/perfil.jpg"
    );
    const Router = useRouter();
    const { userAuth, userData, logout } = useAuthState();
    useEffect(() => {
        if (userData && userData.fotoperfil) {
            setMiniatura(userData.fotoperfil);
        }
    }, [userData]);

    const HandleInputChange = (file) => {
        const fileInstance = new File([file], file.name);
        setMiniatura(URL.createObjectURL(fileInstance));
        setFoto(fileInstance);
    };

    const HandleSubmitFile = async () => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(foto.name);
        const fotoURL = await fileRef
            .put(foto)
            .then(async (snapshoot) => {
                return await snapshoot.ref.getDownloadURL().then((url) => {
                    console.log("foto cargada", url);
                    setFotoCargada(url);
                    return url;
                });
            })
            .catch((error) => {
                console.log(error);
            });

        const dataUpdate = { fotoperfil: fotoURL };

        db.collection("usuarios").doc(userAuth.id).update(dataUpdate);
    };

    const HandleLogout = async () => {
        await logout();
        Router.push("/home");
    };

    return (
        <ContenedorMain>
            {!userData && userAuth ? (
                <Loading />
            ) : (
                    <div>
                        <PerfilSeccion>
                            <Jugador>
                                <figure>
                                    <img src={fotoCargada ? fotoCargada : fotoMiniatura} />  {/*assets/players/prueba.jpg*/}
                                </figure>
                                <PerfilDatos
                                    Nombre={userData && userData.username}
                                    NombreApellido={userData && userData.nombre}
                                    Ganados="11"
                                    Perdidos="7"
                                    Fecha="04-01-2020"
                                    Victoria="G">
                                </PerfilDatos>
                            </Jugador>

                            <Redes>
                                <p>Cambiar Imagen</p>
                                <input type="file" name="uploadfile" onChange={e => HandleInputChange(e.target.files[0])} />
                                <button onClick={() => HandleSubmitFile()}>Guardar Foto</button>
                                <IconosRedes>
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

                                    </li>
                                </ul>
                            </nav>
                        </Navegador>

                        <ContenedorPartidas>
                            <TituloPartidas>PROXIMA PARTIDA</TituloPartidas>

                        
                        <ProxPartida
                            Fase="4tos de final"
                            IdTorneo="17 de Julio"
                            TorneoName="MORTAL KO.MBAT WINTER TOURNAMENT"
                            Jugador1="Tú"
                            Jugador2="Tanorior08"
                            Resultado1=" "
                            Resultado2=" "
                            Game="Mortal Kombat"
                        >
                        </ProxPartida>

                        <CardTorneos
                            IdTorneo="#PP210"
                            TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                            GameName="Pummel Party"
                            Posicion="3er Puesto"
                            Jugador1="Tú"
                            Jugador2="k00ldan16"
                            Jugador3="Coquito"
                            Jugador4="bAsil0n"
                            Jugador5="Focdpo21"
                            Fase1="16avos de final"
                            Fase2="8vos de final"
                            Fase3="4tos de final"
                            Fase4="Semifinal"
                            Resultado1="3"
                            Resultado2="0"
                            Resultado3="2"
                            Resultado4="1"
                            Resultado5="4"
                            Resultado6="2"
                            Resultado7="1"
                            Resultado8="3"
                        >
                        </CardTorneos>
                        </ContenedorPartidas>
                    </div>
                )
            }
        </ContenedorMain >
    );
}
