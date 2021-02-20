import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBreeds } from '../actions/index';

const Users = () => {
  const users = useSelector(state => state.breedState);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" onClick={() => dispatch(fetchBreeds())}>Users</button>
      <ul>
        {users.data.map(
          element => (
            <li key={element.id}>{ element.name }</li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Users;
