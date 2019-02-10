import React, { Component } from 'react';
import './Master.scss';
// import * as TopicSubscriber from '../TopicSubscriber.js';
import Audio from './Audio.js';

class Master extends Component {
    render() {
      return (
        <div className="Master">
          <header className="header">
            <div>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <Audio key={num} />)
              }
            </div>
          </header>
        </div>
      );
    }
  }
  
  export default Master;