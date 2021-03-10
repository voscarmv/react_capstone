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
  const enablerCheckboxes = [];
  Object.keys(enabled).forEach(
    k => {
      enablerCheckboxes.push(<EnableFilter name={k} handleEnabled={handleEnabled} />);
    },
  );
  const filterComponents = [];
  Object.keys(isCheckbox).forEach(
    k => {
      if (isCheckbox[k]) {
        filterComponents.push(
          <CheckboxFilter
            ename={k}
            ref={refs[k]}
            disabled={enabled[k]}
            handleChange={handleChange}
          />,
        );
      } else {
        filterComponents.push(
          <NumericFilter
            name={k}
            ref={refs[k]}
            disabled={enabled[k]}
            handleChange={handleChange}
          />,
        );
      }
    },
  );
  return (
    <div className="bg-dark text-light p-3">
      <form>
        <div className="ml-auto mr-3 font-weight-bold">
          Filter by
        </div>
        {enablerCheckboxes}
        <hr />
        <div className="ml-auto mr-3 font-weight-bold">
          Filter preferences
        </div>
        {filterComponents}
      </form>
    </div>
  );
};

export default filterForm;
