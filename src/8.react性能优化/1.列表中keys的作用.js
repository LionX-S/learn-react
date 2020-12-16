import React, { Component } from 'react'
// react会使用key来匹配原有树上的子元素以及最新树上的子元素，复用的复用，位移的位移即可，最好不要用下标
// key应该是唯一的；key不要使用随机数；使用index使用key，对性能是没有优化的
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: ['大话西游','盗梦空间']
    }
  }
  render() {
    return (
      <div>
        <h2>电影列表</h2>
        {this.state.movies.map((item,index) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
        <button onClick={() => this.addMovie()}>+</button>
      </div>
    )
  }
  addMovie(){
    this.setState({
      movies:['18Jin',...this.state.movies]
    })
  }
}
