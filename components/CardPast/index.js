import React from 'react';
import {Card, Card_Img, Card_Info} from './styled';
import {Titulo} from 'components';


export default function CardActive({GameImg,TorneoName, TorneoId, Game, Player, Prize}) {
  return(
    <Card>
          <Card_Img>
          <figure>
            <img src={`/assets/juegos/${GameImg}.jpg`} />
          </figure>
          </Card_Img>

          <Card_Info>
            <p>{TorneoId}</p>
            <Titulo level={3}>{TorneoName}</Titulo>
            <ul>
              <li>
                <div>
                  <img src="/assets/card_icons/pasados/gamepad.png" />
                  <Titulo level={4}>Juego</Titulo>
                </div>

                <Titulo level={5}>{Game}</Titulo>
              </li>

              <li>
                <div>
                  <img src="/assets/card_icons/pasados/trophy.png" />
                  <Titulo level={4}>Ganador</Titulo>
                </div>
                <Titulo level={5}>{Player}</Titulo>
              </li>

              <li>
                <div>
                  <img src="/assets/card_icons/pasados/prize.png" />
                  <Titulo level={4} >Premio</Titulo>
                </div>
                <Titulo level={5}>{Prize}</Titulo>
              </li>
            </ul>
          </Card_Info>
          </Card>
        
)
        
    }



