import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBreeds } from '../actions/index';

const Users = () => {
  const breeds = useSelector(state => state.breedState);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchBreeds());
    },
    [],
  );
  const handleSelectChange = e => {
    // eslint-disable-next-line no-alert
    alert(e.target.value);
  };
  return (
    <div>
      <button type="submit" onClick={() => dispatch(fetchBreeds())}>Users</button>
      <select onChange={handleSelectChange}>
        {breeds.data.map(
          element => (
            <option value={element.id} key={element.id}>{ element.name }</option>
          ),
        )}
      </select>
    </div>
  );
};

export default Users;
