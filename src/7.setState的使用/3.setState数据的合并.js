import React, { Component } from 'react'


// 1.如果直接修改state，react不会重新渲染页面；2.组件中可以直接使用setState是因为继承自Component
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'hello',
      name:'kkk'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
      </div>
    )
  }

  increment(){
    // setState 操作源码上是通过拷贝来更改的 Object.assign({},this.state,{message:'hello world'})
    this.setState({
      message: 'hello world'
    },() => {
      console.log(this.state.message)
    });
    // 会先输出，所以setState是异步的
    console.log(this.state.message);
  }
}
