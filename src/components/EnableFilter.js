import React from 'react';
import propTypes from 'prop-types';

const EnableFilter = ({ name, handleEnabled }) => (
  <label className="ml-auto" htmlFor={name}>
    {name}
    <input onChange={handleEnabled} className="ml-2" type="checkbox" id={name} value={name} />
  </label>
);

EnableFilter.propTypes = {
  name: propTypes.string.isRequired,
  handleEnabled: propTypes.func.isRequired,
};

export default EnableFilter;
