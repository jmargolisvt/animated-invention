import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import middleware, { sagaMiddleware } from './middleware';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(require('reducers/index').default);
    });
  }

  return {
    store,
  };
};

const { store } = configStore();
