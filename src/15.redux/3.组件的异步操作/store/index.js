import {createStore,applyMiddleware,compose} from 'redux';
import reducer from '../reducer';

// 引入thunk的中间件，通过applyMiddleware使用
import thunkMiddleware from 'redux-thunk';

//1. saga的使用
import createsagaMiddleware from 'redux-saga';

// 4. 引入迭代器文件，告诉saga应该拦截哪些请求
// import saga from './saga'

//2. saga需创建saga中间件
const sagaMiddleware = new createsagaMiddleware();


// redux开发工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;

// applyMiddleware应用中间件
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware)));

//3. saga中间件还得run
// sagaMiddleware.run();

export default store;