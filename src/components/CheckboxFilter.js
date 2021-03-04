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
      <label className="ml-auto" htmlFor={ename}>
        {ename}
        <input ref={ref} className="ml-2" disabled={!disabled} onChange={handleChange} type="checkbox" id={ename} value={ename} />
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
