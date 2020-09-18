import React from 'react';
import {
    Card,
    AsideInfo,
    Jugador,
    MatchInfo,
    Etiqueta,
} from './styled';
import { Titulo } from 'components';



export default function CardActive({ Fase, IdTorneo, TorneoName, Jugador1, Jugador2, Resultado1, Resultado2, Game, ProxFecha, Horario }) {
    return (

        <Card>
            <AsideInfo>
                <Titulo level={5}>{Fase}</Titulo>
                <p>{IdTorneo}</p>
            </AsideInfo>
            <Titulo level={2}>{TorneoName}</Titulo>
            <Jugador><Titulo level={3}>{Jugador1}</Titulo><Titulo level={3}>{Resultado1}</Titulo></Jugador>
            <Jugador><Titulo level={3}>{Jugador2}</Titulo><Titulo level={3}>{Resultado2}</Titulo></Jugador>

            {/*<MatchInfo>
                <Etiqueta>
                    <img src="../assets/card_icons/blanco/gamepad.png" />
                    <p>{Game}</p>
                </Etiqueta>

                <Etiqueta>
                    <img src="../assets/card_icons/blanco/horario.png" />
                    <p>{ProxFecha}</p>
                </Etiqueta>


                <Etiqueta>
                    <img src="../assets/card_icons/blanco/fecha.png" />
                    <p>{Horario}</p>
                </Etiqueta>
            </MatchInfo> 
*/}


        </Card>

    )

}



