import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';

import {
    Navegador,
    ParticipantesContainer,
    ReglasContainer,
    UsuariosContainer,
} from './styled';



import { ContenedorMain, TorneoImg, FullWidthSection, TorneoInfo, Inscriptos, Participantes, Reglas } from 'components';


export default function InfoTorneoContainer() {
    return (
        <>
            <FullWidthSection>
                <TorneoImg
                    idTorneo="#PP210"
                    nameTorneo="TORNEO DE_TERRORIST"
                    gameTorneo="Counter Strike: GO"
                    disponible="INSCRIPCION DISPONIBLE"
                />
            </FullWidthSection>

            <ContenedorMain sintop="0">
                <TorneoInfo />

                <Navegador>
                    <nav>
                        <ul>
                            <li>
                                <a>RESULTADOS</a>
                                <a>PARTICIPANTES</a>
                                <a>REGLAS</a>
                            </li>
                        </ul>
                    </nav>
                </Navegador>

                <ParticipantesContainer>
                    <Inscriptos
                        Registrados="12"
                        TotalTorneo="32">
                    </Inscriptos>

                    <UsuariosContainer>
                        <Participantes UserName="Rodolfo"></Participantes>
                        <Participantes UserName="Rodolfo"></Participantes>
                        <Participantes UserName="Rodolfo"></Participantes>
                        <Participantes UserName="Rodolfo"></Participantes>
                        <Participantes UserName="Rodolfo"></Participantes>

                    </UsuariosContainer>
                </ParticipantesContainer>


                <ReglasContainer>
                    <Reglas
                        Numero="1."
                        Texto="Al ser un torneo tematico con un mapa especifico, solo se podrán utiilzar ciertos personajes. Los que podrán ser elegidos serán:
                    Sub Zero, Goro, John Cage, Scorpion, Kun Lao, Raiden y Shao Khan"
                    ></Reglas>
                    <Reglas
                        Numero="2."
                        Texto="Las partidas tendrán como limite 2 minutos, saliendo vencedor al mejor de 5 peleas. Cualquier jugador que 
                        ponga en pausa el combate, automáticamente pierde el duelo."
                    ></Reglas>
                    <Reglas
                        Numero="3."
                        Texto="Se espera que los participantes demuestren un espíritu competitivo sano y respeten a sus rivales asi como también a Virtual Tournaments, organizadores del torneo staff del evento"
                    ></Reglas>
                </ReglasContainer>

            </ContenedorMain>



        </>
    );
}
