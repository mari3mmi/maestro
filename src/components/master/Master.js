import React, { Component } from 'react';
import './Master.scss';
// import * as TopicSubscriber from '../TopicSubscriber.js';
import Audio from './Audio.js';
import TopicSubscriber from '../../TopicSubscriber';

class Master extends Component {
    constructor() {
      super();
      var tracks = ['', '', '', '', ''];
      this.state = {
        tracks: tracks,
        subscribers: tracks.map(function(_, index) {
          var subscriber = new TopicSubscriber(index);
          subscriber.connect();
          subscriber.subscribe();

          return subscriber;
        })
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
                this.state.tracks.map((track, index) => <Audio volume={100} key={index} track={track} />)
              }
            </div>
          </header>
        </div>
      );
    }
  }
  
  export default Master;