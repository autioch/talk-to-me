import React, { Component } from 'react';
import { InputNumber } from 'antd';

export default class MaxAlternatives extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      value
    }, () => this.props.onChange(value));
  }

  render() {
    const { value } = this.state;

    return (
      <div className="recognize-max-alternatives">
        <div className="recognize-max-alternatives__label">Max alternatives</div>
        <InputNumber min={1} max={10} step={1} onChange={this.onChange} value={value} />
      </div>
    );
  }
}
