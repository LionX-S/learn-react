import React, { Component, PureComponent,memo } from 'react'

// 例如这种情况：
// 我点击按钮增加counter，但与别的组件无关，别的组件不应该调用render；但实际是调用的，这就不合理，浪费性能
function Header() {
  console.log('Header 调用');
  return <h2>Header组件</h2>
}
// function Banner() {
//   console.log('Banner 调用');

//   return <h2>Banner组件</h2>
// }
class Banner extends PureComponent {
  render() {
    console.log('Banner 调用')
    return (
      <div>
        <h2>Banner组件</h2>
      </div>
    )
  }
}
const MemoMain = memo(function Main() {
  console.log('Main 调用');
  return <h2>Main组件</h2>
});
// function Main() {
//   console.log('Main 调用');
//   return <h2>Main组件</h2>
// }
function Footer() {
  console.log('Footer 调用');
  return <h2>Footer组件</h2>
}
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
  console.log('App 调用');
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
        <Header/>
        <Banner/>
        <MemoMain/>
        <Footer/>
      </div>
    )
  }
  // 1.可以通过shouldComponentUpdate控制，调不调用render,就是只有在view中依赖的state数据才进行render重新渲染，这个方法返回true才会调用
  // render函数，false则不会。
  // 2.第二种方法：类组件不要继承Component，而是继承PureComponent，PureComponent会对props/state进行浅层比较，如果有变化才会返回true，
  // 调用shouldComponentUpdate，调用render。但解决不了函数式组件
  // 3.memo 也是决定要不要重新渲染。memo是一个高阶组件，将不需要渲染的函数式组件传递进去


  // shouldComponentUpdate(nextProps,nextState){
  //   if(this.state.counter !== nextState.counter){
  //     return true;
  //   }
  //   return false;
  // }
  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
