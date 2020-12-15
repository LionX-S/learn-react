import React, { Component } from 'react'

export default class NavBar2 extends Component {
  render() {
    const {left,center,right} = this.props;
    return (
      <div className='NavBar'>
        <div className='navbar-left'>
          {left}
        </div>
        <div className='navbar-center'>
          {center}
        </div>
        <div className='navbar-right'>
          {right}
        </div>
      </div>
    )
  }
}
