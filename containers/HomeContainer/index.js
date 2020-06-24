import React from 'react';
import dynamic from 'next/dynamic';
import {
  Stream,
  H1,
  H3,
  H4,
  H5,
  Principal,
  Beneficios,
  Presentacion,
  Foto,
  ContenedorMain,
  Juegos,
  Card_Juego,
  Card,
  Card_Info,
  TorneosActivos,
} from './styled';

import { Titulo } from 'components';


const TwitchEmbedVideo = dynamic(import('react-twitch-embed-video'), {
  ssr: false,
});

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <Presentacion>
          <Principal>
            <H1>ACTIVA TU MODO TRYHARD EN</H1>
            <H1 style={{ color: '#EA33BC' }}>VIRTUAL TOURNAMENTS</H1>

            <H4>
              Virtual Tournaments es la plataforma amateur definitiva que te
              ofrece la posibilidad de inscribirte a torneos de tus juegos
              preferidos para demostrar que sos el mejor en ellos!
            </H4>
          </Principal>

          <Foto>
            <img src="../assets/presentacion.png" />
          </Foto>
        </Presentacion>

        <H3 style={{ textAlign: 'center' }}>
          ¡Competir desde casa nunca tuvo tantas ventajas!
        </H3>

        <Beneficios>
          <div>
            <img src="../assets/beneficios/trofeo.png" />
            <p>
              Podrás acceder a grandes premios monetarios por ganar torneos de
              tus juegos favoritos
            </p>
          </div>
          <div>
            <img src="../assets/beneficios/twitch.png" />
            <p>
              Contar con la posibilidad de que tus partidas sean vistas por
              miles de jugadores a través de Twitch
            </p>
          </div>
          <div>
            <img src="../assets/beneficios/personas.png" />
            <p>
              Formar parte de una comunidad que apoya la escena local de
              jugadores no profesionales en E-Sports
            </p>
          </div>
        </Beneficios>

        <Stream>
          <H3>¡Estamos transmitiendo en vivo ahora!</H3>
          <H4>Torneo MK 210 - Mortal Kombat - 8vos de Final</H4>
          <TwitchEmbedVideo
            autoplay
            height="480"
            muted
            targetId="twitch-embed"
            channel="virtualtournaments_"
            layout="video"
            width="800"
          />
        </Stream>

        <H3>Demostra ser el mejor en tu juegos favoritos</H3>

        <Juegos>
          <Card_Juego>
            {' '}
            <img src="../assets/rainbow.jpg" />{' '}
          </Card_Juego>
          <Card_Juego>
            {' '}
            <img src="../assets/rainbow.jpg" />{' '}
          </Card_Juego>
          <Card_Juego>
            {' '}
            <img src="../assets/rainbow.jpg" />{' '}
          </Card_Juego>
          <Card_Juego>
            {' '}
            <img src="../assets/rainbow.jpg" />{' '}
          </Card_Juego>
        </Juegos>
        <H5>TODOS LOS JUEGOS</H5>

        <H3 style={{ paddingTop: '10%' }}>Torneos activos</H3>
        <TorneosActivos>
          <Card>
            <figure>
              <img src="../assets/juegos/pummel.jpg" />
            </figure>
            <Card_Info>
              <p>#PP210</p>
              <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
              <ul>
                <li>
                  <div>
                    <img src="../assets/card_icons/gamepad.png" />
                    <H4>Juego</H4>
                  </div>

                  <H5>Mortal Kombat</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fase.png" />
                    <H4>Fase</H4>
                  </div>
                  <H5>8vos de final</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fecha.png" />
                    <H4>Proxima Fecha</H4>
                  </div>
                  <H5>13 de Julio</H5>
                </li>
              </ul>
            </Card_Info>
          </Card>

          <Card>
            <figure>
              <img src="../assets/juegos/counter.jpg" />
            </figure>
            <Card_Info>
              <p>#PP210</p>
              <H3>TORNEO COUNTER TERRORIST WIN</H3>
              <ul>
                <li>
                  <div>
                    <img src="../assets/card_icons/gamepad.png" />
                    <H4>Juego</H4>
                  </div>

                  <H5>Mortal Kombat</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fase.png" />
                    <H4>Fase</H4>
                  </div>
                  <H5>8vos de final</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fecha.png" />
                    <H4>Proxima Fecha</H4>
                  </div>
                  <H5>13 de Julio</H5>
                </li>
              </ul>
            </Card_Info>
          </Card>

          <Card>
            <figure>
              <img src="../assets/juegos/mortal.jpg" />
            </figure>
            <Card_Info>
              <p>#PP210</p>
              <H3>TORNEO DE VERANO SCORPION</H3>
              <ul>
                <li>
                  <div>
                    <img src="../assets/card_icons/gamepad.png" />
                    <H4>Juego</H4>
                  </div>

                  <H5>Mortal Kombat</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fase.png" />
                    <H4>Fase</H4>
                  </div>
                  <H5>8vos de final</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fecha.png" />
                    <H4>Proxima Fecha</H4>
                  </div>
                  <H5>13 de Julio</H5>
                </li>
              </ul>
            </Card_Info>
          </Card>

          <Card>
            <figure>
              <img src="../assets/juegos/paladins.jpg" />
            </figure>
            <Card_Info>
              <p>#PP210</p>
              <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
              <ul>
                <li>
                  <div>
                    <img src="../assets/card_icons/gamepad.png" />
                    <H4>Juego</H4>
                  </div>

                  <H5>Mortal Kombat</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fase.png" />
                    <H4>Fase</H4>
                  </div>
                  <H5>8vos de final</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fecha.png" />
                    <H4>Proxima Fecha</H4>
                  </div>
                  <H5>13 de Julio</H5>
                </li>
              </ul>
            </Card_Info>
          </Card>
        </TorneosActivos>
      </>
    );
  }
}

export default HomeContainer;
