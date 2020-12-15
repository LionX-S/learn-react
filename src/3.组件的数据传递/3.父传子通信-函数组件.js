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

function ChildCpn(props) {
  const {name,age,height} = props;
  return (
    <div>
        子组件展示数据：{name + ' ' + age + ' ' + height}
      </div>
  )
}