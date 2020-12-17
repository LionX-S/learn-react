import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      vaild:''
    }
  }
  render() {
    return (
      <div>
         <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            {/* 就是通过监听事件来改变state的值，然后再把state的值渲染到dom树中，这就是受控组件，数据流是单向的 */}
            <input type="text" id='username' name='username' onChange={e => this.handleChange(e)} value={this.state.username}/>
          </label>
          <br/>
          <label htmlFor="password">
            密码：
            {/* 就是通过监听事件来改变state的值，然后再把state的值渲染到dom树中，这就是受控组件，数据流是单向的 */}
            <input type="text" id='password' name='password' onChange={e => this.handleChange(e)} value={this.state.password}/>
          </label>
          <br/>
          <label htmlFor="vaild">
            验证码：
            {/* 就是通过监听事件来改变state的值，然后再把state的值渲染到dom树中，这就是受控组件，数据流是单向的 */}
            <input type="text" id='vaild' name='vaild' onChange={e => this.handleChange(e)} value={this.state.vaild}/>
          </label>
          <br/>
          <input type="submit" value='提交' onClick={() => this.handleClick()}/>
        </form>
      </div>
    )
  }

  // 多输入可以将公共方法抽离 如change方法
  handleChange(event){
    this.setState({
      // es6语法 计算属性
      [event.target.name]:event.target.value
    });
  }

  handleClick(){
    const {username,password,vaild} = this.state;
    console.log(username,password,vaild);
  }

  handleSubmit(event){
    event.preventDefault();
  }
}
