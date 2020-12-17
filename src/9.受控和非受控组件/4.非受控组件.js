import React, { PureComponent,createRef} from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.inputVal = createRef();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.inputVal}/>
          <button onClick={() => this.handleClick()}>获取</button>
        </form>
      </div>
    )
  }
  handleSubmit(evnet){
    evnet.preventDefault();
  }
  handleClick(){
    console.log(this.inputVal.current.value);
  }
}
