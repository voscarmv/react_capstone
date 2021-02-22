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
        property: e.target.label,
        value: e.target.value,
      },
    );
  };
  const handleSubmit = () => {
    // eslint-disable-next-line no-alert
    alert(filter);
  };
  return (
    <form>
      <label htmlFor="experimental">
        Experimental
        <input onChange={handleChange} type="checkbox" id="experimental" value="Experimental" />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default filterForm;
