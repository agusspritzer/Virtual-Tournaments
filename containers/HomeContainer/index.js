import React from 'react';
import dynamic from 'next/dynamic';
import {
  Stream,
  Principal,
  Beneficios,
  Presentacion,
  Foto,
  ContenedorMain,
  Juegos,
  Card_Juego,
  TorneosCardContainer,
} from './styled';

import { Titulo } from 'components';
import { CardActive } from 'components';

const TwitchEmbedVideo = dynamic(import('react-twitch-embed-video'), {
  ssr: false,
});

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <Presentacion>
          <Principal>
            <Titulo level={0}>ACTIVA TU MODO TRYHARD EN</Titulo>
            <Titulo level={0} style={{ color: '#EA33BC' }}>VIRTUAL TOURNAMENTS</Titulo>

            <Titulo level={4}>
              Virtual Tournaments es la plataforma amateur definitiva que te
              ofrece la posibilidad de inscribirte a torneos de tus juegos
              preferidos para demostrar que sos el mejor en ellos!
            </Titulo>
          </Principal>

          <Foto>
            <img src="../assets/presentacion.png" />
          </Foto>
        </Presentacion>

        <Titulo level={3} style={{ textAlign: 'center' }} >
          ¡Competir desde casa nunca tuvo tantas ventajas!
        </Titulo>

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
          <Titulo level={3}>¡Estamos transmitiendo en vivo ahora!</Titulo>
          <Titulo level={4}>Torneo MK 210 - Mortal Kombat - 8vos de Final</Titulo>
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

        <Titulo level={3}>Demostra ser el mejor en tu juegos favoritos</Titulo>

        <Juegos>
          <Card_Juego>
            <figure>
            <img src="../assets/rainbow.jpg" />
            </figure>
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
        <Titulo level={5} >TODOS LOS JUEGOS</Titulo>


        <Titulo level={3}  style={{ paddingTop: '10%' }}>Torneos activos</Titulo>
        <TorneosCardContainer>

          <CardActive
          GameImg="pummel"
          TorneoName="TORNEO DE JULIO PUMMEL PARTY"
          TorneoId="#PP210"
          Game="Pummel Party"
          Fase="8vos de final"
          ProxFecha="13 de Julio">           
          </CardActive>

          <CardActive
          GameImg="pummel"
          TorneoName="TORNEO DE JULIO PUMMEL PARTY"
          TorneoId="#PP210"
          Game="Pummel Party"
          Fase="8vos de final"
          ProxFecha="13 de Julio">           
          </CardActive>

          <CardActive
          GameImg="pummel"
          TorneoName="TORNEO DE JULIO PUMMEL PARTY"
          TorneoId="#PP210"
          Game="Pummel Party"
          Fase="8vos de final"
          ProxFecha="13 de Julio">           
          </CardActive>

          <CardActive
          GameImg="pummel"
          TorneoName="TORNEO DE JULIO PUMMEL PARTY"
          TorneoId="#PP210"
          Game="Pummel Party"
          Fase="8vos de final"
          ProxFecha="13 de Julio">           
          </CardActive>
          
        </TorneosCardContainer>
      </>
    );
  }
}

export default HomeContainer;
