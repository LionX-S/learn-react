import React, { PureComponent } from 'react'

// 劫持生命周期函数；查看渲染时间
function getRenderTime(WrappedComponent) {
  return class newComponent extends PureComponent{
    UNSAFE_componentWillMount(){
      this.beginTime = Date.now();
    }
    componentDidMount() {
      this.endTime = Date.now();
      let mountTime = this.endTime - this.beginTime;
      console.log(mountTime)
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

class Home extends PureComponent{
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
const TimeHome = getRenderTime(Home);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome/>
      </div>
    )
  }
}
