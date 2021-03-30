import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
} from '../actions/action-types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const catReducer = (state = initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  } if (action.type === FETCH_CAT_SUCCESS) {
    return {
      loading: false,
      data: action.payload,
      error: '',
    };
  } if (action.type === FETCH_CAT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default catReducer;
