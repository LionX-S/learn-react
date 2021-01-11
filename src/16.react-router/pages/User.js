import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom';

export default class User extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      isLogin: true
    }
  }
  render() {
    return this.state.isLogin ? (
      <div>
        用户界面
      </div>
    ) : <Redirect to='/login'/>
      // 重定向组件
  }
}
