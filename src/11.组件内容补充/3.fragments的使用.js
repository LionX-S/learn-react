import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <Fragment>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick = { () => this.incerment()}>+</button>
      </Fragment>
    )
  }

  incerment(){
    this.setState({
      counter: this.state.counter+1
    })
  }
}
