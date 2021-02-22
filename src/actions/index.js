import {
  ADD_ARTICLE,
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FILTER,
} from './action-types';

export const filter = payload => ({ type: FILTER, payload });
export const addArticle = payload => ({ type: ADD_ARTICLE, payload });
export const fetchBreedsRequest = () => ({ type: FETCH_BREEDS_REQUEST });
export const fetchBreedsSuccess = users => ({ type: FETCH_BREEDS_SUCCESS, payload: users });
export const fetchBreedsError = error => ({ type: FETCH_BREEDS_ERROR, payload: error });
export const fetchBreeds = () => dispatch => {
  dispatch(fetchBreedsRequest());
  (
    async () => {
      try {
        const getBreeds = await fetch('https://api.thecatapi.com/v1/breeds');
        const breedsJSON = await getBreeds.json();
        dispatch(fetchBreedsSuccess(breedsJSON));
      } catch (e) {
        dispatch(fetchBreedsError(e));
      }
    }
  )();
};

export default addArticle;
