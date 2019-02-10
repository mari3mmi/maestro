import React, { Component } from 'react';
import './Master.scss';
import Audio from './Audio.js';
import TopicSubscriber from '../../TopicSubscriber';

class Master extends Component {
    constructor() {
      super();
      var tracks = ['ANTHEM KIT 03-002_bip 5 1.wav', 'ANTHEM KIT 03-003_bip 4 2.wav', 'ANTHEM KIT 03-004_bip 2.wav', 'ANTHEM KIT 03-005_bip 2.wav', 'ANTHEM KIT 03-006_bip 2.wav'];
      this.state = {
        tracks: tracks,
        subscribers: tracks.map(function(_, index) {
          var subscriber = new TopicSubscriber(index);
          subscriber.connect();
          subscriber.subscribe();

          return subscriber;
        }),
        volumes: tracks.map(_ => 1.0)
      }

      this.state.subscribers.forEach((subscriber, index) => {
        function t(message) {
          subscriber.log('Received message: "' + message.getBinaryAttachment() + '", details:\n' + message.dump());
          var new_vol = parseInt(message.getBinaryAttachment());

          this.setState(prevState => ({
            volumes: prevState.volumes.map((vol, i) =>
              i === index ? new_vol : vol
            )
          }));

          document.getElementById(`audio${index}`).getElementsByTagName('audio')[0].volume = new_vol;
        }

        subscriber.session.on(window.solace.SessionEventCode.MESSAGE, message => t.call(this, message));
      });
    }

    componentWillUnmount() {
      this.state.subscribers.forEach(sub => {
        sub.disconnect();
      });
    }

    render() {
      return (
        <div className="Master">
          <header className="header">
            <div>
              {
                this.state.tracks.map((track, index) => <Audio index={index} volume={this.state.volumes[index]} key={index} track={track} />)
              }
            </div>
          </header>
        </div>
      );
    }
  }
  
  export default Master;