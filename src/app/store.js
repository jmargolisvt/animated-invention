import { applyMiddleware, createStore, compose } from '@reduxjs/toolkit';
import middleware, { sagaMiddleware } from './middleware';
import rootSaga from '../sagas/index';
import messageReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
  const store = createStore(messageReducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return {
    store,
  };
};

const { store } = configStore();

export default store;
