import React from 'react';

import {
  Itinerario,
  Mes,
  CardsContainer,
} from './styled';


import { Titulo } from 'components';
import { CardCalendario } from 'components';
import { ContenedorMain } from 'components';

export default function CalendarioContainer() {
  return <>
    <ContenedorMain>

      <Titulo level={3}> CALENDARIO DE TORNEOS</Titulo>

      <Itinerario>
        <Mes> <Titulo level={3} >ABRIL</Titulo> </Mes>
        <CardsContainer>

          <CardCalendario
            Numero="10"
            Dia="Viernes"
            Codigo="#PP210"
            Nombre="TORNEO DE VERANO SCORPION"
            Fase="8vos de Final"
            Horario="16:30 - 18:30">
          </CardCalendario>

          <CardCalendario
            Numero="22"
            Dia="Sabado"
            Codigo="#MK201"
            Nombre="TORNEO DE VERANO SCORPION"
            Fase="4tos de Final"
            Horario="12:30 - 14:30">
          </CardCalendario>

          <CardCalendario
            Numero="30"
            Dia="Domingo"
            Codigo="#LOL189"
            Nombre="TORNEO JUNGLE HUMILIATION "
            Fase="Semifinal"
            Horario="20:00 - 23:00">
          </CardCalendario>

        </CardsContainer>

        <Mes> <Titulo level={3} >MAYO</Titulo> </Mes>
        <CardsContainer>

          <CardCalendario
            Numero="10"
            Dia="Viernes"
            Codigo="#PP210"
            Nombre="TORNEO DE VERANO SCORPION"
            Fase="8vos de Final"
            Horario="16:30 - 18:30">

          </CardCalendario>

          <CardCalendario
            Numero="22"
            Dia="Sabado"
            Codigo="#MK201"
            Nombre="TORNEO DE VERANO SCORPION"
            Fase="4tos de Final"
            Horario="12:30 - 14:30">
          </CardCalendario>

          <CardCalendario
            Numero="30"
            Dia="Domingo"
            Codigo="#LOL189"
            Nombre="TORNEO JUNGLE HUMILIATION "
            Fase="Semifinal"
            Horario="20:00 - 23:00">
          </CardCalendario>

        </CardsContainer>
      </Itinerario>

    </ContenedorMain>
  </>;
}
