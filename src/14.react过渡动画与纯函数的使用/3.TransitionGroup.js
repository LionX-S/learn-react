import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './3.TransitionGroup.css'
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state ={
      name: ['dkjf','adfs','dfasd']
    }
  }
  render() {
    return (
      <TransitionGroup>
        {
          this.state.name.map((item,index) => {
            return (
              <CSSTransition key={index}
                             classNames='name'
                             timeout={500}>
                <p>{item}</p>
              </CSSTransition>
            )
          })
        }
        <button onClick={e => this.addName()}>添加</button>
      </TransitionGroup>
    )
  }

  addName(){
    this.setState({
      name:[...this.state.name,'adffa']
    })
  }
}
