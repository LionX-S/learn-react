import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

// 定义高阶组件
// 所有组件都可以自定义展示名称：如 App.displayName = 'name',为了在调试工具中展示
// function enhanceComponent(WrappedComponent) {
//   return class NewComponent extends PureComponent{
//     render() {
//       // 传递props
//       return <WrappedComponent {...this.props}/>
//     }
//   }
// }

// 高阶组件返回函数式组件
function enhanceComponent(WrappedComponent) {
  function newComponent(props) {
    return <WrappedComponent {...props}/>
  }
  newComponent.displayName = 'ACC';
  return newComponent;
}

export default enhanceComponent(App);