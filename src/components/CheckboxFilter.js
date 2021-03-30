import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

const CheckboxFilter = forwardRef(
  (props, ref) => {
    const {
      ename,
      disabled,
      handleChange,
    } = props;
    return (
      <label className={`ml-auto${!disabled ? ' d-none' : ''}`} htmlFor={ename} data-testid={ename}>
        <span>{ename.replace(/^\w/, c => c.toUpperCase()).split('_').join(' ')}</span>
        <input ref={ref} className="mr-3 ml-1" disabled={!disabled} onChange={handleChange} type="checkbox" id={ename} value={ename} />
      </label>
    );
  },
);

CheckboxFilter.propTypes = {
  ename: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
};

CheckboxFilter.displayName = 'CheckboxFilterComponent';

export default CheckboxFilter;
