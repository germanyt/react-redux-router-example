import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from '../reducer/index';

let logger = createLogger();

let createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export default createStoreWithMiddleware(reducer);

