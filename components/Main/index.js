import React from 'react';
import dynamic from 'next/dynamic';
import {Stream, H3, H4, H5, ContenedorMain, Juegos, Card} from './styled';

const TwitchEmbedVideo = dynamic(import('react-twitch-embed-video'), {
  ssr: false,
});

class Main extends React.Component {
  render() {
    return (

      <ContenedorMain>

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
          <Card> <img src="../assets/rainbow.jpg"/> </Card>
          <Card> <img src="../assets/rainbow.jpg"/> </Card>
          <Card> <img src="../assets/rainbow.jpg"/> </Card>
          <Card> <img src="../assets/rainbow.jpg"/> </Card>
        </Juegos>
        <H5>TODOS LOS JUEGOS</H5>

        </ContenedorMain>

    );
  }
}

export default Main;
