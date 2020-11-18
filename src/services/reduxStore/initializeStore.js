import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';
import Reactotron from 'reactotron-react-native';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const testEnvironmentEnhancer = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = testEnvironmentEnhancer || compose;

var store;
if (testEnvironmentEnhancer) {
  store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(createPromise(), thunk, createLogger()),
      Reactotron.createEnhancer(),
    ),
  );
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(createPromise(), thunk, createLogger()),
  );
}

const storeStyle = {
  viewStyle: {
    flex: 1,
  },
};

export default () => {
  return { store, store, storeStyle };
}
