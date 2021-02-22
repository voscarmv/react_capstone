import { FILTER } from '../actions/action-types';

const initialState = {
  experimental: 0,
  natural: 0,
  rare: 0,
  child_friendly: 0,
  intelligence: 0,
  affection_level: 0,
};

const filterReducer = (state = initialState, action) => {
  if (action.type === FILTER) {
    return { ...state, [action.payload.property]: action.payload.value };
  }
  return state;
};

export default filterReducer;
