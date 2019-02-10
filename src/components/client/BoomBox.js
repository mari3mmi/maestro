import React, { Component } from 'react';
import './BoomBox.css';
import TopicPublisher from '../../TopicPublisher.js';
import Slider, { Range } from 'rc-slider';
import { Form } from 'semantic-ui-react';


class BoomBox extends Component {
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

<div className="boombox">
<div className="boombox-handle"></div>
<div className="boombox-body">

  <section className="master-controls">
  <Form.Input
            min={0}
            max={100}
            onChange={this.handleChange}
            step={1}
            type='range'
            value={this.state.value}
          />
    <Form.Input
            min={0}
            max={100}
            onChange={this.handleChange}
            step={1}
            type='range'
            value={this.state.value}
          />
    <button className="control-power" role="switch" aria-checked="false" data-power="on"/>
  </section>
  <section className="tape"></section>

</div>
</div>

);
}
}

export default BoomBox;