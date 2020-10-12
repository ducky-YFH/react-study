/**
 * 插槽的使用
 */

import React, { Component } from 'react';

function AA (props) {
  console.log(props);
  return (
    <div className="AA">
      {props.children}
    </div>
  )
}

class G extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="G">
        <AA>
          <h1>插槽</h1>
        </AA>
      </div>
    )
  }
}

export default G;