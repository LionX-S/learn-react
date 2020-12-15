import React, { Component } from 'react';
import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props){
    super(props);
    this.category = ['新款','流行','精选'];
    this.state ={
      currentTitle:'新款'
    }
  }
  render() {
    const {category,currentTitle} = this.state;
    return (
      <div>
        <TabControl itemClick={index => this.itemClick(index)} titles = {this.category}/>
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  itemClick(index){
    console.log(index);
    this.setState({
      currentTitle: this.category[index]
    })
  }
}
