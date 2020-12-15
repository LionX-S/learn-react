import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
        <CounterButton increment={this.increment.bind(this)}/>
      </div>
    )
  }

  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

// 子组件
class CounterButton extends Component{
  render() {
    const {increment} = this.props;
    return (
      <div>
        <button onClick = {increment}>+1</button>
      </div>
    )
  }
}