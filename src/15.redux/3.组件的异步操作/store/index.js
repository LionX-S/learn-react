import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducer';

import thunkMiddleware from 'redux-thunk';


// applyMiddleware应用中间件
const store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store;