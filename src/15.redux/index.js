import React, { PureComponent } from 'react';
import store from './store/index';
import {addAction,decreAction} from './action/index';

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={e => this.increNum(1)}>+1</button>
        <button onClick={e => this.decreNum(1)}>-1</button>
      </div>
    )
  }

  increNum(num){
    store.dispatch(addAction(num));
  }
  decreNum(num){
    store.dispatch(decreAction(num));
  }
}
