import React, { PureComponent } from 'react';
import {EventEmitter} from 'events';

// 兄弟组件通信

// 事件总线：event bus  需要用到events库
const eventBus = new EventEmitter();

class Home extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      msg:''
    }
  }
  componentDidMount(){
    eventBus.addListener('sendHello', this.handleSayHello);
  }
  componentWillUnmount(){
    eventBus.removeListener('sendHello', this.handleSayHello);
  }
  handleSayHello = (msg,num) => {
    console.log(msg,num);
    this.setState({
      msg:msg
    })
  }
  render() {
    return (
      <div>
        Home:{this.state.msg}
      </div>
    )
  }
}
class Profile extends PureComponent{
  render() {
    return (
      <div>
        Propfile
        <button onClick={() => this.emmitEvent()}>点击</button>
      </div>
    )
  }
  emmitEvent(){
    eventBus.emit('sendHello','Hello Home',123);
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
