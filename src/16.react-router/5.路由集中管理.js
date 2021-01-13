import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import routes from './router'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        {/* 使用renderRoutes渲染，代替Route */}
        {renderRoutes(routes)}
      </div>
    )
  }
}
