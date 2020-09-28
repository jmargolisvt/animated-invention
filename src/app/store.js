import { applyMiddleware, createStore, compose } from '@reduxjs/toolkit';
import middleware, { sagaMiddleware, socketMiddleware } from './middleware';
import rootSaga, { startSocket } from '../sagas/messages';
import messageReducer from '../reducers';

const initialState = {
	messages: [],
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
  const store = createStore(messageReducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);
  socketMiddleware.run(startSocket);

  return {
    store,
  };
};

const { store } = configStore(initialState);

export default store;
