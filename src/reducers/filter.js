import { UPDATE_FILTER } from '../actions/action-types';

const initialState = {
  experimental: null,
  hairless: null,
  natural: null,
  rare: null,
  suppressed_tail: null,
  short_legs: null,
  hypoallergenic: null,
  adaptability: null,
  affection_level: null,
  child_friendly: null,
  dog_friendly: null,
  energy_level: null,
  grooming: null,
  health_issues: null,
  intelligence: null,
  shedding_level: null,
  social_needs: null,
  stranger_friendly: null,
  vocalisation: null,
};

const filterReducer = (state = initialState, action) => {
  if (action.type === UPDATE_FILTER) {
    return { ...state, [action.payload.property]: action.payload.value };
  }
  return state;
};

export default filterReducer;
