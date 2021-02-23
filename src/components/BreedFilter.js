import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../actions/index';

const filterForm = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(
    {},
  );
  const [enabled, setEnabled] = useState(
    {
      experimental_disabled: true,
      intelligence_disabled: true,
    },
  );
  useEffect(
    () => {
      if (filter.property !== undefined) {
        dispatch(updateFilter(filter));
      }
    },
  );
  const DOMelement = element => {
    let value = 0;
    let property = '';
    if (element.type === 'checkbox') {
      property = element.value;
      value = element.checked ? '1' : '0';
    } else {
      property = element.id;
      value = element.value;
    }
    return {
      property,
      value,
    };
  };
  const handleChange = e => {
    const { property, value } = DOMelement(e.target);
    setFilter(
      {
        property,
        value,
      },
    );
  };
  const refs = {
    experimental: useRef(null),
    intelligence: useRef(null),
  };
  const handleEnabled = e => {
    setEnabled(
      {
        ...enabled,
        [e.target.value]: !e.target.checked,
      },
    );
    const element = e.target.value.split('_')[0];
    const { property, value } = DOMelement(refs[element].current);
    setFilter(
      {
        property,
        value: e.target.checked ? value : null,
      },
    );
  };
  return (
    <form>
      <label htmlFor="experimental">
        Filter by experimental
        <input onChange={handleEnabled} type="checkbox" id="experimental_disabled" value="experimental_disabled" />
      </label>
      <label htmlFor="experimental">
        Filter by intelligence
        <input onChange={handleEnabled} type="checkbox" id="intelligence_disabled" value="intelligence_disabled" />
      </label>
      <hr />
      <label htmlFor="experimental">
        Experimental
        <input ref={refs.experimental} disabled={enabled.experimental_disabled} onChange={handleChange} type="checkbox" id="experimental" value="experimental" />
      </label>
      <label htmlFor="intelligence">
        Intelligence
        <input ref={refs.intelligence} disabled={enabled.intelligence_disabled} onChange={handleChange} type="number" id="intelligence" defaultValue="1" min="1" max="5" />
      </label>
    </form>
  );
};

export default filterForm;
