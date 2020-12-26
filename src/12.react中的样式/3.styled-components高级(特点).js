import React, { PureComponent } from 'react'
import styled from 'styled-components';

// props穿透 在组件中直接书写属性，会生效
const InputWra = styled.input`
  background-color:lightblue;
`;

// attrs的使用
const InputWra2 = styled.input.attrs({
  placeholder:'fyy',
  type:'text',
  bcolor:'red'
})`
  /* 通过箭头函数取上边的所有属性 */
  /* props包含了所有的属性 */
  border-color:${props => props.bcolor};
  /* 获取state中的属性 */
  /* 这里也会将组件中的props传递的值加到箭头函数的props中 */
  color:${props => props.color};
`;


export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      color:'blue'
    }
  }
  render() {
    return (
      <div>
        <input type="text"/>
        <InputWra type="text"/>
        {/* 通过props将state中的属性传递 */}
        <InputWra2 color={this.state.color}/>
      </div>
    )
  }
}
