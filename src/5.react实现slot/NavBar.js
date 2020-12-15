import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        {/* 第一种方式：比较局限性，顺序不能乱 */}
        {/* 组件中的内容会被传递到props.children数组中 */}
        <div className='navbar-left'>
          {this.props.children[0]}
        </div>
        <div className='navbar-center'>
          {this.props.children[1]}
        </div>
        <div className='navbar-right'>
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}
