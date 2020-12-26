import React, { PureComponent } from 'react';
import {HomeWrapper,TitleWrapper} from './style/style';


export default class App extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        hello world
        <TitleWrapper>标题</TitleWrapper>
      </HomeWrapper>
    )
  }
}
