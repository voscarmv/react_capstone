import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../actions/index';

const filterForm = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(
    {},
  );
  useEffect(
    () => {
      dispatch(updateFilter(filter));
    },
  );
  const handleChange = e => {
    let value = 0;
    let property = '';
    if (e.target.type === 'checkbox') {
      property = e.target.value;
      value = e.target.checked ? '1' : '0';
    } else {
      property = e.target.id;
      value = e.target.value;
    }
    setFilter(
      {
        property,
        value,
      },
    );
  };
  return (
    <form>
      <label htmlFor="experimental">
        Experimental
        <input onChange={handleChange} type="checkbox" id="experimental" value="experimental" />
      </label>
      <label htmlFor="intelligence">
        Intelligence
        <input onChange={handleChange} type="number" id="intelligence" defaultValue="1" min="1" max="5" />
      </label>
    </form>
  );
};

export default filterForm;
