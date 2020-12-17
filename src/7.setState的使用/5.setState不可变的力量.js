import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      friends:[
        {name:'lili',age:20},
        {name:'lilei',age:22},
        {name:'hmm',age:24}
      ]
    }
  }
  // shouldComponentUpdate(newProps,newState){
  //   if(newState.friends !== this.state.friends){
  //     return true;
  //   }
  //   return false
  // }
  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((item,index) => {
            return <li key={item.name}>
              姓名：{item.name}，年龄{item.age}
              <button onClick={() => this.addAge(index)}>age+1</button>
            </li>
          })}
        </ul>
        <button onClick={() => this.addItem()}>添加数据</button>
      </div>
    )
  }

  addItem(){
    // 不建议这样做 因为这是在原有的state上直接更改，但是如果通过scu(shouldComponentUpdata)优化，页面不会进行刷新
    // 因为两次的state都指向的同一个
    let item = {name:'kkk',age:78};
    // this.state.friends.push(item);
    // this.setState({
    //   friends:this.state.friends
    // })

    // 建议新建一个数组（即一个新对象）来进行更改
    let newArr = [...this.state.friends];
    newArr.push(item);
    this.setState({
      friends:newArr
    })
  }

  addAge(index){
    let newArr = [...this.state.friends];
    newArr[index].age += 1;
    this.setState({
      friends:newArr
    })
  }
}
