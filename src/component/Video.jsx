import React, { Component } from 'react';
import YouTube from 'react-youtube';


class Video extends Component {

    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
     
        return <YouTube videoId="RsobeWfbBcY" opts={opts} onReady={this._onReady} />;
      }
}

export default Video;