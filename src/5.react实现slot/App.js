import React, { Component } from 'react'
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import './style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 第一种方式：比较局限性，顺序不能乱 */}
        {/* 组件中的内容会被传递到props.children数组中 */}
        <NavBar>
          <span>左边</span>
          <div>中间</div>
          <a href="/#">右边</a>
        </NavBar>
        {/* 第二种方式：将jsx组件当成props传递 推荐这种方式*/}
        <NavBar2 left={<span>左边</span>} center={<div>中间</div>} right={<a href="/#">右边</a>}/>
      </div>
    )
  }
}
