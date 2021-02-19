import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/index';

const Users = () => {
  const users = useSelector(state => state.usersState);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchUsers());
    },
    [],
  );
  return (
    <ul>
      {users.data.map(
        element => (
          <li key={element.id}>{ element.name }</li>
        ),
      )}
    </ul>
  );
};

export default Users;
