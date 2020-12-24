import React, { PureComponent,createContext } from 'react'

// 通过context共享数据,且通过高阶组件的方式包裹

const UserContext = new createContext({
  name:'aaa',
  level:-1,
  region:'cn'
})

function enhanceComponent(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <WrappedComponent {...props} {...value}/>
          }
        }
      </UserContext.Consumer>
    )
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

const EnHome = enhanceComponent(Home);
const EnAbout = enhanceComponent(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{name:'32',level:90,region:'cn'}}>
          <EnHome/>
          <EnAbout/>
        </UserContext.Provider>
      </div>
    )
  }
}
