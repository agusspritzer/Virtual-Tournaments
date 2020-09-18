import React from 'react';
import Link from 'next/link';

import { Titulo, ContenedorMain, ProxPartida, CardTorneos, PerfilDatos } from 'components';

import {
    Navegador,
    PerfilSeccion,
    Jugador,
    Redes,
    Config,
    IconosRedes,
} from './styled';


/*            <PerfilSeccion>
                <Jugador>
                    <img></img>

                    <DatosPerfil>
                        <h1></h1>
                        <Estadisticas>
                            Va a tener width 45 y space between y flex wrap
                        </Estadisticas>
                    </DatosPerfil>

                </Jugador>
                
                <Redes>
                </Redes>
            
                </PerfilSeccion>
*/

export default function AyudaContainer() {
    return <>
        <ContenedorMain>
            <PerfilSeccion>
                <Jugador>
                    <figure>
                        <img src={`/assets/players/prueba.jpg`} />
                    </figure>
                    <PerfilDatos
                        Nombre="ROY522"
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
                        <img src={`/assets/iconosRedes/twitch.png`} />
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
                                <a><img src={`/assets/config.png`} />CONFIGURACION</a>
                            </Config>
                        </li>
                    </ul>
                </nav>
            </Navegador>

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


        </ContenedorMain>


    </>;
}
