import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";

class Home extends PureComponent{
  render() {
    return (
      <div>
        <h2>home</h2>
        <Modal>
          <h2>title</h2>
        </Modal>
      </div>
    )
  }
}

class Modal extends PureComponent{
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('modal')
    )
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
