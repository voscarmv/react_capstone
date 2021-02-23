import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBreeds } from '../actions/index';

const Users = () => {
  const breeds = useSelector(state => state.breedState);
  const filter = useSelector(state => state.filterState);
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
  const allNull = obj => {
    const values = Object.values(obj);
    for (let i = 0; i < values.length; i += 1) {
      if (values[i] !== null) {
        return false;
      }
    }
    return true;
  };
  return (
    <div>
      <button type="submit" onClick={() => dispatch(fetchBreeds())}>Users</button>
      <select onChange={handleSelectChange}>
        {breeds.data.filter(
          breed => {
            if (allNull(filter)) {
              return true;
            }
            if (breed.experimental.toString() === filter.experimental) {
              return true;
            }
            // if (breed.natural === filter.natural) {
            //   return true;
            // }
            // if (breed.rare === filter.rare) {
            //   return true;
            // }
            // if (breed.child_friendly === filter.child_friendly) {
            //   return true;
            // }
            if (breed.intelligence.toString() === filter.intelligence) {
              return true;
            }
            // if (breed.affection_level === filter.affection_level) {
            //   return true;
            // }
            return false;
          },
        ).map(
          breed => (
            <option value={breed.id} key={breed.id}>{ breed.name }</option>
          ),
        )}
      </select>
    </div>
  );
};

export default Users;
