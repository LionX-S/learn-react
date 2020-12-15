import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name='fyy' age='18' height='180'/>
      </div>
    )
  }
}

class ChildCpn extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const {name,age,height} = this.props;
    return (
      <div>
        子组件展示数据：{name + ' ' + age + ' ' + height}
      </div>
    )
  }
}