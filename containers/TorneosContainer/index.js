import React from 'react';
import dynamic from 'next/dynamic';
import {
  TorneosActivos,
} from './styled';

import { CardActive } from 'components';

export default function TorneosContainer() {
  return <>
  <TorneosActivos>
            <CardActive
                  GameImg="pummel"
                  TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                  TorneoId="#PP210"
                  Game="Pummel Party"
                  Fase="8vos de final"
                  ProxFecha="13 de Julio">           
              </CardActive>
    </TorneosActivos>
  </>;
}
