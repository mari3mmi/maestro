import React, { Component } from 'react';
import './Client.scss';
import BoomBox from './BoomBox.js';

class Client extends Component {
    constructor() {
      super();
      this.state = {
        selectedTrack: null,
        tracks: ['ANTHEM KIT 03-002_bip 5 1.wav', 'ANTHEM KIT 03-003_bip 4 2.wav', 'ANTHEM KIT 03-004_bip 2.wav', 'ANTHEM KIT 03-005_bip 2.wav', 'ANTHEM KIT 03-006_bip 2.wav']
      };
    }

    selectTrack(index) {
      this.setState({
        selectedTrack: index,
      })
    }

    render() {
      return (
       <div className="Client">
           {this.state.selectedTrack === null ?
              this.state.tracks.map(((track, index) => {
                return (
                  <button key={index} onClick={() => this.selectTrack(index)}>
                    {track}
                  </button>
                )
              }))
            :
            //<Soundbar index={this.state.selectedTrack}/>
            <BoomBox/>
            }
        </div>

      );
    }
  }

  export default Client;