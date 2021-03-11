import React from 'react';
import { useSelector } from 'react-redux';
import CatStats from '../components/CatStats';

const Cat = () => {
  const cat = useSelector(state => state.catState);
  if (cat.data[0]) {
    const catData = cat.data[0].breeds[0];
    const {
      description,
      cfa_url: cfaUrl,
      wikipedia_url: wikipediaUrl,
      alt_names: altNames,
    } = catData;
    const { url } = cat.data[0];
    return (
      <CatStats
        description={description}
        cfa_url={cfaUrl}
        wikipedia_url={wikipediaUrl}
        alt_names={altNames}
        url={url}
      />
    );
  }
  return null;
};

export default Cat;
