import React, { PureComponent } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Home from './Home';

const MainButton = styled.button`
  padding:10px;
  border:1px solid #ccc;
  background-color: #403573;
  color:#fff;
`;
// 实现继承，一些公共的样式就不用再写
const PrimaryButton = styled(MainButton)`
  background-color:lightblue;
`;

/* 主题：类似与context，这样子组件就能共享一些数据，比如主题颜色等 */
export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themeColor:'red',fontSize:'30px'}}>
        <MainButton>我是主要按钮</MainButton>
        <PrimaryButton>我是primary按钮</PrimaryButton>
        {/* Home会共享theme的数据 */}
        <Home/>
      </ThemeProvider>
    )
  }
}
