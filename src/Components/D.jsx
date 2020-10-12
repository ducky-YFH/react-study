/**
 * 生命周期
 */

 /**
  * componentWillMount 组件将要渲染
  * componentDidMount 组件渲染完毕
  * componentWillReceiveProps 组件将要接受props值
  * shouldComponentUpdate 组件收到新的state或者props，判断是否更新，返回布尔类型
  * componentWillUpdate 组件将要更新
  * componentDidUpdate 组件已经更新
  */

import React, { Component } from 'react';

class D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '哈哈哈哈哈哈哈哈哈'
    }
  }
  render() {
    return (
      <div className="D">
        <h1>D组件</h1>
        <p>{this.state.msg}</p>
        <button onClick={this.changeMsg}>点击修改</button>
      </div>
    )
  }
  changeMsg = () => {
    this.setState({
      msg: 'good， 你成功修改了'
    })
  }
  componentWillMount() {
    console.log('还没挂载组件');
  }
  componentDidMount() {
    console.log('已经挂载完组件');
  }
  shouldComponentUpdate(cc) {
    console.log('是否让你修改state呢');
    return false;
  }
  componentWillReceiveProps() {
    console.log('组件将要接受新的state, props');
  }
  componentWillUpdate() {
    console.log('将要更新组件数据');
  }
  componentDidUpdate() {
    console.log('更新完组件数据');
  }
}

export default D;

