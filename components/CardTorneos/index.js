import React from 'react';
import {
    InfoPrincipal,
    Resultado,
    JuegoContainer,
    Card,
    Jugador,
    InfoResultados,
    InfoFase,
} from './styled';
import { Titulo } from 'components';



export default function CardActive({ IdTorneo, TorneoName, GameName, Posicion, Fase, Jugador1, Jugador2, Resultado1, Resultado2 }) {
    return (

        <Card>
            <Titulo level={5}>{IdTorneo}</Titulo>

            <InfoPrincipal>
                <Titulo level={2}>{TorneoName}</Titulo>
                <JuegoContainer>
                    <Titulo level={3}><span>Juego: </span></Titulo>
                    <Titulo level={3}>{GameName}</Titulo>
                </JuegoContainer>

                <Resultado>
                    <Titulo level={3}><span>Resultado: </span></Titulo>
                    <Titulo level={3}>{Posicion}</Titulo>
                </Resultado>
            </InfoPrincipal>

            {/* Esta seccion de info resultados tiene que aparecer si se le hace click al componente*/}
            <InfoResultados>

                <InfoFase>
                    <Titulo level={4}>{Fase}</Titulo>
                    <Jugador><Titulo level={3}>{Jugador1}</Titulo><Titulo level={3}>{Resultado1}</Titulo></Jugador>
                    <Jugador><Titulo level={3}>{Jugador2}</Titulo><Titulo level={3}>{Resultado2}</Titulo></Jugador>
                </InfoFase>

                <InfoFase>
                    <Titulo level={4}>{Fase}</Titulo>
                    <Jugador><Titulo level={3}>{Jugador1}</Titulo><Titulo level={3}>{Resultado1}</Titulo></Jugador>
                    <Jugador><Titulo level={3}>{Jugador2}</Titulo><Titulo level={3}>{Resultado2}</Titulo></Jugador>
                </InfoFase>

                <InfoFase>
                    <Titulo level={4}>{Fase}</Titulo>
                    <Jugador><Titulo level={3}>{Jugador1}</Titulo><Titulo level={3}>{Resultado1}</Titulo></Jugador>
                    <Jugador><Titulo level={3}>{Jugador2}</Titulo><Titulo level={3}>{Resultado2}</Titulo></Jugador>
                </InfoFase>

                <InfoFase>
                    <Titulo level={4}>{Fase}</Titulo>
                    <Jugador><Titulo level={3}>{Jugador1}</Titulo><Titulo level={3}>{Resultado1}</Titulo></Jugador>
                    <Jugador><Titulo level={3}>{Jugador2}</Titulo><Titulo level={3}>{Resultado2}</Titulo></Jugador>
                </InfoFase>

            </InfoResultados>




        </Card>

    )

}



