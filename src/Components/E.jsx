/**
 * 表单输入框触发事件
 */
import React, { Component } from 'react';

class E extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [
        { name: '前端', value: 1, count: 5, love: 3222 },
        { name: '后端', value: 2, count: 2, love: 100 },
        { name: '测试', value: 3, count: 6, love: 200 },
        { name: '运维', value: 4, count: 7, love: 5060 },
        { name: '安卓', value: 5, count: 4, love: 1999 }
      ],
      content: ''
    }
  }
  changeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  search = (e) => {
    if (e.keyCode !== 13) return;
    this.state.list.some(item => {
      if (item.name === this.state.value) {
        const dom = (
          <div>
            <p>方向：{item.name}</p>
            <p>人数：{item.count}</p>
            <p>收藏：{item.love}</p>
          </div>
        )
        this.setState({
          content: dom
        })
        return true;
      }
    })
    
  }
  render() {
    return(
      <div className="E">
        <h1>搜索</h1>
        <input type="text" value={this.state.value} onChange={this.changeValue} onKeyDown={this.search} />
        {this.state.content}
      </div>
    )
  }
}

export default E