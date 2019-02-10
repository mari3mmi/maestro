import React, { Component } from 'react';

class Audio extends Component {
  render() {
    return (
      <div>
        <header>
          <p>
            <audio ref="audio_tag" src={process.env.PUBLIC_URL + 'test.mp3'} autoPlay></audio>
          </p>
        </header>
      </div>
    );
  }
}

export default Audio;