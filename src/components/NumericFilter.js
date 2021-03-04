import React from 'react';
import propTypes from 'prop-types';

const NumericFilter = ({
  name,
  ref,
  disabled,
  handleChange,
}) => (
  <label className="ml-auto" htmlFor={name}>
    {name}
    <input ref={ref} className="ml-2" disabled={!disabled} onChange={handleChange} type="number" id={name} defaultValue="1" min="1" max="5" />
  </label>
);

NumericFilter.propTypes = {
  name: propTypes.string.isRequired,
  ref: propTypes.elementType.isRequired,
  disabled: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default NumericFilter;
