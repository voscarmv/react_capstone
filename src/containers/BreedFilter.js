import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../actions/index';
import CheckboxFilter from '../components/CheckboxFilter';
import EnableFilter from '../components/EnableFilter';
import NumericFilter from '../components/NumericFilter';

const filterForm = () => {
  const dispatch = useDispatch();
  const isCheckbox = {
    experimental: true,
    hairless: true,
    natural: true,
    rare: true,
    suppressed_tail: true,
    short_legs: true,
    hypoallergenic: true,
    adaptability: false,
    affection_level: false,
    child_friendly: false,
    dog_friendly: false,
    energy_level: false,
    grooming: false,
    health_issues: false,
    intelligence: false,
    shedding_level: false,
    social_needs: false,
    stranger_friendly: false,
    vocalisation: false,
  };
  const [filter, setFilter] = useState(
    {},
  );
  const [enabled, setEnabled] = useState(
    {
      experimental: false,
      hairless: false,
      natural: false,
      rare: false,
      suppressed_tail: false,
      short_legs: false,
      hypoallergenic: false,
      adaptability: false,
      affection_level: false,
      child_friendly: false,
      dog_friendly: false,
      energy_level: false,
      grooming: false,
      health_issues: false,
      intelligence: false,
      shedding_level: false,
      social_needs: false,
      stranger_friendly: false,
      vocalisation: false,
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
    hairless: useRef(null),
    natural: useRef(null),
    rare: useRef(null),
    suppressed_tail: useRef(null),
    short_legs: useRef(null),
    hypoallergenic: useRef(null),
    adaptability: useRef(null),
    affection_level: useRef(null),
    child_friendly: useRef(null),
    dog_friendly: useRef(null),
    energy_level: useRef(null),
    grooming: useRef(null),
    health_issues: useRef(null),
    intelligence: useRef(null),
    shedding_level: useRef(null),
    social_needs: useRef(null),
    stranger_friendly: useRef(null),
    vocalisation: useRef(null),
  };
  const handleEnabled = e => {
    setEnabled(
      {
        ...enabled,
        [e.target.value]: e.target.checked,
      },
    );
    const element = e.target.value;
    const { property, value } = DOMelement(refs[element].current);
    setFilter(
      {
        property,
        value: e.target.checked ? value : null,
      },
    );
  };
  return (
    <div key="contain" className="bg-dark text-light p-3">
      <form key="filter-form">
        <div key="filter-by" className="ml-auto mr-3 font-weight-bold">
          Filter by
        </div>
        {
          Object.keys(enabled).map(
            k => (
              <EnableFilter key={k} name={k} handleEnabled={handleEnabled} />
            ),
          )
        }
        <hr key="horiz" />
        <div key="filter-prefs" className={`ml-auto mr-3 font-weight-bold${Object.values(enabled).every(v => v === false) ? ' d-none' : ''}`}>
          Filter preferences
        </div>
        {
          Object.keys(isCheckbox).filter(
            k => (isCheckbox[k]),
          ).map(
            k => (
              <CheckboxFilter
                key={k}
                ename={k}
                ref={refs[k]}
                disabled={enabled[k]}
                handleChange={handleChange}
              />
            ),
          )
        }
        {
          Object.keys(isCheckbox).filter(
            k => (!isCheckbox[k]),
          ).map(
            k => (
              <NumericFilter
                key={k}
                name={k}
                ref={refs[k]}
                disabled={enabled[k]}
                handleChange={handleChange}
              />
            ),
          )
        }
      </form>
    </div>
  );
};

export default filterForm;
