import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Join from './pages/Join';

class App extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={() => {this.jump()}}>加入我们</button>
        <Route path='/join' component={Join} />
      </div>
    )
  }
  jump(){
    this.props.history.push('/join');
  }
}

// 使用高阶组件withRouter进行处理
export default withRouter(App);