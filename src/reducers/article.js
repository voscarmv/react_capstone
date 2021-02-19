import { ADD_ARTICLE } from '../actions/action-types';

const initialState = {
  articles: [],
};

const articleReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: state.articles.concat(action.payload) };
  }
  return state;
};

export default articleReducer;
