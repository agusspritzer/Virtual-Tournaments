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

export default function CardActive({
  IdTorneo,
  TorneoName,
  GameName,
  Posicion,
  Fase1,
  Fase2,
  Fase3,
  Fase4,
  Jugador1,
  Jugador2,
  Jugador3,
  Jugador4,
  Jugador5,
  Resultado1,
  Resultado2,
  Resultado3,
  Resultado4,
  Resultado5,
  Resultado6,
  Resultado7,
  Resultado8,
}) {
  return (
    <Card>
      <Titulo level={5}>{IdTorneo}</Titulo>

      <InfoPrincipal>
        <Titulo level={2}>{TorneoName}</Titulo>
        <JuegoContainer>
          <Titulo level={3}>
            <span>Juego: </span>
          </Titulo>
          <Titulo level={3}>{GameName}</Titulo>
        </JuegoContainer>

        <Resultado>
          <Titulo level={3}>
            <span>Resultado: </span>
          </Titulo>
          <Titulo level={3}>{Posicion}</Titulo>
        </Resultado>
      </InfoPrincipal>

      {/* Esta seccion de info resultados tiene que aparecer si se le hace click al componente*/}
      <InfoResultados>
        <InfoFase>
          <Titulo level={4}>{Fase1}</Titulo>
          <Jugador>
            <Titulo level={3}>{Jugador1}</Titulo>
            <Titulo level={3}>{Resultado1}</Titulo>
          </Jugador>
          <Jugador>
            <Titulo level={3}>{Jugador2}</Titulo>
            <Titulo level={3}>{Resultado2}</Titulo>
          </Jugador>
        </InfoFase>

        <InfoFase>
          <Titulo level={4}>{Fase2}</Titulo>
          <Jugador>
            <Titulo level={3}>{Jugador1}</Titulo>
            <Titulo level={3}>{Resultado3}</Titulo>
          </Jugador>
          <Jugador>
            <Titulo level={3}>{Jugador3}</Titulo>
            <Titulo level={3}>{Resultado4}</Titulo>
          </Jugador>
        </InfoFase>

        <InfoFase>
          <Titulo level={4}>{Fase3}</Titulo>
          <Jugador>
            <Titulo level={3}>{Jugador1}</Titulo>
            <Titulo level={3}>{Resultado5}</Titulo>
          </Jugador>
          <Jugador>
            <Titulo level={3}>{Jugador4}</Titulo>
            <Titulo level={3}>{Resultado6}</Titulo>
          </Jugador>
        </InfoFase>

        <InfoFase>
          <Titulo level={4}>{Fase4}</Titulo>
          <Jugador>
            <Titulo level={3}>{Jugador1}</Titulo>
            <Titulo level={3}>{Resultado7}</Titulo>
          </Jugador>
          <Jugador>
            <Titulo level={3}>{Jugador5}</Titulo>
            <Titulo level={3}>{Resultado8}</Titulo>
          </Jugador>
        </InfoFase>
      </InfoResultados>
    </Card>
  );
}
