import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default class SynthesizeInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: props.value
    }
    this.setText = this.setText.bind(this);
  }

  setText(ev){
    const {value} = ev.target;

    this.setState({
      value
    }, () => this.props.onChange(value))
  }

  render(){
    return (
      <TextArea
        rows={4}
        onChange={this.setText}
        placeholder="Write to me!"
        value={this.state.value}
      />
    );
  }
}
