import fetch from 'node-fetch';
import {
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_ERROR,
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  UPDATE_FILTER,
} from './action-types';

export const updateFilter = payload => ({ type: UPDATE_FILTER, payload });
export const fetchBreedsRequest = () => ({ type: FETCH_BREEDS_REQUEST });
export const fetchBreedsSuccess = breeds => ({ type: FETCH_BREEDS_SUCCESS, payload: breeds });
export const fetchBreedsError = error => ({ type: FETCH_BREEDS_ERROR, payload: error });
export const fetchCatRequest = () => ({ type: FETCH_CAT_REQUEST });
export const fetchCatSuccess = cat => ({ type: FETCH_CAT_SUCCESS, payload: cat });
export const fetchCatError = error => ({ type: FETCH_CAT_ERROR, payload: error });
export const fetchBreeds = () => async dispatch => {
  dispatch(fetchBreedsRequest());
  try {
    const getBreeds = await fetch('https://api.thecatapi.com/v1/breeds');
    const breedsJSON = await getBreeds.json();
    dispatch(fetchBreedsSuccess(breedsJSON));
  } catch (e) {
    dispatch(fetchBreedsError(e));
  }
};
export const fetchCat = breed => async dispatch => {
  dispatch(fetchCatRequest());
  const xAPIKey = 'x-api-key';
  try {
    const getCat = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_id=${breed}`,
      {
        headers: {
          [xAPIKey]: '20874f76-4233-4e78-9f44-e30c018c07e8',
        },
      },
    );
    const catJSON = await getCat.json();
    dispatch(fetchCatSuccess(catJSON));
  } catch (e) {
    dispatch(fetchCatError(e));
  }
};
