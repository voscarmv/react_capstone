import React from 'react';
import propTypes from 'prop-types';

const CheckboxFilter = ({
  name,
  ref,
  disabled,
  handleChange,
}) => (
  <label className="ml-auto" htmlFor={name}>
    {name}
    <input ref={ref} className="ml-2" disabled={disabled} onChange={handleChange} type="checkbox" id={name} value={name} />
  </label>
);

CheckboxFilter.propTypes = {
  name: propTypes.string.isRequired,
  ref: propTypes.elementType.isRequired,
  disabled: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default CheckboxFilter;
