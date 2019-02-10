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

    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div>
          <Form.Input
          min={0}
          max={1}
          onChange={this.handleChange}
          step={0.01}
          type='range'
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Soundbar;
