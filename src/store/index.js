import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import forbiddenWordsMiddleware from '../middleware/index';
import combineReducers from '../reducers/index';

const store = createStore(
  combineReducers,
  composeWithDevTools(
    applyMiddleware(
      forbiddenWordsMiddleware,
      logger,
      thunk,
    ),
  ),
);

export default store;
