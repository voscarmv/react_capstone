import { combineReducers } from 'redux';
import articleReducer from './article';
import breedMenuReducer from './breedmenu';
import filterReducer from './filter';

export default combineReducers({
  articlesState: articleReducer,
  breedState: breedMenuReducer,
  filterState: filterReducer,
});
