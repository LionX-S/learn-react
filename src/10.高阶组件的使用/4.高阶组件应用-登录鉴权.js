import React, { PureComponent } from 'react'

class Login extends PureComponent{
  render() {
    return (
      <div>
        <h2>Login</h2>
      </div>
    )
  }
}
class Car extends PureComponent{
  render() {
    return (
      <div>
        <h2>carpage</h2>
      </div>
    )
  }
}

function enhanceCpn(WrappedComponent) {
  return props => {
    const {isLogin} = props;
    if(isLogin){
      return <WrappedComponent {...props}/>
    }else{
      return <Login/>
    }
  }
}

const EnCar = enhanceCpn(Car);
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnCar isLogin={true}/>
      </div>
    )
  }
}
