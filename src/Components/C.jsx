/**
 * 数组循环显示
 */

import React, { Component } from "react";

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "小明" }, { name: "小花" }, { name: "小红" }]
    };
  }
  render() {
    return (
      <div className="C">
        <ul>
          { 
            this.state.list.map((item, index) => {
              return <li key={index} onClick={(event) => this.showMessage(index, item.name, event)}>{item.name}</li>
            }) 
          }
        </ul>
      </div>
    )
  }
  showMessage = (index, value, event) => {
    window.alert(`我是第${index}个，值为：${value}`);
  }
}

export default C;