import React, { Component } from 'react';
import TopicPublisher from '../../TopicPublisher.js';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Soundbar extends Component {
  constructor() {
    super();

    this.state = {
      publisher: null,
      value: 100,
    };
  }

  componentDidMount() {
    var publisher = new TopicPublisher(this.props.index);
    publisher.connect();

    this.setState({
      publisher: publisher
    });
  }

  onSliderChange(value) {
    this.state.publisher.publish(value);
  }

  render() {
    return (
      <div>
        <Slider
         value={this.state.value}
         onChange={this.onSliderChange}
        />
      </div>
    );
  }
}

export default Soundbar;
