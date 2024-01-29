import { createStore } from 'redux';
import authReducer from './reducers';

const store = createStore(authReducer);

export default store;