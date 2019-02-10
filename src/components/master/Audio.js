import React, { Component } from 'react';
//import AudioPlayer from 'react-h5-audio-player';
import AudioSpectrum from 'react-audio-spectrum';
import './Audio.scss'
class Audio extends Component {
  render() {
    return (
      <div className="Audio">
        <audio id={`audio${this.props.index}`} volume={this.props.volume} src={process.env.PUBLIC_URL + '/Audio Files/Kit 1/' + this.props.track} autoPlay loop />
        <AudioSpectrum
          id= {`audio-canvas${this.props.index}`}
          height={150}
          width={150}
          audioId={`audio${this.props.index}`}
          capColor={'red'}
          capHeight={1}
          meterWidth={2}
          meterCount={512}
          meterColor={[
            {stop: 0, color: '#f00'},
            {stop: 0.5, color: '#0CD7FD'},
            {stop: 1, color: 'red'}
          ]}
          gap={4}
        />
        {this.props.track}
      </div>
    );
  }
}

export default Audio;
