import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  middleware.push(createLogger({ collapsed: true }));
}

export default middleware;
