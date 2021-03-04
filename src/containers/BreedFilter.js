import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../actions/index';
import CheckboxFilter from '../components/CheckboxFilter';
import EnableFilter from '../components/EnableFilter';
import NumericFilter from '../components/NumericFilter';

const filterForm = () => {
  const dispatch = useDispatch();
  // const isCheckbox = {
  //   experimental: true,
  //   hairless: true,
  //   natural: true,
  //   rare: true,
  //   suppress_tail: true,
  //   short_legs: true,
  //   hypoallergenic: true,
  //   adaptability: false,
  //   affection_level: false,
  //   child_friendly: false,
  //   dog_friendly: false,
  //   energy_level: false,
  //   grooming: false,
  //   health_issues: false,
  //   intelligence: false,
  //   shedding_level: false,
  //   social_needs: false,
  //   stranger_friendly: false,
  //   vocalisation: false,
  // };
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
    <div className="bg-dark text-light p-3">
      <form className="d-flex flex-column">
        <div className="ml-auto mr-3 font-weight-bold">
          Filter by
        </div>
        <EnableFilter name="experimental" handleEnabled={handleEnabled} />
        {/* <label className="ml-auto" htmlFor="experimental">
          Experimental
          <input onChange={handleEnabled} className="ml-2" type="checkbox"
          id="experimental_disabled" value="experimental_disabled" />
        </label> */}
        <label className="ml-auto" htmlFor="experimental">
          Intelligence
          <input onChange={handleEnabled} className="ml-2" type="checkbox" id="intelligence_disabled" value="intelligence_disabled" />
        </label>
        <hr />
        <div className="ml-auto mr-3 font-weight-bold">
          Filter preferences
        </div>
        <CheckboxFilter ename="experimental" ref={refs.experimental} disabled={enabled.experimental_disabled} onChange={handleChange} />
        {/* <label className="ml-auto" htmlFor="experimental">
          Experimental
          <input ref={refs.experimental} className="ml-2"
          disabled={enabled.experimental_disabled} onChange={handleChange} type="checkbox"
          id="experimental" value="experimental" />
        </label> */}
        <NumericFilter name="intelligence" ref={refs.intelligence} disabled={enabled.intelligence_disabled} onChange={handleChange} />
        {/* <label className="ml-auto" htmlFor="intelligence">
          Intelligence
          <input ref={refs.intelligence} className="ml-2"
          disabled={enabled.intelligence_disabled} onChange={handleChange} type="number"
          id="intelligence" defaultValue="1" min="1" max="5" />
        </label> */}
      </form>
    </div>
  );
};

export default filterForm;
