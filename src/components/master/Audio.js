import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

class Audio extends Component {
  render() {
    return (
      <div id={`audio${this.props.index}`}>
        <AudioPlayer volume={this.props.volume} src={process.env.PUBLIC_URL + '/Audio Files/Kit 1/' + this.props.track} autoPlay />
      </div>
    );
  }
}

export default Audio;
