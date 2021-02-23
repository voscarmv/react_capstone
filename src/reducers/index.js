import { combineReducers } from 'redux';
import articleReducer from './article';
import breedMenuReducer from './breedmenu';
import catReducer from './cat';
import filterReducer from './filter';

export default combineReducers({
  articlesState: articleReducer,
  breedState: breedMenuReducer,
  filterState: filterReducer,
  catState: catReducer,
});
