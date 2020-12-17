import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      username:''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* 就是通过监听事件来改变state的值，然后再把state的值渲染到dom树中，这就是受控组件，数据流是单向的 */}
            <input type="text" id='username' onChange={e => this.handleChange(e)} value={this.state.username}/>
          </label>
          <input type="submit" value='提交'/>
        </form>
      </div>
    )
  }
  handleSubmit(e){
    e.preventDefault();
  }
  handleChange(e){
    this.setState({
      username: e.target.value
    })
  }
}
