import React, { Component } from 'react'

function Header() {
  return <h2>Header组件</h2>
}
function Banner() {
  return <h2>Banner组件</h2>
}
function Main() {
  return <h2>Main组件</h2>
}
function Footer() {
  return <h2>Footer组件</h2>
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
