import React from 'react';
import {Card, Card_Info, Card_Img} from './styled';
import {Titulo} from 'components';


export default function CardActive({GameImg,TorneoName, TorneoId, Game, Comienzo, Inscriptos}) {
  return(
      <Card>
          <Card_Img>
          <figure>
            <img src={`/assets/juegos/${GameImg}.jpg`} />
          </figure>
            <div>
                <p>INSCRIPCION DISPONIBLE</p>
            </div>
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
                  <img src="/assets/card_icons/fecha.png" />
                  <Titulo level={4}>Comienzo</Titulo>
                </div>
                <Titulo level={5}>{Comienzo}</Titulo>
              </li>

              <li>
                <div>
                  <img src="/assets/card_icons/personas.png" />
                  <Titulo level={4} >Inscriptos</Titulo>
                </div>
                <Titulo level={5}>{Inscriptos}</Titulo>
              </li>
            </ul>
          </Card_Info>

        </Card>
)
        
    }



