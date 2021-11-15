import React, { Component } from "react";

// 类组件
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "你好，世界！",
    };
  }
  render() {
    return (
      <div>
        Hello,world!
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

// 函数式组件 返回同样是JSX
// export default function App(){
//   return (
//     <div>
//       function 组件
//     </div>
//   )
// }
