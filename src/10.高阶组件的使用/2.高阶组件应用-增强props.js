import React, { PureComponent } from 'react'

// 如各个子组件都有显示一样的数据，此时就用到高阶组件
function enhanceComponent(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region='中国'/>
  }
}

class Home extends PureComponent{
  render() {
    return (
      <div>
        Home:{`昵称：${this.props.name} level:${this.props.level} 区域：${this.props.region}`}
      </div>
    )
  }
}
class About extends PureComponent{
  render() {
    return (
      <div>
        About:{`昵称：${this.props.name} level:${this.props.level} 区域：${this.props.region}`}
      </div>
    )
  }
}
const EnhanceHome = enhanceComponent(Home);
const EnhanceAbout = enhanceComponent(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name="fyy" level={90}/>
        <EnhanceAbout name='fredy' level={100}/>
      </div>
    )
  }
}
