
 /**
 * Returns a redux store with redux-thunk and redux-logger middleware included.
 * @return {*} obj
 */

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
    /* loggerMiddleware */
  )
);

export default store;