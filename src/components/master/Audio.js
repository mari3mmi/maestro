import React, { Component } from 'react';

class Audio extends Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src={process.env.PUBLIC_URL + this.props.track} autoPlay></audio>
      </div>
    );
  }
}

export default Audio;