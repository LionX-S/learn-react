import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './15.redux/3.组件的异步操作/store'; //路径不正确，根据真实来
// import App from './1.组件的定义方式/1.组件的定义';
// import App from './2.组件的生命周期/App'
// import App from './3.组件的数据传递/2.父传子通信-类组件'
// import App from './3.组件的数据传递/4.父传子通信-属性验证'
// import App from './3.组件的数据传递/5.子传父通信-函数传递'
import App from './3.组件的数据传递/6.兄弟组件通信(全局事件)'
// import App from './4.组件通信案例/App'
// import App from './5.react实现slot/App'
// import App from './6.跨组件通信/1.跨组件通信'
// import App from './7.setState的使用/2.setState是异步更新'
// import App from './8.react性能优化/1.列表中keys的作用';
// import App from './8.react性能优化/2.组件嵌套的render调用优化';
// import App from './7.setState的使用/5.setState不可变的力量';
// import App from './3.组件的数据传递/6.全局事件传递';
// import App from './9.受控和非受控组件/1.refs的使用';
// import App from './9.受控和非受控组件/3.受控组件多输入';
// import App from './10.高阶组件的使用/1.高阶组件的定义方式';
// import App from './10.高阶组件的使用/2.高阶组件应用-增强props';
// import App from './10.高阶组件的使用/3.高阶组件应用-增强props';
// import App from './10.高阶组件的使用/4.高阶组件应用-登录鉴权';
// import App from './10.高阶组件的使用/5.高阶组件应用-生命周期劫持';
// import App from './11.组件内容补充/3.fragments的使用';
// import App from './12.react中的样式/1.内联样式';
// import App from './12.react中的样式/2.css in js';
// import App from './12.react中的样式/3.styled-components高级(特点)';
// import App from './12.react中的样式/4.styled中的继承与设置主题';
// import App from './14.react过渡动画与纯函数的使用/1.CSSTransition';
// import App from './14.react过渡动画与纯函数的使用/2.SwitchTransition';
// import App from './14.react过渡动画与纯函数的使用/3.TransitionGroup';
// import App from './15.redux/index';
// import App from './15.redux/1.redux的基本使用';
// import App from './15.redux/3.组件的异步操作/1.异步操作基本过程';
// import App from './15.redux/3.组件的异步操作/2.redux-thunk的基本使用';
// import App from './16.react-router/1.基本使用';
// import App from './16.react-router/2.更多路由组件';
// import App from './16.react-router/3.手动跳转';
// import App from './16.react-router/5.路由集中管理';
// import App from './17.react-hooks/1.计数器实现-类组件';
// import App from './17.react-hooks/1.计数器-hook';
// import App from './17.react-hooks/2.多个状态和复杂状态的使用';
// import App from './17.react-hooks/3.useEffect';
// import App from './17.react-hooks/6.useContext的使用';
// import App from './17.react-hooks/7.useReducer的使用';

import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
