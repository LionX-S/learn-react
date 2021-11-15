import React, { PureComponent } from 'react';
import {addAction,decreAction} from './action/index';
import {connect} from './utils/connect'

class App extends PureComponent {
  
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={e => this.props.increNum(1)}>+1</button>
        <button onClick={e => this.props.decreNum(1)}>-1</button>
      </div>
    )
  }

}
const mapStateToProps = state => ({
  counter: state.counter
});
const mapDispatchToProps = dispatch => ({
  increNum(number) {
    dispatch(addAction(number))
  },
  decreNum(number) {
    dispatch(decreAction(number))
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(App)