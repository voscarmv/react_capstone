import {
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
} from '../actions/action-types';

const initialState = {

  loading: false,
  data: [],
  error: '',
};

const breedMenuReducer = (state = initialState, action) => {
  if (action.type === FETCH_BREEDS_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  } if (action.type === FETCH_BREEDS_SUCCESS) {
    return {
      loading: false,
      data: action.payload,
      error: '',
    };
  } if (action.type === FETCH_BREEDS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default breedMenuReducer;
