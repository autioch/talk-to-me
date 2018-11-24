import React from 'react';
import { Slider, InputNumber } from 'antd';
import './styles.scss';

export default class RangeWithInput extends React.Component {
constructor(props){
  super(props);
  this.state= {
    inputValue: props.value
  }
}

  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }

    this.setState({
      inputValue: value,
    }, () => this.props.onChange(value));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        inputValue: nextProps.value
      });
    }
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div className="c-range">
        <div className="c-range__label">{this.props.label}</div>
        <div className="c-range__track">
          <Slider min={0.1} max={2} step={0.1} onChange={this.onChange} value={inputValue} />
        </div>
        <div className="c-range__input">
          <InputNumber min={0.1} max={2} step={0.1} onChange={this.onChange} value={inputValue} />
        </div>
      </div>
    );
  }
}
