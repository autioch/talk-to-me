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
    const { voices } = this.props;
    const selectedVoice = voices.find((voice) => voice.isSelected);

    return (
      <Select
        value={selectedVoice ? selectedVoice.id : null}
        onChange={this.setId}
        className="synthesize__language">
        {this.props.voices.map((voice) =>
          <Select.Option key={voice.id} value={voice.id}>{voice.label}</Select.Option>
        )}
      </Select>
    );
  }
}
