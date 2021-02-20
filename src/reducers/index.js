import { combineReducers } from 'redux';
import articleReducer from './article';
import breedMenuReducer from './breedmenu';

export default combineReducers({
  articlesState: articleReducer,
  breedState: breedMenuReducer,
});
