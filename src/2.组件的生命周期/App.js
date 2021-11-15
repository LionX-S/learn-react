import React, { Component } from 'react'

class Cpn extends Component{
  render(){
    return (
      <h2>Cpn组件</h2>
    )
  }
  componentWillUnmount(){
    console.log('调用了Cpn的componentWillUnmount方法');
  }
}

export default class App extends Component {
  constructor(){
    super();
    console.log('执行了constructor方法');
    this.state = {
      counter: 0,
      isShow: true
    }
  }
  render() {
    console.log('执行了render方法');
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick = {e => this.incerment()}>+</button>
        <button onClick = {e => this.delete()}>删除Cpn</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  incerment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  delete(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
  // 挂载成功调用
  componentDidMount(){
    console.log('执行了componentDidMount方法');
  }

  // prop,state 更新时调用 有三个参数
  componentDidUpdate(previProps,prevState,snapShot){
    console.log('执行组件的componentDidUpdate方法');
  }
}
