import React from 'react';
import dynamic from 'next/dynamic';

import {
        TorneosCardContainer,
        Buscador,
        Filtros,
} from './styled';

import { CardActive } from 'components';
import { CardProx } from 'components';
import { CardPast } from 'components';
import { Titulo } from 'components';
import { ContenedorMain } from 'components';

export default function TorneosContainer() {
        return <>

                <ContenedorMain >
                        <Buscador>

                                <Titulo level={0}> TORNEOS </Titulo>
                                <form>
                                        <input type="text" name="name" placeholder="Busca por jugador, juego o torneo especifico" autoComplete="off" />
                                </form>

                                <Filtros>
                                        <select>
                                                <option value="select">Mortal Kombat</option>
                                                <option value="select">Rainbow Six</option>
                                                <option value="select">Counter Strike:GO</option>
                                                <option value="select">Paladins</option>
                                                <option value="select">League of Legends</option>
                                        </select>

                                        <Titulo level={4}> TORNEOS </Titulo>
                                        <Titulo level={4}> BROTHERS </Titulo>
                                        <Titulo level={4}> ASSASSINS </Titulo>
                                </Filtros>

                        </Buscador>

                        <Titulo level={3} style={{ paddingBottom: '0' }}>Proximos</Titulo>
                        <TorneosCardContainer>
                                <CardProx
                                        GameImg="mortal"
                                        TorneoName="TORNEO INVERNAL SUBZERO"
                                        TorneoId="#PP210"
                                        Game="Mortal Kombat"
                                        Comienzo="22 de Agosto"
                                        Inscriptos="14/32">
                                </CardProx>
                                <CardProx
                                        GameImg="counter"
                                        TorneoName="TORNEO INVERNAL SUBZERO"
                                        TorneoId="#PP210"
                                        Game="Mortal Kombat"
                                        Comienzo="22 de Agosto"
                                        Inscriptos="14/32">
                                </CardProx>
                                <CardProx
                                        GameImg="pummel"
                                        TorneoName="TORNEO INVERNAL SUBZERO"
                                        TorneoId="#PP210"
                                        Game="Mortal Kombat"
                                        Comienzo="22 de Agosto"
                                        Inscriptos="14/32">
                                </CardProx>
                                <CardProx
                                        GameImg="paladins"
                                        TorneoName="TORNEO INVERNAL SUBZERO"
                                        TorneoId="#PP210"
                                        Game="Mortal Kombat"
                                        Comienzo="22 de Agosto"
                                        Inscriptos="14/32">
                                </CardProx>
                                <CardProx
                                        GameImg="rainbow"
                                        TorneoName="TORNEO INVERNAL SUBZERO"
                                        TorneoId="#PP210"
                                        Game="Mortal Kombat"
                                        Comienzo="22 de Agosto"
                                        Inscriptos="14/32">
                                </CardProx>
                                <CardProx
                                        GameImg="lol"
                                        TorneoName="TORNEO INVERNAL SUBZERO"
                                        TorneoId="#PP210"
                                        Game="Mortal Kombat"
                                        Comienzo="22 de Agosto"
                                        Inscriptos="14/32">
                                </CardProx>
                        </TorneosCardContainer>


                        <Titulo level={3} style={{ paddingBottom: '0' }}>Activos</Titulo>
                        <TorneosCardContainer>
                                <CardActive
                                        GameImg="brawl"
                                        TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Fase="8vos de final"
                                        ProxFecha="13 de Julio">
                                </CardActive>

                                <CardActive
                                        GameImg="mortal"
                                        TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Fase="8vos de final"
                                        ProxFecha="13 de Julio">
                                </CardActive>

                                <CardActive
                                        GameImg="rainbow"
                                        TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Fase="8vos de final"
                                        ProxFecha="13 de Julio">
                                </CardActive>

                                <CardActive
                                        GameImg="counter"
                                        TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Fase="8vos de final"
                                        ProxFecha="13 de Julio">
                                </CardActive>

                        </TorneosCardContainer>


                        <Titulo level={3} style={{ paddingBottom: '0' }}>Pasados</Titulo>
                        <TorneosCardContainer>
                                <CardPast
                                        GameImg="pummel"
                                        TorneoName="TORNEO BANK / BORDER / CHALET"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Player="Tanorior08"
                                        Prize="$5600">
                                </CardPast>

                                <CardPast
                                        GameImg="mortal"
                                        TorneoName="TORNEO BANK / BORDER / CHALET"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Player="Tanorior08"
                                        Prize="$5600">
                                </CardPast>

                                <CardPast
                                        GameImg="lol"
                                        TorneoName="TORNEO BANK / BORDER / CHALET"
                                        TorneoId="#PP210"
                                        Game="Pummel Party"
                                        Player="Tanorior08"
                                        Prize="$5600">
                                </CardPast>
                        </TorneosCardContainer>
                </ContenedorMain>
        </>;
}
