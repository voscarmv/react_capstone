import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBreeds, fetchCat } from '../actions/index';
import BreedSelector from '../components/BreedSelector';

const breedMenu = () => {
  const breeds = useSelector(state => state.breedState);
  const filter = useSelector(state => state.filterState);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchBreeds());
    },
    [],
  );
  const handleSelectChange = e => {
    dispatch(fetchCat(e.target.value));
  };
  const allNull = obj => {
    const values = Object.values(obj);
    for (let i = 0; i < values.length; i += 1) {
      if (values[i] !== null) {
        return false;
      }
    }
    return true;
  };
  const intersectFilters = (filter, breed) => {
    const keys = Object.keys(filter);
    const values = Object.values(filter);
    // eslint-disable-next-line no-console
    console.log(breed);
    // eslint-disable-next-line no-console
    console.log(keys);
    for (let i = 0; i < values.length; i += 1) {
      // eslint-disable-next-line no-console
      console.log(keys[i]);
      const breedVal = breed[keys[i]].toString();
      if (values[i] !== null && values[i] !== breedVal) {
        return false;
      }
    }
    return true;
  };
  const noFilters = allNull(filter);
  const breedsData = breeds.data.filter(
    breed => {
      if (noFilters) {
        return true;
      }
      return intersectFilters(filter, breed);
    },
  );
  return (
    <BreedSelector breedsData={breedsData} handleSelectChange={handleSelectChange} />
  );
};

export default breedMenu;
