/**
 * 父组件传值给子组件 
 */
import React, { Component } from 'react';

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
    this.triggerActive = this.triggerActive.bind(this);
  }
  render () {
    return (
      <div className="father">
        <button onClick={this.triggerActive}>
          {this.state.isActive ? '显示' : '隐藏'}
        </button>
        <Child isActive={this.state.isActive}></Child>
      </div>
    )
  }
  triggerActive() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <h1>{this.props.isActive ? '显示' : '隐藏'}</h1>
    )
  }
}

export default Father;