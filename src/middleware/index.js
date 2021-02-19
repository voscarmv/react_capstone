import { ADD_ARTICLE } from '../actions/action-types';

const forbiddenWordsMiddleware = store => next => action => {
  const forbiddenWords = ['spam', 'money'];
  if (action.type === ADD_ARTICLE) {
    const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));

    if (foundWord.length) {
      return store.dispatch({ type: 'FOUND_BAD_WORD' });
    }
  }
  return next(action);
};

export default forbiddenWordsMiddleware;
