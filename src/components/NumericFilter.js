import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

const NumericFilter = forwardRef(
  (props, ref) => {
    const {
      name,
      disabled,
      handleChange,
    } = props;
    return (
      <label className={`ml-auto${!disabled ? ' d-none' : ''}`} htmlFor={name} data-testid={name}>
        <span>{name.replace(/^\w/, c => c.toUpperCase()).split('_').join(' ')}</span>
        <input ref={ref} className="mr-3 ml-1" disabled={!disabled} onChange={handleChange} type="number" id={name} defaultValue="1" min="1" max="5" />
      </label>
    );
  },
);

NumericFilter.propTypes = {
  name: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
};

NumericFilter.displayName = 'NumericFilterComponent';

export default NumericFilter;
