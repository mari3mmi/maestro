import React, { Component } from 'react';
import TopicPublisher from '../../TopicPublisher.js';

class Soundbar extends Component {
  constructor() {
    super();

    this.state = {
      publisher: null,
    };
  }

  componentDidMount() {
    var publisher = new TopicPublisher(this.props.index);
    publisher.connect();

    this.setState({
      publisher: publisher
    });
  }

  onUpdateValue(value) {
    this.state.publisher.publish(value);
  }

  render() {
    return (
      <div>
        testing
      </div>
    );
  }
}

export default Soundbar;
