import React from 'react';
import { Card, Card_Img, Card_Info } from './styled';
import { Titulo } from 'components';
import Link from 'next/link';


export default function CardActive({ GameImg, TorneoName, TorneoId, Game, Fase, ProxFecha, Destino }) {
  return (
    <Link href={'/torneos/' + Destino}>
      <Card>
        <Card_Img>
          <figure>
            <img src={GameImg} />
          </figure>
        </Card_Img>

        <Card_Info>
          <p>{TorneoId}</p>
          <Titulo level={3}>{TorneoName}</Titulo>
          <ul>
            <li>
              <div>
                <img src="/assets/card_icons/gamepad.png" />
                <Titulo level={4}>Juego</Titulo>
              </div>

              <Titulo level={5}>{Game}</Titulo>
            </li>

            <li>
              <div>
                <img src="/assets/card_icons/fase.png" />
                <Titulo level={4}>Fase</Titulo>
              </div>
              <Titulo level={5}>{Fase}</Titulo>
            </li>

            <li>
              <div>
                <img src="/assets/card_icons/fecha.png" />
                <Titulo level={4} >Proxima Fecha</Titulo>
              </div>
              <Titulo level={5}>{ProxFecha}</Titulo>
            </li>
          </ul>
        </Card_Info>
      </Card>
    </Link>
  )

}



