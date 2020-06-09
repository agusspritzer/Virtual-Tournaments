import React from 'react';
import dynamic from 'next/dynamic';

const TwitchEmbedVideo = dynamic(import('react-twitch-embed-video'), {
  ssr: false,
});

class Main extends React.Component {
  render() {
    return (
      <TwitchEmbedVideo
        autoplay
        height="480"
        muted
        targetId="twitch-embed"
        channel="brunenger"
        layout="video"
        width="940"
      />
    );
  }
}

export default Main;
