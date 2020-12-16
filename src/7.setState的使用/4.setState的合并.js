import React, { Component } from 'react'

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
    // 结果只加一次
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })

    // 让结果累加,参数传入一个函数,第一个参数为上次的state
    this.setState((prevState,props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState,props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState,props) => {
      return {
        counter: prevState + 1
      }
    });
  }
}
