import React from 'react';
import dynamic from 'next/dynamic';
import {Stream, H1 , H3, H4, H5,Titulo, Beneficios, Presentacion, Foto, ContenedorMain, Juegos, Card_Juego, Card, TorneosActivos} from './styled';

const TwitchEmbedVideo = dynamic(import('react-twitch-embed-video'), {
  ssr: false,
});

class Main extends React.Component {
  render() {
    return (

      <ContenedorMain>

        <Presentacion>

        <Titulo>
        <H1>ACTIVA TU MODO TRYHARD EN</H1>
        <H1  style={{color: "#EA33BC"}} >VIRTUAL TOURNAMENTS</H1>

        <H4>Virtual Tournaments es la plataforma amateur definitiva
        que te ofrece la posibilidad de inscribirte a torneos de tus
        juegos preferidos para demostrar que sos el mejor en ellos!</H4>
        </Titulo>

        <Foto>
        <img src="../assets/presentacion.png"/>
        </Foto>

        </Presentacion>


        <H3 style={{textAlign: "center"}}>¡Competir desde casa nunca tuvo tantas ventajas!</H3>
        
      <Beneficios>
    
      <div>
        <img src="../assets/beneficios/trofeo.png"/>
        <p>Podrás acceder a grandes 
premios monetarios por ganar 
torneos de tus juegos favoritos</p>
      </div>
      <div>
        <img src="../assets/beneficios/twitch.png"/>
        <p>Contar con la posibilidad de que tus 
partidas sean vistas por miles de 
jugadores a través de Twitch</p>
      </div>
      <div>
        <img src="../assets/beneficios/personas.png"/>
        <p>Formar parte de una comunidad que 
apoya la escena local de jugadores 
no profesionales en E-Sports</p>
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
          <Card_Juego> <img src="../assets/rainbow.jpg"/> </Card_Juego>
          <Card_Juego> <img src="../assets/rainbow.jpg"/> </Card_Juego>
          <Card_Juego> <img src="../assets/rainbow.jpg"/> </Card_Juego>
          <Card_Juego> <img src="../assets/rainbow.jpg"/> </Card_Juego>
        </Juegos>
        <H5>TODOS LOS JUEGOS</H5>



        <H3 style={{paddingTop: "10%"}}>Torneos activos</H3>
        <TorneosActivos>
        <Card>
          <p>#PP210</p>
          <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
          <ul>
            <li>
              <H4>Juego</H4>
              <H5>Mortal Kombat</H5>
            </li>

            <li>
              <H4>Fase</H4>
              <H5>8vos de final</H5>
            </li>

            <li>
              <H4>Prox. Streaming</H4>
              <H5>13/07 a las 16:00hs</H5>
            </li>

          </ul>

        </Card>

        <Card>
          <p>#PP210</p>
          <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
          <ul>
            <li>
              <H4>Juego</H4>
              <H5>Mortal Kombat</H5>
            </li>

            <li>
              <H4>Fase</H4>
              <H5>8vos de final</H5>
            </li>

            <li>
              <H4>Prox. Streaming</H4>
              <H5>13/07 a las 16:00hs</H5>
            </li>

          </ul>

        </Card>

        <Card>
          <p>#PP210</p>
          <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
          <ul>
            <li>
              <H4>Juego</H4>
              <H5>Mortal Kombat</H5>
            </li>

            <li>
              <H4>Fase</H4>
              <H5>8vos de final</H5>
            </li>

            <li>
              <H4>Prox. Streaming</H4>
              <H5>13/07 a las 16:00hs</H5>
            </li>

          </ul>

        </Card>

        <Card>
          <p>#PP210</p>
          <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
          <ul>
            <li>
              <H4>Juego</H4>
              <H5>Mortal Kombat</H5>
            </li>

            <li>
              <H4>Fase</H4>
              <H5>8vos de final</H5>
            </li>

            <li>
              <H4>Prox. Streaming</H4>
              <H5>13/07 a las 16:00hs</H5>
            </li>

          </ul>

        </Card>

        </TorneosActivos>


        </ContenedorMain>

    );
  }
}

export default Main;
