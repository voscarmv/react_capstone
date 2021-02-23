import { UPDATE_FILTER } from '../actions/action-types';

const initialState = {
  experimental: null,
  natural: null,
  rare: null,
  child_friendly: null,
  intelligence: null,
  affection_level: null,
};

const filterReducer = (state = initialState, action) => {
  if (action.type === UPDATE_FILTER) {
    return { ...state, [action.payload.property]: action.payload.value };
  }
  return state;
};

export default filterReducer;
