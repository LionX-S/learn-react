import React, { PureComponent,createRef} from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.refTitle = createRef();
  }
  render() {
    return (
      <div>
        {/* 第一种方式：ref='xxx' */}
        <h2 ref='titleRef'>hello</h2>
        {/* 第二种使用方式 ref={} react推荐*/}
        <h2 ref={this.refTitle}>hello react</h2>
        {/* 第三种方式：回调函数的方式 */}
        <h2 ref={arg => this.titleEl = arg}>hello 世界</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    )
  }
  changeText(){
    // 使用方式一
    this.refs.titleRef.innerHTML = 'hello world';
    // 使用方式二
    console.log(this.refTitle.current);
    this.refTitle.current.innerHTML = 'hahahaha';
    // 使用方式三
    console.log(this.titleEl);
    this.titleEl.innerHTML = 'hello world'
  }
}
