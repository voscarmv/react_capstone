import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/index';

const Users = () => {
  const users = useSelector(state => state.usersState);
  const dispatch = useDispatch();
  // const handleClick = disp => {
  //   useEffect(
  //     () => {
  //       disp(fetchUsers());
  //     },
  //     [],
  //   );
  // };
  dispatch(fetchUsers());
  return (
    <div>
      <button type="submit" onClick={() => dispatch(fetchUsers())}>Users</button>
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
