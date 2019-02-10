import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

class Audio extends Component {
  render() {
    return (
      <AudioPlayer volume={this.props.volume} src={process.env.PUBLIC_URL + '/Audio Files/Kit 1/' + this.props.track} autoPlay />
    );
  }
}

export default Audio;
