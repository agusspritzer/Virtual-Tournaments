import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Stream,
  Principal,
  Beneficios,
  Presentacion,
  Foto,
  Juegos,
  Ganadores,
  GanadoresTitulo,
  TorneosCardContainer,
  Align,
  SeccionTorneos,
  Reel,
  Overlay,
} from './styled';


import { Titulo } from 'components';
import { CardActive } from 'components';
import { CardJuego } from 'components';
import { ContenedorMain } from 'components';
import { FullWidthSection } from 'components';
import { Campeones_Slider } from 'components';
import { Footer } from 'components';

const TwitchEmbedVideo = dynamic(import('react-twitch-embed-video'), {
  ssr: false,
});

class HomeContainer extends React.Component {
  render() {
    return (
      <>


        <FullWidthSection color="#6418DC">
          <Reel>
            <video width="100%" src="assets/reel2.mp4" autoplay="true" loop="true" muted="true"></video>
          </Reel>
          <Overlay>
            <img src="../assets/fondo2.png" />
          </Overlay>

        </FullWidthSection>

        <ContenedorMain>
          <Presentacion>
            <Principal>


              <Titulo level={3}>ACTIVA TU MODO TRYHARD EN <span>VIRTUAL TOURNAMENTS</span></Titulo>
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


          <Align>
            <Titulo level={3} style={{ textAlign: "center" }} >
              ¡Competir desde casa nunca tuvo tantas ventajas!
           </Titulo>
          </Align>

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
              height="450"
              muted
              targetId="twitch-embed"
              channel="phobyac"
              layout="video"
              width="800"

            />
          </Stream>

        </ContenedorMain>

        <FullWidthSection color="#EEEEEE">
          <Ganadores>
            <GanadoresTitulo>
              <Titulo level={1}>CON ANSIAS DE COMPETIR Y GANAR EN LAS VENAS</Titulo>
              <Titulo level={5}>Usuarios de todo el país ya están haciendo su nombre en Virtual Tournaments
            ganando grandes premios</Titulo>
            </GanadoresTitulo>

            <Campeones_Slider></Campeones_Slider>
          </Ganadores>
        </FullWidthSection>

        <ContenedorMain>

          <Titulo level={3}>Demostra ser el mejor en tu juegos favoritos</Titulo>

          <Juegos>
            <CardJuego juego="counter.jpg" GameName="Counter Strike: GO"></CardJuego>
            <CardJuego juego="brawl.jpg" GameName="Brawlhalla"></CardJuego>
            <CardJuego juego="lol.jpg" GameName="League of Legends"></CardJuego>
            <CardJuego juego="rainbow.jpg" GameName="Rainbow Six Siege"></CardJuego>
            <CardJuego juego="mortal.jpg" GameName="Mortal Kombat 11"></CardJuego>
            <CardJuego juego="paladins.jpg" GameName="Paladins"></CardJuego>
          </Juegos>


          <Align>
            <Link href="/perfil">
              TODOS LOS JUEGOS
            </Link>
          </Align>




          <SeccionTorneos>
            <Titulo level={3}>Torneos activos</Titulo>
            <TorneosCardContainer>

              <CardActive
                GameImg="counter"
                TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                TorneoId="#PP210"
                Game="Pummel Party"
                Fase="8vos de final"
                ProxFecha="13 de Julio">
              </CardActive>

              <CardActive
                GameImg="lol"
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
                GameImg="mortal"
                TorneoName="TORNEO DE JULIO PUMMEL PARTY"
                TorneoId="#PP210"
                Game="Pummel Party"
                Fase="8vos de final"
                ProxFecha="13 de Julio">
              </CardActive>
            </TorneosCardContainer>
          </SeccionTorneos>
        </ContenedorMain>
      </>
    );
  }
}

export default HomeContainer;
