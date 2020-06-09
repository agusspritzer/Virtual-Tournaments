import React from 'react';
import TwitchEmbedVideo from "react-twitch-embed-video"



class Main extends React.Component{
    render (){
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

        )
    }
}

export default Main;