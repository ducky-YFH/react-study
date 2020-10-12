/**
 * 子传父
 */
import React, { Component } from 'react'

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '我是父组件的值'
    } 
  }
  render() {
    return (
      <div className="B_father">
        <h3>父组件</h3>
        <Child changeValue={this.changeValue} value={this.state.value} />
      </div>
    )
  }
  changeValue = (value) => {
    this.setState({ value });
  }
}

class Child extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="B_child">
        <p>{this.props.value}</p>
        <button onClick={this.changeValue}>点击改变父组件的值</button>
      </div>
    )
  }
  changeValue = () => {
    this.props.changeValue('我造反了，把父组件的修改掉')
  }
}

export default Father;
