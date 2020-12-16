import React, { Component } from 'react'


// 1.如果直接修改state，react不会重新渲染页面；2.组件中可以直接使用setState是因为继承自Component
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick = {() => this.increment()}>+1</button>
      </div>
    )
  }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
