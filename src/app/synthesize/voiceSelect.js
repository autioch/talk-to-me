import React, { Component } from 'react';
import { Select } from 'antd';

export default class SynthesizeVoices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
    this.setId = this.setId.bind(this);
  }

  setId(value) {
    this.setState({
      value
    }, () => this.props.onChange(value));
  }

  render() {
    return (
      <Select
        value={this.state.value}
        onChange={this.setId}
        className="synthesize__language">
        {this.props.voices.map((voice) =>
          <Select.Option key={voice.id} value={voice.id}>{voice.label}</Select.Option>
        )}
      </Select>
    );
  }
}
