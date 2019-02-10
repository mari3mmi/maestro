import React, { Component } from 'react';
import './Client.scss';
import {Button} from 'semantic-ui-react';
import BoomBox from './BoomBox.js';
import { Form } from 'semantic-ui-react';

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
                  <Button content={`${track}`} color='green'  src={`${this.selectTrack(index)}`}/>
                )
              }))
            :
            //<Soundbar index={this.state.selectedTrack}/>
            <BoomBox index={this.state.selectedTrack} track={this.state.tracks[this.state.selectedTrack]}/>
            }
        </div>

      );
    }
  }

  export default Client;