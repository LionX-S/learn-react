import {createStore} from 'redux';
import numReducer from "../reducer/index";

const store = createStore(numReducer);

export default store;