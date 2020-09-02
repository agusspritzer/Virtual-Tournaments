import React from 'react';
import Link from 'next/link';

import {
    SeccionAyuda,
    Navegador,
} from './styled';

import { Titulo, ContenedorMain, ProxPartida, CardTorneos } from 'components';



export default function AyudaContainer() {
    return <>
        <ContenedorMain>
            <SeccionAyuda>
                <Titulo level={0}>PAGINA PERFIL</Titulo>
                <p>Pagina Perfil</p>
            </SeccionAyuda>

            <Navegador>
                <nav>
                    <ul>
                        <li>
                            <a>MIS TORNEOS</a>
                            <a>PARTIDAS</a>
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
