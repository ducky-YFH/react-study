/**
 * 小案例
 */

import React, { Component } from "react";
import "./index.scss";

function AA({ value }) {
  return (
    <div className="AA">
      <h1>Math</h1>
      <div>{value}</div>
    </div>
  );
}

function BB({ value }) {
  return (
    <div className="BB">
      <h1>Chinese</h1>
      <div>{value}</div>
    </div>
  );
}

function CC({ value }) {
  return (
    <div className="CC">
      <h1>English</h1>
      <div>{value}</div>
    </div>
  );
}

class F extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: 0,
      list: [
        { name: "数学", value: 0 },
        { name: "语文", value: 1 },
        { name: "英语", value: 2 },
      ],
    };
  }
  componentDidMount = () => {};
  render() {
    return (
      <div className="F">
        <ul className="nav">
          {this.state.list.map((item, index) => {
            return (
              <li
                key={item.value}
                onClick={() => this.handleActive(item.value)}
                className={
                  [ "nav-item", item.value === this.state.navActive ? "nav-item_active" : null,].join(" ")
                }
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <section className="content">
          {
            {
              0: <AA value="AA" />,
              1: <BB value="BB" />,
              2: <CC value="CC" />,
            }[this.state.navActive]
          }
        </section>
      </div>
    );
  }
  handleActive = (value) => {
    this.setState({
      navActive: value,
    });
  };
}

export default F;
