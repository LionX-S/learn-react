import React, { PureComponent } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

function Story(props) {
  return (
    <div>
      故事
    </div>
  )
}

function Culture(props) {
  return (
    <div>
      文化
    </div>
  )
}
export default class About extends PureComponent {
  render() {
    return (
      <div>
        {/* 嵌套路由 */}
        <NavLink to='/about'>故事</NavLink>
        <NavLink to='/about/culture'>文化</NavLink>

        <Switch>
          <Route path='/about' component={Story} exact/>
          <Route path='/about/culture' component={Culture}/>
        </Switch>
      </div>
    )
  }
}
