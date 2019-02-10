import React, { Component } from 'react';
import './Client.scss';


class Client extends Component {
    render() {
      return (
        <div className="Client">
          <header className="header">
            <p>
             Client Page
            </p>
            <p>
              We want to list all the tracks (ids 0 to ...).
            </p>
            <p>
              when one is selected, show the sound controller and create TopicPublisher based on the track id.
            </p>
            <p>
              Subscribe to the event and publish the volume level!
            </p>
          </header>
        </div>
      );
    }
  }

  export default Client;