import { combineReducers } from 'redux';
import CustomerDataReducer from './CustomerDataReducer';

const appReducer = combineReducers({
  CustomerData: CustomerDataReducer,
});

export default (state, action) => {
  return appReducer(state, action);
};