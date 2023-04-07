import React, { PureComponent } from 'react';
import {EventEmitter} from 'events';

// 兄弟组件通信 Propfile组件给home组件发送一个hellohome字符

// 事件总线：event bus  需要用到events库
// 第一步：先生成一个事件
const eventBus = new EventEmitter();

class Home extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      msg:''
    }
  }
  componentDidMount(){
    // 第三步
    // 添加订阅 第一个参数就是事件名，第二个参数为回调函数
    eventBus.addListener('sendHello', this.handleSayHello);
  }
  componentWillUnmount(){
    // 第四步
    // 取消订阅，以及把他的回调也取消
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
        <button onClick={() => this.emitEvent()}>点击</button>
      </div>
    )
  }
  emitEvent(){
    // 第二步：发出事件，第一个参数为事件名称，后面可以跟参数
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
