import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../actions/index';

const filterForm = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(
    {
      property: '',
      value: '',
    },
  );
  const handleChange = e => {
    setFilter(
      {
        property: e.target.value,
        value: e.target.checked,
      },
    );
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateFilter(filter));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="experimental">
        Experimental
        <input onChange={handleChange} type="checkbox" id="experimental" value="experimental" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default filterForm;
