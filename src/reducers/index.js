import { combineReducers } from 'redux';
import breedMenuReducer from './breedmenu';
import catReducer from './cat';
import filterReducer from './filter';

export default combineReducers({
  breedState: breedMenuReducer,
  filterState: filterReducer,
  catState: catReducer,
});
