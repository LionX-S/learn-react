import React, { PureComponent } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './2.SwitchTransition.css';

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isOn: true
    }
  }
  render() {
    const {isOn} = this.state;
    return (
      <div style={{textAlign:'center'}}>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={isOn?'on':'off'}
                         classNames='onBtn'
                         timeout={500}>
            <button onClick={e => this.setState({isOn: !isOn})}>{isOn? "on" : "off"}</button>
          </CSSTransition>
        </SwitchTransition>  
      </div>
    )
  }
}
