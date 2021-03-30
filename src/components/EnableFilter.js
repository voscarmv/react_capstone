import React from 'react';
import propTypes from 'prop-types';

const EnableFilter = ({ name, handleEnabled }) => (
  <label className="ml-auto" htmlFor={name}>
    {name.replace(/^\w/, c => c.toUpperCase()).split('_').join(' ')}
    <input onChange={handleEnabled} className="mr-3 ml-1" type="checkbox" id={name} value={name} data-testid={`${name}_enable`} />
  </label>
);

EnableFilter.propTypes = {
  name: propTypes.string.isRequired,
  handleEnabled: propTypes.func.isRequired,
};

export default EnableFilter;
