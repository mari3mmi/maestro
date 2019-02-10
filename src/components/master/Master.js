import React, { Component } from 'react';
import './Master.scss';
// import * as TopicSubscriber from '../TopicSubscriber.js';
import Audio from './Audio.js';
import TopicSubscriber from '../../TopicSubscriber';

class Master extends Component {
    constructor() {
      super();
      var tracks = ['ANTHEM KIT 03-002_bip 1.wav', 'ANTHEM KIT 03-003_bip 1.wav', 'ANTHEM KIT 03-004_bip 1.wav', 'ANTHEM KIT 03-005_bip 1.wav', 'ANTHEM KIT 03-006_bip.wav'];
      this.state = {
        tracks: tracks,
        subscribers: tracks.map(function(_, index) {
          var subscriber = new TopicSubscriber(index);
          subscriber.connect();
          subscriber.subscribe();

          var that = this;
          subscriber.session.on(window.solace.SessionEventCode.MESSAGE, function (message) {
            subscriber.log('Received message: "' + message.getBinaryAttachment() + '", details:\n' + message.dump());
            var new_vol = 100;

            // that.setState(prevState => ({
            //   volumes: prevState.volumes.map((vol, i) =>
            //     i === index ? new_vol : vol
            //   )
            // }))
          });

          return subscriber;
        }),
        volumes: tracks.map(_ => 1.0)
      }
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
                this.state.tracks.map((track, index) => <Audio volume={this.state.volumes[index]} key={index} track={track} />)
              }
            </div>
          </header>
        </div>
      );
    }
  }
  
  export default Master;