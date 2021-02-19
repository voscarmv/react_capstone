import {
  ADD_ARTICLE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './action-types';

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersError = error => ({ type: FETCH_USERS_ERROR, payload: error });
export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersRequest());
  (
    async () => {
      try {
        const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersJSON = await getUsers.json();
        dispatch(fetchUsersSuccess(usersJSON));
      } catch (e) {
        dispatch(fetchUsersError(e));
      }
    }
  )();
};

export default addArticle;
